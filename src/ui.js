import { CSS_CHECKPOINT, CSS_APP, JS, CSS_MOBILE, CSS_MODAL, JS_MODAL, CSS_ADMIN, CSS_PREMIUM, JS_PREMIUM } from './assets.js';

const head = (title) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

const layoutCheckpoint = (title, content) => `${head(title)}<style>${CSS_CHECKPOINT}${CSS_PREMIUM}</style></head>
<body>
  ${content}
  <script>${JS}</script>
  <script>${JS_PREMIUM}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
</body></html>`;

const layoutApp = (title, content, isAdmin = false) => `${head(title)}<style>${CSS_APP}${CSS_MOBILE}${CSS_MODAL}${CSS_PREMIUM}${isAdmin ? CSS_ADMIN : ''}</style></head>
<body>
  <div class="bg-shapes"><div class="shape circle"></div><div class="shape triangle"></div><div class="shape square"></div></div>
  <div class="wrapper">${content}</div>
  <a href="https://zalo.me/0996492296" target="_blank" class="float-widget"><i data-lucide="message-circle" style="width:28px;height:28px;"></i><div class="float-dot"></div></a>
  <script>${JS}</script>
  <script>${JS_PREMIUM}</script>
  <script>${JS_MODAL}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
</body></html>`;

export function renderCheckpoint(env) {
  return layoutCheckpoint('Security Check', `
    <div class="top-nav">
      <div class="logo"><div class="logo-icon"><i data-lucide="shield-check" style="width:20px;"></i></div> GETKEYDPICONFIG.SITE</div>
      <div style="display:flex; gap:16px; align-items:center;">
        <div class="time-badge"><i data-lucide="clock" style="width:16px;height:16px;"></i> <span id="vn-clock">00:00:00</span> (GMT+7)</div>
        <div class="status-badge"><div class="status-dot"></div> Bảo vệ</div>
      </div>
    </div>
    <div class="container-check">
      <div class="left">
        <div class="badge-security">Trạm kiểm tra bảo mật</div>
        <h1>Xác minh nhanh<br>trước khi vào <span>cửa hàng</span></h1>
        <p class="desc">Cloudflare đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
        <div class="terminal-box" id="terminal"></div>
        <div class="challenge-module">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
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
            <div class="stat-item"><div class="stat-label">Giao thức</div><div class="stat-val">HTTP/3</div></div>
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
            document.querySelector('.step.active .step-circle').style.background = '#fff';
            document.querySelector('.step.active .step-circle').style.borderColor = '#fff';
            setTimeout(() => location.href = '/', 800);
          } else { showToast('Lỗi: ' + d.error, 'error'); }
        });
      }
    </script>
  `);
}

export function renderHome(env, error, notice, session) {
  const modalHtml = (notice && notice.enabled) ? `
  <div id="customModal" class="modal-overlay">
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title"><i data-lucide="alert-triangle" style="width:20px;"></i> ${notice.title || 'THÔNG BÁO'}</div>
        <button class="modal-close-icon" onclick="closeModal(false)"><i data-lucide="x" style="width:18px;"></i></button>
      </div>
      <div class="modal-content">
        <div style="white-space: pre-wrap;">${notice.content || ''}</div>
      </div>
      <div class="modal-actions">
        <button class="btn-snooze" onclick="closeModal(true)"><i data-lucide="clock" style="width:18px;"></i> Tắt 1 giờ</button>
        <button class="btn-close" onclick="closeModal(false)">Đóng</button>
      </div>
    </div>
  </div>` : '';

  return layoutApp('GETKEYDPICONFIG.SITE', `
    ${modalHtml}
    <div class="container">
      <div>
        <div class="glass-card">
          <div class="header-title"><i data-lucide="key" style="color:#fff;"></i> Lấy Key Miễn Phí</div>
          <div class="header-desc">Chào mừng bạn đến với hệ thống của GETKEYDPICONFIG.SITE.</div>
          
          <div class="telegram-banner">
            <h4>Cộng đồng GETKEYDPICONFIG</h4>
            <a href="#" class="telegram-btn"><i data-lucide="send"></i> Tham gia nhóm Telegram ↗</a>
          </div>

          <div class="stepper">
            <div class="step active"><div class="step-line"></div><div class="step-circle">1</div><div class="step-label">Chọn key</div></div>
            <div class="step"><div class="step-line"></div><div class="step-circle">2</div><div class="step-label">Vượt link</div></div>
            <div class="step"><div class="step-line"></div><div class="step-circle">3</div><div class="step-label">Xác thực</div></div>
            <div class="step"><div class="step-circle">4</div><div class="step-label">Nhận key</div></div>
          </div>
          <div style="text-align:center; font-size:12px; color:#a1a1aa; margin-bottom:20px;">Bước 1/4 • Chọn key</div>

          <div style="font-weight:700; font-size:14px; margin-bottom:12px; display:flex; align-items:center; gap:6px; color:#fff;"><i data-lucide="info" style="width:16px;"></i> Hướng dẫn lấy key</div>
          
          <div class="tier-selector">
            <div class="tier-slider" id="tierSlider"></div>
            <label class="tier-option selected" data-tier="Normal"><input type="radio" name="tier" value="Normal" checked><i data-lucide="zap" style="width:18px;"></i> Normal <span class="tier-badge">8H</span></label>
            <label class="tier-option" data-tier="VIP"><input type="radio" name="tier" value="VIP"><i data-lucide="crown" style="width:18px;"></i> VIP <span class="tier-badge">2H</span></label>
          </div>

          ${error ? `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; padding:12px; border-radius:12px; margin-bottom:20px; font-size:14px; font-weight:600; text-align:center; animation: slideDown 0.3s ease-out;">${error}</div>` : ''}

          <form method="POST" action="/start" id="startForm">
            <input type="hidden" name="tier" id="tierInput" value="Normal">
            <button type="submit" class="btn btn-primary" id="startBtn"><i data-lucide="download"></i> Lấy Key Ngay</button>
          </form>
        </div>
      </div>

      <div>
        <div class="glass-card">
          <div style="font-size:12px; font-weight:700; color:#a1a1aa; text-transform:uppercase; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
            <span>THIẾT BỊ HIỆN TẠI</span>
            <span style="background:#222; padding:2px 8px; border-radius:10px; font-size:11px; color:#fff;">Hôm nay</span>
          </div>
          <div style="font-size:15px; font-weight:800; margin-bottom:16px; color:#fff;">Theo dõi nhanh lượt nhận key trong hôm nay</div>
          
          <div class="device-grid">
            <div class="device-item">
              <div class="device-label">TÊN KEY</div>
              <div class="device-val" style="font-size:14px;">Key Bản Quyền</div>
            </div>
            <div class="device-item">
              <div class="device-label">CÒN LẠI HÔM NAY</div>
              <div class="device-val" id="dev-limit">0</div>
              <div class="device-sub">Giới hạn: 5 key / IP. Reset lúc <span id="dev-reset">00h 00p</span> (GMT+7)</div>
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

        
        <div class="glass-card">
          <div class="header-title" style="font-size:18px; margin-bottom:12px; display:flex; align-items:center; gap:8px;"><i data-lucide="shield" style="width:20px; color:#10b981;"></i> Phiên & Cookie</div>
          <div class="session-grid">
            <div class="session-item" style="grid-column: span 2;">
              <div class="label">Mã Session ID (HMAC)</div>
              <div class="value" id="session-id">${session && session.sid ? session.sid.slice(0, 12) + '...' + session.sid.slice(-4) : 'Chưa có phiên'}</div>
            </div>
            <div class="session-item">
              <div class="label">Hết hạn sau</div>
              <div class="value" id="session-timer" style="color:#f59e0b;">--:--</div>
            </div>
            <div class="session-item">
              <div class="label">Bảo mật Cookie</div>
              <div class="value secure"><i data-lucide="lock" style="width:12px; vertical-align:-2px;"></i> Signed</div>
            </div>
          </div>
          <button class="btn-clear-session" onclick="window.location.href='/reset'"><i data-lucide="trash-2" style="width:16px;"></i> Xóa phiên làm việc</button>
          <script>
            window.sessionExpires = ${session ? session.expiresAt : 0};
            setInterval(() => {
              const t = document.getElementById('session-timer');
              if (t) {
                const rem = Math.max(0, window.sessionExpires - Date.now());
                const m = Math.floor(rem / 60000);
                const s = Math.floor((rem % 60000) / 1000);
                t.innerText = m + ':' + (s < 10 ? '0' : '') + s;
              }
            }, 1000);
          </script>
        </div>

        
        <div class="glass-card">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:15px;">
            <div style="background:rgba(16,185,129,0.1); width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#10b981; border:1px solid rgba(16,185,129,0.2);">
              <i data-lucide="shield-check" style="width:24px;height:24px;"></i>
            </div>
            <div>
              <h4 style="color:#fff; font-size:16px; font-weight:800;">Phiên Làm Việc</h4>
              <p style="color:#10b981; font-size:13px; font-weight:600; display:flex; align-items:center; gap:6px;">
                <span class="live-dot" style="width:6px;height:6px;"></span> Đã kết nối an toàn
              </p>
            </div>
          </div>
          <button class="btn-clear-session" onclick="window.location.href='/reset'"><i data-lucide="log-out" style="width:16px;"></i> Kết thúc phiên (10 phút)</button>
        </div>

        <div class="glass-card">
          <div class="info-box">
            <h4>Thông tin bản quyền</h4>
            <ul class="info-list">
              <li>© Bản quyền thuộc về <b style="color:#fff;">GETKEYDPICONFIG.SITE</b>.</li>
              <li style="color:#ef4444; font-weight:700;">‼ Mọi hành vi buôn bán key không rõ nguồn gốc đều là lừa đảo.</li>
              <li>📦 Mua key VIP vui lòng liên hệ Admin.</li>
              <li style="margin-top:12px; font-weight:700; color:#fff;">Bảng giá Key VIP</li>
            </ul>
            <div class="pricing">
              <div><span>👉 Key 1 ngày</span> <b>10k</b></div>
              <div><span>👉 Key 7 ngày</span> <b>50k</b></div>
              <div><span>👉 Key 30 ngày</span> <b>150k</b></div>
            </div>
            
<div class="social-btns">
  <a href="https://zalo.me/0996492296" target="_blank" class="social-btn zalo"><i data-lucide="message-circle" style="width:20px;height:20px;"></i> Zalo</a>
  <a href="https://youtube.com/@zwicxsharereg" target="_blank" class="social-btn yt"><i data-lucide="youtube" style="width:20px;height:20px;"></i> YouTube</a>
</div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const slider = document.getElementById('tierSlider');
      const options = document.querySelectorAll('.tier-option');
      options.forEach((opt, index) => {
        opt.addEventListener('click', () => {
          options.forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          document.getElementById('tierInput').value = opt.dataset.tier;
          slider.style.transform = 'translateX(' + (index * 100) + '%)';
        });
      });
      
      document.getElementById('startForm').addEventListener('submit', () => {
        const btn = document.getElementById('startBtn');
        btn.disabled = true;
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="30 10"/></svg> Đang khởi tạo...';
        btn.style.background = 'rgba(255,255,255,0.5)';
      });
    </script>
    <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
  `);
}

export function renderStep(title, stepNum, content) {
  const steps = ['Chọn key', 'Vượt link', 'Xác thực', 'Nhận key'];
  return layoutApp(title, `
    <div class="glass-card" style="max-width: 500px; margin: 0 auto;">
      <div class="header-title">${title}</div>
      <div class="stepper" style="margin-top:20px;">
        ${steps.map((s, i) => `<div class="step ${stepNum > i ? 'active' : ''}"><div class="step-line"></div><div class="step-circle">${i+1}</div><div class="step-label">${s}</div></div>`).join('')}
      </div>
      ${content}
    </div>
  `);
}

export function renderAdmin() {
  return layoutApp('Admin Dashboard', `
    <div class="admin-container">
      <div class="admin-card" id="loginView">
        <div class="login-form">
          <div class="login-icon"><i data-lucide="lock" style="width:32px;height:32px;"></i></div>
          <h2 style="color:#fff; font-size:24px; font-weight:800;">Hệ Thống Quản Trị</h2>
          <p style="color:#a1a1aa; font-size:14px; margin-bottom:20px;">Vui lòng đăng nhập để tiếp tục.</p>
          <input type="password" id="adminPass" class="input-field" placeholder="Nhập mật khẩu Admin...">
          <button class="btn-save" onclick="loginAdmin()">Đăng Nhập</button>
          <div id="loginError" style="color:#ef4444; font-size:13px; font-weight:600; margin-top:10px;"></div>
        </div>
      </div>

      <div class="admin-card dashboard-content" id="dashboardView">
        <div class="admin-header">
          <div class="admin-title"><i data-lucide="layout-dashboard" style="width:24px;height:24px;"></i> Quản Lý Thông Báo</div>
          <button onclick="logoutAdmin()" style="background:#ef4444; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px;"><i data-lucide="log-out" style="width:16px;"></i> Thoát</button>
        </div>

        <div class="form-group">
          <label class="form-label">Trạng thái hiển thị</label>
          <label class="toggle-switch">
            <input type="checkbox" id="noticeEnabled">
            <div class="toggle-track"><div class="toggle-thumb"></div></div>
            <span class="toggle-label" id="toggleText">Bật thông báo</span>
          </label>
        </div>

        <div class="form-group">
          <label class="form-label">Tiêu đề thông báo</label>
          <input type="text" id="noticeTitle" class="input-field" placeholder="VD: CẢNH BÁO BẢO TRÌ...">
        </div>

        <div class="form-group">
          <label class="form-label">Nội dung thông báo</label>
          <textarea id="noticeContent" class="input-field" rows="5" placeholder="Nhập nội dung..."></textarea>
        </div>

        <button class="btn-save" id="saveBtn" onclick="saveNotice()"><i data-lucide="save" style="width:20px;"></i> Lưu Thay Đổi</button>

        <div style="margin-top:30px;">
          <label class="form-label">Xem trước (Live Preview)</label>
          <div class="preview-box">
            <div class="preview-header">
              <div class="preview-title"><i data-lucide="alert-triangle" style="width:20px;"></i> <span id="previewTitle">THÔNG BÁO</span></div>
              <i data-lucide="x" style="color:#94a3b8;"></i>
            </div>
            <div class="preview-content" id="previewContent">Nội dung thông báo sẽ hiện ở đây...</div>
          </div>
        </div>
      </div>
    </div>

    <script>
      let currentPassword = '';
      
      function loginAdmin() {
        const pass = document.getElementById('adminPass').value;
        if(!pass) return;
        
        currentPassword = pass;
        const btn = document.querySelector('#loginView .btn-save');
        btn.disabled = true; btn.innerText = 'Đang đăng nhập...';

        fetch('/api/admin/notice', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'get', password: pass })
        }).then(r => r.json()).then(d => {
          if(d.success) {
            document.getElementById('loginView').style.display = 'none';
            document.getElementById('dashboardView').classList.add('active');
            document.getElementById('noticeEnabled').checked = d.notice.enabled;
            document.getElementById('noticeTitle').value = d.notice.title;
            document.getElementById('noticeContent').value = d.notice.content;
            updatePreview();
          } else {
            throw new Error(d.error);
          }
        }).catch(e => {
          document.getElementById('loginError').innerText = e.message;
          btn.disabled = false; btn.innerText = 'Đăng Nhập';
        });
      }

      function logoutAdmin() {
        document.getElementById('loginView').style.display = 'block';
        document.getElementById('dashboardView').classList.remove('active');
        document.getElementById('adminPass').value = '';
        document.getElementById('loginError').innerText = '';
        document.querySelector('#loginView .btn-save').disabled = false;
        document.querySelector('#loginView .btn-save').innerText = 'Đăng Nhập';
      }

      function updatePreview() {
        document.getElementById('previewTitle').innerText = document.getElementById('noticeTitle').value || 'THÔNG BÁO';
        document.getElementById('previewContent').innerText = document.getElementById('noticeContent').value || 'Nội dung...';
        const isEnabled = document.getElementById('noticeEnabled').checked;
        document.getElementById('toggleText').innerText = isEnabled ? 'Đang bật (User sẽ thấy)' : 'Đang tắt (User không thấy)';
        document.getElementById('toggleText').style.color = isEnabled ? '#10b981' : '#a1a1aa';
      }

      document.getElementById('noticeTitle').addEventListener('input', updatePreview);
      document.getElementById('noticeContent').addEventListener('input', updatePreview);
      document.getElementById('noticeEnabled').addEventListener('change', updatePreview);

      function saveNotice() {
        const btn = document.getElementById('saveBtn');
        btn.disabled = true; btn.innerHTML = 'Đang lưu...';

        const noticeData = {
          enabled: document.getElementById('noticeEnabled').checked,
          title: document.getElementById('noticeTitle').value,
          content: document.getElementById('noticeContent').value
        };

        fetch('/api/admin/notice', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'save', password: currentPassword, notice: noticeData })
        }).then(r => r.json()).then(d => {
          if(d.success) {
            btn.innerHTML = '<i data-lucide="check"></i> Đã Lưu!';
            btn.style.background = '#10b981';
            if(window.lucide) lucide.createIcons();
            setTimeout(() => { btn.innerHTML = '<i data-lucide="save" style="width:20px;"></i> Lưu Thay Đổi'; btn.style.background = 'var(--brand)'; btn.disabled = false; if(window.lucide) lucide.createIcons(); }, 2000);
          } else { throw new Error(d.error); }
        }).catch(e => {
          alert('Lỗi: ' + e.message);
          btn.innerHTML = '<i data-lucide="save" style="width:20px;"></i> Lưu Thay Đổi'; btn.disabled = false; if(window.lucide) lucide.createIcons();
        });
      }
    </script>
  `, true);
}

export function renderFAQ() {
  return layoutApp('FAQ', `<div class="glass-card"><h2>FAQ</h2><a href="/" style="color:#fff;">Quay lại</a></div>`);
}
