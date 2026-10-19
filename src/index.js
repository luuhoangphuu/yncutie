import { renderCheckpoint, renderHome, renderStep } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

async function getSession(req, env) { return await decodeSession(getCookie(req, 'sess'), env.SESSION_SECRET || 'fallback_1101_fix'); }
async function saveSession(req, env, data) { data.expiresAt = Date.now() + 900000; return setCookie('sess', await encodeSession(data, env.SESSION_SECRET || 'fallback_1101_fix'), 900); }
const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');

    try {
      if (p === '/api/verify-bot' && m === 'POST') {
        const { token } = await request.json();
        const v = await verifyTurnstile(token, request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return new Response(JSON.stringify({ success: false, error: v.error }), { status: 400 });
        return new Response(JSON.stringify({ success: true }), { headers: { 'Set-Cookie': `bot_passed=1; Path=/; Max-Age=180; Secure` } });
      }
      if (!botPassed) return html(renderCheckpoint(env));

      const s = await getSession(request, env);

      if (p === '/' && m === 'GET') return html(renderHome(env, url.searchParams.get('error')));
      
      if (p === '/start' && m === 'POST') {
        const form = await request.formData();
        const v = await verifyTurnstile(form.get('cf-turnstile-response'), request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return redirect('/?error=' + encodeURIComponent(v.error));
        const session = { sub: false, ads: false, key: null, tier: form.get('tier') || 'Normal' };
        return redirect('/step1', await saveSession(request, env, session));
      }

      if (p === '/step1' && m === 'GET') {
        if(!s) return redirect('/');
        return html(renderStep('Ủng hộ', 2, `
          <h2 style="text-align:center; margin-bottom:20px;">Ủng hộ Kênh YouTube</h2>
          <p class="sub" style="text-align:center;">Vui lòng theo dõi kênh để duy trì hệ thống miễn phí.</p>
          <a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" class="btn btn-youtube" style="margin-bottom:20px;">▶ Mở YouTube</a>
          <form method="POST" action="/verify/sub">
            <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
            <button type="submit" class="btn btn-primary">Xác nhận đã theo dõi</button>
          </form>
        `));
      }

      if (p === '/verify/sub' && m === 'POST') {
        const form = await request.formData();
        const v = await verifyTurnstile(form.get('cf-turnstile-response'), request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return redirect('/?error=' + encodeURIComponent(v.error));
        s.sub = true; return redirect('/step2', await saveSession(request, env, s));
      }

      if (p === '/step2' && m === 'GET') {
        if(!s || !s.sub) return redirect('/');
        return html(renderStep('Vượt Ads', 3, `
          <h2 style="text-align:center; margin-bottom:20px;">Vượt qua Quảng cáo</h2>
          <p class="sub" style="text-align:center;">Nhấn mở Ads, hoàn thành và quay lại để nhận Key.</p>
          <a href="https://link4m.com/your_link" target="_blank" class="btn btn-ads" style="margin-bottom:20px;">📺 Mở Link4M</a>
          <form method="POST" action="/verify/ads" onsubmit="showSkeleton();">
            <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
            <button type="submit" class="btn btn-primary">Nhận Key Ngay</button>
          </form>
        `));
      }

      if (p === '/verify/ads' && m === 'POST') {
        const form = await request.formData();
        const v = await verifyTurnstile(form.get('cf-turnstile-response'), request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return redirect('/?error=' + encodeURIComponent(v.error));
        const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY }, body: JSON.stringify({ tier: s.tier }) });
        const data = await res.json();
        if(data.success) { s.key = data.key; s.duration = data.duration_hours; return redirect('/success', await saveSession(request, env, s)); }
        return redirect('/?error=' + encodeURIComponent("Lỗi API."));
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Nhận Key', 4, `
          <h2 style="text-align:center; margin-bottom:20px;">Lấy Key Thành Công!</h2>
          <div id="keyContainer">
            <div class="key-box"><span id="keyText">${s.key}</span></div>
            <button class="btn btn-primary" data-copy="keyText">📋 Sao chép Key</button>
          </div>
          <p style="text-align:center; color:var(--text-muted); margin-top:20px; font-size:13px;">Hạn sử dụng: <b>${s.duration || 8} giờ</b></p>
          <a href="/" class="btn btn-ghost" style="margin-top:20px;">Quay lại trang chủ</a>
        `));
      }
      return new Response('Not Found', { status: 404 });
    } catch (e) { return html(renderHome(env, "Hệ thống bảo trì: " + e.message)); }
  }
};
