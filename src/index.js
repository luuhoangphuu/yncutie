// ============================================================================
// Key System Worker v11.0 - Quantum Cyber-Defense UI + Detailed Debug
// ============================================================================

const CHECKPOINT_CSS = `
:root { color-scheme: dark; }
*{margin:0;padding:0;box-sizing:border-box}
body {
  font-family: 'Inter', -apple-system, sans-serif; background: #02040a; color: #94a3b8;
  min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;
  overflow: hidden; position: relative; font-size: 14px;
}

/* 3D Perspective Grid Background */
.bg-grid {
  position: fixed; inset: -50%; z-index: 0;
  background-image: 
    linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
  animation: gridMove 10s linear infinite;
  mask-image: radial-gradient(circle at center, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 70%);
}
@keyframes gridMove { 0% { background-position: 0 0; } 100% { background-position: 0 60px; } }

/* Glow Effects */
.bg-glow {
  position: fixed; inset: 0; z-index: 1; pointer-events: none;
  background: 
    radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1), transparent 40%);
}

.container { position: relative; z-index: 10; width: 100%; max-width: 1150px; display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; gap: 30px; } }

/* Left Side */
.left { display: flex; flex-direction: column; justify-content: center; position: relative; }
.badge-security { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800; color: #0ea5e9; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 3px; }
.badge-security .dot { width: 6px; height: 6px; background: #0ea5e9; border-radius: 50%; box-shadow: 0 0 10px #0ea5e9; animation: blink 1.5s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

/* Glitch Effect */
.glitch { position: relative; font-size: 48px; font-weight: 800; color: #f8fafc; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em; text-shadow: 0 4px 30px rgba(0,0,0,0.8); }
.glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8; }
.glitch::before { left: 2px; text-shadow: -2px 0 #ef4444; clip: rect(24px, 550px, 90px, 0); animation: glitch-anim 3s infinite linear alternate-reverse; }
.glitch::after { left: -2px; text-shadow: -2px 0 #0ea5e9; clip: rect(85px, 550px, 140px, 0); animation: glitch-anim2 2.5s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(10px, 9999px, 83px, 0); } 20% { clip: rect(62px, 9999px, 14px, 0); } 40% { clip: rect(33px, 9999px, 98px, 0); } 60% { clip: rect(88px, 9999px, 45px, 0); } 80% { clip: rect(12px, 9999px, 77px, 0); } 100% { clip: rect(55px, 9999px, 23px, 0); } }
@keyframes glitch-anim2 { 0% { clip: rect(65px, 9999px, 100px, 0); } 20% { clip: rect(12px, 9999px, 55px, 0); } 40% { clip: rect(88px, 9999px, 23px, 0); } 60% { clip: rect(34px, 9999px, 77px, 0); } 80% { clip: rect(90px, 9999px, 12px, 0); } 100% { clip: rect(45px, 9999px, 62px, 0); } }

.desc { font-size: 16px; line-height: 1.7; color: #94a3b8; margin-bottom: 30px; max-width: 90%; }

/* Challenge Box */
.challenge-box { 
  background: rgba(10, 15, 30, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 20px; padding: 35px 30px; position: relative; overflow: hidden; 
  box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(14, 165, 233, 0.05); transition: all 0.3s; 
}
.challenge-box::before { content: ''; position: absolute; inset: 0; border-radius: 20px; padding: 2px; background: linear-gradient(135deg, rgba(14, 165, 233, 0.5), transparent, rgba(16, 185, 129, 0.5)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
.challenge-box:hover { border-color: rgba(14, 165, 233, 0.5); box-shadow: 0 30px 70px rgba(0,0,0,0.8), inset 0 0 50px rgba(14, 165, 233, 0.1); }
.cf-turnstile { margin-bottom: 20px; display: flex; justify-content: center; }
.status-text { text-align: center; font-size: 14px; color: #64748b; transition: color 0.3s; font-weight: 500; line-height: 1.5; }

/* Stepper */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; padding: 0 5px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; position: relative; }
.step-circle { width: 32px; height: 32px; border-radius: 10px; transform: rotate(45deg); background: #0f172a; border: 2px solid #1e293b; display: flex; align-items: center; justify-content: center; transition: all 0.5s; z-index: 2; box-shadow: inset 0 0 10px rgba(0,0,0,0.5); }
.step-circle::after { content: ''; transform: rotate(-45deg); font-weight: bold; font-size: 16px; color: #fff; }
.step.completed .step-circle { background: rgba(16, 185, 129, 0.15); border-color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.5); }
.step.completed .step-circle::after { content: '✓'; color: #10b981; text-shadow: 0 0 10px #10b981; }
.step.active .step-circle { background: rgba(14, 165, 233, 0.15); border-color: #0ea5e9; box-shadow: 0 0 25px rgba(14, 165, 233, 0.6), inset 0 0 10px rgba(14, 165, 233, 0.5); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(14, 165, 233, 0); } 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); } }
.step-line { flex: 1; height: 2px; background: #1e293b; margin: 0 10px; margin-bottom: 26px; transition: all 0.5s; z-index: 1; position: relative; }
.step-line::after { content: ''; position: absolute; top: 0; left: 0; height: 100%; width: 0%; background: #10b981; transition: width 0.5s ease; }
.step-line.completed::after { width: 100%; box-shadow: 0 0 10px #10b981; }
.step-line.active::after { width: 50%; background: linear-gradient(90deg, #10b981, #0ea5e9); box-shadow: 0 0 10px #0ea5e9; }
.step-label { font-size: 12px; font-weight: 700; color: #475569; transition: all 0.3s; white-space: nowrap; text-transform: uppercase; letter-spacing: 1px; }
.step.completed .step-label, .step.active .step-label { color: #e2e8f0; text-shadow: 0 0 10px rgba(255,255,255,0.2); }

/* Right Side (HUD) */
.right { display: flex; flex-direction: column; gap: 16px; }
.card { 
  background: rgba(10, 15, 30, 0.6); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); 
  border: 1px solid #1e293b; border-radius: 16px; padding: 20px; position: relative; overflow: hidden; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.4); 
}
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
.card-value { font-size: 34px; font-weight: 800; color: #f8fafc; font-family: 'JetBrains Mono', monospace; text-shadow: 0 0 20px rgba(255,255,255,0.3); line-height: 1; }
.card-value small { font-size: 14px; color: #64748b; font-weight: 600; margin-left: 4px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* Terminal */
.terminal { 
  background: #000000; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; 
  font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #0ea5e9; height: 160px; overflow: hidden; 
  display: flex; flex-direction: column; gap: 8px; box-shadow: inset 0 0 30px rgba(0,0,0,0.9); position: relative;
}
.terminal::before { content: 'root@cloudflare:~#'; position: absolute; bottom: 10px; left: 16px; color: #10b981; font-weight: bold; opacity: 0.5; }
.log-line { opacity: 0; animation: typeIn 0.3s forwards; line-height: 1.4; z-index: 1; }
.log-line.success { color: #10b981; }
.log-line.warn { color: #f59e0b; }
.log-line.error { color: #ef4444; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }

/* Radar SVG */
.radar-wrapper { position: relative; width: 120px; height: 120px; margin: 0 auto; }
.radar-svg { width: 100%; height: 100%; animation: spin 4s linear infinite; transform-origin: center; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
@keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 100; display: none; align-items: center; justify-content: center; }
.modal-box { background: rgba(15, 23, 42, 0.95); border: 1px solid #ef4444; border-radius: 24px; padding: 40px 30px; text-align: center; max-width: 450px; width: 90%; box-shadow: 0 30px 80px rgba(239, 68, 68, 0.3); transform: scale(0.9); animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
@keyframes popIn { to { transform: scale(1); } }
.modal-icon { color: #ef4444; font-size: 54px; margin-bottom: 20px; text-shadow: 0 0 30px rgba(239,68,68,0.6); }
.modal-title { color: #f8fafc; font-size: 24px; font-weight: 800; margin-bottom: 12px; }
.modal-msg { color: #94a3b8; font-size: 15px; margin-bottom: 24px; line-height: 1.6; }
.modal-btn { background: #ef4444; color: #fff; border: none; padding: 16px 30px; border-radius: 14px; font-weight: 800; font-size: 16px; cursor: pointer; transition: 0.2s; width: 100%; text-transform: uppercase; letter-spacing: 1px; }
.modal-btn:hover { background: #dc2626; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(239,68,68,0.4); }
`;

const CHECKPOINT_JS = `
// 1. Background Network Canvas
const canvas = document.getElementById('network');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = Array.from({length: 50}, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 }));
function drawNetwork() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if(p.x < 0 || p.x > canvas.width) p.vx *= -1; if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.fillStyle = 'rgba(14, 165, 233, 0.6)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2); ctx.fill();
    for(let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j]; let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if(dist < 180) { ctx.strokeStyle = 'rgba(14, 165, 233, ' + (1 - dist/180) * 0.15 + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
    }
  });
  requestAnimationFrame(drawNetwork);
}
drawNetwork();

// 2. Real Timer & Logs
let timerInterval; let startTime; let isVerifying = false;
function startRealTimer() {
  startTime = performance.now();
  document.getElementById('realTimer').style.color = '#0ea5e9';
  document.getElementById('realTimer').style.textShadow = '0 0 20px rgba(14, 165, 233, 0.8)';
  timerInterval = setInterval(() => {
    const elapsed = (performance.now() - startTime) / 1000;
    document.getElementById('realTimer').textContent = elapsed.toFixed(3);
  }, 10);
}

const logs = [
  "[SYS] Initializing Quantum Gateway...",
  "[NET] Establishing TLS 1.3 handshake...",
  "[NET] Route optimized via Anycast Edge (SGP).",
  "[SEC] Analyzing browser fingerprint (Canvas/WebGL)...",
  "[WAF] Scanning for DDoS, SQLi, and XSS patterns...",
  "[BOT] Evaluating mouse movements and touch events...",
  "[CHK] Ready for human verification."
];
let logIndex = 0;
function addLog(text, type) {
  const terminal = document.getElementById('terminal');
  const line = document.createElement('div');
  line.className = 'log-line ' + (type || '');
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}
setInterval(() => { if(logIndex < logs.length) { addLog(logs[logIndex]); logIndex++; } }, 600);

// 3. Turnstile Callback
function onTurnstileSuccess(token) {
  if (isVerifying) return; 
  isVerifying = true;
  
  startRealTimer();
  document.getElementById('statusText').style.color = '#0ea5e9';
  document.getElementById('statusText').innerHTML = 'Đang xác thực dữ liệu sinh trắc học...';
  
  const stepVerify = document.querySelector('.step:nth-child(5)');
  stepVerify.classList.add('active'); stepVerify.classList.remove('completed');
  addLog("[AUTH] Token received. Transmitting to secure enclave...", 'warn');

  fetch('/api/verify-bot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token })
  }).then(res => res.json()).then(data => {
    clearInterval(timerInterval);
    
    if(data.success) {
      addLog("[OK] VERIFICATION SUCCESSFUL. REDIRECTING...", 'success');
      document.getElementById('statusText').style.color = '#10b981';
      document.getElementById('statusText').style.textShadow = '0 0 10px rgba(16, 185, 129, 0.5)';
      document.getElementById('statusText').innerHTML = '<b>Xác minh thành công! Đang vào trang sau...</b>';
      
      stepVerify.classList.add('completed'); stepVerify.classList.remove('active');
      const steps = document.querySelectorAll('.step'); const lines = document.querySelectorAll('.step-line');
      lines[2].classList.add('completed'); steps[3].classList.add('active'); steps[3].classList.remove('completed');
      
      setTimeout(() => { window.location.href = '/'; }, 1200);
    } else {
      showError(data.error || 'Xác thực thất bại.');
    }
  }).catch(() => {
    clearInterval(timerInterval); showError('Lỗi kết nối mạng. Vui lòng thử lại.');
  });
}

function showError(msg) {
  document.getElementById('modalMsg').innerHTML = msg;
  document.getElementById('errorModal').style.display = 'flex';
  addLog("[ERR] " + msg, 'error');
}

function reloadPage() { window.location.reload(); }

setInterval(() => {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    if(index > bars.length - 15) {
      bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
      bar.style.background = '#0ea5e9';
      bar.style.boxShadow = '0 0 10px #0ea5e9';
      setTimeout(() => { bar.style.background = '#1e293b'; bar.style.boxShadow = 'none'; }, 200);
    }
  });
}, 100);
`;

const APP_CSS = `
:root { color-scheme: light only; --bg-color: #f0f4f8; --text-main: #0f172a; --text-muted: #475569; --primary: #4f46e5; --accent: #ec4899; --card-bg: #ffffff; --border-color: #e2e8f0; }
*{margin:0;padding:0;box-sizing:border-box}
body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg-color); color: var(--text-main); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; overflow: hidden; position: relative; }
.blob { position: absolute; border-radius: 50%; filter: blur(100px); z-index: 0; opacity: 0.4; animation: float 12s infinite ease-in-out alternate; pointer-events: none; }
.blob-1 { width: 500px; height: 500px; background: #c7d2fe; top: -10%; left: -10%; }
.blob-2 { width: 450px; height: 450px; background: #fbcfe8; bottom: -10%; right: -5%; animation-delay: -4s; }
.blob-3 { width: 400px; height: 400px; background: #bfdbfe; top: 30%; left: 30%; animation-delay: -8s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, -50px) scale(1.1); } }
.container { position: relative; z-index: 10; width: 100%; max-width: 520px; perspective: 1000px; }
.card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 32px; padding: 40px 32px; box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.08); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.card:hover { transform: translateY(-5px); box-shadow: 0 32px 64px -12px rgba(15, 23, 42, 0.12); }
.hero{text-align:center}
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); }
h1 { font-size: 34px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; color: #0f172a; }
h2 { font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #0f172a; }
.grad { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 28px; font-weight: 500; }
.btn { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 16px 24px; border-radius: 16px; border: none; cursor: pointer; font-family: inherit; font-size: 16px; font-weight: 700; text-align: center; text-decoration: none; transition: all 0.2s; margin-bottom: 14px; }
.btn-primary { background: var(--primary); color: #fff; box-shadow: 0 8px 24px -6px rgba(79, 70, 229, 0.4); }
.btn-primary:hover { background: #4338ca; transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(79, 70, 229, 0.5); }
.btn-youtube { background: #ff0033; color: #fff; box-shadow: 0 8px 24px -6px rgba(255, 0, 51, 0.3); }
.btn-youtube:hover { background: #e6002e; transform: translateY(-2px); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 8px 24px -6px rgba(245, 158, 11, 0.4); }
.btn-ads:hover { transform: translateY(-2px); }
.btn-ghost { background: #f8fafc; color: var(--text-main); border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.btn-ghost:hover { background: #f1f5f9; border-color: #cbd5e1; }
.warning { background: #fffbeb; border: 1px solid #fde68a; color: #b45309; padding: 14px 16px; border-radius: 16px; font-size: 13px; margin-bottom: 20px; line-height: 1.5; font-weight: 500; display: flex; align-items: flex-start; gap: 8px; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8fafc; border: 2px solid #cbd5e1; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.15); }
.step small { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.step.active small { color: var(--text-main); }
.line { flex: 1; height: 4px; background: #e2e8f0; margin: 0 12px; margin-bottom: 26px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); }
.center{text-align:center}
.success-icon { width: 88px; height: 88px; margin: 10px auto 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #10b981, #059669); color: #fff; box-shadow: 0 12px 32px -8px rgba(16, 185, 129, 0.4); animation: pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 16px 20px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 20px; transition: 0.3s; }
.key-box:hover { border-color: var(--primary); background: #fff; }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 1.5px; }
.copy-btn { padding: 14px 20px; border-radius: 14px; border: none; background: var(--primary); color: #fff; font-weight: 700; cursor: pointer; font-size: 14px; transition: 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.copy-btn:hover { background: #4338ca; transform: translateY(-2px); }
.expiry-info { display: inline-flex; align-items: center; gap: 8px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; padding: 10px 16px; border-radius: 12px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
@media (max-width: 480px) { .card { padding: 32px 24px; border-radius: 28px; } h1 { font-size: 28px; } .btn { padding: 14px 20px; font-size: 15px; } .key-box { flex-direction: column; } .copy-btn { width: 100%; justify-content: center; } }
`;

const APP_JS = `
(function(){
  if(document.querySelector('.success-icon')) {
    for (let i = 0; i < 50; i++) {
      let el = document.createElement('div');
      el.style.cssText = 'position:fixed;top:-10px;left:'+Math.random()*100+'vw;width:8px;height:8px;background:'+['#4f46e5','#ec4899','#f59e0b','#10b981'][Math.floor(Math.random()*4)]+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';z-index:999;pointer-events:none;opacity:0.8;';
      document.body.appendChild(el);
      let anim = el.animate([{ transform: 'translateY(0) rotate(0)', opacity: 1 },{ transform: 'translateY(100vh) rotate('+Math.random()*720+'deg)', opacity: 0 }], { duration: 2000 + Math.random()*2000, easing: 'cubic-bezier(.37,0,.63,1)' });
      anim.onfinish = () => el.remove();
    }
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-copy]'); if(!b) return;
    var t = document.getElementById(b.dataset.copy); if(!t) return;
    var text = t.textContent; var orig = b.innerHTML;
    var done = function(){ b.innerHTML = '✓ Đã copy'; setTimeout(function(){ b.innerHTML = orig; }, 2000); };
    var fallback = function(){ var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy')}catch(x){} ta.remove(); done(); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(done).catch(fallback); } else { fallback(); }
  });
  var auto = document.querySelector('[data-copy][data-auto]');
  if(auto && navigator.clipboard && navigator.clipboard.writeText){ setTimeout(function(){ var t = document.getElementById(auto.dataset.copy); if(t) navigator.clipboard.writeText(t.textContent).catch(function(){}); }, 500); }
})();
`;

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; frame-src https://challenges.cloudflare.com; connect-src 'self';"
};

function withHeaders(res) { const headers = new Headers(res.headers); for (const [k, v] of Object.entries(SECURITY_HEADERS)) headers.set(k, v); return new Response(res.body, { status: res.status, headers }); }
const html = (s, st = 200) => withHeaders(new Response(s, { status: st, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }));
const redirect = (loc, cookie) => { const h = { 'Location': loc }; if (cookie) h['Set-Cookie'] = cookie; return withHeaders(new Response('', { status: 302, headers: h })); };
function log(level, msg, extra = {}) { console.log(JSON.stringify({ ts: new Date().toISOString(), level, msg, ...extra })); }

// ============ GIAO DIỆN TRẠM KIỂM TRA ============
function renderCheckpoint(env) {
  return html(`<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="dark"><title>Quantum Firewall | Xác minh</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <style>${CHECKPOINT_CSS}</style></head>
  <body>
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>
    <canvas id="network" style="position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.3;"></canvas>
    
    <div class="container">
      <div class="left">
        <div class="badge-security"><div class="dot"></div> Quantum Firewall v4.2</div>
        <h1 class="glitch" data-text="Xác minh nhanh trước khi vào trang sau">Xác minh nhanh<br>trước khi vào trang sau</h1>
        <p class="desc">Hệ thống đang kiểm tra kết nối của bạn bằng Trí tuệ Nhân tạo để chặn bot và spam. Thường chỉ mất vài giây.</p>
        
        <div class="challenge-box">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
          <div class="status-text" id="statusText">Nếu thấy ô <b>Verify you are human</b>, bấm vào đó. Không cần tải lại trang.</div>
        </div>

        <div class="stepper">
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Kết nối TLS</div></div>
          <div class="step-line completed"></div>
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Lọc tại edge</div></div>
          <div class="step-line completed"></div>
          <div class="step active"><div class="step-circle"></div><div class="step-label">Xác minh trình duyệt</div></div>
          <div class="step-line"></div>
          <div class="step"><div class="step-circle"></div><div class="step-label">Vào trang sau</div></div>
        </div>
      </div>

      <div class="right">
        <div class="card">
          <div class="card-header"><span>Thời gian xác minh thực tế</span><span class="card-value" id="realTimer">0.000<small>s</small></span></div>
          <div class="graph" id="graph"></div>
        </div>

        <div class="grid-2">
          <div class="card" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:15px;">
            <div class="radar-wrapper">
              <svg class="radar-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" stroke-width="1"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#1e293b" stroke-width="1"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="#1e293b" stroke-width="1"/>
                <path d="M50,50 L50,5 A45,45 0 0,1 95,50 Z" fill="rgba(14, 165, 233, 0.3)"/>
                <circle cx="50" cy="50" r="2" fill="#0ea5e9"/>
                <circle cx="70" cy="30" r="3" fill="#10b981" class="radar-ping"/>
                <circle cx="30" cy="75" r="2" fill="#0ea5e9" class="radar-ping" style="animation-delay: 0.5s"/>
              </svg>
            </div>
            <div style="text-align:center; margin-top:10px;">
              <div style="font-size:11px; color:#64748b; margin-bottom:4px;">Quét lưu lượng</div>
              <div style="font-size:13px; font-weight:700; color:#f8fafc;">Đang bảo vệ</div>
              <div style="font-size:10px; color:#0ea5e9;">WAF • Bot • DDoS</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><span>Độ trễ tới edge</span><span class="card-value">464<small>ms</small></span></div>
            <div style="font-size:11px; color:#64748b; margin-top:10px;">Giao thức<br><b style="color:#f8fafc;">HTTP/3 (QUIC)</b></div>
          </div>
        </div>

        <div class="terminal" id="terminal"></div>
      </div>
    </div>
    
    <div class="modal-overlay" id="errorModal">
      <div class="modal-box">
        <div class="modal-icon">⚠</div>
        <div class="modal-title">Xác minh thất bại</div>
        <div class="modal-msg" id="modalMsg">Đã xảy ra lỗi.</div>
        <button class="modal-btn" onclick="reloadPage()">Thử lại</button>
      </div>
    </div>

    <script>
      for(let i=0; i<30; i++) { let bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '20%'; bar.style.flex = '1'; bar.style.background = '#1e293b'; bar.style.margin = '0 1px'; bar.style.borderRadius = '2px'; document.getElementById('graph').appendChild(bar); }
      ${CHECKPOINT_JS}
    </script>
  </body></html>`);
}

// ============ CÁC HÀM XỬ LÝ CHÍNH ============
function renderApp(title, content) {
  return html(`<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="light only"><title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <style>${APP_CSS}</style></head>
  <body>
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <div class="container">${content}</div>
    <script>${APP_JS}</script>
  </body></html>`);
}

const stepper = (n) => `<div class="stepper"><div class="step ${n >= 1 ? 'active' : ''}"><div class="dot">1</div><small>Ủng hộ</small></div><div class="line ${n >= 2 ? 'active' : ''}"></div><div class="step ${n >= 2 ? 'active' : ''}"><div class="dot">2</div><small>Vượt Ads</small></div><div class="line ${n >= 3 ? 'active' : ''}"></div><div class="step ${n >= 3 ? 'active' : ''}"><div class="dot">3</div><small>Nhận Key</small></div></div>`;

async function hmac(data, secret, action) {
  const enc = new TextEncoder(); const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [action]);
  if (action === 'sign') { const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data)); return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  return key;
}
async function encodeSession(data, secret) { const payload = btoa(JSON.stringify(data)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); return payload + '.' + await hmac(payload, secret, 'sign'); }
async function decodeSession(token, secret) {
  if (!token || token.length > 4096) return null; const parts = token.split('.'); if (parts.length !== 2) return null;
  try {
    const enc = new TextEncoder(); const key = await hmac('', secret, 'import');
    const sigBytes = Uint8Array.from(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const ok = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(parts[0])); if (!ok) return null;
    const data = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'))); if (Date.now() > data.expiresAt) return null; return data;
  } catch { return null; }
}
function getCookie(request, name) { const c = request.headers.get('cookie') || ''; const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)')); return m ? m[1] : null; }
function setCookie(name, value, maxAge) { return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}; Secure`; }
async function getSession(request, env) { return await decodeSession(getCookie(request, 'sess'), env.SESSION_SECRET); }
async function saveSession(request, env, data) { data.expiresAt = Date.now() + 900000; const token = await encodeSession(data, env.SESSION_SECRET); return setCookie('sess', token, 900); }

const rl = new Map();
function checkRateLimit(key, limit) { const now = Date.now(); if (rl.size > 5000) for (const [k, v] of rl) if (now > v.resetAt) rl.delete(k); const e = rl.get(key); if (!e || now > e.resetAt) { rl.set(key, { count: 1, resetAt: now + 3600000 }); return { ok: true }; } if (e.count >= limit) return { ok: false, resetAt: e.resetAt }; e.count++; return { ok: true }; }

async function verifyTurnstile(token, ip, env) {
  if (!token) return { success: false, error: "Missing token" };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }) });
    const d = await r.json();
    if (!d.success) {
      log('warn', 'turnstile verify failed', { codes: d['error-codes'] });
      if (d['error-codes'].includes('missing-input-secret') || d['error-codes'].includes('invalid-input-secret')) return { success: false, error: "LỖI HỆ THỐNG: Secret Key không hợp lệ hoặc chưa được nhập. (missing-input-secret)" };
      if (d['error-codes'].includes('timeout-or-duplicate')) return { success: false, error: "Captcha đã hết hạn hoặc được sử dụng. Vui lòng thử lại." };
      return { success: false, error: "Captcha không hợp lệ (" + d['error-codes'][0] + ")" };
    }
    return { success: true };
  } catch (e) {
    return { success: false, error: "Lỗi kết nối tới Cloudflare." };
  }
}

async function shortenUrl(longUrl, env) {
  if (!env.LINK4M_API_TOKEN) return longUrl;
  try { const api = `https://link4m.co/api-shorten/v2?api=${env.LINK4M_API_TOKEN}&url=${encodeURIComponent(longUrl)}`; const res = await fetch(api); const data = await res.json(); return data.status === 'success' ? data.shortenedUrl : longUrl; } catch { return longUrl; }
}

async function fetchKeyFromIssuer(env) {
  try {
    const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY, 'User-Agent': 'KeySystem-Worker/11.0', 'Origin': 'https://getkeydpiconfig.site' }, body: JSON.stringify({ tier: env.KEY_TIER || 'Normal' }) });
    const data = await res.json().catch(() => null);
    if (data && data.success === true && data.key) return { ok: true, key: data.key, expiresAt: data.expires_at, durationHours: data.duration_hours };
    return { ok: false };
  } catch { return { ok: false }; }
}

// ============ ROUTER & API ============
function home(env) {
  return renderApp('Nhận Key Miễn Phí', `<div class="card hero"><div class="badge">✨ Hệ thống tự động 2026</div><h1>Nhận Key <span class="grad">Tự Động</span></h1><p class="sub">Hoàn thành 2 bước siêu tốc để nhận key bản quyền.</p><form method="POST" action="/start"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">🚀 Bắt đầu nhận Key</button></form><p style="font-size:12px; color:#94a3b8; margin-top:15px; font-weight:500;">Bảo mật bởi Cloudflare Turnstile</p></div>`);
}

async function start(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || 'local';
  if (!checkRateLimit('start:' + ip, 10).ok) return renderApp('Lỗi', `<div class="card center"><h2>Quá nhiều yêu cầu</h2><p class="sub">Vui lòng thử lại sau 1 giờ.</p></div>`);
  const form = await request.formData();
  const verify = await verifyTurnstile(form.get('cf-turnstile-response'), ip, env);
  if (!verify.success) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><p class="sub">${verify.error}</p><a href="/" class="btn btn-primary">Thử lại</a></div>`);
  const session = { sid: crypto.randomUUID(), ip, createdAt: Date.now(), subVerified: false, adsVerified: false, keyIssued: null };
  return redirect('/step1', await saveSession(request, env, session));
}

async function step1(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/'); if (s.subVerified) return redirect('/step2');
  return renderApp('Bước 1: Ủng hộ', `<div class="card">${stepper(1)}<h2>Ủng hộ Kênh YouTube</h2><p class="sub">Vui lòng bấm nút bên dưới để theo dõi kênh YouTube của chúng tôi.</p><div class="warning">⚠️ Vui lòng tắt VPN (nếu có).</div><a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" rel="noopener" class="btn btn-youtube">▶ Theo dõi Kênh YouTube</a><form method="POST" action="/verify/sub"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">✅ Tôi đã theo dõi</button></form></div>`);
}

async function verifySub(request, env) {
  const s = await getSession(request, env); if (!s) return redirect('/');
  const form = await request.formData();
  const verify = await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env);
  if (!verify.success) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><p class="sub">${verify.error}</p><a href="/step1" class="btn btn-primary">Thử lại</a></div>`);
  s.subVerified = true; return redirect('/step2', await saveSession(request, env, s));
}

async function step2(request, env) {
  const s = await getSession(request, env); if (!s || !s.subVerified) return redirect('/'); if (s.keyIssued) return redirect('/success');
  const adsUrl = await shortenUrl(new URL('/step2', request.url).toString(), env);
  return renderApp('Bước 2: Vượt Ads', `<div class="card">${stepper(2)}<h2>Vượt qua Quảng cáo</h2><p class="sub">Nhấn nút bên dưới, hoàn thành 1 quảng cáo ngắn, sau đó quay lại đây xác nhận.</p><a href="${adsUrl}" target="_blank" rel="noopener" class="btn btn-ads">📺 Mở Link Quảng Cáo</a><div class="warning" style="margin-top: 15px;">⚠️ Không tắt tab khi đang xem quảng cáo.</div><form method="POST" action="/verify/ads"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">🎁 Nhận Key Ngay</button></form></div>`);
}

async function verifyAds(request, env) {
  const s = await getSession(request, env); if (!s || !s.subVerified) return redirect('/');
  if (!checkRateLimit('key:' + s.ip, 5).ok) return renderApp('Lỗi', `<div class="card center"><h2>Đã đạt giới hạn</h2></div>`);
  const form = await request.formData();
  const verify = await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env);
  if (!verify.success) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><p class="sub">${verify.error}</p><a href="/step2" class="btn btn-primary">Thử lại</a></div>`);
  
  const issued = await fetchKeyFromIssuer(env);
  if (!issued.ok) return renderApp('Lỗi', `<div class="card center"><h2>Hệ thống đang bận</h2><a href="/step2" class="btn btn-primary">Thử lại</a></div>`);
  s.adsVerified = true; s.keyIssued = issued.key; s.keyDuration = issued.durationHours || 8; s.keyExpiresAt = issued.expiresAt || new Date(Date.now() + s.keyDuration * 3600000).toISOString();
  return redirect('/success', await saveSession(request, env, s));
}

async function success(request, env) {
  const s = await getSession(request, env); if (!s || !s.keyIssued) return redirect('/');
  const expireDate = new Date(s.keyExpiresAt); const timeStr = expireDate.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); const dateStr = expireDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  return renderApp('Thành công', `<div class="card center">${stepper(3)}<div class="success-icon">✓</div><h2>Lấy Key Thành Công!</h2><div class="expiry-info">⏰ Hạn sử dụng: <b>${s.keyDuration} giờ</b> (Đến ${timeStr} - ${dateStr})</div><p class="sub">Key đã được tự động copy.</p><div class="key-box"><span id="keyText">${s.keyIssued}</span><button class="copy-btn" data-copy="keyText" data-auto="1">📋 Copy</button></div><a href="/reset" class="btn btn-ghost">🔄 Nhận Key Khác</a></div>`);
}

async function reset(request) { return redirect('/', setCookie('sess', '', 0)); }

// ============ API XÁC THỰC TRẠM CHECK BOT ============
async function verifyCheckpoint(request, env) {
  try {
    const { token } = await request.json();
    const ip = request.headers.get('cf-connecting-ip') || 'local';
    const verify = await verifyTurnstile(token, ip, env);
    
    if (!verify.success) {
      log('error', 'checkpoint turnstile failed', { ip, error: verify.error });
      return new Response(JSON.stringify({ success: false, error: verify.error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    
    const passToken = crypto.randomUUID();
    const headers = new Headers({ 'Content-Type': 'application/json', 'Set-Cookie': `bot_passed=${passToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=900; Secure` });
    return new Response(JSON.stringify({ success: true }), { headers });
  } catch (e) {
    log('error', 'checkpoint exception', { msg: e.message });
    return new Response(JSON.stringify({ success: false, error: 'Lỗi máy chủ nội bộ.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');

    try {
      if (p === '/style.css') return withHeaders(new Response(APP_CSS, { headers: { 'Content-Type': 'text/css' } }));
      if (p === '/app.js') return withHeaders(new Response(APP_JS, { headers: { 'Content-Type': 'application/javascript' } }));
      if (p === '/api/verify-bot' && m === 'POST') return verifyCheckpoint(request, env);

      if (!botPassed && p !== '/api/verify-bot') {
        return renderCheckpoint(env);
      }

      if (p === '/' && m === 'GET') return home(env);
      if (p === '/start' && m === 'POST') return start(request, env);
      if (p === '/step1' && m === 'GET') return step1(request, env);
      if (p === '/verify/sub' && m === 'POST') return verifySub(request, env);
      if (p === '/step2' && m === 'GET') return step2(request, env);
      if (p === '/verify/ads' && m === 'POST') return verifyAds(request, env);
      if (p === '/success' && m === 'GET') return success(request, env);
      if (p === '/reset' && m === 'GET') return reset(request);
      
      return renderApp('Lỗi 404', `<div class="card center"><h2>Không tìm thấy trang</h2><a href="/" class="btn btn-primary">Về trang chủ</a></div>`);
    } catch (e) { log('error', e.message); return new Response('Internal Error', { status: 500 }); }
  }
};
