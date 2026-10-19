import { CSS_CHECKPOINT, CSS_APP, JS, CSS_MOBILE, CSS_MODAL, JS_MODAL } from './assets.js';

const head = (title) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/lucide@latest"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

const layoutCheckpoint = (title, content) => `${head(title)}<style>${CSS_CHECKPOINT}</style></head>
<body>
  ${content}
  <script>${JS}</script>
  <script>${JS_MODAL}</script>
  <script>window.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>

  <div id="customModal" class="modal-overlay">
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title"><i data-lucide="alert-triangle" style="width:20px;"></i> THÔNG BÁO</div>
        <button class="modal-close-icon" onclick="closeModal(false)"><i data-lucide="x" style="width:18px;"></i></button>
      </div>
      <div class="modal-content">
        

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
