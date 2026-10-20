import { renderCheckpoint, renderHome, renderStep, renderFAQ, renderAdmin, renderError } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

const getSecret = (env, key) => {
  if (!env[key]) throw new Error(`Thiếu biến môi trường: ${key}. Hãy chạy: wrangler secret put ${key}`);
  return env[key];
};

const DEFAULT_NOTICE = { enabled: true, title: "THÔNG BÁO QUAN TRỌNG", content: "© Bản quyền thuộc về GETKEYDPICONFIG.SITE.\n‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo." };

function getIP(req) { 
  let ip = req.headers.get('cf-connecting-ip') || 'local';
  if (ip.includes(':')) return ip.split(':').slice(0, 4).join(':'); 
  return ip; 
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

async function checkAdminRateLimit(ip, env) {
  const key = `admin_rl:${ip}`;
  const countStr = await env.ANNOUNCEMENT_KV.get(key);
  const count = countStr ? parseInt(countStr) : 0;
  if (count >= 5) return false;
  await env.ANNOUNCEMENT_KV.put(key, (count + 1).toString(), { expirationTtl: 3600 });
  return true;
}

const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;

    try {
      const SECRET = getSecret(env, 'SESSION_SECRET');
      const botToken = getCookie(request, 'bot_passed');
      const botData = botToken ? await decodeSession(botToken, SECRET) : null;
      const botPassed = botData && botData.ip === getIP(request) && Date.now() < botData.expiresAt;

      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin());

      if (p === '/api/admin/notice' && m === 'POST') {
        if (!(await checkAdminRateLimit(getIP(request), env))) {
          return new Response(JSON.stringify({ success: false, error: 'Quá nhiều yêu cầu. Thử lại sau 1 giờ.' }), { status: 429 });
        }
        const body = await request.json();
        const adminPass = getSecret(env, 'ADMIN_PASSWORD');
        if (body.password !== adminPass) return new Response(JSON.stringify({ success: false, error: 'Sai mật khẩu!' }), { status: 401 });
        if (body.action === 'get') return new Response(JSON.stringify({ success: true, notice: await getNotice(env) }));
        if (body.action === 'save') {
           if (await saveNotice(env, body.notice)) return new Response(JSON.stringify({ success: true }));
           return new Response(JSON.stringify({ success: false, error: 'Lỗi KV.' }), { status: 500 });
        }
      }

      if (p === '/api/verify-bot' && m === 'POST') {
        const { token } = await request.json();
        const v = await verifyTurnstile(token, getIP(request), env);
        if(!v.success) return new Response(JSON.stringify({ success: false, error: v.error }), { status: 400 });
        const bData = { ip: getIP(request), expiresAt: Date.now() + 180000 };
        const bToken = await encodeSession(bData, SECRET);
        return new Response(JSON.stringify({ success: true }), { headers: { 'Set-Cookie': setCookie('bot_passed', bToken, 180) } });
      }
      if (!botPassed) return html(renderCheckpoint(env));

      const quota = await checkQuota(request, env);
      if (!quota.ok) return html(renderError(429, 'Bạn đã hết lượt lấy Key hôm nay (12/12). Vui lòng quay lại vào ngày mai!'));

      const s = await getSession(request, env);

      if (p === '/' && m === 'GET') return html(renderHome(env, url.searchParams.get('error'), await getNotice(env), quota));
      
      if (p === '/start' && m === 'POST') {
        const form = await request.formData();
        let tier = form.get('tier') || 'Normal';
        if (tier !== 'Normal' && tier !== 'VIP') tier = 'Normal';
        const session = { sub: false, ads: 0, key: null, tier, adsToken: null, adsStartTime: null };
        return redirect('/step1', await saveSession(request, env, session));
      }

      if (p === '/step1' && m === 'GET') {
        if(!s) return redirect('/');
        return html(renderStep('Ủng hộ', 1, `<h2 style="text-align:center; color:#fff;">Ủng hộ Kênh YouTube</h2><a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" class="btn btn-primary" style="background:#ff0000;color:#fff;margin-top:20px;">Mở YouTube</a><form method="POST" action="/verify/sub"><button type="submit" class="btn btn-primary" style="margin-top:10px;">Xác nhận</button></form>`));
      }

      if (p === '/verify/sub' && m === 'POST') {
        if(!s) return redirect('/');
        s.sub = true; return redirect('/step2', await saveSession(request, env, s));
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

        let link4mUrl = returnUrl.toString();
        if(env.LINK4M_API_TOKEN) {
          try {
            const api = `https://link4m.co/api-shorten/v2?api=${env.LINK4M_API_TOKEN}&url=${encodeURIComponent(returnUrl.toString())}`;
            const res = await fetch(api); const data = await res.json();
            if (data.status === 'success') link4mUrl = data.shortenedUrl;
          } catch (e) {}
        }
        return html(renderStep('Vượt Ads', 2, `<h2 style="text-align:center; color:#fff;">Vượt Quảng Cáo (${currentStep}/${required})</h2><a href="${link4mUrl}" target="_blank" class="btn btn-primary" style="background:#f59e0b;color:#fff;margin-top:20px;">Mở Link4M</a>`), { 'Set-Cookie': cookie });
      }

      if (p === '/ads-return' && m === 'GET') {
        if(!s || !s.sub) return redirect('/');
        const reqToken = url.searchParams.get('token');
        
        if (!reqToken || !s.adsToken || reqToken !== s.adsToken) return redirect('/?error=' + encodeURIComponent('Cảnh báo: Bypass Ads!'));
        
        const timeTaken = (Date.now() - s.adsStartTime) / 1000;
        if (timeTaken < 15) return redirect('/?error=' + encodeURIComponent('Cảnh báo: Vượt Ads quá nhanh!'));
        
        s.ads += 1; s.adsToken = null; s.adsStartTime = null;
        const required = s.tier === 'VIP' ? 2 : 1;
        
        if (s.ads < required) {
          return redirect('/step2', await saveSession(request, env, s));
        } else {
          const finalQuota = await checkQuota(request, env);
          if (!finalQuota.ok) return redirect('/?error=' + encodeURIComponent('Hết lượt lấy key hôm nay!'));

          const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY }, body: JSON.stringify({ tier: s.tier }) });
          const data = await res.json();
          
          if(data.success) { 
            await incrementQuota(request, env);
            s.key = data.key; 
            s.duration = data.duration_hours; 
            return redirect('/success', await saveSession(request, env, s)); 
          }
          return redirect('/?error=' + encodeURIComponent("Lỗi API nhà cung cấp."));
        }
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Nhận Key', 3, `<h2 style="text-align:center; color:#fff;">Nhận Key Thành Công</h2><div class="key-box" style="background:#111; border:2px dashed #555; padding:20px; text-align:center;"><span id="keyText" style="color:#fff;">${s.key}</span></div><button class="btn btn-primary" data-copy="keyText" style="margin-top:20px;">Copy Key</button>`));
      }

      return html(renderError(404, 'Không tìm thấy trang'));
    } catch (e) { 
      console.error(e); 
      return html(renderError(500, e.message.includes('Thiếu biến môi trường') ? 'Hệ thống chưa cấu hình Secret' : 'Hệ thống đang bảo trì')); 
    }
  }
};

async function getNotice(env) {
  if (env.ANNOUNCEMENT_KV) {
    try { 
      const data = await env.ANNOUNCEMENT_KV.get('notice_json'); 
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.content) parsed.content = parsed.content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (parsed.title) parsed.title = parsed.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return parsed;
      } 
    } catch (e) {}
  }
  return DEFAULT_NOTICE;
}
async function saveNotice(env, noticeData) {
  if (!env.ANNOUNCEMENT_KV) return false;
  try { await env.ANNOUNCEMENT_KV.put('notice_json', JSON.stringify(noticeData)); return true; } catch (e) { return false; }
}
