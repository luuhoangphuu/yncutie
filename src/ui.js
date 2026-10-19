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

const layoutApp = (title, content, footer) => `${head(title)}<style>${CSS_APP}</style></head>
<body>
  <div class="bg-shapes"><div class="shape circle"></div><div class="shape triangle"></div><div class="shape square"></div></div>
  <div class="wrapper">${content}</div>
  ${footer}
  <a href="https://zalo.me/0996492296" target="_blank" class="float-support"><i data-lucide="message-circle" style="width:28px;height:28px;"></i></a>
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
            <div class="radar-info">
              <h4>Đang bảo vệ</h4>
              <p>WAF • Bot • DDoS</p>
              <div style="font-size:12px; color:var(--text-muted); margin-top:8px;">Lưu lượng quét: 1.2 GB/s</div>
            </div>
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
            document.querySelector('.step.active .step-circle').style.background = '#10b981';
            document.querySelector('.step.active .step-circle').style.borderColor = '#10b981';
            setTimeout(() => location.href = '/', 800);
          } else { showToast('Lỗi: ' + d.error, 'error'); }
        });
      }
    </script>
  `);
}

const renderFooter = () => `
  <div class="footer">
    <p>© 2026 <b>getkeydpiconfig.site</b>. Bảo lưu mọi quyền.</p>
    <div>
      <a href="https://zalo.me/0996492296" target="_blank" class="zalo"><i data-lucide="message-circle" style="width:20px;"></i> Zalo Hỗ Trợ</a>
      <a href="https://youtube.com/@zwicxsharereg" target="_blank" class="yt"><i data-lucide="youtube" style="width:20px;"></i> YouTube Channel</a>
    </div>
  </div>
`;

export function renderHome(env, error) {
  return layoutApp('Get Key | Hệ thống tự động', `
    <div class="container">
      <div class="glass-card hero">
        <div class="badge">✨ Tự động hóa 100%</div>
        <h1>Nhận Key <br><span class="grad">Bản Quyền</span></h1>
        <p class="sub">Chọn hạng Key, vượt qua Captcha và nhận Key tự động trong 30 giây.</p>
        ${error ? `<div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; color:#ef4444; padding:12px; border-radius:12px; margin-bottom:20px; font-size:14px; font-weight:600;">${error}</div>` : ''}
        <div class="tier-selector">
          <label class="tier-option selected" data-tier="Normal"><input type="radio" name="tier" value="Normal" checked><i data-lucide="zap" style="width:18px;"></i> Normal <span class="tier-badge">8H</span></label>
          <label class="tier-option" data-tier="VIP"><input type="radio" name="tier" value="VIP"><i data-lucide="crown" style="width:18px;"></i> VIP <span class="tier-badge">2H</span></label>
        </div>
        <form method="POST" action="/start">
          <input type="hidden" name="tier" id="tierInput" value="Normal">
          <button type="submit" class="btn btn-primary"><i data-lucide="rocket"></i> Bắt đầu nhận Key</button>
        </form>
      </div>
      <div class="info-col">
        <div class="stat-card">
          <div class="stat-icon"><i data-lucide="shield"></i></div>
          <div class="stat-info"><h4><span class="status-dot"></span> Hệ thống ổn định</h4><p>Độ trễ API: 24ms • Uptime: 99.9%</p></div>
        </div>
        <div class="stat-card" style="background: linear-gradient(135deg, #fdf4ff, #fae8ff); border-color: #f0abfc;">
          <div class="stat-icon" style="background:#e879f9; color:#fff; box-shadow: 0 0 15px rgba(232,121,249,0.4);"><i data-lucide="trending-up"></i></div>
          <div class="stat-info"><h4>Live Stats</h4><p>Đã phát: <b id="stat-keys">14,235</b> keys • Online: <b id="stat-users">142</b></p></div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background:rgba(236,72,153,0.1); color:#ec4899; box-shadow: 0 0 15px rgba(236,72,153,0.2);"><i data-lucide="gift"></i></div>
          <div class="stat-info"><h4>Khám phá tiện ích</h4><p>Sự kiện tặng Key VIP, BXH người dùng, Hỗ trợ trực tuyến 24/7.</p></div>
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
  `, renderFooter());
}

export function renderStep(title, stepNum, content) {
  const steps = ['Ủng hộ', 'Vượt Ads', 'Nhận Key'];
  return layoutApp(title, `
    <div class="glass-card" style="max-width: 550px; margin: 0 auto;">
      <div class="stepper">
        ${steps.map((s, i) => `<div class="step ${stepNum > i ? 'active' : ''}"><div class="dot">${i+1}</div><small>${s}</small></div>`).join('<div class="line ' + (stepNum > i ? 'active' : '') + '"></div>')}
      </div>
      ${content}
    </div>
  `, renderFooter());
}

export function renderFAQ() {
  return layoutApp('FAQ', `
    <div class="glass-card" style="max-width: 700px; margin: 0 auto;">
      <h2 style="text-align:center; margin-bottom:20px;"><i data-lucide="help-circle"></i> Câu hỏi thường gặp</h2>
      <div class="faq">
        <details class="faq-item">
          <summary>Key này dùng để làm gì?</summary>
          <p>Key dùng để nâng cấp tài khoản, sử dụng các tính năng VIP trong ứng dụng của chúng tôi. Key Normal có hạn 8 giờ, Key VIP có hạn 2 giờ.</p>
        </details>
        <details class="faq-item">
          <summary>Tại sao tôi phải xem quảng cáo?</summary>
          <p>Quảng cáo giúp duy trì máy chủ và hệ thống lấy Key tự động miễn phí. Key VIP yêu cầu 2 lần xem Ads, Key Normal yêu cầu 1 lần.</p>
        </details>
        <details class="faq-item">
          <summary>Tôi bị kẹt ở bước vượt Ads thì phải làm sao?</summary>
          <p>Hãy chắc chắn bạn không dùng trình chặn quảng cáo (AdBlock), tắt VPN và giữ tab quảng cáo mở cho đến khi nó tự chuyển hướng về lại trang web.</p>
        </details>
      </div>
      <a href="/" class="btn btn-primary" style="margin-top:20px;"><i data-lucide="arrow-left"></i> Về trang chủ</a>
    </div>
  `, renderFooter());
}
