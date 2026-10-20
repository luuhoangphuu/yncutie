import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${esc(title)} · GetKey DPIConfig</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet"><style>${CSS}</style>${head}</head><body>
<div class="aurora"><div class="aurora-blob"></div><div class="aurora-blob"></div></div>
<canvas id="snow-canvas"></canvas>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}
const nav = (active = '') => `<header class="nav"><a class="logo" href="/"><i></i>GETKEY DPICONFIG</a><nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© GETKEYDPICONFIG.SITE · Bản quyền thuộc về GetKey DPIConfig.</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;
const stepper = (n) => `<ol class="stepper">${['Chọn key','Vượt link','Xác thực','Nhận key'].map((t,i)=>`<li class="${i+1<n?'done':i+1===n?'on':''}"><b>${i+1<n?'✓':i+1}</b><span>${t}</span></li>`).join('')}</ol>`;

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap"><div class="card" id="app" data-next="${esc(next)}" style="padding:32px">
  ${stepper(3)}
  <div class="ckpt-grid">
    <section class="ckpt-left">
      <h1>Xác minh kết nối</h1>
      <p class="lead" style="margin-bottom:24px">Hệ thống kiểm tra kết nối để chặn bot và spam tự động.</p>
      <div class="term-shell">
        <div class="term-bar"><span class="t-dot"></span><span class="t-dot"></span><span class="t-dot"></span><code>~/security-check</code></div>
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
        <svg class="radar-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <path d="M50 50 L50 5 A45 45 0 0 1 95 50 Z" fill="rgba(255,255,255,0.2)"/>
          <circle cx="50" cy="50" r="5" fill="#ffffff"/>
          <circle cx="70" cy="30" r="3" fill="#fff" class="blink-dot"/>
        </svg>
      </div>
    </aside>
  </div></div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(1)}
<div class="split-layout">
  <div class="hero-text">
    <h1>Nhận Key<br><span style="color:var(--silver)">Tốc Độ Ánh Sáng</span></h1>
    <p class="lead">Hệ thống cấp phát key tự động, bảo mật đa tầng. Nhận key miễn phí chỉ trong vài bước.</p>
    <div style="margin-top:20px;display:flex;gap:12px">
      <span style="background:rgba(255,255,255,.1);color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:800;border:1px solid rgba(255,255,255,.2)">24/7 Uptime</span>
      <span style="background:rgba(16,185,129,.1);color:var(--ok);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:800;border:1px solid rgba(16,185,129,.2)">Anti-Bot</span>
    </div>
  </div>
  
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <span style="font-weight:900;font-size:16px;color:#fff;letter-spacing:.02em">Chọn loại key</span>
      <span style="background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:800;padding:4px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.1)">Bước 1</span>
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

<div class="card" style="margin-top:24px">
  <h2 style="color:#fff;display:flex;align-items:center;gap:10px;font-size:20px;margin-bottom:20px;font-weight:900">ℹ️ Thông tin & Bảng giá</h2>
  <div style="background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.05);border-radius:16px;padding:20px;margin-bottom:20px">
    <p style="color:var(--muted)">© Bản quyền thuộc về <b style="color:#fff">GetKey DPIConfig</b>.</p>
    <p style="color:#ef4444;font-weight:700;margin-top:8px">‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.</p>
    <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,.1);padding-top:16px">
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 1 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">10k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 7 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">50k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;"><span>Key 30 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">150k</span></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <a href="https://zalo.me/0996492296" class="btn btn-secondary" style="min-height:48px;padding:12px">Zalo</a>
    <a href="${esc(env.YOUTUBE_CHANNEL_URL)}" class="btn btn-secondary" style="min-height:48px;padding:12px">YouTube</a>
  </div>
</div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(2)}
<div class="card center">
  <h2 style="justify-content:center">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:15px;margin:12px 0 24px">Mở liên kết, hoàn thành các bước trên trang đó. Hệ thống tự nhận khi bạn quay lại.</p>
  
  <div style="position:relative;width:110px;height:110px;margin:0 auto 24px">
    <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);width:110px;height:110px;filter:drop-shadow(0 0 15px rgba(255,255,255,.4))">
      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="6"/>
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--silver)" stroke-width="6" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="0" id="cdRing"/>
    </svg>
    <div id="cdText" style="position:absolute;inset:0;display:grid;place-items:center;font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.5)">3</div>
  </div>
  <p id="cdLabel" style="font-size:14px;font-weight:800;color:var(--muted);margin-bottom:24px">Đang chuẩn bị...</p>
  
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</div>
<script nonce="${nonce}">(function(){var fg=document.getElementById('cdRing'),txt=document.getElementById('cdText'),lbl=document.getElementById('cdLabel');if(!fg)return;var t=3,total=3,circ=283;var iv=setInterval(function(){t--;if(t<0)t=0;txt.textContent=t>0?t:'▶';fg.style.strokeDashoffset=circ*(1-t/total);if(t<=0){clearInterval(iv);lbl.innerHTML='<span style="color:#10b981;text-shadow:0 0 10px rgba(16,185,129,.5)">Đã sẵn sàng</span>';}},1000);})();</script>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `${stepper(4)}
<div class="card center" style="padding:40px 24px">
  <div class="badge-ok">✓</div>
  <h2 style="justify-content:center;font-size:24px">Nhận key thành công</h2>
  <div style="margin:16px 0">
    <span style="background:rgba(255,255,255,.1);padding:6px 16px;border-radius:99px;font-size:13px;font-weight:800;border:1px solid rgba(255,255,255,.4);color:#fff">Tier: ${esc(t)}</span>
  </div>
  <div class="keybox" id="keyText">${esc(key)}</div>
  <div class="btn-row">
    <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép</button>
    <button class="btn btn-secondary" type="button" id="dlBtn">Tải .txt</button>
  </div>
  <a href="/" style="display:block;margin-top:20px;font-size:14px;font-weight:800;color:var(--muted);text-decoration:underline">Nhận key mới</a>
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
  const inner = `<h1 class="center" style="margin-bottom:32px">Câu hỏi thường gặp</h1><div style="max-width:700px;margin:0 auto">${qa.map(([q, a]) => `<div class="card" style="padding:24px;margin-bottom:14px"><h3 style="margin-bottom:10px;color:#fff;font-size:16px;font-weight:800">${esc(q)}</h3><p style="color:var(--muted);font-size:14px;margin:0;line-height:1.7">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="card"><h2>Quản trị thông báo</h2><p style="color:var(--muted);font-size:14px;margin:10px 0 20px">Nhập mật khẩu để tải và chỉnh sửa.</p><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Mật khẩu</label><div style="display:flex;gap:10px;margin:8px 0 20px"><input id="pw" type="password" style="flex:1;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;font-family:inherit;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:700;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:var(--silver)"> Hiển thị thông báo</label><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 16px;font-family:inherit;outline:none"><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Nội dung</label><textarea id="ct" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 20px;font-family:'JetBrains Mono',monospace;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:800;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#10b981':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="card center" style="padding:48px 24px"><h1 style="font-size:80px;color:#ef4444;margin-bottom:16px;text-shadow:0 0 40px rgba(239,68,68,.5)">${esc(code)}</h1><h2 style="color:#fff;margin-bottom:24px;">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
