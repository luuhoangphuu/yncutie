import { CSS_CHECKPOINT, CSS_APP, JS } from './assets.js';

const layoutCheckpoint = (title, content) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS_CHECKPOINT}</style></head>
<body class="dark-theme">
  <div class="bg-glow"></div>
  ${content}
  <script>${JS}</script>
</body></html>`;

const layoutApp = (title, content) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS_APP}</style></head>
<body>
  ${content}
  <script>${JS}</script>
</body></html>`;

// --- GIAO DIỆN CHECK BOT (DARK) ---
export function renderCheckpoint(env) {
  return layoutCheckpoint('Security Check', `
    <div class="container-check">
      <div class="left">
        <div class="glass-dark">
          <h1 class="dark-title">Xác minh <br>Bảo mật</h1>
          <p class="sub-dark">Hệ thống đang kiểm tra kết nối của bạn bằng Trí tuệ Nhân tạo để chặn bot và spam.</p>
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
          <div class="terminal" id="term"></div>
        </div>
      </div>
      <div class="right" style="display:flex; flex-direction:column; justify-content:center;">
        <div class="stat-box">
          <div style="font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:5px;">Thời gian xác minh</div>
          <div class="stat-val"><span id="timer">0.000</span>s</div>
        </div>
        <div class="stat-box">
          <div style="font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:5px;">Lưu lượng quét</div>
          <div class="stat-val" style="color:#10b981;">An toàn</div>
        </div>
      </div>
    </div>
    <script>
      const term = document.getElementById('term');
      const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
      let lIdx = 0;
      setInterval(() => { if(lIdx < logs.length) { term.innerHTML += '<div class="log-line">> ' + logs[lIdx] + '</div>'; lIdx++; } }, 700);
      
      function onTurnstileSuccess(token) {
        term.innerHTML += '<div class="log-line" style="color:#10b981">> Token hợp lệ. Đang chuyển hướng...</div>';
        let t = 0; let int = setInterval(() => { t += 0.05; document.getElementById('timer').innerText = t.toFixed(3); }, 50);
        
        fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
        .then(r => r.json()).then(d => {
          clearInterval(int);
          if(d.success) setTimeout(() => location.href = '/', 800);
          else alert('Lỗi: ' + d.error);
        });
      }
    </script>
  `);
}

// --- GIAO DIỆN TRANG CHỦ (LIGHT) ---
export function renderHome(env, error) {
  return layoutApp('Get Key | Hệ thống tự động', `
    <div class="container">
      <!-- Cột Trái: Lấy Key -->
      <div class="glass-card hero">
        <div class="badge">✨ Tự động hóa 100%</div>
        <h1>Nhận Key <br><span class="grad">Bản Quyền</span></h1>
        <p class="sub">Chọn hạng Key, vượt qua Captcha và nhận Key tự động trong 30 giây.</p>
        
        ${error ? `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; padding:12px; border-radius:12px; margin-bottom:20px; font-size:14px; font-weight:600;">${error}</div>` : ''}

        <div class="tier-selector">
          <label class="tier-option selected" data-tier="Normal">
            <input type="radio" name="tier" value="Normal" checked>
            Normal <span class="tier-badge">8H</span>
          </label>
          <label class="tier-option" data-tier="VIP">
            <input type="radio" name="tier" value="VIP">
            VIP <span class="tier-badge">2H</span>
          </label>
        </div>

        <form method="POST" action="/start">
          <input type="hidden" name="tier" id="tierInput" value="Normal">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
          <button type="submit" class="btn btn-primary">🚀 Bắt đầu nhận Key</button>
        </form>
      </div>

      <!-- Cột Phải: Tính năng & Trạng thái -->
      <div class="info-col">
        <div class="stat-card">
          <div class="stat-icon">🛡️</div>
          <div class="stat-info">
            <h4><span class="status-dot"></span> Hệ thống ổn định</h4>
            <p>Độ trễ API: 24ms • Uptime: 99.9%</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(236,72,153,0.1); color:#ec4899;">🎁</div>
          <div class="stat-info">
            <h4>Khám phá tiện ích</h4>
            <p>Sự kiện tặng Key VIP, BXH người dùng, Hỗ trợ trực tuyến 24/7.</p>
          </div>
        </div>
        <div class="stat-card" style="flex-direction:column; align-items:flex-start;">
          <h4 style="margin-bottom:12px; font-size:14px;">📖 Quy trình 3 bước</h4>
          <p style="font-size:13px; line-height:1.6; margin-bottom:8px;"><b style="color:#0f172a">1.</b> Chọn hạng Key và xác minh Captcha.</p>
          <p style="font-size:13px; line-height:1.6; margin-bottom:8px;"><b style="color:#0f172a">2.</b> Theo dõi Kênh YouTube để ủng hộ.</p>
          <p style="font-size:13px; line-height:1.6;"><b style="color:#0f172a">3.</b> Vượt Ads Link4M và nhận Key.</p>
        </div>
      </div>
    </div>
    <script>
      document.querySelectorAll('.tier-option').forEach(opt => {
        opt.addEventListener('click', () => {
          document.querySelectorAll('.tier-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          document.getElementById('tierInput').value = opt.dataset.tier;
        });
      });
    </script>
  `);
}

// --- GIAO DIỆN CÁC BƯỚC (CÓ STEPPER) ---
export function renderStep(title, stepNum, content) {
  const steps = ['Xác thực', 'Ủng hộ', 'Nhận Key'];
  return layoutApp(title, `
    <div class="glass-card" style="max-width: 550px; margin: 0 auto;">
      <div class="stepper">
        ${steps.map((s, i) => `<div class="step ${stepNum > i ? 'active' : ''}"><div class="dot">${i+1}</div><small>${s}</small></div>`).join('<div class="line ' + (stepNum > i ? 'active' : '') + '"></div>')}
      </div>
      ${content}
    </div>
  `);
}
