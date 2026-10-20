import { renderCheckpoint, renderHome, renderStep, renderFAQ, renderAdmin, renderError } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

const getSecret = (env, key) => {
  if (!env[key]) throw new Error(`Thiếu biến: ${key}. Chạy: wrangler secret put ${key}`);
  return env[key];
};

const DEFAULT_NOTICE = { enabled: true, title: "THÔNG BÁO", content: "© Bản quyền thuộc về GETKEYDPICONFIG.SITE." };

// FIX: IPv6 /64 expand properly
function getIP(req) {
  let ip = req.headers.get('cf-connecting-ip') || 'local';
  if (ip.includes(':')) {
    // Expand compressed IPv6
    if (ip.includes('::')) {
      const parts = ip.split('::');
      const left = parts[0] ? parts[0].split(':') : [];
      const right = parts[1] ? parts[1].split(':') : [];
      const missing = 8 - left.length - right.length;
      const full = [...left, ...Array(missing).fill('0'), ...right];
      return full.slice(0, 4).map(p => p.padStart(4, '0')).join(':');
    }
    return ip.split(':').slice(0, 4).map(p => p.padStart(4, '0')).join(':');
  }
  return ip;
}

// Constant-time compare
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function getSession(req, env) {
  const sid = getCookie(req, 'sid');
  if (!sid) return null;
  const raw = await env.ANNOUNCEMENT_KV.get(`session:${sid}`);
  if (!raw) return null;
  const s = JSON.parse(raw);
  if (s.ip !== getIP(req)) return null;
  if (Date.now() > s.expiresAt) return null;
  return s;
}

async function saveSession(req, env, data) {
  const sid = data.sid || crypto.randomUUID();
  data.sid = sid;
  data.expiresAt = Date.now() + 600000;
  data.ip = getIP(req);
  await env.ANNOUNCEMENT_KV.put(`session:${sid}`, JSON.stringify(data), { expirationTtl: 600 });
  return setCookie('sid', sid, 600);
}

async function checkQuota(req, env) {
  const ip = getIP(req);
  const dateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date());
  const key = `quota:${ip}:${dateStr}`;
  const countStr = await env.ANNOUNCEMENT_KV.get(key);
  const count = countStr ? parseInt(countStr) : 0;
  if (count >= 12) return { ok: false, count, limit: 12 };
  return { ok: true, count, limit: 12 };
}

async function incrementQuota(req, env) {
  const ip = getIP(req);
  const dateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date());
  const key = `quota:${ip}:${dateStr}`;
  const countStr = await env.ANNOUNCEMENT_KV.get(key);
  const count = countStr ? parseInt(countStr) : 0;
  await env.ANNOUNCEMENT_KV.put(key, (count + 1).toString(), { expirationTtl: 86400 });
}

async function checkAdminFailLimit(ip, env) {
  const key = `admin_fail:${ip}`;
  const countStr = await env.ANNOUNCEMENT_KV.get(key);
  return countStr ? parseInt(countStr) >= 5 : false;
}

async function recordAdminFail(ip, env) {
  const key = `admin_fail:${ip}`;
  const countStr = await env.ANNOUNCEMENT_KV.get(key);
  const count = countStr ? parseInt(countStr) : 0;
  await env.ANNOUNCEMENT_KV.put(key, (count + 1).toString(), { expirationTtl: 3600 });
}

const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;

    try {
      const SECRET = getSecret(env, 'SESSION_SECRET');
      const ip = getIP(request);

      // ADMIN ROUTE (Không cần bot_passed)
      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin());

      if (p === '/api/admin/notice' && m === 'POST') {
        // FIX: rate limit CHỈ tính lần sai
        if (await checkAdminFailLimit(ip, env)) {
          return new Response(JSON.stringify({ success: false, error: 'Quá nhiều lần sai. Thử lại sau 1 giờ.' }), { status: 429 });
        }
        const body = await request.json();
        const adminPass = getSecret(env, 'ADMIN_PASSWORD');
        
        // Constant-time compare
        if (!timingSafeEqual(body.password || '', adminPass)) {
          await recordAdminFail(ip, env);  // chỉ ghi khi sai
          return new Response(JSON.stringify({ success: false, error: 'Sai mật khẩu!' }), { status: 401 });
        }
        
        if (body.action === 'get') return new Response(JSON.stringify({ success: true, notice: await getNotice(env) }));
        if (body.action === 'save') {
          if (await saveNotice(env, body.notice)) return new Response(JSON.stringify({ success: true }));
          return new Response(JSON.stringify({ success: false, error: 'Lỗi KV.' }), { status: 500 });
        }
        return new Response(JSON.stringify({ success: false, error: 'Invalid action' }), { status: 400 });
      }

      // CHECK BOT
      if (p === '/api/verify-bot' && m === 'POST') {
        const { token } = await request.json();
        const v = await verifyTurnstile(token, ip, env);
        if(!v.success) return new Response(JSON.stringify({ success: false, error: v.error }), { status: 400 });
        // FIX: tăng TTL lên 600s (bằng session)
        const bData = { ip, expiresAt: Date.now() + 600000 };
        const bToken = await encodeSession(bData, SECRET);
        return new Response(JSON.stringify({ success: true }), { headers: { 'Set-Cookie': setCookie('bot_passed', bToken, 600) } });
      }

      // FIX: /ads-return được phép đi qua nếu có session hợp lệ (không cần bot_passed)
      const isAdsReturn = (p === '/ads-return' && m === 'GET');
      
      if (!isAdsReturn) {
        const botToken = getCookie(request, 'bot_passed');
        const botData = botToken ? await decodeSession(botToken, SECRET) : null;
        const botPassed = botData && botData.ip === ip && Date.now() < botData.expiresAt;
        if (!botPassed) return html(renderCheckpoint(env));
      }

      const quota = await checkQuota(request, env);
      if (!quota.ok && !isAdsReturn) return html(renderError(429, 'Bạn đã hết 12 lượt lấy Key hôm nay!'));

      const s = await getSession(request, env);

      if (p === '/' && m === 'GET') return html(renderHome(env, url.searchParams.get('error'), await getNotice(env), quota));
      if (p === '/faq' && m === 'GET') return html(renderFAQ());  // FIX: Khôi phục route

      if (p === '/start' && m === 'POST') {
        const form = await request.formData();
        let tier = form.get('tier') || 'Normal';
        if (tier !== 'Normal' && tier !== 'VIP') tier = 'Normal';
        const session = { sub: false, ads: 0, key: null, tier, adsToken: null, adsStartTime: null };
        return redirect('/step1', await saveSession(request, env, session));
      }

      if (p === '/step1' && m === 'GET') {
        if(!s) return redirect('/');
        return html(renderStep('Ủng hộ', 1, `
          <h2 style="text-align:center; color:#fff;">Ủng hộ Kênh YouTube</h2>
          <a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" class="btn btn-primary" style="background:#ff0000;color:#fff;margin-top:20px;">Mở YouTube</a>
          <form method="POST" action="/verify/sub"><button type="submit" class="btn btn-primary" style="margin-top:10px;">Xác nhận</button></form>
        `));
      }

      if (p === '/verify/sub' && m === 'POST') {
        if(!s) return redirect('/');
        s.sub = true;
        return redirect('/step2', await saveSession(request, env, s));
      }

      if (p === '/step2' && m === 'GET') {
        if(!s || !s.sub) return redirect('/');
        const required = s.tier === 'VIP' ? 2 : 1;
        if (s.ads >= required) return redirect('/success');

        const currentStep = s.ads + 1;
        const adsToken = crypto.randomUUID();
        s.adsToken = adsToken;
        s.adsStartTime = Date.now();
        const cookie = await saveSession(request, env, s);

        const returnUrl = new URL('/ads-return', request.url);
        returnUrl.searchParams.set('token', adsToken);

        // FIX: FAIL CLOSED nếu Link4M lỗi
        let link4mUrl = null;
        try {
          const token4m = getSecret(env, 'LINK4M_API_TOKEN');
          const api = `https://link4m.co/api-shorten/v2?api=${token4m}&url=${encodeURIComponent(returnUrl.toString())}`;
          const res = await fetch(api);
          const data = await res.json();
          if (data.status === 'success') link4mUrl = data.shortenedUrl;
        } catch (e) { console.error('Link4M error:', e.message); }

        if (!link4mUrl) {
          return html(renderError(503, 'Không tạo được link quảng cáo. Vui lòng thử lại sau.'));
        }

        return html(renderStep('Vượt Ads', 2, `
          <h2 style="text-align:center; color:#fff;">Vượt Quảng Cáo (${currentStep}/${required})</h2>
          <a href="${link4mUrl}" target="_blank" class="btn btn-primary" style="background:#f59e0b;color:#fff;margin-top:20px;">Mở Link4M</a>
        `), { 'Set-Cookie': cookie });
      }

      // CALLBACK VƯỢT LINK4M
      if (p === '/ads-return' && m === 'GET') {
        if(!s || !s.sub) return redirect('/');
        const reqToken = url.searchParams.get('token');
        if (!reqToken || !s.adsToken || reqToken !== s.adsToken) {
          return redirect('/?error=' + encodeURIComponent('Cảnh báo: Bypass Ads!'));
        }
        const timeTaken = (Date.now() - s.adsStartTime) / 1000;
        if (timeTaken < 15) {
          return redirect('/?error=' + encodeURIComponent('Vượt Ads quá nhanh! Chờ tối thiểu 15s.'));
        }

        s.ads += 1;
        s.adsToken = null;
        s.adsStartTime = null;
        const required = s.tier === 'VIP' ? 2 : 1;

        if (s.ads < required) {
          return redirect('/step2', await saveSession(request, env, s));
        }

        // FIX: Tiêu thụ token TRƯỚC khi gọi issuer (chống replay parallel)
        await saveSession(request, env, s);

        const res = await fetch(env.KEY_ISSUER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY },
          body: JSON.stringify({ tier: s.tier })
        });
        const data = await res.json();

        if (!data.success) {
          // FIX: hoàn lại nếu issuer fail
          s.ads -= 1;
          await saveSession(request, env, s);
          return redirect('/?error=' + encodeURIComponent('Lỗi API nhà cung cấp. Thử lại không mất lượt.'));
        }

        // FIX: Chỉ tăng quota khi thành công
        await incrementQuota(request, env);
        s.key = data.key;
        s.duration = data.duration_hours;
        return redirect('/success', await saveSession(request, env, s));
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Nhận Key', 3, `
          <h2 style="text-align:center; color:#fff;">Lấy Key Thành Công!</h2>
          <div class="key-box" style="background:#111; border:2px dashed #555; padding:20px; text-align:center;">
            <span id="keyText" style="color:#fff; font-size:20px;">${s.key}</span>
          </div>
          <button class="btn btn-primary" data-copy="keyText" style="margin-top:20px;">Copy Key</button>
          <p style="text-align:center; color:#a1a1aa; margin-top:15px;">Hạn: <b>${s.duration || 8} giờ</b></p>
        `));
      }

      return html(renderError(404, 'Không tìm thấy trang'));
    } catch (e) {
      console.error('FATAL:', e);
      return html(renderError(500, e.message.includes('Thiếu biến') ? 'Hệ thống chưa cấu hình Secret' : 'Hệ thống đang bảo trì'));
    }
  }
};

// FIX: getNotice KHÔNG escape (lưu raw, escape lúc render)
async function getNotice(env) {
  if (env.ANNOUNCEMENT_KV) {
    try {
      const data = await env.ANNOUNCEMENT_KV.get('notice_json');
      if (data) return JSON.parse(data);
    } catch (e) {}
  }
  return DEFAULT_NOTICE;
}
async function saveNotice(env, noticeData) {
  if (!env.ANNOUNCEMENT_KV) return false;
  try {
    await env.ANNOUNCEMENT_KV.put('notice_json', JSON.stringify(noticeData));
    return true;
  } catch (e) { return false; }
}
