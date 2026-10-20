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
<div class="snow-layer"></div>
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
  
  <div class="panel">
    <h1 class="panel-title">Xác minh kết nối</h1>
    <p class="panel-sub">Hệ thống AI đang kiểm tra kết nối để chặn bot và spam tự động.</p>
    <div class="ts-box" id="tsWrap">
      <div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div>
      <div class="err" id="errorBox" style="display:none;color:#ef4444;margin-top:10px;font-size:12px"></div>
    </div>
    <p class="ts-help" id="helpText">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</p>
  </div>

  <div class="hud-container">
    <div class="hud-header">
      <div>
        <div class="hud-label">Thời gian xác minh</div>
        <div class="hud-value" id="timer">0.00<small style="font-size:16px;color:var(--muted)">s</small></div>
      </div>
      <div style="text-align:right;">
        <div class="hud-label">Trạng thái</div>
        <div style="font-size:14px; font-weight:700; color:var(--accent); display:flex; align-items:center; gap:8px; justify-content:flex-end;">
          <span style="width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent);"></span> LIVE
        </div>
      </div>
    </div>

    <div class="hud-mid">
      <div class="hud-mini">
        <div class="hud-label" style="text-align:center;margin-bottom:12px;">Radar quét</div>
        <svg class="radar-svg" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
          <circle cx="40" cy="40" r="25" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
          <circle cx="40" cy="40" r="12" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
          <line x1="40" y1="2" x2="40" y2="78" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
          <line x1="2" y1="40" x2="78" y2="40" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
          <g class="radar-sweep"><path d="M40 40 L40 2 A38 38 0 0 1 78 40 Z" fill="rgba(0,240,255,0.15)"/><line x1="40" y1="40" x2="40" y2="2" stroke="var(--accent)" stroke-width="2"/></g>
          <circle cx="55" cy="25" r="2" fill="#fff" style="animation:pulse 2s infinite;"/>
        </svg>
      </div>
      
      <div class="hud-mini">
        <div class="hud-label" style="display:flex;justify-content:space-between;">
          <span>Độ trễ mạng</span><span style="color:#fff;">24ms</span>
        </div>
        <div class="line-chart-container">
          <svg class="line-chart-svg" viewBox="0 0 100 30" preserveAspectRatio="none"><path class="line-path" d="M0,15 L10,15 L20,15 L30,15 L40,15 L50,15 L60,15 L70,15 L80,15 L90,15 L100,15" /><circle class="line-dot" cx="100" cy="15" r="2" /></svg>
        </div>
      </div>
    </div>

    <div class="hud-footer">
      <div>Giao thức: <b>HTTP/2</b></div>
      <div>Bảo vệ: <b>Cloudflare WAF</b></div>
    </div>
  </div>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `
  <div class="modal-overlay" id="noticeModal">
    <div class="modal-content">
      <div class="modal-header"><span>THÔNG BÁO QUAN TRỌNG</span><button class="modal-close">×</button></div>
      <div class="modal-body">© Bản quyền thuộc về Zwic Apex.\n‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.\n\n🔥 Liên hệ Zalo: 0996492296\n📺 Hoặc qua kênh YouTube chính thức.</div>
      <button class="modal-btn">Đã hiểu</button>
    </div>
  </div>

  ${error ? `<div class="bento-item" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:600;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
  
  <div>
    <h1 class="hero-title scramble">Zwic Apex</h1>
    <p class="hero-sub">Hệ thống cấp phát key tự động, bảo mật đa tầng. Trải nghiệm đỉnh cao của sự mượt mà.</p>
  </div>

  <div class="bento-grid">
    <div class="bento-item col-span-2">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h2 style="margin:0">Lấy key miễn phí</h2>
      </div>
      <a href="https://t.me/" class="btn btn-tele" target="_blank" style="margin-bottom:24px">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.8-.27-1.44-.41-1.39-.87.03-.24.36-.49 1.01-.75 3.96-1.73 6.6-2.87 7.92-3.42 3.77-1.57 4.55-1.84 5.06-1.85.11 0 .36.03.49.13.13.1.17.24.16.37z"/></svg>
        Tham gia Telegram
      </a>

      <div class="stepper-wrap">
        <div class="step active"><div class="step-num">1</div><span>Chọn key</span></div>
        <div class="step"><div class="step-num">2</div><span>Vượt link</span></div>
        <div class="step"><div class="step-num">3</div><span>Xác thực</span></div>
        <div class="step"><div class="step-num">4</div><span>Nhận key</span></div>
      </div>

      <div style="background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:16px; padding:20px;">
        <form method="POST" action="/start">
          <div class="radio-group">
            <label class="radio-label"><input type="radio" name="tier" value="Normal" checked><span>Key Normal (Cơ bản)</span></label>
            <label class="radio-label"><input type="radio" name="tier" value="VIP"><span>Key VIP (Ưu tiên)</span></label>
          </div>
          <button type="submit" class="btn btn-primary">Get Key</button>
        </form>
      </div>
    </div>
    
    <div class="bento-item">
      <h2>Thiết bị hiện tại</h2>
      <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Theo dõi nhanh lượt nhận key trong hôm nay</p>
      <div class="quota-grid">
        <div class="quota-item"><p>Tên Key</p><b>ZwicApex</b></div>
        <div class="quota-item"><p>Còn lại</p><b style="color:var(--accent)">12</b></div>
        <div class="quota-item"><p>Thành công</p><b>0</b></div>
        <div class="quota-item"><p>Lần gần nhất</p><b style="font-size:14px">Chưa có</b></div>
      </div>
      <p style="font-size:11px; color:var(--muted); margin-top:12px; text-align:center;">Reset lúc 00:00 giờ VN</p>
    </div>

    <div class="bento-item">
      <h2>Thông tin & Bảng giá</h2>
      <div style="background:rgba(0,0,0,.3);border-radius:16px;padding:16px;margin-bottom:16px;border:1px solid var(--border)">
        <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px dashed rgba(255,255,255,.1)"><span>Key 1 ngày</span><span style="color:#fff">10k</span></div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px dashed rgba(255,255,255,.1)"><span>Key 7 ngày</span><span style="color:#fff">50k</span></div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-size:13px;font-weight:600;"><span>Key 30 ngày</span><span style="color:#fff">150k</span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <a href="https://zalo.me/0996492296" class="btn btn-secondary" style="min-height:44px;font-size:13px;">Zalo Support</a>
        <a href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" class="btn btn-secondary" style="min-height:44px;font-size:13px;">YouTube Channel</a>
      </div>
    </div>

    <div class="bento-item col-span-4">
      <h2 style="margin-bottom:16px">📥 Tải ứng dụng</h2>
      <p style="font-size:13px;color:var(--muted);margin-bottom:20px">Chọn đúng bản và đọc ghi chú trước khi tải.</p>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="app-card">
          <div style="display:flex;gap:16px;margin-bottom:16px">
            <div class="app-icon">PR</div>
            <div><h3 style="color:#fff;font-size:16px;margin-bottom:2px">App Proxy V1.3 🍎</h3><p class="app-warning">⚠ Lưu ý!</p></div>
          </div>
          <ul class="app-list">
            <li>- Sử dụng Free Fire Max / Normal CHPlay</li>
            <li>- Sử dụng một cách thông minh</li>
            <li>- Không lạm dụng chức năng quá đà</li>
            <li>- Sử dụng duy nhất ESP sẽ anti hơn</li>
            <li>- Tự thêm domain block nếu cảm thấy nó sẽ anti hơn</li>
          </ul>
          <a href="#" class="btn btn-download" style="margin-top:auto"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Tải Xuống</a>
        </div>

        <div class="app-card">
          <div style="display:flex;gap:16px;margin-bottom:16px">
            <div class="app-icon">EX</div>
            <div><h3 style="color:#fff;font-size:16px;margin-bottom:2px">App External - Root - Fix</h3><p class="app-warning">‼ Đã fix "Lỗi ứng dụng chưa cài đặt"</p></div>
          </div>
          <p style="color:#f59e0b;font-size:12px;font-weight:700;margin-bottom:12px">⚠ Lưu ý!</p>
          <ul class="app-list">
            <li>- Sử dụng Free Fire Max CHPlay ver 2.132.x</li>
            <li>- Menu root</li>
            <li>- Sài chức năng cẩn thận đặc biệt là Aim</li>
          </ul>
          <a href="#" class="btn btn-download" style="margin-top:auto"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Tải Xuống</a>
        </div>
      </div>
    </div>
  </div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="bento-item" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:600;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
<div class="panel" style="max-width:600px;margin:0 auto;text-align:center">
  <div class="stepper-wrap" style="max-width:400px;margin:0 auto 32px">
    <div class="step done"><div class="step-num">✓</div><span>Chọn key</span></div>
    <div class="step active"><div class="step-num">2</div><span>Vượt link</span></div>
    <div class="step"><div class="step-num">3</div><span>Xác thực</span></div>
    <div class="step"><div class="step-num">4</div><span>Nhận key</span></div>
  </div>
  <h2 style="font-size:28px;font-weight:800;margin-bottom:16px" class="scramble">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:15px;margin-bottom:40px">Hoàn thành bước xác minh để nhận key.</p>
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ngay ↗</a>
</div>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `<div class="panel" style="max-width:600px;margin:0 auto;padding:60px 40px;text-align:center">
  <div class="stepper-wrap" style="max-width:400px;margin:0 auto 32px">
    <div class="step done"><div class="step-num">✓</div><span>Chọn key</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Vượt link</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Xác thực</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Nhận key</span></div>
  </div>
  <h2 style="font-size:32px;font-weight:800;margin-bottom:16px" class="scramble">Giao dịch hoàn tất</h2>
  <p style="color:var(--muted);margin-bottom:32px">Key của bạn đã sẵn sàng.</p>
  <div class="keybox" id="keyText" style="margin-bottom:32px;padding:32px;border-radius:24px;border:1px solid var(--border);background:rgba(255,255,255,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:24px;word-break:break-all;color:#fff;cursor:pointer;box-shadow:inset 0 0 40px rgba(0,0,0,.8)">${esc(key)}</div>
  <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép Key</button>
  <a href="/" style="display:block;margin-top:24px;font-size:14px;font-weight:600;color:var(--muted)">Quay lại trang chủ</a>
</div>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 00:00 giờ VN.']
  ];
  const inner = `<h1 class="center scramble" style="margin-bottom:40px;font-size:40px">FAQ</h1><div style="max-width:800px;margin:0 auto">${qa.map(([q, a]) => `<div class="bento-item" style="padding:32px;margin-bottom:16px"><h3 style="margin-bottom:12px;color:#fff;font-size:18px;font-weight:700">${esc(q)}</h3><p style="color:var(--muted);font-size:15px;margin:0">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="panel"><h2 class="scramble">Admin</h2><label style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:.1em;display:block;margin:20px 0 8px">Mật khẩu</label><div style="display:flex;gap:10px;margin-bottom:20px"><input id="pw" type="password" style="flex:1;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:600;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:#fff"> Hiển thị</label><label style="font-size:12px;font-weight:700;color:var(--muted);display:block;margin-bottom:8px">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin-bottom:16px;outline:none"><label style="font-size:12px;font-weight:700;color:var(--muted);display:block;margin-bottom:8px">Nội dung</label><textarea id="ct" style="width:100%;padding:16px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin-bottom:24px;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:600;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#fff':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="panel center" style="padding:64px 40px"><h1 style="font-size:100px;font-weight:900;color:#ef4444;margin-bottom:16px">${esc(code)}</h1><h2 style="color:#fff;font-size:24px;margin-bottom:32px">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
