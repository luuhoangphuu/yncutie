import { renderCheckpoint, renderHome, renderStep, renderFAQ, renderAdmin } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

async function getSession(req, env) { return await decodeSession(getCookie(req, 'sess'), env.SESSION_SECRET || 'fallback_1101_fix'); }
async function saveSession(req, env, data) { data.expiresAt = Date.now() + 900000; return setCookie('sess', await encodeSession(data, env.SESSION_SECRET || 'fallback_1101_fix'), 900); }
const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

// Hàm lấy thông báo: Ưu tiên KV, fallback sang Cache
async function getNotice(env) {
  if (env.ANNOUNCEMENT_KV) {
    try {
      const n = await env.ANNOUNCEMENT_KV.get('notice');
      if (n !== null) return n;
    } catch (e) { console.error('KV get error:', e); }
  }
  // Fallback Cache API
  try {
    const cached = await caches.default.match('https://internal.notice');
    if (cached) return await cached.text();
  } catch (e) {}
  return '';
}

// Hàm lưu thông báo: Ghi cả KV và Cache để đảm bảo
async function saveNotice(env, notice) {
  let success = false;
  if (env.ANNOUNCEMENT_KV) {
    try {
      await env.ANNOUNCEMENT_KV.put('notice', notice);
      success = true;
    } catch (e) { console.error('KV put error:', e); }
  }
  // Luôn ghi vào cache làm backup
  try {
    await caches.default.put('https://internal.notice', new Response(notice, { headers: { 'Cache-Control': 'max-age=86400' } }));
    success = true;
  } catch (e) { console.error('Cache put error:', e); }
  return success;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');

    try {
      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin());

      if (p === '/api/admin/notice' && m === 'POST') {
        const { password, notice } = await request.json();
        const adminPass = env.ADMIN_PASSWORD || 'lhp_admin_2026';
        if (password !== adminPass) {
          return new Response(JSON.stringify({ success: false, error: 'Mật khẩu Admin không đúng!' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
        const saved = await saveNotice(env, notice);
        if (saved) {
          return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
        } else {
          return new Response(JSON.stringify({ success: false, error: 'Không thể lưu thông báo. Kiểm tra lại cấu hình KV.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
      }

      if (p === '/api/verify-bot' && m === 'POST') {
        const { token } = await request.json();
        const v = await verifyTurnstile(token, request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return new Response(JSON.stringify({ success: false, error: v.error }), { status: 400 });
        return new Response(JSON.stringify({ success: true }), { headers: { 'Set-Cookie': `bot_passed=1; Path=/; Max-Age=180; Secure` } });
      }
      if (!botPassed) return html(renderCheckpoint(env));

      const s = await getSession(request, env);

      if (p === '/' && m === 'GET') {
        const notice = await getNotice(env);
        return html(renderHome(env, url.searchParams.get('error'), notice));
      }
      
      if (p === '/faq' && m === 'GET') return html(renderFAQ());
      
      if (p === '/start' && m === 'POST') {
        const form = await request.formData();
        const session = { sub: false, ads: 0, key: null, tier: form.get('tier') || 'Normal', adsToken: null, adsStartTime: null };
        return redirect('/step1', await saveSession(request, env, session));
      }

      if (p === '/step1' && m === 'GET') {
        if(!s) return redirect('/');
        return html(renderStep('Ủng hộ', 1, `
          <h2 style="text-align:center; margin-bottom:20px; color:#fff;">Ủng hộ Kênh YouTube</h2>
          <p class="sub" style="text-align:center; color:#a1a1aa;">Vui lòng theo dõi kênh để duy trì hệ thống miễn phí.</p>
          <a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" class="btn btn-primary" style="margin-bottom:20px; background:#ff0000; color:#fff; box-shadow:0 10px 25px rgba(255,0,0,0.3);"><i data-lucide="youtube"></i> Mở YouTube</a>
          <form method="POST" action="/verify/sub" onsubmit="showSkeleton();">
            <button type="submit" class="btn btn-primary"><i data-lucide="check"></i> Tôi đã theo dõi</button>
          </form>
        `));
      }

      if (p === '/verify/sub' && m === 'POST') {
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

        return html(renderStep('Vượt Ads', 2, `
          <h2 style="text-align:center; margin-bottom:20px; color:#fff;">Vượt Quảng Cáo (${currentStep}/${required})</h2>
          <p class="sub" style="text-align:center; color:#a1a1aa;">Nhấn mở Ads, hoàn thành và đợi hệ thống tự chuyển hướng về nhận Key.</p>
          <a href="${link4mUrl}" target="_blank" class="btn btn-primary" style="margin-bottom:20px; background:linear-gradient(135deg, #f59e0b, #f97316); color:#fff;"><i data-lucide="play-circle"></i> Mở Link4M (Lần ${currentStep})</a>
        `), { 'Set-Cookie': cookie });
      }

      if (p === '/ads-return' && m === 'GET') {
        if(!s || !s.sub) return redirect('/');
        const reqToken = url.searchParams.get('token');
        if (!reqToken || !s.adsToken || reqToken !== s.adsToken) return redirect('/?error=' + encodeURIComponent('Cảnh báo: Phát hiện hành vi Bypass Ads!'));
        const timeTaken = (Date.now() - s.adsStartTime) / 1000;
        if (timeTaken < 5) return redirect('/?error=' + encodeURIComponent('Cảnh báo: Bạn vượt Ads quá nhanh!'));
        s.ads += 1; s.adsToken = null;
        const required = s.tier === 'VIP' ? 2 : 1;
        if (s.ads < required) return redirect('/step2', await saveSession(request, env, s));
        const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY }, body: JSON.stringify({ tier: s.tier }) });
        const data = await res.json();
        if(data.success) { s.key = data.key; s.duration = data.duration_hours; return redirect('/success', await saveSession(request, env, s)); }
        return redirect('/?error=' + encodeURIComponent("Lỗi API nhà cung cấp."));
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Nhận Key', 3, `
          <h2 style="text-align:center; margin-bottom:20px; color:#fff;">Lấy Key Thành Công!</h2>
          <div id="keyContainer">
            <div class="key-box" style="background:#111; border:2px dashed #555;"><span id="keyText" style="color:var(--brand);">${s.key}</span></div>
            <button class="btn btn-primary" data-copy="keyText"><i data-lucide="copy"></i> Sao chép Key</button>
          </div>
          <p style="text-align:center; color:#a1a1aa; margin-top:20px; font-size:13px;">Hạn sử dụng: <b>${s.duration || 8} giờ</b></p>
          <a href="/" class="btn btn-ghost" style="margin-top:20px; border:1px solid #333; color:#fff;"><i data-lucide="home"></i> Quay lại trang chủ</a>
        `));
      }

      return new Response('Not Found', { status: 404 });
    } catch (e) { console.error(e); return html(renderHome(env, "Hệ thống bảo trì: " + e.message, '')); }
  }
};
