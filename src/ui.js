import { CSS, COMMON_JS, CHECKPOINT_JS, MODAL_JS, ADMIN_JS, JS_FX, CONFETTI_JS } from './assets.js';

export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#07070b"><title>${esc(title)} · GetKey DPIConfig</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;900&display=swap" rel="stylesheet"><style>${CSS}</style>${head}</head><body><div class="bg-grid"></div><div class="bg-glow"></div>${body}<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}

const nav = (active = '') => `<header class="nav"><a class="logo" href="/"><i></i>GETKEY&nbsp;DPICONFIG</a><nav class="nav-links"><a href="/" class="${active === 'home' ? 'on' : ''}">Trang chủ</a><a href="/faq" class="${active === 'faq' ? 'on' : ''}">FAQ</a><span class="pill hide-m"><span class="dot"></span>Hệ thống hoạt động</span></nav></header>`;
const foot = () => `<footer class="foot">© GETKEYDPICONFIG.SITE · Mọi nơi bán key khác nguồn đều là giả mạo.</footer>`;
const shell = (active, inner, narrow = false) => `${nav(active)}<main class="wrap${narrow ? ' narrow' : ''}">${inner}</main>${foot()}`;
const stepper = (n) => '<ol class="stepper">' + ['Vượt liên kết', 'Nhận key'].map((t, i) => `<li class="${i + 1 < n ? 'done' : i + 1 === n ? 'on' : ''}"><b>${i + 1 < n ? '✓' : i + 1}</b><span>${t}</span></li>`).join('') + '</ol>';

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `<header class="nav"><a class="logo" href="/"><i></i>GETKEY&nbsp;DPICONFIG</a><span class="pill"><span class="dot"></span>Bảo vệ bởi Cloudflare</span></header>
<main class="wrap"><div class="cp" id="app" data-next="${esc(next)}">
  <section>
    <h1>Xác minh nhanh<br>trước khi vào <em>cửa hàng</em></h1>
    <p class="lead" style="margin-left:0">Chúng tôi kiểm tra kết nối để chặn bot và spam. Thường chỉ mất vài giây.</p>
    <div class="term" id="terminal"></div>
    <div class="card">
      <div class="ts"><div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError" data-expired-callback="onTurnstileExpired"></div></div>
      <p class="muted center" id="helpText">Nếu thấy ô <b>Verify you are human</b>, hãy bấm vào đó. Trang sẽ tự mở khi xác minh xong.</p>
      <div class="err" id="errorBox" role="alert"></div>
      <div class="trust-badges"><span><i></i>WAF Active</span><span><i></i>DDoS Shield</span><span><i></i>Bot Guard</span></div>
    </div>
  </section>
  <aside>
    <div class="card"><div class="dash-t">Thời gian xác minh</div><div class="dash-v" id="timer">0.00<small>s</small></div><div class="wave" id="wave" aria-hidden="true"></div></div>
    <div class="card"><div class="radar"><div class="rd" aria-hidden="true"><i style="top:28%;left:68%"></i><i style="top:66%;left:30%"></i><i style="top:50%;left:20%"></i></div><div><b>Đang bảo vệ</b><p class="muted">WAF · Bot · DDoS</p></div></div></div>
  </aside>
</div></main>${foot()}
<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const used = quota ? quota.count : 0, limit = quota ? quota.limit : 12;
  const pct = Math.min(100, Math.round((used / limit) * 100));
  const showNotice = notice && notice.enabled;
  const modal = showNotice ? `
  <div class="modal-overlay" id="noticeModal">
    <div class="modal-box">
      <div class="modal-header"><div class="modal-title">${esc(notice.title || 'Thông báo')}</div><button class="modal-close" aria-label="Đóng">×</button></div>
      <div class="modal-body">${esc(notice.content || '')}</div>
      <div class="modal-footer"><button class="modal-btn snooze" type="button" data-snooze>Tắt 1 giờ</button><button class="modal-btn close" type="button" data-close>Đóng</button></div>
    </div>
  </div>` : '';

  const inner = `${modal}${error ? `<div class="alert" role="alert"><span>⚠</span><span>${esc(error)}</span></div>` : ''}
<section class="hero"><span class="pill"><span class="dot"></span>Nhận key miễn phí · cập nhật liên tục</span><h1 style="margin-top:14px">Nhận key <em>DPIConfig</em><br>nhanh, gọn, an toàn</h1><p class="lead">Chọn loại key, hoàn thành vài bước ngắn và nhận key ngay trên trang.</p></section>
<div class="card" style="max-width:640px;margin:0 auto">
  <div class="meter"><div class="meter-top"><span>Lượt nhận key hôm nay</span><span><b>${Math.max(0, limit - used)}</b> / ${limit} còn lại</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div></div>
  <form method="POST" action="/start">
    <div class="tiers">
      <label class="tier"><input type="radio" name="tier" value="Normal" checked><span class="tier-body"><b>Key Normal</b><small>1 lượt vượt liên kết</small></span></label>
      <label class="tier"><input type="radio" name="tier" value="VIP"><span class="tier-body"><b>Key VIP</b><small>2 lượt vượt liên kết</small></span></label>
    </div>
    <button class="btn btn-primary" type="submit">Bắt đầu nhận key →</button>
  </form>
  <div class="social-row">
    <a class="social-btn zalo" href="https://zalo.me/0996492296" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.5 3.54 1.35 5.02L2 22l4.98-1.35C8.46 21.5 10.17 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.27 14.23c-.18.5-1.04.96-1.42 1-.38.04-1.16.14-2.1-.2-.94-.34-1.72-.88-2.56-1.74-.84-.86-1.38-1.64-1.72-2.56-.34-.92-.24-1.7-.2-2.08.04-.38.5-1.24 1-1.42.5-.18 1.04-.22 1.4.2.36.42.66 1.5.8 1.88.14.38.06.64-.06.88-.12.24-.46.58-.6.72-.14.14-.28.34-.16.58.12.24.52.88 1.22 1.58.7.7 1.34 1.1 1.58 1.22.24.12.44-.02.58-.16.14-.14.48-.48.72-.6.24-.12.5-.2.88-.06.38.14 1.46.44 1.88.8.42.36.38.9.2 1.4z"/></svg>Zalo</a>
    <a class="social-btn yt" href="${esc(env.YOUTUBE_CHANNEL_URL)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>YouTube</a>
  </div>
</div>
<div class="grid3" style="margin-top:26px">
  <div class="card feat"><div class="ico">1</div><div><b>Vượt liên kết</b><span>Mở Link4M và hoàn thành.</span></div></div>
  <div class="card feat"><div class="ico">2</div><div><b>Quay về tự động</b><span>Hệ thống tự nhận và cấp key.</span></div></div>
  <div class="card feat"><div class="ico">3</div><div><b>Nhận key</b><span>Key hiện ngay, sao chép 1 chạm.</span></div></div>
</div>`;
  return layout('Trang chủ', shell('home', inner) + `<script nonce="${nonce}">${MODAL_JS}</script>`, nonce);
}

export function renderStep({ link, current, required, error }, nonce) {
  const inner = `${stepper(1)}${error ? `<div class="alert" role="alert"><span>⚠</span><span>${esc(error)}</span></div>` : ''}<section class="card center"><h2>Vượt liên kết (${current}/${required})</h2><p class="muted mt">Mở liên kết, hoàn thành các bước trên trang đó. Bạn sẽ được đưa về đây tự động, đừng đổi mạng giữa chừng.</p><a class="btn btn-warn mt" href="${esc(link)}" target="_blank" rel="noopener noreferrer">Mở liên kết ↗</a></section>`;
  return layout('Vượt liên kết', shell('', inner, true), nonce);
}

export function renderSuccess(key, duration, nonce) {
  const inner = `${stepper(2)}<section class="card center"><div class="badge-ok">✓</div><h2>Nhận key thành công</h2><div class="keybox" id="keyText">${esc(key)}</div><button class="btn btn-primary" type="button" data-copy="keyText">Sao chép key</button><p class="muted mt">${duration ? 'Thời hạn: <b>' + esc(duration) + ' giờ</b>. ' : ''}Hãy lưu key lại ngay.</p></section>`;
  return layout('Nhận key', shell('', inner, true) + `<script nonce="${nonce}">${CONFETTI_JS}</script>`, nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng DPIConfig.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Mất phiên thì làm sao?', 'Phiên gắn với IP. Nếu đổi Wi-Fi/4G hoặc bật VPN giữa chừng, bạn cần bắt đầu lại.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 0h giờ VN.'],
    ['Mua key ở đâu?', 'Liên hệ Zalo 0996492296 hoặc qua kênh YouTube chính thức.']
  ];
  const inner = `<section class="hero"><h1>Câu hỏi <em>thường gặp</em></h1></section><div style="max-width:700px;margin:0 auto">${qa.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner), nonce);
}

export function renderAdmin(nonce) {
  const inner = `<section class="card"><h2>Quản trị thông báo</h2><p class="muted mt">Nhập mật khẩu để tải và chỉnh sửa.</p><label class="f" for="pw">Mật khẩu</label><div class="row"><input id="pw" type="password" autocomplete="current-password"><button id="loadBtn" class="btn btn-ghost" type="button" style="width:auto;white-space:nowrap;padding-left:20px;padding-right:20px">Tải</button></div><div id="editor" style="display:none"><label class="chk"><input id="en" type="checkbox"> Hiển thị thông báo</label><label class="f" for="tt">Tiêu đề</label><input id="tt" type="text" maxlength="100"><label class="f" for="ct">Nội dung</label><textarea id="ct" maxlength="1000"></textarea><button id="saveBtn" class="btn btn-primary mt" type="button">Lưu</button></div><div id="status" class="status" role="status"></div></section>`;
  return layout('Admin', shell('', inner, true) + `<script nonce="${nonce}">${ADMIN_JS}</script>`, nonce);
}

export function renderError(code, msg, nonce) {
  const inner = `<section class="card center" style="padding:44px 24px"><div class="errcode">${esc(code)}</div><h2 class="mt">${esc(msg)}</h2><a class="btn btn-primary mt" href="/" style="max-width:240px;margin-left:auto;margin-right:auto">Về trang chủ</a></section>`;
  return layout('Lỗi ' + code, shell('', inner, true), nonce);
}
