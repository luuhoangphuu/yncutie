import { CSS_CHECKPOINT, CSS_APP, JS } from './assets.js';

const layoutCheckpoint = (title, content) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS_CHECKPOINT}</style></head>
<body>
  <div class="bg-shapes"><div class="shape circle"></div><div class="shape triangle"></div><div class="shape square"></div></div>
  ${content}
  <script>${JS}</script>
</body></html>`;

const layoutApp = (title, content) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS_APP}</style></head>
<body>
  <div class="bg-shapes"><div class="shape circle"></div><div class="shape triangle"></div><div class="shape square"></div></div>
  ${content}
  <script>${JS}</script>
</body></html>`;

export function renderCheckpoint(env) {
  return layoutCheckpoint('Security Check', `
    <div class="top-nav">
      <div class="logo"><div class="logo-icon">🛡️</div> DOMAINCHEAP.WTF</div>
      <div class="status-badge"><div class="status-dot"></div> Kết nối đang được bảo vệ</div>
    </div>
    <div class="container-check">
      <div class="left">
        <div class="badge-security">Trạm kiểm tra bảo mật</div>
        <h1>Xác minh nhanh trước<br>khi vào cửa hàng</h1>
        <p class="desc">Cloudflare đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
        <div class="challenge-box">
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
        <div class="card-light">
          <div class="card-header"><span class="card-title">Thời gian xác minh</span><span class="card-value" id="timer">0.000<small>s</small></span></div>
          <div class="graph-container" id="graph"></div>
        </div>
        <div class="grid-2">
          <div class="card-light" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div class="radar-container"><div class="radar-sweep"></div><div class="radar-dot"></div></div>
            <div style="text-align:center; margin-top:15px;"><div style="font-size:12px; color:var(--text-muted);">Quét lưu lượng</div><div style="font-size:14px; font-weight:700; color:var(--text);">Đang bảo vệ</div><div style="font-size:11px; color:var(--primary);">WAF • Bot • DDoS</div></div>
          </div>
          <div class="card-light">
            <div class="card-header"><span class="card-title">Độ trễ tới edge</span><span class="card-value">464<small>ms</small></span></div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:10px;">Giao thức<br><b style="color:var(--text); font-size:14px;">HTTP/3 (QUIC)</b></div>
          </div>
        </div>
        <div class="stats-grid">
          <div class="stat-item"><div class="stat-label">Giao thức</div><div class="stat-val">HTTP/3 (QUIC)</div></div>
          <div class="stat-item"><div class="stat-label">Mạng edge</div><div class="stat-val">Anycast · 330+ thành phố</div></div>
          <div class="stat-item"><div class="stat-label">Lớp bảo vệ</div><div class="stat-val">Cloudflare</div></div>
        </div>
        <div class="card-light">
          <div style="font-size:14px; font-weight:700; margin-bottom:15px; color:var(--text);">Bị kẹt ở bước này?</div>
          <div style="display:flex; gap:10px; margin-bottom:10px; font-size:13px; color:var(--text-muted);"><div style="background:#e0e7ff; color:var(--primary); width:20px; height:20px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">1</div>Đợi khoảng 10 giây; bấm tải lại liên tục chi khiến bị kiểm tra lại từ đầu.</div>
          <div style="display:flex; gap:10px; font-size:13px; color:var(--text-muted);"><div style="background:#e0e7ff; color:var(--primary); width:20px; height:20px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">2</div>Bật JavaScript và cookie, tạm tắt VPN hoặc trình chặn quảng cáo nếu có.</div>
        </div>
      </div>
    </div>
    <script>
      const graph = document.getElementById('graph');
      for(let i=0; i<40; i++) { let bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '20%'; graph.appendChild(bar); }
      let startTime;
      function onTurnstileSuccess(token) {
        startTime = performance.now();
        setInterval(() => { document.getElementById('timer').innerHTML = ((performance.now() - startTime)/1000).toFixed(3) + '<small>s</small>'; }, 50);
        fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
        .then(r => r.json()).then(d => {
          if(d.success) {
            document.querySelector('.step.active .step-label').innerText = "Đã xác minh!";
            document.querySelector('.step.active .step-circle').style.background = '#10b981';
            document.querySelector('.step.active .step-circle').style.borderColor = '#10b981';
            setTimeout(() => location.href = '/', 800);
          } else { alert('Lỗi: ' + d.error); }
        });
      }
    </script>
  `);
}

export function renderHome(env, error) {
  return layoutApp('Get Key | Hệ thống tự động', `
    <div class="container">
      <div class="glass-card hero">
        <div class="badge">✨ Tự động hóa 100%</div>
        <h1>Nhận Key <br><span class="grad">Bản Quyền</span></h1>
        <p class="sub">Chọn hạng Key, vượt qua Captcha và nhận Key tự động trong 30 giây.</p>
        ${error ? `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; padding:12px; border-radius:12px; margin-bottom:20px; font-size:14px; font-weight:600;">${error}</div>` : ''}
        <div class="tier-selector">
          <label class="tier-option selected" data-tier="Normal"><input type="radio" name="tier" value="Normal" checked>Normal <span class="tier-badge">8H</span></label>
          <label class="tier-option" data-tier="VIP"><input type="radio" name="tier" value="VIP">VIP <span class="tier-badge">2H</span></label>
        </div>
        <form method="POST" action="/start">
          <input type="hidden" name="tier" id="tierInput" value="Normal">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light" style="display:flex; justify-content:center; margin-bottom:20px;"></div>
          <button type="submit" class="btn btn-primary">🚀 Bắt đầu nhận Key</button>
        </form>
      </div>
      <div class="info-col">
        <div class="stat-card">
          <div class="stat-icon">🛡️</div>
          <div class="stat-info"><h4><span class="status-dot"></span> Hệ thống ổn định</h4><p>Độ trễ API: 24ms • Uptime: 99.9%</p></div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(236,72,153,0.1); color:#ec4899;">🎁</div>
          <div class="stat-info"><h4>Khám phá tiện ích</h4><p>Sự kiện tặng Key VIP, BXH người dùng, Hỗ trợ trực tuyến 24/7.</p></div>
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
