import { CSS_CHECKPOINT, CSS_APP, JS, CSS_MOBILE } from './assets.js';

const head = (title) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

const layoutCheckpoint = (title, content) => `${head(title)}<style>${CSS_CHECKPOINT}</style></head>
<body>
  ${content}
  <script>${JS}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
</body></html>`;

const layoutApp = (title, content) => `${head(title)}<style>${CSS_APP}${CSS_MOBILE}</style></head>
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

export function renderHome(env, error, notice) {
  return layoutApp('GETKEYDPICONFIG.SITE', `
    <div class="container">
      <div>
        <div class="glass-card">
          <div class="header-title"><i data-lucide="key" style="color:#fff;"></i> Lấy Key Miễn Phí</div>
          <div class="header-desc">Chào mừng bạn đến với hệ thống của GETKEYDPICONFIG.SITE.</div>
          
          ${notice ? `
          <div class="announcement" id="announcementBanner">
            <div class="announcement-icon"><i data-lucide="bell" style="width:20px;"></i></div>
            <div class="announcement-content">
              <h5>THÔNG BÁO TỪ ADMIN</h5>
              <p style="white-space: pre-wrap;">${notice}</p>
            </div>
            <button class="announcement-close" onclick="document.getElementById('announcementBanner').style.display='none'"><i data-lucide="x" style="width:16px;"></i></button>
          </div>` : ''}

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
            <div style="display:flex; gap:12px; margin-top:20px;">
               <a href="https://zalo.me/0996492296" target="_blank" style="flex:1; padding:12px; border-radius:12px; border:1px solid #333; text-decoration:none; color:#fff; font-weight:600; text-align:center; display:flex; justify-content:center; gap:8px; background:#000; transition:0.3s;"><i data-lucide="message-circle"></i> Zalo</a>
               <a href="https://youtube.com/@zwicxsharereg" target="_blank" style="flex:1; padding:12px; border-radius:12px; border:1px solid #333; text-decoration:none; color:#fff; font-weight:600; text-align:center; display:flex; justify-content:center; gap:8px; background:#000; transition:0.3s;"><i data-lucide="youtube"></i> YouTube</a>
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
      
      // SKELETON LOADING KHI BẤM NÚT
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
  return layoutApp('Admin Panel', `
    <div class="glass-card" style="max-width: 800px; margin: 0 auto; border-color: #555;">
      <div class="header-title" style="color: #fff;"><i data-lucide="terminal" style="color:#fff;"></i> HỆ THỐNG QUẢN TRỊ ẨN</div>
      <div class="header-desc">Cập nhật thông báo hiển thị trên trang chủ.</div>
      
      <form id="adminForm" style="display:flex; flex-direction:column; gap:15px;">
        <input type="password" id="adminPass" placeholder="Nhập mật khẩu Admin..." required style="padding:15px; border-radius:12px; border:1px solid #333; background:#000; color:#fff; font-size:15px; outline:none;">
        <textarea id="adminNotice" rows="5" placeholder="Nhập nội dung thông báo..." required style="padding:15px; border-radius:12px; border:1px solid #333; background:#000; color:#fff; font-size:15px; resize:none; outline:none;"></textarea>
        <button type="submit" class="btn btn-primary" id="submitBtn">Cập nhật thông báo</button>
      </form>
      
      <div id="adminResult" style="margin-top:20px; text-align:center; font-weight:700;"></div>
      <a href="/" class="btn btn-ghost" style="margin-top:20px; border:1px solid #333; color:#fff;"><i data-lucide="arrow-left"></i> Về trang chủ</a>
    </div>
    
    <script>
      document.getElementById('adminForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('adminPass').value;
        const notice = document.getElementById('adminNotice').value;
        const resDiv = document.getElementById('adminResult');
        const btn = document.getElementById('submitBtn');
        
        btn.disabled = true;
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="30 10"/></svg> Đang lưu...';
        resDiv.style.color = '#a1a1aa';
        resDiv.innerText = 'Đang kết nối tới Cloudflare KV...';
        
        try {
          const res = await fetch('/api/admin/notice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, notice })
          });
          const data = await res.json();
          if (data.success) {
            resDiv.style.color = '#10b981';
            resDiv.innerText = '✅ Đã lưu thông báo thành công! Hãy về trang chủ để xem.';
            btn.innerHTML = '<i data-lucide="check"></i> Đã cập nhật';
          } else {
            throw new Error(data.error || 'Lỗi không xác định');
          }
        } catch (err) {
          resDiv.style.color = '#ef4444';
          resDiv.innerText = '❌ Lỗi: ' + err.message;
          btn.disabled = false;
          btn.innerHTML = 'Cập nhật thông báo';
        }
      });
    </script>
    <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
  `);
}

export function renderFAQ() {
  return layoutApp('FAQ', `<div class="glass-card"><h2>FAQ</h2><a href="/" style="color:#fff;">Quay lại</a></div>`);
}
