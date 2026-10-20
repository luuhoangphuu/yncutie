import { renderCheckpoint, renderHome, renderStep, renderSuccess, renderFAQ, renderAdmin, renderError } from './ui.js';
import { signToken, verifyToken, getCookie, setCookie, verifyTurnstile, safeEqual, normalizeIP } from './auth.js';

const SESSION_TTL = 900;
const BOT_TTL = 600;
const MIN_ADS_SECONDS = 15;
const DAILY_LIMIT = 12;
const TIERS = { Normal: 1, VIP: 2 };
const MESSAGES = {
  bypass: 'Liên kết xác nhận không hợp lệ. Vui lòng bắt đầu lại.',
  fast: 'Bạn vượt liên kết quá nhanh. Hãy hoàn thành đầy đủ trang quảng cáo rồi thử lại.',
  quota: 'Bạn đã hết lượt nhận key hôm nay. Vui lòng quay lại vào ngày mai!',
  issuer: 'Máy chủ cấp key đang bận. Vui lòng thử lại sau ít phút.'
};
const DEFAULT_NOTICE = { enabled: true, title: 'THÔNG BÁO QUAN TRỌNG', content: '© Bản quyền thuộc về GETKEYZWICAPEX.SITE.\n‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.\n🔥 Liên hệ Zalo: 0996492296\n📺 Hoặc qua kênh YouTube chính thức.' };

const getSecret = (env, key) => { if (!env[key]) throw new Error('MISSING_ENV:' + key); return env[key]; };
const rawIP = (req) => req.headers.get('cf-connecting-ip') || 'local';
const getIP = (req) => normalizeIP(rawIP(req));
const makeNonce = () => btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));

function secHeaders(nonce) {
  return {
    'Content-Security-Policy': "default-src 'none'; script-src 'nonce-" + nonce + "' https://challenges.cloudflare.com; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; frame-src https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  };
}
const htmlRes = (body, nonce, status = 200, cookie) => { const h = new Headers({ 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', ...secHeaders(nonce) }); if (cookie) h.append('Set-Cookie', cookie); return new Response(body, { status, headers: h }); };
const jsonRes = (obj, status = 200, cookie) => { const h = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }); if (cookie) h.append('Set-Cookie', cookie); return new Response(JSON.stringify(obj), { status, headers: h }); };
const redirect = (loc, cookie) => { const h = new Headers({ Location: loc, 'Cache-Control': 'no-store' }); if (cookie) h.append('Set-Cookie', cookie); return new Response(null, { status: 302, headers: h }); };

async function getSession(req, env) {
  const sid = getCookie(req, 'sid');
  if (!sid || !/^[0-9a-f-]{36}$/.test(sid)) return null;
  const raw = await env.ANNOUNCEMENT_KV.get('session:' + sid);
  if (!raw) return null;
  let s; try { s = JSON.parse(raw); } catch { return null; }
  if (s.ip !== getIP(req) || Date.now() > s.exp) return null;
  s.sid = sid;
  return s;
}
async function saveSession(req, env, s) {
  s.sid = s.sid || crypto.randomUUID();
  s.exp = Date.now() + SESSION_TTL * 1000;
  s.ip = getIP(req);
  await env.ANNOUNCEMENT_KV.put('session:' + s.sid, JSON.stringify(s), { expirationTtl: SESSION_TTL + 60 });
  return setCookie('sid', s.sid, SESSION_TTL);
}

const quotaKey = (req) => 'quota:' + getIP(req) + ':' + new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date());
async function getQuota(req, env) { const c = parseInt((await env.ANNOUNCEMENT_KV.get(quotaKey(req))) || '0', 10) || 0; return { ok: c < DAILY_LIMIT, count: c, limit: DAILY_LIMIT }; }
async function incQuota(req, env) { const k = quotaKey(req); const c = parseInt((await env.ANNOUNCEMENT_KV.get(k)) || '0', 10) || 0; await env.ANNOUNCEMENT_KV.put(k, String(c + 1), { expirationTtl: 90000 }); }

async function adminLocked(ip, env) { return (parseInt((await env.ANNOUNCEMENT_KV.get('admin_fail:' + ip)) || '0', 10) || 0) >= 5; }
async function adminFail(ip, env) { const n = (parseInt((await env.ANNOUNCEMENT_KV.get('admin_fail:' + ip)) || '0', 10) || 0) + 1; await env.ANNOUNCEMENT_KV.put('admin_fail:' + ip, String(n), { expirationTtl: 3600 }); }
const cleanNotice = (n) => ({ enabled: !!(n && n.enabled), title: String((n && n.title) || '').slice(0, 100), content: String((n && n.content) || '').slice(0, 1000) });
async function getNotice(env) { try { const raw = await env.ANNOUNCEMENT_KV.get('notice_json'); if (raw) return cleanNotice(JSON.parse(raw)); } catch {} return DEFAULT_NOTICE; }
async function saveNotice(env, n) { try { await env.ANNOUNCEMENT_KV.put('notice_json', JSON.stringify(cleanNotice(n))); return true; } catch { return false; } }

async function issueKey(env, tier) {
  try {
    const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': getSecret(env, 'KEY_ISSUER_API_KEY') }, body: JSON.stringify({ tier }), signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const d = await res.json();
    return d && d.success && typeof d.key === 'string' ? d : null;
  } catch { return null; }
}

async function shortenLink(env, target) {
  try {
    const api = 'https://link4m.co/api-shorten/v2?api=' + encodeURIComponent(getSecret(env, 'LINK4M_API_TOKEN')) + '&url=' + encodeURIComponent(target);
    const d = await (await fetch(api, { signal: AbortSignal.timeout(8000) })).json();
    if (d && d.status === 'success' && /^https:\/\//.test(d.shortenedUrl || '')) return d.shortenedUrl;
  } catch {}
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname, m = request.method;
    const nonce = makeNonce();
    const html = (body, status = 200, cookie) => htmlRes(body, nonce, status, cookie);
    const sameOrigin = () => { const o = request.headers.get('origin'); return !o || o === url.origin; };

    try {
      const SECRET = getSecret(env, 'SESSION_SECRET');
      const ip = getIP(request);

      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin(nonce));
      if (p === '/api/admin/notice' && m === 'POST') {
        if (!sameOrigin()) return jsonRes({ success: false, error: 'Forbidden' }, 403);
        if (await adminLocked(ip, env)) return jsonRes({ success: false, error: 'Quá nhiều lần thử sai. Thử lại sau 1 giờ.' }, 429);
        let body; try { body = await request.json(); } catch { return jsonRes({ success: false, error: 'Dữ liệu không hợp lệ.' }, 400); }
        if (!(await safeEqual(body && body.password, getSecret(env, 'ADMIN_PASSWORD')))) { await adminFail(ip, env); return jsonRes({ success: false, error: 'Sai mật khẩu!' }, 401); }
        await env.ANNOUNCEMENT_KV.delete('admin_fail:' + ip);
        if (body.action === 'get') return jsonRes({ success: true, notice: await getNotice(env) });
        if (body.action === 'save') return (await saveNotice(env, body.notice)) ? jsonRes({ success: true }) : jsonRes({ success: false, error: 'Lỗi lưu dữ liệu.' }, 500);
        return jsonRes({ success: false, error: 'Hành động không hợp lệ.' }, 400);
      }

      if (p === '/api/verify-bot' && m === 'POST') {
        if (!sameOrigin()) return jsonRes({ success: false, error: 'Forbidden' }, 403);
        let body; try { body = await request.json(); } catch { return jsonRes({ success: false, error: 'Dữ liệu không hợp lệ.' }, 400); }
        const v = await verifyTurnstile(body && body.token, rawIP(request), env);
        if (!v.success) return jsonRes({ success: false, error: v.error }, 400);
        const tok = await signToken({ ip, exp: Date.now() + BOT_TTL * 1000 }, SECRET);
        return jsonRes({ success: true }, 200, setCookie('bot_passed', tok, BOT_TTL));
      }

      const bot = await verifyToken(getCookie(request, 'bot_passed'), SECRET);
      if (!bot || bot.ip !== ip) {
        const next = p === '/ads-return' && m === 'GET' ? p + url.search : '/';
        return html(renderCheckpoint(env, nonce, next));
      }

      if (p === '/faq' && m === 'GET') return html(renderFAQ(nonce));

      const quota = await getQuota(request, env);
      if (!quota.ok) return html(renderError(429, MESSAGES.quota, nonce), 429);

      const s = await getSession(request, env);
      const errMsg = MESSAGES[url.searchParams.get('e')] || null;

      if (p === '/' && m === 'GET') return html(renderHome(env, errMsg, await getNotice(env), quota, nonce));

      if (p === '/start' && m === 'POST') {
        if (!sameOrigin()) return redirect('/');
        const form = await request.formData();
        const t = form.get('tier');
        const tier = typeof t === 'string' && Object.prototype.hasOwnProperty.call(TIERS, t) ? t : 'Normal';
        const session = { ads: 0, key: null, tier, adsToken: null, adsStartTime: null, adsLink: null };
        return redirect('/step', await saveSession(request, env, session));
      }

      if (p === '/step' && m === 'GET') {
        if (!s) return redirect('/');
        const required = TIERS[s.tier] || 1;
        if (s.key) return redirect('/success');
        if (s.ads >= required) return redirect('/');

        let cookie;
        if (!s.adsToken || !s.adsLink) {
          const token = crypto.randomUUID();
          const returnUrl = new URL('/ads-return', url.origin);
          returnUrl.searchParams.set('token', token);
          const link = await shortenLink(env, returnUrl.toString());
          if (!link) return html(renderError(503, 'Không tạo được liên kết quảng cáo. Vui lòng thử lại sau.', nonce), 503);
          s.adsToken = token; s.adsLink = link; s.adsStartTime = Date.now();
          cookie = await saveSession(request, env, s);
        }
        return html(renderStep({ link: s.adsLink, current: s.ads + 1, required, error: errMsg }, nonce), 200, cookie);
      }

      if (p === '/ads-return' && m === 'GET') {
        if (!s) return redirect('/?e=bypass');
        if (s.key) return redirect('/success');
        const tok = url.searchParams.get('token');
        if (!tok || !s.adsToken || !(await safeEqual(tok, s.adsToken))) return redirect('/?e=bypass');
        if (Date.now() - (s.adsStartTime || 0) < MIN_ADS_SECONDS * 1000) return redirect('/step?e=fast');

        const required = TIERS[s.tier] || 1;
        s.ads += 1; s.adsToken = null; s.adsStartTime = null; s.adsLink = null;
        if (s.ads < required) return redirect('/step', await saveSession(request, env, s));

        const q = await getQuota(request, env);
        if (!q.ok) return redirect('/?e=quota');

        await saveSession(request, env, s);
        const issued = await issueKey(env, s.tier);
        if (!issued) { s.ads = required - 1; return redirect('/step?e=issuer', await saveSession(request, env, s)); }
        await incQuota(request, env);
        s.key = issued.key; s.duration = issued.duration_hours || null;
        return redirect('/success', await saveSession(request, env, s));
      }

      if (p === '/success' && m === 'GET') {
        if (!s || !s.key) return redirect('/');
        return html(renderSuccess(s.key, s.duration, s.tier, nonce));
      }

      return html(renderError(404, 'Không tìm thấy trang', nonce), 404);
    } catch (e) {
      console.error(e);
      const missing = String(e && e.message).startsWith('MISSING_ENV:');
      return html(renderError(500, missing ? 'Hệ thống chưa cấu hình đủ Secret' : 'Hệ thống đang bảo trì', nonce), 500);
    }
  }
};
