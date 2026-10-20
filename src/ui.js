import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${esc(title)} · Zwic Apex</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23e2e8f0' d='M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z'/%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,800;0,900;1,900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <style>${CSS}</style>${head}</head><body>
<div class="cursor-dot"></div><div class="cursor-ring"></div>
<div class="cyber-grid"></div><div class="aurora"><div class="aurora-blob"></div><div class="aurora-blob"></div></div>
<canvas id="particle-canvas"></canvas>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}

const logoHtml = `<a class="logo-text" href="/">Zwic <svg viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg></a>`;
const nav = (active = '') => `<header class="nav">${logoHtml}<nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© 2026 Zwic Apex · Bảo Mật bởi HoangPhu</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap"><div class="checkpoint-layout" id="app" data-next="${esc(next)}">
  <div class="ckpt-left">
    <h1 class="scramble">Xác minh kết nối</h1>
    <p class="lead">Hệ thống AI đang kiểm tra kết nối để chặn bot và spam tự động.</p>
    <div class="ts-box" id="tsWrap">
      <div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div>
      <div class="err" id="errorBox" style="display:none;color:#ef4444;margin-top:10px;font-size:12px"></div>
    </div>
    <p class="ts-help" id="helpText">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</p>
  </div>
  <div class="ckpt-right">
    <div class="telemetry-card">
      <span class="telemetry-label">Thời gian xác minh</span>
      <span class="telemetry-value" id="timer">0.00<small>s</small></span>
    </div>
    <div class="telemetry-card" style="display:flex;justify-content:center;align-items:center;padding:40px">
      <div class="radar-container">
        <div class="radar-sweep"></div>
        <div class="radar-ring"></div><div class="radar-ring"></div><div class="radar-ring"></div>
      </div>
    </div>
  </div>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
<div style="display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center;min-height:60vh">
  <div>
    <h1 class="hero-title scramble">Kiến tạo Đỉnh cao Công nghệ</h1>
    <p style="color:var(--muted);margin:24px 0 0;font-size:18px;max-width:500px">Hệ thống cấp phát key tự động, bảo mật đa tầng. Trải nghiệm đỉnh cao của sự mượt mà.</p>
    <div style="margin-top:32px;display:flex;gap:16px">
      <span style="border:1px solid var(--border);padding:8px 16px;border-radius:99px;font-size:13px;font-weight:800;background:rgba(255,255,255,.05)">24/7 Uptime</span>
      <span style="border:1px solid var(--border);padding:8px 16px;border-radius:99px;font-size:13px;font-weight:800;background:rgba(255,255,255,.05)">Cloudflare Guard</span>
    </div>
  </div>
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
      <span style="font-weight:900;font-size:18px;color:#fff">Chọn Key</span>
    </div>
    <form method="POST" action="/start">
      <div class="radio-group">
        <label class="radio-label"><input type="radio" name="tier" value="Normal" checked><span>Key Normal (Cơ bản)</span></label>
        <label class="radio-label"><input type="radio" name="tier" value="VIP"><span>Key VIP (Ưu tiên)</span></label>
      </div>
      <button type="submit" class="btn btn-primary">Get Key Now</button>
    </form>
  </div>
</div>
<div class="card" style="margin-top:40px">
  <h2 style="font-size:24px;margin-bottom:24px;font-weight:900">Bảng giá & Hỗ trợ</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
    <div style="background:rgba(0,0,0,.4);border-radius:20px;padding:24px;border:1px solid var(--border)">
      <p style="font-size:13px;color:var(--muted);margin-bottom:8px">Gói 1 Ngày</p>
      <p style="font-size:28px;font-weight:900;color:#fff">10k</p>
    </div>
    <div style="background:rgba(0,0,0,.4);border-radius:20px;padding:24px;border:1px solid var(--border)">
      <p style="font-size:13px;color:var(--muted);margin-bottom:8px">Gói 7 Ngày</p>
      <p style="font-size:28px;font-weight:900;color:#fff">50k</p>
    </div>
  </div>
  <div class="link-grid">
    <a href="https://zalo.me/0996492296" class="btn btn-secondary">Zalo Support</a>
    <a href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" class="btn btn-secondary">YouTube</a>
  </div>
</div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
<div class="card center" style="max-width:600px;margin:0 auto">
  <h2 style="justify-content:center;font-size:32px;font-weight:900" class="scramble">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:16px;margin:20px 0 40px">Hoàn thành bước xác minh để nhận key.</p>
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ngay ↗</a>
</div>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `<div class="card center" style="max-width:600px;margin:0 auto;padding:60px 40px">
  <h2 style="justify-content:center;font-size:32px;font-weight:900" class="scramble">Giao dịch hoàn tất</h2>
  <p style="color:var(--muted);margin:16px 0 32px">Key của bạn đã sẵn sàng.</p>
  <div class="keybox" id="keyText" style="margin:0 0 32px;padding:32px;border-radius:24px;border:1px solid var(--border);background:rgba(255,255,255,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:24px;word-break:break-all;color:#fff;cursor:pointer;box-shadow:inset 0 0 40px rgba(0,0,0,.8)">${esc(key)}</div>
  <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép Key</button>
  <a href="/" style="display:block;margin-top:24px;font-size:14px;font-weight:800;color:var(--muted)">Quay lại trang chủ</a>
</div>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 0h giờ VN.']
  ];
  const inner = `<h1 class="center scramble" style="margin-bottom:40px;font-size:40px">FAQ</h1><div style="max-width:800px;margin:0 auto">${qa.map(([q, a]) => `<div class="card" style="padding:32px;margin-bottom:16px"><h3 style="margin-bottom:12px;color:#fff;font-size:18px;font-weight:800">${esc(q)}</h3><p style="color:var(--muted);font-size:15px;margin:0">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="card"><h2 class="scramble">Admin</h2><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em;display:block;margin:20px 0 8px">Mật khẩu</label><div style="display:flex;gap:10px;margin-bottom:20px"><input id="pw" type="password" style="flex:1;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:700;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:#fff"> Hiển thị</label><label style="font-size:12px;font-weight:800;color:var(--muted);display:block;margin-bottom:8px">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin-bottom:16px;outline:none"><label style="font-size:12px;font-weight:800;color:var(--muted);display:block;margin-bottom:8px">Nội dung</label><textarea id="ct" style="width:100%;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin-bottom:24px;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:800;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#fff':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="card center" style="padding:64px 40px"><h1 style="font-size:100px;font-weight:900;color:#ef4444;margin-bottom:16px">${esc(code)}</h1><h2 style="color:#fff;font-size:24px;margin-bottom:32px">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
