import { CSS, JS } from './assets.js';

const layout = (title, content) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS}</style></head>
<body>
  <div class="bg-anim"><div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div></div>
  ${content}
  <script>${JS}</script>
</body></html>`;

export function renderCheckpoint(env) {
  return layout('Security Check', `
    <div class="glass-card" style="max-width: 500px; text-align: center;">
      <h1 style="margin-bottom:20px;">Xác minh <span class="grad">Bảo mật</span></h1>
      <p class="sub">Hệ thống đang kiểm tra kết nối của bạn để chống lại Bot và DDoS.</p>
      <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
      <div class="terminal" id="term"></div>
    </div>
    <script>
      const term = document.getElementById('term');
      const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
      let lIdx = 0;
      setInterval(() => { if(lIdx < logs.length) { term.innerHTML += '<div class="log-line">> ' + logs[lIdx] + '</div>'; lIdx++; } }, 700);
      
      function onTurnstileSuccess(token) {
        term.innerHTML += '<div class="log-line" style="color:#10b981">> Token hợp lệ. Đang chuyển hướng...</div>';
        fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
        .then(r => r.json()).then(d => {
          if(d.success) setTimeout(() => location.href = '/', 800);
          else alert('Lỗi: ' + d.error);
        });
      }
    </script>
  `);
}

export function renderHome(env, error) {
  return layout('Get Key | Hệ thống tự động', `
    <div class="container">
      <!-- Cột Trái: Lấy Key -->
      <div class="glass-card hero">
        <div class="badge">✨ Tự động hóa 100%</div>
        <h1>Nhận Key <br><span class="grad">Bản Quyền</span></h1>
        <p class="sub">Chọn hạng Key, vượt qua Captcha và nhận Key tự động trong 30 giây. Không cần đăng ký.</p>
        
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
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
          <button type="submit" class="btn btn-primary">🚀 Bắt đầu nhận Key</button>
        </form>
        <p style="font-size:12px; color:var(--text-muted); margin-top:15px;">Bảo mật bởi Cloudflare Turnstile</p>
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
          <p style="font-size:13px; line-height:1.6; margin-bottom:8px;"><b style="color:#fff">1.</b> Chọn hạng Key và xác minh Captcha.</p>
          <p style="font-size:13px; line-height:1.6; margin-bottom:8px;"><b style="color:#fff">2.</b> Theo dõi Kênh YouTube để ủng hộ.</p>
          <p style="font-size:13px; line-height:1.6;"><b style="color:#fff">3.</b> Vượt Ads Link4M và nhận Key.</p>
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

export function renderStep(title, stepNum, content) {
  const steps = ['Xác thực', 'Ủng hộ', 'Nhận Key'];
  return layout(title, `
    <div class="glass-card" style="max-width: 550px; margin: 0 auto;">
      <div class="stepper">
        ${steps.map((s, i) => `<div class="step ${stepNum > i ? 'active' : ''}"><div class="dot">${i+1}</div><small>${s}</small></div>`).join('<div class="line ' + (stepNum > i ? 'active' : '') + '"></div>')}
      </div>
      ${content}
    </div>
  `);
}
