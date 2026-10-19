import { CSS_CHECKPOINT, CSS_APP, JS } from './assets.js';

const head = (title) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

const layoutCheckpoint = (title, content) => `${head(title)}<style>${CSS_CHECKPOINT}</style></head>
<body>
  ${content}
  <script>${JS}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
</body></html>`;

const layoutApp = (title, content) => `${head(title)}<style>${CSS_APP}</style></head>
<body>
  <div class="bg-shapes"><div class="shape circle"></div><div class="shape triangle"></div><div class="shape square"></div></div>
  <div class="wrapper">${content}</div>
  <a href="https://zalo.me/0996492296" target="_blank" class="float-widget"><i data-lucide="message-circle" style="width:28px;height:28px;"></i><div class="float-dot"></div></a>
  <script>${JS}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
</body></html>`;

export function renderCheckpoint(env) {
  return layoutCheckpoint('Security Check', `
    <div class="top-nav">
      <div class="logo"><div class="logo-icon"><i data-lucide="shield-check" style="width:20px;"></i></div> getkeydpiconfig.site</div>
      <div style="display:flex; gap:16px; align-items:center;">
        <div class="time-badge"><i data-lucide="clock" style="width:16px;height:16px;"></i> <span id="vn-clock">00:00:00</span> (GMT+7)</div>
        <div class="status-badge"><div class="status-dot"></div> Kết nối đang được bảo vệ</div>
      </div>
    </div>
    <div class="container-check">
      <div class="left">
        <div class="badge-security">Trạm kiểm tra bảo mật</div>
        <h1>Xác minh nhanh<br>trước khi vào <span>cửa hàng</span></h1>
        <p class="desc">Cloudflare đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
        <div class="terminal-box" id="terminal"></div>
        <div class="challenge-module">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light" data-callback="onTurnstileSuccess"></div>
          <div class="help-text">Nếu thấy ô <b>Verify you are human</b>, bấm vào đó. Không cần tải lại trang, cửa hàng sẽ tự mở khi xác minh xong.</div>
        </div>
        <div class="stepper">
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Kết nối TLS</div></div>
          <div class="step-line completed"></div>
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Lọc tại edge</div></div>
          <div class="step-line completed"></div>
          <div class="step active"><div class="step-circle"></div><div class="step-label">Xác minh trình duyệt</div></div>
          <div class="step-line"></div>
          <div class="step"><div class="step-circle"></div><div class="step-label">Vào cửa hàng</div></div>
        </div>
      </div>
      <div class="right">
        <div class="dash-card">
          <div class="dash-header"><span class="dash-title">Thời gian xác minh</span><span class="dash-value" id="timer">0.000<small>s</small></span></div>
          <div class="waveform" id="graph"></div>
        </div>
        <div class="dash-card">
          <div class="radar-wrapper">
            <div class="radar-container"><div class="radar-sweep"></div><div class="radar-dot"></div></div>
            <div class="radar-info"><h4>Đang bảo vệ</h4><p>WAF • Bot • DDoS</p><div style="font-size:12px; color:var(--text-muted); margin-top:8px;">Lưu lượng quét: 1.2 GB/s</div></div>
          </div>
        </div>
        <div class="dash-card" style="padding: 0;">
          <div class="stats-grid">
            <div class="stat-item"><div class="stat-label">Giao thức</div><div class="stat-val">HTTP/3 (QUIC)</div></div>
            <div class="stat-item"><div class="stat-label">Mạng Edge</div><div class="stat-val">Anycast</div></div>
            <div class="stat-item"><div class="stat-label">Độ trễ</div><div class="stat-val">464 ms</div></div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const graph = document.getElementById('graph');
      for(let i=0; i<50; i++) { let bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '20%'; graph.appendChild(bar); }
      let startTime;
      function onTurnstileSuccess(token) {
        startTime = performance.now();
        setInterval(() => { document.getElementById('timer').innerHTML = ((performance.now() - startTime)/1000).toFixed(3) + '<small>s</small>'; }, 50);
        fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
        .then(r => r.json()).then(d => {
          if(d.success) {
            document.querySelector('.step.active .step-label').innerText = "Đã xác minh!";
            document.querySelector('.step.active .step-circle').style.background = '#475569';
            document.querySelector('.step.active .step-circle').style.borderColor = '#475569';
            setTimeout(() => location.href = '/', 800);
          } else { showToast('Lỗi: ' + d.error, 'error'); }
        });
      }
    </script>
  `);
}

export function renderHome(env, error) {
  return layoutApp('Get Key', `
    <div class="container">
      <!-- CỘT TRÁI: LẤY KEY -->
      <div>
        <div class="glass-card">
          <div class="header-title"><i data-lucide="key" style="color:#475569;"></i> Lấy key miễn phí</div>
          <div class="header-desc">Chào mừng bạn đến với trang web của chúng tôi.</div>
          
          <div class="telegram-banner">
            <h4>Cộng đồng GetKey</h4>
            <a href="#" class="telegram-btn"><i data-lucide="send"></i> Tham gia nhóm Telegram ↗</a>
          </div>

          <div class="stepper">
            <div class="step active"><div class="step-line"></div><div class="step-circle">1</div><div class="step-label">Chọn key</div></div>
            <div class="step"><div class="step-line"></div><div class="step-circle">2</div><div class="step-label">Vượt link</div></div>
            <div class="step"><div class="step-line"></div><div class="step-circle">3</div><div class="step-label">Xác thực</div></div>
            <div class="step"><div class="step-circle">4</div><div class="step-label">Nhận key</div></div>
          </div>
          <div style="text-align:center; font-size:12px; color:#64748b; margin-bottom:20px;">Bước 1/4 • Chọn key</div>

          <div style="font-weight:700; font-size:14px; margin-bottom:12px; display:flex; align-items:center; gap:6px;"><i data-lucide="info" style="width:16px;"></i> Hướng dẫn lấy key</div>
          <div class="key-input-group">
            <label>Chọn loại key</label>
            <span class="key-badge">Bước 1</span>
          </div>
          <div class="key-input-group" style="background:#fff; border-color:#cbd5e1;">
            <span style="font-weight:600; font-size:15px;">Key Bản Quyền Tool</span>
          </div>

          <form method="POST" action="/start">
            <input type="hidden" name="tier" value="Normal">
            <button type="submit" class="btn btn-primary"><i data-lucide="download"></i> Get Key</button>
          </form>
        </div>
      </div>

      <!-- CỘT PHẢI: THÔNG TIN & TẢI APP -->
      <div>
        <!-- THIẾT BỊ HIỆN TẠI -->
        <div class="glass-card">
          <div style="font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
            <span>THIẾT BỊ HIỆN TẠI</span>
            <span style="background:#e2e8f0; padding:2px 8px; border-radius:10px; font-size:11px;">Hôm nay</span>
          </div>
          <div style="font-size:15px; font-weight:800; margin-bottom:16px;">Theo dõi nhanh lượt nhận key trong hôm nay</div>
          
          <div class="device-grid">
            <div class="device-item">
              <div class="device-label">TÊN KEY</div>
              <div class="device-val" style="font-size:14px;">Key Customs</div>
            </div>
            <div class="device-item">
              <div class="device-label">CÒN LẠI HÔM NAY</div>
              <div class="device-val" id="dev-limit">5</div>
              <div class="device-sub">Giới hạn: thiết bị 5 / IP 5 theo lịch sử thiết bị; server vẫn kiểm tra quota thật. Reset lúc 00:00 (GMT+7)</div>
            </div>
            <div class="device-item">
              <div class="device-label">THÀNH CÔNG</div>
              <div class="device-val" id="dev-success">0</div>
              <div class="device-sub">lượt đã nhận key</div>
            </div>
            <div class="device-item">
              <div class="device-label">LẦN GẦN NHẤT</div>
              <div class="device-val" id="dev-last" style="font-size:16px;">Chưa có</div>
              <div class="device-sub">Chưa lưu key gần đây</div>
            </div>
            <div class="device-item" style="grid-column: span 2;">
              <div class="device-label">CÓ THỂ THỬ LẠI</div>
              <div class="device-val" id="dev-retry">-</div>
              <div class="device-sub">0 lượt đã bắt đầu, vui lòng chờ reset để thử lại.</div>
            </div>
          </div>
        </div>

        <!-- THÔNG TIN TỪ WEB -->
        <div class="glass-card">
          <div class="info-box">
            <h4>Thông tin từ GetKey</h4>
            <ul class="info-list">
              <li>© Bản quyền thuộc về GetKey System</li>
              <li style="color:#ef4444; font-weight:700;">‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo sài key vượt để bán.</li>
              <li>📦 Mua key Free Fire vui lòng liên hệ phía dưới</li>
              <li style="margin-top:12px; font-weight:700;">Bảng giá key OB54</li>
            </ul>
            <div class="pricing">
              <div><span>👉 Key 1 ngày</span> <b>10k</b></div>
              <div><span>👉 Key 7 ngày</span> <b>50k</b></div>
              <div><span>👉 Key 30 ngày</span> <b>150k</b></div>
            </div>
            <ul class="info-list" style="margin-top:12px;">
              <li style="color:#ef4444; font-weight:700;">‼ Nhớ chọn đúng key trước khi vượt</li>
            </ul>
            
            <div style="display:flex; gap:12px; margin-top:20px;">
               <a href="https://zalo.me/0996492296" target="_blank" style="flex:1; padding:12px; border-radius:12px; border:1px solid #e2e8f0; text-decoration:none; color:#0f172a; font-weight:600; text-align:center; display:flex; justify-content:center; gap:8px;"><i data-lucide="message-circle"></i> Zalo</a>
               <a href="https://youtube.com/@zwicxsharereg" target="_blank" style="flex:1; padding:12px; border-radius:12px; border:1px solid #e2e8f0; text-decoration:none; color:#0f172a; font-weight:600; text-align:center; display:flex; justify-content:center; gap:8px;"><i data-lucide="youtube"></i> YouTube</a>
            </div>
          </div>
        </div>

        <!-- TẢI ỨNG DỤNG -->
        <div class="glass-card">
          <div class="header-title" style="font-size:18px; margin-bottom:4px;">Tải ứng dụng</div>
          <div class="header-desc" style="font-size:13px; margin-bottom:16px;">Chọn đúng bản và đọc ghi chú trước khi tải.</div>

          <div class="app-card">
            <div class="app-header">
              <img src="https://ui-avatars.com/api/?name=Proxy&background=64748b&color=fff&size=60&rounded=true" class="app-icon" alt="App">
              <div>
                <div class="app-title">App Proxy V1.3 🍎</div>
                <div class="app-note">⚠ Lưu ý!</div>
              </div>
            </div>
            <div class="app-details">
              - Sử dụng Free Fire Max / Normal CHPlay<br>
              - Sử dụng một cách thông minh<br>
              - Không làm dụng chức năng quá đà<br>
              - Sử dụng duy nhất ESP sẽ anti hơn<br>
              - Tự thêm domain block nếu cảm thấy nó sẽ anti hơn
            </div>
            <a href="#" class="btn-download"><i data-lucide="download"></i> Tải Xuống</a>
          </div>

          <div class="app-card">
            <div class="app-header">
              <img src="https://ui-avatars.com/api/?name=Ext&background=475569&color=fff&size=60&rounded=true" class="app-icon" alt="App">
              <div>
                <div class="app-title">App External - Root - Fix</div>
                <div class="app-note" style="color:#ef4444;">‼ Đã fix "Lỗi ứng dụng chưa cài đặt"</div>
              </div>
            </div>
            <div class="app-details">
              <b style="color:#f59e0b;">⚠ Lưu ý!</b><br>
              - Sử dụng Free Fire Max CHPlay ver2.132.x-2.133.x<br>
              - Menu root<br>
              - Sài chức năng cần thận đặc biệt là Aim
            </div>
            <a href="#" class="btn-download"><i data-lucide="download"></i> Tải Xuống</a>
          </div>
        </div>
      </div>
    </div>
  `);
}

export function renderStep(title, stepNum, content) {
  const steps = ['Chọn key', 'Vượt link', 'Xác thực', 'Nhận key'];
  return layoutApp(title, `
    <div class="glass-card" style="max-width: 550px; margin: 0 auto;">
      <div class="header-title">${title}</div>
      <div class="stepper" style="margin-top:20px;">
        ${steps.map((s, i) => `<div class="step ${stepNum > i ? 'active' : ''}"><div class="step-line"></div><div class="step-circle">${i+1}</div><div class="step-label">${s}</div></div>`).join('')}
      </div>
      ${content}
    </div>
  `);
}

export function renderFAQ() {
  return layoutApp('FAQ', `<div class="glass-card"><h2>FAQ</h2><a href="/">Quay lại</a></div>`);
}
