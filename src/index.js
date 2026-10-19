import { renderCheckpoint, renderHome, renderStep } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

async function getSession(req, env) { return await decodeSession(getCookie(req, 'sess'), env.SESSION_SECRET || 'fallback_1101_fix'); }
async function saveSession(req, env, data) {
  data.expiresAt = Date.now() + 900000;
  return setCookie('sess', await encodeSession(data, env.SESSION_SECRET || 'fallback_1101_fix'), 900);
}

const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');
    const secret = env.SESSION_SECRET || 'fallback_1101_fix';

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
        return html(renderStep('Bước 1', 1, `
          <h2 style="text-align:center; margin-bottom:20px;">ỦNG HỘ YOUTUBE</h2>
          <a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" class="btn btn-teal" style="width:100%; margin-bottom:20px;">MỞ YOUTUBE</a>
          <form method="POST" action="/verify/sub" style="text-align:center;">
            <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
            <button type="submit" class="btn btn-pink" style="width:100%; margin-top:20px;">XÁC NHẬN</button>
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
        return html(renderStep('Bước 2', 2, `
          <h2 style="text-align:center; margin-bottom:20px;">VƯỢT ADS</h2>
          <a href="https://link4m.com/your_link" target="_blank" class="btn btn-teal" style="width:100%; margin-bottom:20px;">MỞ LINK4M</a>
          <form method="POST" action="/verify/ads" style="text-align:center;" onsubmit="showSkeleton();">
            <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
            <button type="submit" class="btn btn-pink" style="width:100%; margin-top:20px;">NHẬN KEY</button>
          </form>
        `));
      }

      if (p === '/verify/ads' && m === 'POST') {
        const form = await request.formData();
        const v = await verifyTurnstile(form.get('cf-turnstile-response'), request.headers.get('cf-connecting-ip') || 'local', env);
        if(!v.success) return redirect('/?error=' + encodeURIComponent(v.error));
        
        // Gọi API của bạn (DPI Config)
        const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY }, body: JSON.stringify({ tier: s.tier }) });
        const data = await res.json();
        
        if(data.success) {
          s.key = data.key; s.duration = data.duration_hours;
          return redirect('/success', await saveSession(request, env, s));
        }
        return redirect('/?error=' + encodeURIComponent("Lỗi lấy Key từ API."));
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Thành công', 3, `
          <h2 style="text-align:center; margin-bottom:20px;">KEY CỦA BẠN</h2>
          <div id="keyContainer">
            <div style="background:rgba(0,243,255,0.1); border:1px dashed var(--squid-teal); padding:20px; border-radius:12px; text-align:center; margin-bottom:20px;">
              <span id="keyText" style="font-family:monospace; font-size:24px; font-weight:bold; color:var(--squid-teal);">${s.key}</span>
            </div>
            <button class="btn btn-teal" data-copy="keyText" style="width:100%;">SAO CHÉP KEY</button>
          </div>
          <p style="text-align:center; color:#aaa; margin-top:20px; font-size:12px;">Hạn sử dụng: ${s.duration || 8} giờ.</p>
          <a href="/" class="btn btn-ghost" style="width:100%; margin-top:20px;">QUAY LẠI</a>
        `));
      }

      return new Response('Not Found', { status: 404 });
    } catch (e) {
      return html(renderHome(env, "Hệ thống bảo trì: " + e.message));
    }
  }
};
