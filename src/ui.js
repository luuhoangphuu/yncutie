import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${esc(title)} · GetKey DPIConfig</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet"><style>${CSS}</style>${head}</head><body>
<div class="snow-layer"></div>
<div class="snow-layer-2"></div>
<div class="bg-grid"></div>
<div class="bg-glow"></div>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}
const nav = (active = '') => `<header class="nav"><a class="logo" href="/"><i></i>GETKEY DPICONFIG</a><nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© GETKEYDPICONFIG.SITE · Bản quyền thuộc về GetKey DPIConfig.</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;
const stepper = (n) => `<ol class="stepper">${['Chọn key','Vượt link','Xác thực','Nhận key'].map((t,i)=>`<li class="${i+1<n?'done':i+1===n?'on':''}"><b>${i+1<n?'✓':i+1}</b><span>${t}</span></li>`).join('')}</ol>`;

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap wide"><div class="ckpt-shell titan-card" id="app" data-next="${esc(next)}">
  ${stepper(3)}
  <div class="ckpt-grid">
    <section class="ckpt-left">
      <h1>Xác minh kết nối</h1>
      <p class="lead">Hệ thống kiểm tra kết nối để chặn bot và spam.</p>
      <div class="term-shell">
        <div class="term-bar"><span class="t-dot"></span><span class="t-dot"></span><span class="t-dot"></span></div>
        <div class="term" id="terminal"></div>
      </div>
      <div class="ts-wrap" id="tsWrap">
        <div class="ts"><div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div></div>
        <div class="ts-status" id="helpText">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</div>
        <div class="err" id="errorBox"></div>
      </div>
    </section>
    <aside class="ckpt-right">
      <div class="timer-box">
        <div class="timer-label">Thời gian xác minh</div>
        <div class="timer-val" id="timer">0.00<small>s</small></div>
      </div>
      <div class="radar-box">
        <div class="radar-circle"><div class="radar-dot"></div></div>
      </div>
    </aside>
  </div></div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `${error ? `<div class="titan-card" style="padding:14px;border-color:#ef4444;color:#fca5a5">⚠ ${esc(error)}</div>` : ''}
${stepper(1)}
<div class="titan-card">
  <h2>🔑 Lấy key miễn phí</h2>
  <p style="color:var(--muted);font-size:14px;margin-bottom:20px">Chào mừng bạn đến với GetKey DPIConfig. Vui lòng chọn loại key bên dưới.</p>
  
  <div class="titan-box">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <span style="font-weight:900;font-size:14px;color:#fff">Chọn loại key</span>
      <span style="background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:800;padding:4px 12px;border-radius:99px">Bước 1</span>
    </div>
    <form method="POST" action="/start">
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="tier" value="Normal" checked>
          <span>Key Normal (1 lượt vượt)</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="tier" value="VIP">
          <span>Key VIP (2 lượt vượt)</span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Get Key</button>
    </form>
  </div>
</div>

<div class="titan-card">
  <h2>ℹ️ Thông tin từ GetKey DPIConfig</h2>
  <div class="titan-box">
    <p>© Bản quyền thuộc về <b>GetKey DPIConfig</b>.</p>
    <p style="color:#ef4444;font-weight:700;margin-top:8px">‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.</p>
    <div style="margin-top:14px;border-top:1px solid rgba(255,255,255,.1);padding-top:14px">
      <b style="color:#fff;font-size:15px">Bảng giá key</b>
      <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-weight:700"><span>Key 1 ngày</span><span style="color:#22d3ee">10k</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-weight:700"><span>Key 7 ngày</span><span style="color:#22d3ee">50k</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;color:var(--muted);font-weight:700"><span>Key 30 ngày</span><span style="color:#22d3ee">150k</span></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <a href="https://zalo.me/0996492296" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:14px;border:1px solid var(--border);border-radius:12px;color:#fff;font-weight:800;font-size:14px;text-decoration:none;background:rgba(255,255,255,.03);transition:.3s"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.5 3.54 1.35 5.02L2 22l4.98-1.35C8.46 21.5 10.17 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.27 14.23c-.18.5-1.04.96-1.42 1-.38.04-1.16.14-2.1-.2-.94-.34-1.72-.88-2.56-1.74-.84-.86-1.38-1.64-1.72-2.56-.34-.92-.24-1.7-.2-2.08.04-.38.5-1.24 1-1.42.5-.18 1.04-.22 1.4.2.36.42.66 1.5.8 1.88.14.38.06.64-.06.88-.12.24-.46.58-.6.72-.14.14-.28.34-.16.58.12.24.52.88 1.22 1.58.7.7 1.34 1.1 1.58 1.22.24.12.44-.02.58-.16.14-.14.48-.48.72-.6.24-.12.5-.2.88-.06.38.14 1.46.44 1.88.8.42.36.38.9.2 1.4z"/></svg>Zalo</a>
    <a href="${esc(env.YOUTUBE_CHANNEL_URL)}" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:14px;border:1px solid var(--border);border-radius:12px;color:#fff;font-weight:800;font-size:14px;text-decoration:none;background:rgba(255,255,255,.03);transition:.3s"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>YouTube</a>
  </div>
</div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="titan-card" style="padding:14px;border-color:#ef4444;color:#fca5a5">⚠ ${esc(error)}</div>` : ''}
${stepper(2)}
<div class="titan-card center">
  <h2 style="justify-content:center">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:14px;margin:12px 0 24px">Mở liên kết, hoàn thành các bước trên trang đó. Hệ thống tự nhận khi bạn quay lại.</p>
  
  <div style="position:relative;width:100px;height:100px;margin:0 auto 20px">
    <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);width:100px;height:100px;filter:drop-shadow(0 0 10px rgba(255,255,255,.3))">
      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="6"/>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="0" id="cdRing"/>
    </svg>
    <div id="cdText" style="position:absolute;inset:0;display:grid;place-items:center;font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:900;color:#fff">3</div>
  </div>
  <p id="cdLabel" style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:20px">Đang chuẩn bị...</p>
  
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</div>
<script nonce="${nonce}">(function(){var fg=document.getElementById('cdRing'),txt=document.getElementById('cdText'),lbl=document.getElementById('cdLabel');if(!fg)return;var t=3,total=3,circ=283;var iv=setInterval(function(){t--;if(t<0)t=0;txt.textContent=t>0?t:'▶';fg.style.strokeDashoffset=circ*(1-t/total);if(t<=0){clearInterval(iv);lbl.innerHTML='<span style="color:#10b981">Đã sẵn sàng</span>';}},1000);})();</script>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `${stepper(4)}
<div class="titan-card center" style="padding:36px 24px">
  <div class="badge-ok">✓</div>
  <h2 style="justify-content:center">Nhận key thành công</h2>
  <div style="margin:12px 0">
    <span style="background:rgba(255,255,255,.1);padding:6px 14px;border-radius:99px;font-size:12px;font-weight:800;border:1px solid var(--border)">Tier: <b style="color:#fff">${esc(t)}</b></span>
  </div>
  <div class="keybox" id="keyText">${esc(key)}</div>
  <div class="btn-row">
    <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép</button>
    <button class="btn btn-secondary" type="button" id="dlBtn">Tải .txt</button>
  </div>
  <a href="/" style="display:block;margin-top:16px;font-size:14px;font-weight:700;color:var(--muted);text-decoration:underline">Nhận key mới</a>
</div>
<script nonce="${nonce}">(function(){var k=document.getElementById('keyText');if(!k)return;var key=k.textContent.trim();var dl=document.getElementById('dlBtn');if(dl)dl.onclick=function(){var txt='GetKey DPIConfig\n===========\n\n'+key+'\n\nTier: ${esc(t)}\nNhận lúc: '+new Date().toLocaleString('vi-VN')+'\n\n© GetKey DPIConfig';var b=new Blob([txt],{type:'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='getkeydpiconfig-${esc(t)}.txt';a.click();window.__toast('Đã tải file key','ok');};})();</script>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng GetKey DPIConfig.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Mất phiên thì làm sao?', 'Phiên gắn với IP. Nếu đổi Wi-Fi/4G hoặc bật VPN giữa chừng, bạn cần bắt đầu lại.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 0h giờ VN.'],
    ['Mua key ở đâu?', 'Liên hệ Zalo 0996492296 hoặc qua kênh YouTube chính thức.']
  ];
  const inner = `<h1 class="center" style="margin-bottom:24px">Câu hỏi thường gặp</h1><div style="max-width:700px;margin:0 auto">${qa.map(([q, a]) => `<div class="titan-card" style="padding:20px;margin-bottom:12px"><h3 style="margin-bottom:8px;color:#fff;font-size:16px">${esc(q)}</h3><p style="color:var(--muted);font-size:14px;margin:0">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="titan-card"><h2>Quản trị thông báo</h2><p style="color:var(--muted);font-size:14px;margin:10px 0 20px">Nhập mật khẩu để tải và chỉnh sửa.</p><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Mật khẩu</label><div style="display:flex;gap:10px;margin:8px 0 20px"><input id="pw" type="password" style="flex:1;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;font-family:inherit;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:700;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:#fff"> Hiển thị thông báo</label><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 16px;font-family:inherit;outline:none"><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Nội dung</label><textarea id="ct" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 20px;font-family:'JetBrains Mono',monospace;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:800;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#10b981':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="titan-card center" style="padding:44px 24px"><h1 style="font-size:72px;color:#ef4444;margin-bottom:12px;">${esc(code)}</h1><h2 style="color:#fff;margin-bottom:24px;">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
