import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${esc(title)} · Zwic Apex</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23e4e4e7' d='M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z'/%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,800;0,900;1,900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <style>${CSS}</style>${head}</head><body>
<div class="scanlines"></div>
<div class="cursor-dot"></div>
<div class="cursor-outline"></div>
<div class="cursor-trail"></div>
<div class="cyber-grid"></div>
<canvas id="particle-canvas"></canvas>
<canvas id="bubble-canvas"></canvas>
<div class="snow-layer"></div>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}

const logoHtml = `<a class="logo-container" href="/"><div class="logo-text">Zwic <svg viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg></div></a>`;
const nav = (active = '') => `<header class="nav">${logoHtml}<nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© 2026 Zwic Apex · Bảo Mật bởi HoangPhu</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;
const stepper = (n) => `<ol class="stepper">${['Chọn key','Vượt link','Xác thực','Nhận key'].map((t,i)=>`<li class="${i+1<n?'done':i+1===n?'on':''}"><b>${i+1<n?'✓':i+1}</b><span>${t}</span></li>`).join('')}</ol>`;

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap"><div class="checkpoint-layout" id="app" data-next="${esc(next)}">
  
  <div class="ckpt-left">
    <h1 class="scramble-text">Xác minh kết nối</h1>
    <p class="lead">Kiểm tra kết nối để chặn bot và spam tự động.</p>
    
    <div class="ts-box" id="tsWrap">
      <div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div>
      <div class="err" id="errorBox" style="display:none;color:#ef4444;margin-top:10px;font-size:12px"></div>
    </div>
    <p class="ts-help" id="helpText">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</p>

    <div class="stepper-4">
      <div class="step-item done"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Kết nối TLS</span></div>
      <div class="step-item done"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Lọc tại edge</span></div>
      <div class="step-item active"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Xác minh<br>trình duyệt</span></div>
      <div class="step-item"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Vào cửa hàng</span></div>
    </div>
  </div>

  <div class="ckpt-right">
    <div class="status-header"><i></i> Kết nối đang được bảo vệ</div>
    
    <div class="telemetry-card">
      <div class="telemetry-card-header">
        <span class="telemetry-label">Thời gian xác minh</span>
        <span class="telemetry-value" id="timer">0.00<small>s</small></span>
      </div>
      <div class="wave-graph">${Array(40).fill('<div class="wave-bar"></div>').join('')}</div>
    </div>

    <div class="split-cards">
      <div class="mini-card">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="radar-svg-mini" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <circle cx="30" cy="30" r="18" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <circle cx="30" cy="30" r="8" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <g class="radar-sweep-circle"><path d="M30 30 L30 2 A28 28 0 0 1 58 30 Z" fill="rgba(255,255,255,0.15)"/><line x1="30" y1="30" x2="30" y2="2" stroke="rgba(255,255,255,0.8)" stroke-width="1.5"/></g>
            <circle cx="40" cy="20" r="2" fill="#fff" class="radar-ping" style="animation-delay: 0s"/>
          </svg>
          <div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Quét lưu lượng</div><div style="font-size:14px;color:#fff;font-weight:800">Bảo vệ</div></div>
        </div>
      </div>
      
      <div class="mini-card">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11px;color:var(--muted)">Độ trễ</span><span style="font-size:13px;color:#fff;font-weight:800">316 ms</span>
        </div>
        <div class="line-chart-container">
          <svg class="line-chart-svg" viewBox="0 0 100 30" preserveAspectRatio="none"><path class="line-path" d="M0,15 L10,15 L20,15 L30,15 L40,15 L50,15 L60,15 L70,15 L80,15 L90,15 L100,15" /><circle class="line-dot" cx="100" cy="15" r="2" /></svg>
        </div>
      </div>
    </div>

    <div class="telemetry-card">
      <div class="hacker-term" id="hex-dump"></div>
    </div>
  </div>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(1)}
<div class="split-layout">
  <div>
    <h1 class="hero-title scramble-text">Nhận Key<br><span style="color:var(--silver)">Tốc Độ Ánh Sáng</span></h1>
    <p style="color:var(--muted);margin:16px 0 0;font-size:16px;font-weight:500;max-width:500px">Hệ thống cấp phát key tự động, bảo mật đa tầng. Nhận key miễn phí chỉ trong vài bước.</p>
  </div>
  
  <div class="liquid-card">
    <div class="liquid-inner">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
        <span style="font-weight:900;font-size:16px;color:#fff;letter-spacing:.02em">Chọn loại key</span>
        <span style="background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:800;padding:4px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.1)">Bước 1</span>
      </div>
      <form method="POST" action="/start">
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="tier" value="Normal" checked><span>Key Normal (1 lượt vượt)</span></label>
          <label class="radio-label"><input type="radio" name="tier" value="VIP"><span>Key VIP (2 lượt vượt)</span></label>
        </div>
        <button type="submit" class="btn btn-primary">Get Key</button>
      </form>
    </div>
  </div>
</div>

<div class="card" style="margin-top:24px">
  <h2 style="color:#fff;display:flex;align-items:center;gap:10px;font-size:20px;margin-bottom:20px;font-weight:900">ℹ️ Thông tin & Bảng giá</h2>
  <div style="background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.05);border-radius:16px;padding:20px;margin-bottom:20px">
    <p style="color:var(--muted)">© Bản quyền thuộc về <b style="color:#fff">Zwic Apex</b>.</p>
    <p style="color:#ef4444;font-weight:700;margin-top:8px">‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.</p>
    <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,.1);padding-top:16px">
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 1 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">10k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 7 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">50k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;"><span>Key 30 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">150k</span></div>
    </div>
  </div>
  
  <div class="link-grid">
    <a href="https://zalo.me/0996492296" class="btn btn-secondary">Zalo</a>
    <a href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" class="btn btn-secondary">YouTube</a>
  </div>
</div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(2)}
<div class="card center">
  <h2 style="justify-content:center" class="scramble-text">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:15px;margin:12px 0 24px">Mở liên kết, hoàn thành các bước trên trang đó. Hệ thống tự nhận khi bạn quay lại.</p>
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</div>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `${stepper(4)}
<div class="card center" style="padding:40px 24px">
  <div class="badge-ok" style="margin:0 auto 24px;width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#ffffff,#a1a1aa);display:grid;place-items:center;color:#000;font-size:36px;font-weight:900;box-shadow:0 0 50px rgba(255,255,255,.4),inset 0 2px 0 rgba(255,255,255,.8)">✓</div>
  <h2 style="justify-content:center;font-size:24px" class="scramble-text">Nhận key thành công</h2>
  <div style="margin:16px 0"><span style="background:rgba(255,255,255,.1);padding:6px 16px;border-radius:99px;font-size:13px;font-weight:800;border:1px solid rgba(255,255,255,.4);color:#fff">Tier: ${esc(t)}</span></div>
  <div class="keybox" id="keyText" style="margin:24px 0;padding:24px;border-radius:16px;border:1px dashed rgba(255,255,255,.4);background:rgba(255,255,255,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:22px;word-break:break-all;color:#fff;cursor:pointer;text-shadow:0 0 20px rgba(255,255,255,.4);box-shadow:inset 0 0 30px rgba(0,0,0,.6)">${esc(key)}</div>
  <div class="link-grid">
    <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép</button>
    <button class="btn btn-secondary" type="button" id="dlBtn">Tải .txt</button>
  </div>
  <a href="/" style="display:block;margin-top:20px;font-size:14px;font-weight:800;color:var(--muted);text-decoration:underline">Nhận key mới</a>
</div>
<script nonce="${nonce}">(function(){var k=document.getElementById('keyText');if(!k)return;var key=k.textContent.trim();var dl=document.getElementById('dlBtn');if(dl)dl.onclick=function(){var txt='Zwic Apex\n===========\n\n'+key+'\n\nTier: ${esc(t)}\nNhận lúc: '+new Date().toLocaleString('vi-VN')+'\n\n© Zwic Apex';var b=new Blob([txt],{type:'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='zwicapex-${esc(t)}.txt';a.click();window.__toast('Đã tải file key');};})();</script>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Mất phiên thì làm sao?', 'Phiên gắn với IP. Nếu đổi Wi-Fi/4G hoặc bật VPN giữa chừng, bạn cần bắt đầu lại.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 0h giờ VN.'],
    ['Mua key ở đâu?', 'Liên hệ Zalo 0996492296 hoặc qua kênh YouTube chính thức.']
  ];
  const inner = `<h1 class="center scramble-text" style="margin-bottom:32px">Câu hỏi thường gặp</h1><div style="max-width:700px;margin:0 auto">${qa.map(([q, a]) => `<div class="card" style="padding:24px;margin-bottom:14px"><h3 style="margin-bottom:10px;color:#fff;font-size:16px;font-weight:800">${esc(q)}</h3><p style="color:var(--muted);font-size:14px;margin:0;line-height:1.7">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="card"><h2 class="scramble-text">Quản trị thông báo</h2><p style="color:var(--muted);font-size:14px;margin:10px 0 20px">Nhập mật khẩu để tải và chỉnh sửa.</p><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Mật khẩu</label><div style="display:flex;gap:10px;margin:8px 0 20px"><input id="pw" type="password" style="flex:1;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;font-family:inherit;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:700;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:var(--silver)"> Hiển thị thông báo</label><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 16px;font-family:inherit;outline:none"><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Nội dung</label><textarea id="ct" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 20px;font-family:'JetBrains Mono',monospace;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:800;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#fff':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="card center" style="padding:48px 24px"><h1 style="font-size:80px;color:#ef4444;margin-bottom:16px;text-shadow:0 0 40px rgba(239,68,68,.5)">${esc(code)}</h1><h2 style="color:#fff;margin-bottom:24px;">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
