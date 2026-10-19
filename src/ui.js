import { CSS, JS } from './assets.js';

const layout = (title, content, isApp = false) => `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<style>${CSS}</style></head>
<body>
  <div class="bg-shapes">
    <div class="shape circle" style="width:100px; height:100px; top:20%; left:10%; animation-duration: 20s;"></div>
    <div class="shape triangle" style="top:60%; right:15%; animation-duration: 25s;"></div>
    <div class="shape square" style="width:80px; height:80px; bottom:10%; left:30%; animation-duration: 18s;"></div>
  </div>
  ${content}
  <script>${JS}</script>
</body></html>`;

export function renderCheckpoint(env) {
  return layout('Security Checkpoint', `
    <div class="top-bar"><span>SQUID PROTOCOL</span><span id="countdown">03:00</span></div>
    <div class="container checkpoint-grid">
      <div class="left">
        <h1 style="font-size:48px; font-weight:800; margin-bottom:20px; line-height:1.1;">XÁC MINH <br><span style="color:var(--squid-pink)">NGƯỜI CHƠI</span></h1>
        <p style="color:#aaa; margin-bottom:30px; font-size:16px;">Hệ thống đang phân tích dấu vết trình duyệt để đảm bảo bạn không phải là Bot tự động.</p>
        <div class="glass" style="padding:30px; text-align:center;">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
          <p style="margin-top:20px; font-size:13px; color:var(--squid-teal);">Vui lòng tích vào ô xác minh phía trên.</p>
        </div>
      </div>
      <div class="right">
        <div class="glass" style="padding:20px; margin-bottom:20px;">
           <div style="font-family:monospace; font-size:24px; color:var(--squid-pink); margin-bottom:10px;">Thời gian thực: <span id="realTimer">0.000</span>s</div>
           <div style="font-size:12px; color:#666;">Mã hóa: AES-256 • IP: Ẩn danh</div>
        </div>
        <div class="terminal" id="term"></div>
      </div>
    </div>
    <script>
      let timeLeft = 180;
      setInterval(() => {
        if(timeLeft > 0) timeLeft--;
        const m = Math.floor(timeLeft / 60); const s = timeLeft % 60;
        document.getElementById('countdown').textContent = '0' + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);

      const term = document.getElementById('term');
      const logs = ["Khởi tạo kết nối...", "Đang kiểm tra IP...", "Quét mẫu DDoS...", "Phân tích Canvas..."];
      let lIdx = 0;
      setInterval(() => { if(lIdx < logs.length) { term.innerHTML += '<div class="log-line">> ' + logs[lIdx] + '</div>'; lIdx++; } }, 800);

      let startTime;
      function onTurnstileSuccess(token) {
        startTime = performance.now();
        setInterval(() => { document.getElementById('realTimer').textContent = ((performance.now() - startTime)/1000).toFixed(3); }, 10);
        document.getElementById('countdown').style.color = 'var(--squid-teal)';
        
        fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
        .then(r => r.json()).then(d => {
          if(d.success) {
            term.innerHTML += '<div class="log-line" style="color:var(--squid-pink)">> XÁC MINH THÀNH CÔNG!</div>';
            setTimeout(() => location.href = '/', 1000);
          } else { alert(d.error); location.reload(); }
        });
      }
    </script>
  `);
}

export function renderHome(env, error) {
  return layout('Get Key', `
    <div class="container" style="max-width: 600px;">
      <div class="glass" style="padding:40px;">
        <h1 style="text-align:center; font-size:40px; margin-bottom:10px;">GET KEY</h1>
        <p style="text-align:center; color:#aaa; margin-bottom:30px;">Chọn loại Key và nhận tự động.</p>
        ${error ? `<div style="background:rgba(255,0,127,0.1); border:1px solid var(--squid-pink); padding:15px; border-radius:12px; margin-bottom:20px; text-align:center; color:var(--squid-pink);">${error}</div>` : ''}
        
        <div style="display:flex; gap:10px; margin-bottom:20px;">
          <label style="flex:1; padding:15px; text-align:center; border:2px solid var(--squid-teal); border-radius:12px; cursor:pointer; background:rgba(0,243,255,0.1); color:var(--squid-teal); font-weight:bold;">
            <input type="radio" name="tier" value="Normal" checked style="display:none;"> THƯỜNG (8H)
          </label>
          <label style="flex:1; padding:15px; text-align:center; border:2px solid var(--squid-pink); border-radius:12px; cursor:pointer; color:var(--squid-pink); font-weight:bold;">
            <input type="radio" name="tier" value="VIP" style="display:none;"> VIP (2H)
          </label>
        </div>

        <form method="POST" action="/start" style="text-align:center;">
          <input type="hidden" name="tier" id="tierInput" value="Normal">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
          <button type="submit" class="btn btn-pink" style="width:100%; margin-top:20px;">BẮT ĐẦU</button>
        </form>
      </div>
    </div>
    <script>
      document.querySelectorAll('label').forEach(l => l.addEventListener('click', () => {
        document.querySelectorAll('label').forEach(el => { el.style.background = 'transparent'; el.style.color = el.innerText.includes('VIP') ? 'var(--squid-pink)' : 'var(--squid-teal)'; });
        l.style.background = l.innerText.includes('VIP') ? 'rgba(255,0,127,0.1)' : 'rgba(0,243,255,0.1)';
        document.getElementById('tierInput').value = l.querySelector('input').value;
      }));
    </script>
  `);
}

export function renderStep(title, step, content) {
  const steps = ['ỦNG HỘ', 'VƯỢT ADS', 'NHẬN KEY'];
  return layout(title, `
    <div class="container" style="max-width: 600px;">
      <div class="glass" style="padding:40px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:30px;">
          ${steps.map((s, i) => `<div style="text-align:center; color:${step > i ? 'var(--squid-teal)' : '#555'}; font-size:12px; font-weight:bold;">${i+1}. ${s}</div>`).join('')}
        </div>
        ${content}
      </div>
    </div>
  `);
}
