import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
import { INTRO_CSS, INTRO_JS, introHead, introHtml, liteHead } from './intro.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#07080a"><meta name="color-scheme" content="dark">
  <title>${esc(title)} · Zwic Apex</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23e2e8f0' d='M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <style>${CSS}${INTRO_CSS}</style>${liteHead(nonce)}${head}</head><body>
<a class="skip" href="#main">Bỏ qua điều hướng</a>
<div class="bg-glow"></div><div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div><div class="bg-grid"></div>
<canvas id="snow-canvas" aria-hidden="true"></canvas>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script><script nonce="${nonce}">${INTRO_JS}</script></body></html>`;
}

const heroTitle = (txt) => `<h1 class="hero-title" data-t="${esc(txt)}" aria-label="${esc(txt)}">${[...txt].map((c, i) => c === ' ' ? '<span class="sp" aria-hidden="true"></span>' : `<span class="ch" aria-hidden="true" style="--i:${i}">${esc(c)}</span>`).join('')}</h1>`;

const logoHtml = `<a class="logo-text" href="/" aria-label="Zwic Apex"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>Zwic Apex</a>`;
const nav = (active = '') => `<header class="nav">${logoHtml}<nav class="nav-links" aria-label="Điều hướng chính"><a href="/" class="${active==='home'?'on':''}"${active==='home'?' aria-current="page"':''}>Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}"${active==='faq'?' aria-current="page"':''}>FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">© 2026 Zwic Apex · Bảo mật bởi HoangPhu</footer>`;
const fab = `<a class="fab" href="https://zalo.me/0996492296" target="_blank" rel="noopener noreferrer" aria-label="Hỗ trợ qua Zalo"><i>Zalo</i><span>Hỗ trợ Zalo</span></a>`;
const shell = (active, inner, width = '', withFab = true) => `${nav(active)}<main id="main" class="wrap ${width}">${inner}</main>${foot()}${withFab ? fab : ''}`;
const errorBox = (error) => error ? `<div class="alert" role="alert">${esc(error)}</div>` : '';

const shieldIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="shield" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path class="tick" d="M8.5 12.2l2.5 2.5 4.5-5"/></svg>`;
const dlIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`;
const stepper = (states) => {
  const labels = ['Chọn key', 'Vượt link', 'Xác thực', 'Nhận key'];
  return `<div class="stepper-wrap" role="list" aria-label="Các bước nhận key">${labels.map((l, i) => {
    const s = states[i];
    return `<div class="step ${s}" role="listitem"${s === 'active' ? ' aria-current="step"' : ''}><div class="step-num">${s === 'done' ? '✓' : i + 1}</div><span>${l}</span></div>`;
  }).join('')}</div>`;
};

// Nút tải: chỉ bật khi có URL thật (env.APP_PROXY_URL / env.APP_EXTERNAL_URL), tránh href="#" nhảy lên đầu trang
const dlBtn = (url) => url
  ? `<a href="${esc(url)}" class="btn btn-download" style="margin-top:auto" rel="noopener noreferrer">${dlIcon} Tải xuống</a>`
  : `<a class="btn btn-download" style="margin-top:auto" aria-disabled="true" role="link">${dlIcon} Sắp có</a>`;

export function renderCheckpoint(env, nonce, next = '/') {
  const body = `${nav('')}<main id="main" class="wrap"><div class="cp-grid reveal">

  <section class="ti cp spin" id="app" data-next="${esc(next)}">
    <div class="cp-icon">${shieldIcon}</div>
    <h1 class="cp-title">Kiểm tra bảo mật kết nối</h1>
    <p class="cp-sub">Hệ thống đang xác nhận bạn là người thật để chặn bot, spam và truy cập bất thường.</p>

    <ol class="cp-steps" aria-label="Tiến trình xác minh">
      <li data-s="1" class="active">Kết nối an toàn</li>
      <li data-s="2">Kiểm tra trình duyệt</li>
      <li data-s="3">Xác nhận máy chủ</li>
    </ol>

    <div class="ts-box" id="tsWrap">
      <div id="tsMount" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}"></div>
      <div class="err" id="errorBox" role="alert" style="display:none;margin-top:12px;font-size:13px"></div>
    </div>
    <p class="cp-status" id="helpText" aria-live="polite">Bấm vào ô <strong>Verify you are human</strong> để tiếp tục.</p>
  </section>

  <aside class="console" aria-label="Giám sát bảo mật">
    <div class="con-head">
      <div class="con-title"><span class="live-dot"></span>Giám sát bảo mật</div>
      <span class="con-pill">Đang bảo vệ</span>
    </div>

    <div class="con-metrics">
      <div class="metric"><p>Thời gian xác minh</p><b id="timer">0.00<small>s</small></b></div>
      <div class="metric"><p>Phản hồi máy chủ</p><b id="mTtfb">—</b></div>
      <div class="metric"><p>Giao thức</p><b id="mProto">—</b></div>
      <div class="metric"><p>Mã hoá</p><b id="mTls">—</b></div>
    </div>

    <div class="con-log">
      <div class="con-label">Nhật ký sự kiện</div>
      <div class="con-logbox"><ul class="cp-log" id="cpLog" aria-live="polite"></ul></div>
    </div>

    <div class="con-chips"><span>Cloudflare Turnstile</span><span>Chống bot</span><span>Giới hạn truy cập</span></div>
  </aside>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Xác minh', body, nonce);
}

export function renderHome(env, error, notice, quota, nonce) {
  const noticeHtml = (notice && notice.enabled) ? `
  <div class="modal-overlay" id="noticeModal" role="dialog" aria-modal="true" aria-labelledby="noticeTitle">
    <div class="modal-content">
      <div class="modal-header"><span id="noticeTitle">${esc(notice.title || 'Thông báo')}</span><button class="modal-close" type="button" aria-label="Đóng">×</button></div>
      <div class="modal-body">${esc(notice.content || '')}</div>
      <div class="modal-actions">
        <button class="modal-btn" type="button">Đã hiểu</button>
        <button class="modal-btn modal-btn-ghost modal-snooze" type="button">Ẩn trong 1 giờ</button>
      </div>
    </div>
  </div>` : '';

  // Số lượt: lấy từ quota nếu server có truyền (quota.remaining / quota.limit), mặc định 12/12
  const LIMIT = Number(quota?.limit) > 0 ? Number(quota.limit) : 12;
  const left = Number.isFinite(Number(quota?.remaining)) && quota?.remaining != null ? Math.max(0, Number(quota.remaining)) : LIMIT;
  const pct = Math.min(100, Math.round((left / LIMIT) * 100));
  const tg = env.TELEGRAM_URL ? `<div class="kc-foot"><a class="link-quiet" href="${esc(env.TELEGRAM_URL)}" target="_blank" rel="noopener noreferrer">Tham gia nhóm Telegram để nhận thông báo</a></div>` : '';

  const inner = `
  ${noticeHtml}
  ${errorBox(error)}

  <section class="hero reveal">
    ${heroTitle('Zwic Apex')}
    <p class="hero-sub">Nhận key miễn phí trong vài bước. Tự động, bảo mật, không cần đăng ký.</p>
  </section>

  <section class="ti keycard spin tilt reveal" style="--d:.12s">
    <div class="kc-head">
      <h2>Lấy key miễn phí</h2>
      <span class="kc-quota"><b>${left}</b>lượt còn lại hôm nay</span>
    </div>
    <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${LIMIT}" aria-valuenow="${left}" aria-label="Lượt còn lại"><i style="width:${pct}%"></i></div>

    ${stepper(['active', '', '', ''])}

    <form method="POST" action="/start">
      <div class="radio-group" role="radiogroup" aria-label="Loại key">
        <label class="radio-label"><input type="radio" name="tier" value="Normal" checked><span><b>Key Normal</b><small>Cơ bản, vượt ít bước</small></span></label>
        <label class="radio-label"><input type="radio" name="tier" value="VIP"><span><b>Key VIP</b><small>Ưu tiên, thời hạn dài hơn</small><em>VIP</em></span></label>
      </div>
      <button type="submit" class="btn btn-primary">Lấy key</button>
    </form>
    ${tg}
  </section>

  <section class="support" style="margin-top:18px">
    <a class="sup sup-zalo" href="https://zalo.me/0996492296" target="_blank" rel="noopener noreferrer">
      <span class="sup-ic">Zalo</span>
      <span class="sup-tx"><b>Hỗ trợ qua Zalo</b><small>Nhắn trực tiếp cho admin</small></span>
      <span class="sup-go" aria-hidden="true">↗</span>
    </a>
    <a class="sup sup-yt" href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" target="_blank" rel="noopener noreferrer">
      <span class="sup-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg></span>
      <span class="sup-tx"><b>Kênh YouTube</b><small>Video và cập nhật mới</small></span>
      <span class="sup-go" aria-hidden="true">↗</span>
    </a>
  </section>

  <section class="trust" aria-label="Cam kết bảo mật">
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M8.5 12.2l2.5 2.5 4.5-5"/></svg><b>Chống bot</b><small>Xác minh bằng Cloudflare Turnstile</small></div>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><b>Mã hoá HTTPS</b><small>Kết nối được bảo vệ toàn trình</small></div>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-6"/></svg><b>${LIMIT} lượt mỗi ngày</b><small>Giới hạn theo IP, chống lạm dụng</small></div>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/></svg><b>Giao key tự động</b><small>Nhận ngay khi hoàn tất các bước</small></div>
  </section>

  <section class="info">
    <div>
      <h3 class="sec-title">Bảng giá</h3>
      <div class="price-row"><span>Key 1 ngày</span><span>10k</span></div>
      <div class="price-row"><span>Key 7 ngày</span><span>50k</span></div>
      <div class="price-row"><span>Key 30 ngày</span><span>150k</span></div>
    </div>
    <div>
      <h3 class="sec-title">Hôm nay của bạn</h3>
      <div class="stat-row"><span>Tên key</span><span>ZwicApex</span></div>
      <div class="stat-row"><span>Còn lại</span><span>${left}</span></div>
      <div class="stat-row"><span>Thành công</span><span>${esc(quota?.success ?? 0)}</span></div>
      <div class="stat-row"><span>Lần gần nhất</span><span>${esc(quota?.last || 'Chưa có')}</span></div>
      <p class="note">Làm mới lúc 00:00 giờ VN.</p>
    </div>
  </section>

  <section class="apps">
    <h3 class="sec-title">Tải ứng dụng</h3>
    <div class="app-grid">
      <div class="app">
        <div class="app-top">
          <div class="app-icon" aria-hidden="true">PR</div>
          <div><h3 style="font-size:16px">App Proxy V1.3 🍎</h3><p class="app-warning">Lưu ý trước khi dùng</p></div>
        </div>
        <ul class="app-list">
          <li>– Sử dụng Free Fire Max / Normal CHPlay</li>
          <li>– Sử dụng một cách thông minh</li>
          <li>– Không lạm dụng chức năng quá đà</li>
          <li>– Sử dụng duy nhất ESP sẽ anti hơn</li>
          <li>– Tự thêm domain block nếu cảm thấy nó sẽ anti hơn</li>
        </ul>
        ${dlBtn(env.APP_PROXY_URL)}
      </div>
      <div class="app">
        <div class="app-top">
          <div class="app-icon" aria-hidden="true">EX</div>
          <div><h3 style="font-size:16px">App External · Root · Fix</h3><p class="app-warning">Đã fix lỗi "Ứng dụng chưa cài đặt"</p></div>
        </div>
        <ul class="app-list">
          <li>– Sử dụng Free Fire Max CHPlay ver 2.132.x</li>
          <li>– Menu root</li>
          <li>– Dùng chức năng cẩn thận, đặc biệt là Aim</li>
        </ul>
        ${dlBtn(env.APP_EXTERNAL_URL)}
      </div>
    </div>
  </section>`;
  return layout('Trang chủ', introHtml + shell('home', inner), nonce, introHead(nonce));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const pips = Array.from({ length: Math.max(1, Number(required) || 1) }, (_, i) => `<i class="${i < Number(current) ? 'on' : ''}"></i>`).join('');
  const inner = `${errorBox(error)}
<section class="ti panel spin reveal">
  ${stepper(['done', 'active', '', ''])}
  <div class="pips" role="img" aria-label="Đã xong ${esc(Math.max(0, Number(current) - 1))} trên ${esc(required)} bước">${pips}</div>
  <h2 style="font-size:clamp(24px,5vw,28px);font-weight:800;letter-spacing:-.035em;margin-bottom:10px">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${esc(current)}/${esc(required)})</h2>
  <p style="color:var(--muted);font-size:15px;margin-bottom:28px">Hoàn thành bước xác minh để nhận key.</p>
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</section>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const chips = [tier && `Key ${tier}`, duration].filter(Boolean).map((c) => `<span>${esc(c)}</span>`).join('');
  const inner = `<section class="ti panel spin tilt reveal">
  ${stepper(['done', 'done', 'done', 'done'])}
  <h2 style="font-size:clamp(24px,5.4vw,30px);font-weight:800;letter-spacing:-.035em;margin-bottom:10px">Nhận key thành công</h2>
  <p style="color:var(--muted);margin-bottom:20px">Key của bạn đã sẵn sàng. Bấm vào key để sao chép.</p>
  ${chips ? `<div class="chips">${chips}</div>` : ''}
  <div class="keybox" id="keyText" data-key="${esc(key)}" data-copy="keyText" role="button" tabindex="0" aria-label="Sao chép key">${esc(key)}</div>
  <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép key</button>
  <a href="/" class="back-link">Quay lại trang chủ</a>
</section>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Làm mới lúc 00:00 giờ VN.']
  ];
  const inner = `<h1 class="center reveal" style="margin-bottom:34px;font-size:clamp(30px,5vw,44px);font-weight:800;letter-spacing:-.04em">Câu hỏi thường gặp</h1>
<div class="faq reveal" style="--d:.1s">${qa.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner), nonce);
}

export function renderAdmin(nonce) {
  const inner = `<section class="ti admin reveal">
    <h2 class="center" style="font-size:24px;letter-spacing:-.03em;margin-bottom:10px">Quản trị thông báo</h2>
    <p style="color:var(--muted);font-size:14px;text-align:center;margin-bottom:28px">Nhập mật khẩu để tải và cập nhật thông báo cho trang web.</p>

    <div class="input-group">
      <label for="pw">Mật khẩu admin</label>
      <input id="pw" type="password" placeholder="Nhập mật khẩu" autocomplete="current-password">
    </div>

    <button id="loadBtn" class="btn btn-primary" style="margin-bottom:24px">Tải dữ liệu</button>

    <div id="editor" style="display:none">
      <label style="display:flex;align-items:center;gap:10px;margin-bottom:20px;font-weight:600;cursor:pointer;color:var(--text)">
        <input id="en" type="checkbox" style="width:20px;height:20px;accent-color:#e7eaee"> Bật thông báo
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
  </section>
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
  return layout('Admin', shell('', inner, 'narrow', false), nonce);
}

export function renderError(code, msg, nonce) {
  const inner = `<section class="ti panel reveal" style="padding-top:56px"><h1 style="font-size:clamp(72px,16vw,104px);font-weight:800;letter-spacing:-.05em;line-height:1;margin-bottom:14px;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent">${esc(code)}</h1><h2 style="font-size:22px;margin-bottom:28px">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px">Về trang chủ</a></section>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'), nonce);
}