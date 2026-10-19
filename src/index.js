import { renderCheckpoint, renderHome, renderStep, renderFAQ, renderAdmin, renderError } from './ui.js';
import { encodeSession, decodeSession, getCookie, setCookie, verifyTurnstile } from './auth.js';

const DEFAULT_NOTICE = { enabled: true, title: "THÔNG BÁO QUAN TRỌNG", content: "© Bản quyền thuộc về GETKEYDPICONFIG.SITE.\n‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.\n🔥 IB Tele: @Anmaster18\n✅ Hoặc: @Mityangho\n👤 Để mua key." };

// Lấy IP
function getIP(req) { return req.headers.get('cf-connecting-ip') || 'local'; }

// Quản lý Session (10 phút)
async function getSession(req, env) { 
  const s = await decodeSession(getCookie(req, 'sess'), env.SESSION_SECRET || 'fallback_1101_fix'); 
  if (!s) return null;
  // CHECK IP NGHIÊM NGẶT
  if (s.ip !== getIP(req)) {
    console.warn(`IP Mismatch: Session=${s.ip} | Request=${getIP(req)}`);
    return null; // IP thay đổi -> Hủy session
  }
  return s;
}
async function saveSession(req, env, data) { 
  data.expiresAt = Date.now() + 600000; // 10 phút
  data.ip = getIP(req); // Lưu IP vào session
  return setCookie('sess', await encodeSession(data, env.SESSION_SECRET || 'fallback_1101_fix'), 600); 
}

// Quản lý Quota (12 lần/ngày)
async function checkQuota(req, env) {
  const ip = getIP(req);
  const dateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date()); // YYYY-MM-DD
  const key = `quota:${ip}:${dateStr}`;
  
  if (env.ANNOUNCEMENT_KV) {
    try {
      const countStr = await env.ANNOUNCEMENT_KV.get(key);
      const count = countStr ? parseInt(countStr) : 0;
      if (count >= 12) return { ok: false, count, limit: 12 };
      return { ok: true, count, limit: 12 };
    } catch(e) { return { ok: true, count: 0, limit: 12 }; } // Fallback nếu KV lỗi
  }
  return { ok: true, count: 0, limit: 12 }; // Không có KV thì mặc định cho qua
}

async function incrementQuota(req, env) {
  const ip = getIP(req);
  const dateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date());
  const key = `quota:${ip}:${dateStr}`;
  if (env.ANNOUNCEMENT_KV) {
    try {
      const countStr = await env.ANNOUNCEMENT_KV.get(key);
      const count = countStr ? parseInt(countStr) : 0;
      await env.ANNOUNCEMENT_KV.put(key, (count + 1).toString(), { expirationTtl: 86400 });
    } catch(e) {}
  }
}

// Lấy thông báo
async function getNotice(env) {
  if (env.ANNOUNCEMENT_KV) {
    try { const data = await env.ANNOUNCEMENT_KV.get('notice_json'); if (data) return JSON.parse(data); } catch (e) {}
  }
  return DEFAULT_NOTICE;
}
async function saveNotice(env, noticeData) {
  if (!env.ANNOUNCEMENT_KV) return false;
  try { await env.ANNOUNCEMENT_KV.put('notice_json', JSON.stringify(noticeData)); return true; } catch (e) { return false; }
}

const html = (s) => new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if(cookie) h['Set-Cookie'] = cookie; return new Response('', { status: 302, headers: h }); };

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');

    try {
      if (p === '/ynsociuu/lhp' && m === 'GET') return html(renderAdmin());

      if (p === '/api/admin/notice' && m === 'POST') {
        const body = await request.json();
        if (body.password !== 'lhp_admin_2026') return new Response(JSON.stringify({ success: false, error: 'Sai mật khẩu!' }), { status: 401 });
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
        return new Response(JSON.stringify({ success: true }), { headers: { 'Set-Cookie': `bot_passed=1; Path=/; Max-Age=180; Secure` } });
      }
      if (!botPassed) return html(renderCheckpoint(env));

      // KIỂM TRA QUOTA KHI VÀO TRANG CHỦ
      const quota = await checkQuota(request, env);
      if (!quota.ok) {
        return html(renderError(429, 'Bạn đã hết lượt lấy Key hôm nay (12/12). Vui lòng quay lại vào ngày mai!'));
      }

      const s = await getSession(request, env);

      if (p === '/' && m === 'GET') return html(renderHome(env, url.searchParams.get('error'), await getNotice(env), quota));
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
        
        if (s.ads < required) {
          return redirect('/step2', await saveSession(request, env, s));
        } else {
          // ĐÃ XONG ADS -> TĂNG QUOTA VÀ LẤY KEY
          await incrementQuota(request, env);
          
          const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY }, body: JSON.stringify({ tier: s.tier }) });
          const data = await res.json();
          if(data.success) { s.key = data.key; s.duration = data.duration_hours; return redirect('/success', await saveSession(request, env, s)); }
          return redirect('/?error=' + encodeURIComponent("Lỗi API nhà cung cấp."));
        }
      }

      if (p === '/success' && m === 'GET') {
        if(!s || !s.key) return redirect('/');
        return html(renderStep('Nhận Key', 3, `
          <h2 style="text-align:center; margin-bottom:20px; color:#fff;">Lấy Key Thành Công!</h2>
          <div id="keyContainer">
            <div class="key-box" style="background:#111; border:2px dashed #555;"><span id="keyText" style="color:#fff;">${s.key}</span></div>
            <button class="btn btn-primary" data-copy="keyText"><i data-lucide="copy"></i> Sao chép Key</button>
          </div>
          <p style="text-align:center; color:#a1a1aa; margin-top:20px; font-size:13px;">Hạn sử dụng: <b>${s.duration || 8} giờ</b></p>
          <a href="/" class="btn btn-ghost" style="margin-top:20px; border:1px solid #333; color:#fff;"><i data-lucide="home"></i> Quay lại trang chủ</a>
        `));
      }

      return html(renderError(404, 'Không tìm thấy trang'));
    } catch (e) { console.error(e); return html(renderError(500, 'Hệ thống đang bảo trì')); }
  }
};
