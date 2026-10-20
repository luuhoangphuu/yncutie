import { CSS, COMMON_JS, CHECKPOINT_JS } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#0a0b0d">
  <title>${esc(title)} · Zwic Apex</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23e2e8f0' d='M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z'/%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <style>${CSS}</style>${head}</head><body>
<div class="bg-glow"></div><div class="bg-grid"></div><div class="spot"></div>
${body}
<script nonce="${nonce}">${COMMON_JS}</script></body></html>`;
}

const logoHtml = `<a class="logo-text" href="/" aria-label="Zwic Apex"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>Zwic Apex</a>`;
const nav = (active = '') => `<header class="nav">${logoHtml}<nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© 2026 Zwic Apex · Bảo mật bởi HoangPhu</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;
const errorBox = (error) => error ? `<div class="alert" role="alert">${esc(error)}</div>` : '';

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap"><div class="checkpoint-layout reveal" id="app" data-next="${esc(next)}">

  <div class="panel">
    <h1 class="panel-title">Xác minh kết nối</h1>
    <p class="panel-sub">Hệ thống đang kiểm tra kết nối để chặn bot và spam tự động.</p>
    <div class="ts-box" id="tsWrap">
      <div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div>
      <div class="err" id="errorBox" role="alert" style="display:none;margin-top:12px;font-size:13px"></div>
    </div>
    <p class="ts-help" id="helpText">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</p>
  </div>

  <div class="hud-container">
    <div class="hud-header">
      <div>
        <div class="hud-label">Thời gian xác minh</div>
        <div class="hud-value" id="timer">0.00<small style="font-size:16px;color:var(--muted)">s</small></div>
      </div>
      <div style="text-align:right">
        <div class="hud-label">Trạng thái</div>
        <div style="font-size:14px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:8px;justify-content:flex-end">
          <span class="live-dot"></span>Đang kết nối
        </div>
      </div>
    </div>

    <div>
      <div class="hud-label" style="margin-bottom:10px">Nhịp truyền tải dữ liệu</div>
      <div class="heartbeat-container" id="heartbeat"></div>
    </div>

    <div class="hud-footer">
      <div>Giao thức: <b>HTTP/2</b></div>
      <div>Bảo vệ: <b>Cloudflare WAF</b></div>
    </div>
  </div>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

const dlIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`;

export function renderHome(env, error, notice, quota, nonce) {
  const noticeHtml = (notice && notice.enabled) ? `
  <div class="modal-overlay" id="noticeModal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <div class="modal-header"><span>${esc(notice.title || 'Thông báo')}</span><button class="modal-close" aria-label="Đóng">×</button></div>
      <div class="modal-body">${esc(notice.content || '')}</div>
      <button class="modal-btn">Đã hiểu</button>
    </div>
  </div>` : '';

  const inner = `
  ${noticeHtml}
  ${errorBox(error)}

  <section class="reveal">
    <h1 class="hero-title">Zwic Apex</h1>
    <p class="hero-sub typewriter" data-text="Hệ thống cấp phát key tự động, bảo mật đa tầng. Mượt mà, rõ ràng, đáng tin cậy."></p>
  </section>

  <div class="bento-grid">
    <div class="bento-item col-span-2">
      <h2>Lấy key miễn phí</h2>

      <a href="https://t.me/" class="btn btn-tele" target="_blank" rel="noopener noreferrer" style="margin-bottom:24px">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.8-.27-1.44-.41-1.39-.87.03-.24.36-.49 1.01-.75 3.96-1.73 6.6-2.87 7.92-3.42 3.77-1.57 4.55-1.84 5.06-1.85.11 0 .36.03.49.13.13.1.17.24.16.37z"/></svg>
        Tham gia Telegram
      </a>

      <div class="stepper-wrap">
        <div class="step active"><div class="step-num">1</div><span>Chọn key</span></div>
        <div class="step"><div class="step-num">2</div><span>Vượt link</span></div>
        <div class="step"><div class="step-num">3</div><span>Xác thực</span></div>
        <div class="step"><div class="step-num">4</div><span>Nhận key</span></div>
      </div>

      <form method="POST" action="/start">
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="tier" value="Normal" checked><span>Key Normal · Cơ bản</span></label>
          <label class="radio-label"><input type="radio" name="tier" value="VIP"><span>Key VIP · Ưu tiên</span></label>
        </div>
        <button type="submit" class="btn btn-primary">Lấy key</button>
      </form>
    </div>

    <div class="bento-item">
      <div>
        <h2>Thiết bị hiện tại</h2>
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Lượt nhận key của bạn trong hôm nay</p>
        <div class="quota-grid">
          <div class="quota-item"><p>Tên key</p><b>ZwicApex</b></div>
          <div class="quota-item"><p>Còn lại</p><b>12</b></div>
          <div class="quota-item"><p>Thành công</p><b>0</b></div>
          <div class="quota-item"><p>Lần gần nhất</p><b style="font-size:14px">Chưa có</b></div>
        </div>
      </div>
      <p style="font-size:12px;color:var(--dim);margin-top:14px;text-align:center">Làm mới lúc 00:00 giờ VN</p>
    </div>

    <div class="bento-item">
      <div>
        <h2>Thông tin &amp; bảng giá</h2>
        <div class="price-box">
          <div class="price-row"><span>Key 1 ngày</span><span>10k</span></div>
          <div class="price-row"><span>Key 7 ngày</span><span>50k</span></div>
          <div class="price-row"><span>Key 30 ngày</span><span>150k</span></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <a href="https://zalo.me/0996492296" class="btn btn-secondary" style="min-height:44px;font-size:13px">Hỗ trợ qua Zalo</a>
        <a href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" class="btn btn-secondary" style="min-height:44px;font-size:13px">Kênh YouTube</a>
      </div>
    </div>

    <div class="bento-item col-span-4">
      <h2>Tải ứng dụng</h2>
      <p style="font-size:13.5px;color:var(--muted);margin-bottom:20px">Chọn đúng bản và đọc ghi chú trước khi tải.</p>

      <div class="app-grid">
        <div class="app-card">
          <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
            <div class="app-icon">PR</div>
            <div><h3 style="font-size:16px;margin-bottom:2px">App Proxy V1.3 🍎</h3><p class="app-warning">Lưu ý trước khi dùng</p></div>
          </div>
          <ul class="app-list">
            <li>– Sử dụng Free Fire Max / Normal CHPlay</li>
            <li>– Sử dụng một cách thông minh</li>
            <li>– Không lạm dụng chức năng quá đà</li>
            <li>– Sử dụng duy nhất ESP sẽ anti hơn</li>
            <li>– Tự thêm domain block nếu cảm thấy nó sẽ anti hơn</li>
          </ul>
          <a href="#" class="btn btn-download" style="margin-top:auto">${dlIcon} Tải xuống</a>
        </div>

        <div class="app-card">
          <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
            <div class="app-icon">EX</div>
            <div><h3 style="font-size:16px;margin-bottom:2px">App External · Root · Fix</h3><p class="app-warning">Đã fix lỗi "Ứng dụng chưa cài đặt"</p></div>
          </div>
          <ul class="app-list">
            <li>– Sử dụng Free Fire Max CHPlay ver 2.132.x</li>
            <li>– Menu root</li>
            <li>– Dùng chức năng cẩn thận, đặc biệt là Aim</li>
          </ul>
          <a href="#" class="btn btn-download" style="margin-top:auto">${dlIcon} Tải xuống</a>
        </div>
      </div>
    </div>
  </div>`;
  return layout('Trang chủ', shell('home', inner), nonce);
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${errorBox(error)}
<div class="panel center reveal" style="max-width:600px;margin:0 auto">
  <div class="stepper-wrap" style="max-width:420px;margin:0 auto 32px;width:100%">
    <div class="step done"><div class="step-num">✓</div><span>Chọn key</span></div>
    <div class="step active"><div class="step-num">2</div><span>Vượt link</span></div>
    <div class="step"><div class="step-num">3</div><span>Xác thực</span></div>
    <div class="step"><div class="step-num">4</div><span>Nhận key</span></div>
  </div>
  <h2 style="font-size:28px;font-weight:800;letter-spacing:-.03em;margin-bottom:12px">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${esc(current)}/${esc(required)})</h2>
  <p style="color:var(--muted);font-size:15px;margin-bottom:36px">Hoàn thành bước xác minh để nhận key.</p>
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</div>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const inner = `<div class="panel center reveal" style="max-width:600px;margin:0 auto;padding:52px 36px">
  <div class="stepper-wrap" style="max-width:420px;margin:0 auto 32px;width:100%">
    <div class="step done"><div class="step-num">✓</div><span>Chọn key</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Vượt link</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Xác thực</span></div>
    <div class="step done"><div class="step-num">✓</div><span>Nhận key</span></div>
  </div>
  <h2 style="font-size:30px;font-weight:800;letter-spacing:-.035em;margin-bottom:10px">Nhận key thành công</h2>
  <p style="color:var(--muted);margin-bottom:28px">Key của bạn đã sẵn sàng. Bấm vào key để sao chép.</p>
  <div class="keybox" id="keyText" data-copy="keyText" role="button" tabindex="0">${esc(key)}</div>
  <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép key</button>
  <a href="/" class="back-link">Quay lại trang chủ</a>
</div>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Làm mới lúc 00:00 giờ VN.']
  ];
  const inner = `<h1 class="center" style="margin-bottom:36px;font-size:clamp(32px,5vw,44px);font-weight:800;letter-spacing:-.04em">Câu hỏi thường gặp</h1>
<div class="reveal" style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px">${qa.map(([q, a]) => `<div class="bento-item" style="padding:26px 28px"><h3 style="margin-bottom:8px;font-size:17px">${esc(q)}</h3><p style="color:var(--muted);font-size:15px;margin:0">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner), nonce);
}

export function renderAdmin(nonce) {
  const inner = `<div class="admin-card reveal">
    <h2 class="center" style="font-size:24px;letter-spacing:-.03em;margin-bottom:10px">Quản trị thông báo</h2>
    <p style="color:var(--muted);font-size:14px;text-align:center;margin-bottom:28px">Nhập mật khẩu để tải và cập nhật thông báo cho trang web.</p>

    <div class="input-group">
      <label for="pw">Mật khẩu admin</label>
      <input id="pw" type="password" placeholder="Nhập mật khẩu" autocomplete="current-password">
    </div>

    <button id="loadBtn" class="btn btn-primary" style="margin-bottom:24px">Tải dữ liệu</button>

    <div id="editor" style="display:none">
      <label style="display:flex;align-items:center;gap:10px;margin-bottom:20px;font-weight:600;cursor:pointer;color:var(--text)">
        <input id="en" type="checkbox" style="width:18px;height:18px;accent-color:#e7eaee"> Bật thông báo
      </label>

      <div class="input-group">
        <label for="tt">Tiêu đề</label>
        <input id="tt" type="text" placeholder="VD: Thông báo quan trọng">
      </div>

      <div class="input-group">
        <label for="ct">Nội dung</label>
        <textarea id="ct" placeholder="Nhập nội dung thông báo"></textarea>
      </div>

      <button id="saveBtn" class="btn btn-primary">Lưu thay đổi</button>
    </div>

    <div id="status" role="status" style="margin-top:20px;font-weight:600;text-align:center;font-size:14px"></div>
  </div>
<script nonce="${nonce}">
(function(){
  var $=function(id){return document.getElementById(id)},st=$('status');
  function say(m,ok){st.textContent=m;st.style.color=ok?'var(--ok)':'var(--danger)';}
  function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(function(r){return r.json()})}

  $('loadBtn').onclick=function(){
    say('Đang tải...',1);
    call({password:$('pw').value,action:'get'}).then(function(d){
      if(!d.success){say(d.error||'Mật khẩu sai.',0);return;}
      $('en').checked=!!d.notice.enabled;
      $('tt').value=d.notice.title||'';
      $('ct').value=d.notice.content||'';
      $('editor').style.display='block';
      say('Đã tải dữ liệu.',1);
    }).catch(function(){say('Lỗi mạng.',0)});
  };

  $('saveBtn').onclick=function(){
    say('Đang lưu...',1);
    call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}})
      .then(function(d){say(d.success?'Đã lưu thay đổi.':(d.error||'Lỗi.'),!!d.success)})
      .catch(function(){say('Lỗi mạng.',0)});
  };
})();
</script>`;
  return layout('Admin', shell('', inner, 'narrow'), nonce);
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="panel center reveal" style="padding:56px 36px"><h1 style="font-size:clamp(72px,16vw,104px);font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:16px;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent">${esc(code)}</h1><h2 style="font-size:22px;margin-bottom:28px">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'), nonce);
}