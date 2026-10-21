import { renderCheckpoint, renderHome, renderStep, renderSuccess, renderFAQ, renderAdmin, renderError } from './ui.js';
import { signToken, verifyToken, getCookie, setCookie, verifyTurnstile, safeEqual, normalizeIP } from './auth.js';
import { COOKIE_TTL, BOT_TTL, DAILY_LIMIT, TIERS, ADS_HOST_RE } from './config.js';
import { LOGO_WEBP_B64 } from './logo.js';

// Durable Object classes bắt buộc phải export từ file main
export { SessionDO, IpDO } from './gate.js';

const MESSAGES = {
  bypass: 'Liên kết xác nhận không hợp lệ. Vui lòng bắt đầu lại.',
  fast: 'Bạn vượt liên kết quá nhanh. Hãy hoàn thành đầy đủ trang quảng cáo rồi thử lại.',
  quota: 'Bạn đã hết lượt nhận key hôm nay. Vui lòng quay lại vào ngày mai!',
  issuer: 'Máy chủ cấp key đang bận. Vui lòng thử lại sau ít phút.'
};

const getSecret = (env, key) => { if (!env[key]) throw new Error('MISSING_ENV:' + key); return env[key]; };
const rawIP = (req) => req.headers.get('cf-connecting-ip') || 'local';
const getIP = (req) => normalizeIP(rawIP(req));
const makeNonce = () => btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));

const ipStub = (env, ip) => env.IPS.get(env.IPS.idFromName(ip));
const sessionStub = (env, sid) => env.SESSIONS.get(env.SESSIONS.idFromName(sid));
// Số giây còn lại đến 00:00 giờ Việt Nam (UTC+7, không có DST)
const secondsToVNMidnight = () => 86400 - Math.floor(((Date.now() + 7 * 3600e3) % 86400e3) / 1000);

let LOGO_BYTES;
const logoRes = () => {
  LOGO_BYTES ||= Uint8Array.from(atob(LOGO_WEBP_B64), (c) => c.charCodeAt(0));
  return new Response(LOGO_BYTES.slice(), { headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff' } });
};

function secHeaders(nonce) {
  return {
    'Content-Security-Policy': "default-src 'none'; script-src 'nonce-" + nonce + "' https://challenges.cloudflare.com; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; frame-src https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  };
}

const htmlRes = (body, nonce, status = 200, cookie) => { const h = new Headers({ 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', ...secHeaders(nonce) }); if (cookie) h.append('Set-Cookie', cookie); return new Response(body, { status, headers: h }); };
const jsonRes = (obj, status = 200, cookie) => { const h = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }); if (cookie) h.append('Set-Cookie', cookie); return new Response(JSON.stringify(obj), { status, headers: h }); };
const redirect = (loc, cookie) => { const h = new Headers({ Location: loc, 'Cache-Control': 'no-store' }); if (cookie) h.append('Set-Cookie', cookie); return new Response(null, { status: 302, headers: h }); };

// ===== SESSION (cookie ký HMAC -> Durable Object) =====
const sidCookie = async (sid, secret) =>
  setCookie('__Host-sid', await signToken({ typ: 'sid', sid, exp: Date.now() + COOKIE_TTL * 1000 }, secret), COOKIE_TTL);

async function getSession(req, env, secret, ip) {
  const t = await verifyToken(getCookie(req, '__Host-sid'), secret);
  if (!t || t.typ !== 'sid' || typeof t.sid !== 'string') return null;
  const S = sessionStub(env, t.sid);
  const s = await S.read(ip);
  return s ? { S, s } : null;
}

// ===== QUOTA =====
async function getQuota(IP) {
  const count = await IP.peek('quota');
  return { ok: count < DAILY_LIMIT, count, limit: DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - count), success: count };
}

// ===== ADMIN NOTICE (KV) =====
const cleanNotice = (n) => ({ enabled: !!(n && n.enabled), title: String((n && n.title) || '').slice(0, 100), content: String((n && n.content) || '').slice(0, 1000) });
async function getNotice(env) { try { const raw = await env.ANNOUNCEMENT_KV.get('notice_json'); if (raw) return cleanNotice(JSON.parse(raw)); } catch {} return { enabled: false, title: '', content: '' }; }
async function saveNotice(env, n) { try { await env.ANNOUNCEMENT_KV.put('notice_json', JSON.stringify(cleanNotice(n))); return true; } catch { return false; } }

// ===== KEY ISSUER & LINK4M =====
// Idempotency-Key = claimId: issuer PHẢI trả lại cùng 1 key khi nhận lại cùng claimId
async function issueKey(env, tier, claimId) {
  const apiKey = getSecret(env, 'KEY_ISSUER_API_KEY');
  try {
    const res = await fetch(env.KEY_ISSUER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey, 'Idempotency-Key': claimId },
      body: JSON.stringify({ tier, request_id: claimId }),
      signal: AbortSignal.timeout(10000)
    });
    if (!res.ok) return null;
    const d = await res.json();
    return d && d.success && typeof d.key === 'string' && d.key.length > 0 && d.key.length <= 512 ? d : null;
  } catch { return null; }
}

async function shortenLink(env, target) {
  const token = getSecret(env, 'LINK4M_API_TOKEN');
  try {
    const api = 'https://link4m.co/api-shorten/v2?api=' + encodeURIComponent(token) + '&url=' + encodeURIComponent(target);
    const d = await (await fetch(api, { signal: AbortSignal.timeout(8000) })).json();
    if (d && d.status === 'success' && typeof d.shortenedUrl === 'string' && ADS_HOST_RE.test(d.shortenedUrl)) return d.shortenedUrl;
  } catch {}
  return null;
}

// Nhận key: khóa -> trừ quota -> gọi issuer (idempotent) -> lưu key. Lỗi thì hoàn quota.
async function claimKey(env, ip, S, tier) {
  const b = await S.beginClaim(ip);
  if (b.r === 'done') return 'ok';
  if (b.r === 'busy') return 'busy';
  if (b.r !== 'ok') return 'none';

  const IP = ipStub(env, ip);
  const q = await IP.take('quota', DAILY_LIMIT, secondsToVNMidnight());
  if (!q.ok) { await S.abortClaim(); return 'quota'; }

  const issued = await issueKey(env, tier, b.claimId);
  if (!issued) { await IP.give('quota'); await S.abortClaim(); return 'issuer'; }

  await S.finishClaim(issued.key, issued.duration_hours || null);
  return 'ok';
}

// ===== ROUTER =====
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname, m = request.method;
    const nonce = makeNonce();
    const html = (body, status = 200, cookie) => htmlRes(body, nonce, status, cookie);
    const sameOrigin = () => {
      const o = request.headers.get('origin');
      if (o) return o === url.origin;
      const f = request.headers.get('sec-fetch-site');
      return !f || f === 'same-origin' || f === 'none';
    };
    const tooBig = (max) => (parseInt(request.headers.get('content-length') || '0', 10) || 0) > max;

    if (p === '/logo.webp' && m === 'GET') return logoRes();

    try {
      const SECRET = getSecret(env, 'SESSION_SECRET');
      const ip = getIP(request);
      const IP = ipStub(env, ip);

      const claimResponse = (c) => {
        if (c === 'ok') return redirect('/success');
        if (c === 'quota') return redirect('/?e=quota');
        if (c === 'none') return redirect('/?e=bypass');
        return html(renderError(503, MESSAGES.issuer, nonce), 503);
      };

      // 1. ADMIN (khuyến nghị đặt thêm sau Cloudflare Access)
      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin(nonce));
      if (p === '/api/admin/notice' && m === 'POST') {
        if (!sameOrigin()) return jsonRes({ success: false, error: 'Forbidden' }, 403);
        if (tooBig(8192)) return jsonRes({ success: false, error: 'Dữ liệu quá lớn.' }, 413);
        const [a, g] = await Promise.all([IP.take('admin', 5, 3600), ipStub(env, '__admin__').take('admin', 30, 3600)]);
        if (!a.ok || !g.ok) return jsonRes({ success: false, error: 'Quá nhiều lần thử. Thử lại sau 1 giờ.' }, 429);
        let body; try { body = await request.json(); } catch { return jsonRes({ success: false, error: 'Dữ liệu không hợp lệ.' }, 400); }
        if (!(await safeEqual(body && body.password, getSecret(env, 'ADMIN_PASSWORD')))) return jsonRes({ success: false, error: 'Sai mật khẩu!' }, 401);
        await IP.reset('admin');
        if (body.action === 'get') return jsonRes({ success: true, notice: await getNotice(env) });
        if (body.action === 'save') return (await saveNotice(env, body.notice)) ? jsonRes({ success: true }) : jsonRes({ success: false, error: 'Lỗi lưu dữ liệu.' }, 500);
        return jsonRes({ success: false, error: 'Hành động không hợp lệ.' }, 400);
      }

      // 2. VERIFY BOT (Turnstile)
      if (p === '/api/verify-bot' && m === 'POST') {
        if (!sameOrigin()) return jsonRes({ success: false, error: 'Forbidden' }, 403);
        if (tooBig(4096)) return jsonRes({ success: false, error: 'Dữ liệu quá lớn.' }, 413);
        const rl = await IP.take('verify', 10, 60);
        if (!rl.ok) return jsonRes({ success: false, error: 'Quá nhiều lần thử. Vui lòng đợi 1 phút.' }, 429);

        let body; try { body = await request.json(); } catch { return jsonRes({ success: false, error: 'Dữ liệu không hợp lệ.' }, 400); }
        const v = await verifyTurnstile(body && body.token, rawIP(request), env, url.hostname);
        if (!v.success) return jsonRes({ success: false, error: v.error }, 400);

        const tok = await signToken({ typ: 'bot', ip, exp: Date.now() + BOT_TTL * 1000 }, SECRET);
        return jsonRes({ success: true }, 200, setCookie('__Host-bot', tok, BOT_TTL));
      }

      // 3. BẮT BUỘC QUA BOT CHECK
      const bot = await verifyToken(getCookie(request, '__Host-bot'), SECRET);
      if (!bot || bot.typ !== 'bot' || bot.ip !== ip) {
        const next = p === '/ads-return' && m === 'GET' ? p + url.search : '/';
        return html(renderCheckpoint(env, nonce, next));
      }

      if (p === '/faq' && m === 'GET') return html(renderFAQ(nonce));

      // Quota chỉ chặn ở trang chủ / bắt đầu, KHÔNG chặn /success
      let quota = null;
      if (p === '/' || p === '/start') {
        quota = await getQuota(IP);
        if (!quota.ok) return html(renderError(429, MESSAGES.quota, nonce), 429);
      }

      const sess = await getSession(request, env, SECRET, ip);
      const errMsg = MESSAGES[url.searchParams.get('e')] || null;

      if (p === '/' && m === 'GET') return html(renderHome(env, errMsg, await getNotice(env), quota, nonce));

      // 4. BẮT ĐẦU
      if (p === '/start' && m === 'POST') {
        if (!sameOrigin() || tooBig(2048)) return redirect('/');
        const rl = await IP.take('start', 20, 3600);
        if (!rl.ok) return html(renderError(429, 'Quá nhiều yêu cầu. Vui lòng thử lại sau.', nonce), 429);

        const form = await request.formData();
        const t = form.get('tier');
        const tier = typeof t === 'string' && Object.prototype.hasOwnProperty.call(TIERS, t) ? t : 'Normal';
        const sid = crypto.randomUUID();
        await sessionStub(env, sid).create(ip, tier);
        return redirect('/step', await sidCookie(sid, SECRET));
      }

      // 5. TRANG VƯỢT LINK
      if (p === '/step' && m === 'GET') {
        if (!sess) return redirect('/');
        const { S, s } = sess;
        const required = TIERS[s.tier] || 1;
        if (s.key) return redirect('/success');
        if (s.ads >= required) return claimResponse(await claimKey(env, ip, S, s.tier));

        let link = s.link;
        if (!s.token || !s.link) {
          const token = crypto.randomUUID();
          const returnUrl = new URL('/ads-return', url.origin);
          returnUrl.searchParams.set('token', token);
          const short = await shortenLink(env, returnUrl.toString());
          if (!short) return html(renderError(503, 'Không tạo được liên kết quảng cáo. Vui lòng thử lại sau.', nonce), 503);
          link = (await S.setLink(ip, token, short)).link;
          if (!link) return redirect('/');
        }
        return html(renderStep({ link, current: s.ads + 1, required, error: errMsg }, nonce));
      }

      // 6. LINK4M QUAY VỀ
      if (p === '/ads-return' && m === 'GET') {
        if (!sess) return redirect('/?e=bypass');
        const r = await sess.S.completeAd(ip, (url.searchParams.get('token') || '').slice(0, 64));
        console.log(JSON.stringify({ evt: 'ads_return', r: r.r, ageMs: r.age ?? null }));
        if (r.r === 'done') return redirect('/success');
        if (r.r === 'none' || r.r === 'bad') return redirect('/?e=bypass');
        if (r.r === 'fast') return redirect('/step?e=fast');
        if (r.r === 'expired') return redirect('/step?e=bypass');
        if (r.r === 'next') return redirect('/step');
        return claimResponse(await claimKey(env, ip, sess.S, sess.s.tier));
      }

      // 7. THÀNH CÔNG
      if (p === '/success' && m === 'GET') {
        if (!sess || !sess.s.key) return redirect('/');
        return html(renderSuccess(sess.s.key, sess.s.duration, sess.s.tier, nonce));
      }

      return html(renderError(404, 'Không tìm thấy trang', nonce), 404);
    } catch (e) {
      console.error(e);
      const missing = String(e && e.message).startsWith('MISSING_ENV:');
      return html(renderError(500, missing ? 'Hệ thống chưa cấu hình đủ Secret' : 'Hệ thống đang bảo trì', nonce), 500);
    }
  }
};
