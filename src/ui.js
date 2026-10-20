import { CSS_CHECKPOINT, CSS_APP, JS, CSS_MOBILE, CSS_MODAL, JS_MODAL, CSS_ADMIN, CSS_PREMIUM, JS_PREMIUM } from './assets.js';

function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const head = (title) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

const layoutCheckpoint = (title, content) => `${head(title)}<style>${CSS_CHECKPOINT}${CSS_PREMIUM}</style></head>
<body>
  <div class="bg-grid-move"></div>
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
    <div class="container-check">
      <div class="left">
        <h1>Xác minh nhanh<br>trước khi vào <span>cửa hàng</span></h1>
        <p class="desc">Cloudflare đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
        
        <div class="terminal-box" id="terminal">
          <!-- Nội dung sẽ được JS chèn tự động để tránh lặp -->
        </div>

        <div class="challenge-module">
          <div class="turnstile-wrapper">
            <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
          </div>
          <div class="help-text">Nếu thấy ô <b>Verify you are human</b>, bấm vào đó. Không cần tải lại trang, cửa hàng sẽ tự mở khi xác minh xong.</div>
          <div class="error-box" id="errorBox"></div>
        </div>
      </div>
      
      <div class="right">
        <div class="dash-card">
          <div class="dash-header">
            <span class="dash-title">Thời gian xác minh</span>
            <span class="dash-value" id="timer">0.000<small>s</small></span>
          </div>
          <div class="waveform" id="graph"></div>
        </div>

        <div class="dash-card">
          <div class="radar-wrapper">
            <div class="radar-container">
              <div class="radar-grid"></div>
              <div class="radar-circle c1"></div>
              <div class="radar-circle c2"></div>
              <div class="radar-sweep"></div>
              <div class="radar-target t1"></div>
              <div class="radar-target t2"></div>
              <div class="radar-target t3"></div>
            </div>
            <div class="radar-info">
              <h4>Đang bảo vệ</h4>
              <p>WAF • Bot • DDoS</p>
            </div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-item"><div class="stat-label">WAF 01</div><div class="stat-val" style="color:#10b981;">Passed</div></div>
          <div class="stat-item"><div class="stat-label">WAF 02</div><div class="stat-val" style="color:#10b981;">Passed</div></div>
          <div class="stat-item"><div class="stat-label">WAF 03</div><div class="stat-val" style="color:#f59e0b;">Scan...</div></div>
        </div>
      </div>
    </div>
    
    <script>
      // 1. Chạy hiệu ứng Graph
      const graph = document.getElementById('graph');
      for(let i=0; i<40; i++) { let bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '20%'; graph.appendChild(bar); }
      setInterval(() => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
          if(index > bars.length - 10) {
            bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
            bar.classList.add('active');
            setTimeout(() => bar.classList.remove('active'), 200);
          }
        });
      }, 150);

      // 2. Chạy hiệu ứng Terminal
      const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
      let logIdx = 0;
      const term = document.getElementById('terminal');
      
      function printLog() {
        if(logIdx < logs.length) {
          const line = document.createElement('div');
          line.className = 'term-line';
          line.innerHTML = '> ' + logs[logIdx];
          term.appendChild(line);
          term.scrollTop = term.scrollHeight;
          logIdx++;
          if(logIdx < logs.length) setTimeout(printLog, 800);
        }
      }
      printLog();

      // 3. Xử lý khi Turnstile thành công
      let isVerifying = false;
      let startTime = 0;
      let timerInterval = null;
      
      function onTurnstileSuccess(token) {
        if (isVerifying) return; 
        isVerifying = true;
        document.getElementById('errorBox').style.display = 'none'; 
        
        startTime = performance.now();
        timerInterval = setInterval(() => { 
          document.getElementById('timer').innerHTML = ((performance.now() - startTime)/1000).toFixed(3) + '<small>s</small>'; 
        }, 50);
        
        fetch('/api/verify-bot', { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({ token: token }) 
        })
        .then(async r => {
          if(!r.ok) { 
            const text = await r.text();
            // FIXED: Dùng nối chuỗi thay vì template literal để tránh lỗi backtick
            throw new Error('Lỗi Server (' + r.status + '): ' + text.substring(0, 100)); 
          }
          return r.json();
        })
        .then(d => {
          clearInterval(timerInterval); 
          if(d.success) {
            document.getElementById('timer').innerHTML = '1.254<small>s</small>';
            document.querySelector('.help-text').innerHTML = '<b style="color:#10b981;">Xác minh thành công! Đang chuyển hướng...</b>';
            setTimeout(() => location.href = '/', 800);
          } else {
            throw new Error(d.error || 'Xác thực thất bại.');
          }
        })
        .catch(e => {
          clearInterval(timerInterval);
          isVerifying = false;
          document.getElementById('errorBox').style.display = 'block';
          document.getElementById('errorBox').innerText = e.message;
          document.getElementById('timer').innerHTML = '0.000<small>s</small>';
          // FIXED: Reset Turnstile để user có thể thử lại
          if (window.turnstile) turnstile.reset();
        });
      }
    </script>
  `);
}

export function renderHome(env, error, notice, quota) {
  const modalHtml = (notice && notice.enabled) ? `
  <div id="customModal" class="modal-overlay">
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title"><i data-lucide="alert-triangle" style="width:20px;"></i> ${esc(notice.title) || 'THÔNG BÁO'}</div>
        <button class="modal-close-icon" onclick="closeModal(false)"><i data-lucide="x" style="width:18px;"></i></button>
      </div>
      <div class="modal-content">
        <div style="white-space: pre-wrap;">${esc(notice.content) || ''}</div>
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

          ${error ? `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; padding:12px; border-radius:12px; margin-bottom:20px; font-size:14px; font-weight:600; text-align:center; animation: slideDown 0.3s ease-out;">${esc(error)}</div>` : ''}

          <form method="POST" action="/start" id="startForm">
            <input type="hidden" name="tier" id="tierInput" value="Normal">
            <button type="submit" class="btn btn-primary" id="startBtn"><i data-lucide="download"></i> Lấy Key Ngay</button>
          </form>
        </div>

        <!-- KEY GẦN NHẤT (HIỂN THỊ NẾU CÓ) -->
        <div class="glass-card" id="historyCard" style="display:none;">
          <div style="font-size:14px; font-weight:700; color:#fff; margin-bottom:10px; display:flex; align-items:center; gap:8px;"><i data-lucide="history" style="width:16px;"></i> Key gần nhất</div>
          <div class="key-box" style="margin:0; padding:15px; background:#000; border:1px solid #333;">
            <span id="lastKeyText" style="font-size:16px; color:#10b981; letter-spacing:1px;">---</span>
            <button class="btn btn-primary" style="width:auto; padding:8px 12px; font-size:12px;" onclick="navigator.clipboard.writeText(document.getElementById('lastKeyText').innerText).then(()=>showToast('Đã copy key cũ!','success'))"><i data-lucide="copy" style="width:14px;"></i> Copy</button>
          </div>
        </div>
        <script>
          const lastKey = localStorage.getItem('last_key');
          if(lastKey) {
            document.getElementById('historyCard').style.display = 'block';
            document.getElementById('lastKeyText').innerText = lastKey;
          }
        </script>
      </div>

      <!-- CỘT PHẢI -->
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
              <div class="device-val" style="font-size:14px;">ZwicApex</div>
            </div>
            <div class="device-item">
              <div class="device-label">LƯỢT CÒN LẠI</div>
              <div class="device-val" id="dev-limit">${quota ? (quota.limit - quota.count) : 12}</div>
              <div class="device-sub">Giới hạn: <b>12 key / IP / ngày</b>. Reset lúc <b>00:00</b> (GMT+7)</div>
            </div>
            <div class="device-item">
              <div class="device-label">ĐÃ DÙNG</div>
              <div class="device-val" id="dev-success">${quota ? quota.count : 0}</div>
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
              <a href="https://zalo.me/0996492296" target="_blank" class="social-btn zalo">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.5 3.54 1.35 5.02L2 22l4.98-1.35C8.46 21.5 10.17 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.27 14.23c-.18.5-1.04.96-1.42 1-.38.04-1.16.14-2.1-.2-.94-.34-1.72-.88-2.56-1.74-.84-.86-1.38-1.64-1.72-2.56-.34-.92-.24-1.7-.2-2.08.04-.38.5-1.24 1-1.42.5-.18 1.04-.22 1.4.2.36.42.66 1.5.8 1.88.14.38.06.64-.06.88-.12.24-.46.58-.6.72-.14.14-.28.34-.16.58.12.24.52.88 1.22 1.58.7.7 1.34 1.1 1.58 1.22.24.12.44-.02.58-.16.14-.14.48-.48.72-.6.24-.12.5-.2.88-.06.38.14 1.46.44 1.88.8.42.36.38.9.2 1.4z"/></svg>
                Zalo
              </a>
              <a href="https://youtube.com/@zwicxsharereg" target="_blank" class="social-btn yt">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
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
  const faqs = [
    { q: "Key này dùng để làm gì?", a: "Key dùng để nâng cấp tài khoản, sử dụng các tính năng VIP trong ứng dụng. Key Normal có hạn 8 giờ, Key VIP có hạn 2 giờ." },
    { q: "Tại sao tôi phải xem quảng cáo?", a: "Quảng cáo giúp duy trì máy chủ và hệ thống lấy Key tự động miễn phí. Key VIP yêu cầu 2 lần xem Ads, Key Normal yêu cầu 1 lần." },
    { q: "Tôi bị kẹt ở bước vượt Ads thì phải làm sao?", a: "Hãy chắc chắn bạn không dùng trình chặn quảng cáo (AdBlock), tắt VPN và giữ tab quảng cáo mở cho đến khi nó tự chuyển hướng về lại trang web." },
    { q: "Làm sao để mua Key VIP?", a: "Vui lòng liên hệ Admin qua Zalo hoặc Telegram hiển thị ở góc phải màn hình để được hỗ trợ." },
    { q: "Hệ thống có bảo mật không?", a: "Có. Hệ thống sử dụng Cloudflare Turnstile chống bot, mã hóa Session HMAC và giới hạn 1 phiên/10 phút để đảm bảo an toàn." }
  ];
  return layoutApp('Câu hỏi thường gặp', `
    <div class="glass-card" style="max-width: 700px; margin: 0 auto;">
      <h2 style="text-align:center; margin-bottom:20px; color:#fff; display:flex; align-items:center; justify-content:center; gap:10px;"><i data-lucide="help-circle"></i> Câu hỏi thường gặp</h2>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${faqs.map(f => `
          <details style="background:#111; border:1px solid #333; border-radius:12px; overflow:hidden; transition:0.3s;">
            <summary style="padding:16px; font-weight:700; color:#fff; cursor:pointer; display:flex; justify-content:space-between; align-items:center; list-style:none;">
              ${f.q}
              <i data-lucide="chevron-down" style="width:20px; color:#a1a1aa; transition:transform 0.3s;" class="chevron"></i>
            </summary>
            <div style="padding:0 16px 16px; color:#a1a1aa; font-size:14px; line-height:1.6;">${f.a}</div>
          </details>
        `).join('')}
      </div>
      <a href="/" class="btn btn-primary" style="margin-top:24px;"><i data-lucide="arrow-left"></i> Về trang chủ</a>
    </div>
    <script>
      document.querySelectorAll('details').forEach(det => {
        det.addEventListener('toggle', () => {
          const icon = det.querySelector('.chevron');
          if(det.open) icon.style.transform = 'rotate(180deg)';
          else icon.style.transform = 'rotate(0)';
        });
      });
    </script>
  `);
}

export function renderError(code, message) {
  return layoutApp('Lỗi ' + code, `
    <div class="glass-card" style="max-width: 500px; margin: 0 auto; text-align: center;">
      <div style="width: 80px; height: 80px; background: rgba(239,68,68,0.1); border: 2px solid #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #ef4444; font-size: 36px; font-weight: 900;">
        ${code}
      </div>
      <h2 style="color:#fff; margin-bottom:12px;">${esc(message) || 'Đã xảy ra lỗi'}</h2>
      <p style="color:#a1a1aa; margin-bottom:24px;">Trang bạn tìm kiếm không tồn tại hoặc đã xảy ra sự cố.</p>
      <a href="/" class="btn btn-primary"><i data-lucide="home"></i> Về trang chủ</a>
    </div>
  `);
}
