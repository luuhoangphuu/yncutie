export const CSS_CHECKPOINT = `
:root { color-scheme: dark; --bg: #09090b; --text: #f4f4f5; --text-muted: #a1a1aa; --primary: #ffffff; --brand: #ff0055; --border: #27272a; --metal: linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 50%, #52525b 100%); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; background-image: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%); cursor: default; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.04), transparent 40%); }

.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(9, 9, 11, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); transition: all 0.3s; }
.top-nav.scrolled { padding: 10px 40px !important; background: rgba(9,9,11,0.95) !important; backdrop-filter: blur(30px) saturate(180%) !important; box-shadow: 0 4px 30px rgba(0,0,0,0.5); }
.logo { font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 10px; color: #fff; letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 0 15px rgba(255,255,255,0.3); }
.logo-icon { width: 32px; height: 32px; background: var(--metal); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #000; box-shadow: 0 0 20px rgba(255,255,255,0.2); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 8px 16px; border-radius: 30px; border: 1px solid var(--border); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; box-shadow: 0 0 10px #fff; animation: pulse 2s infinite; }
.time-badge { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 8px 16px; border-radius: 30px; border: 1px solid var(--border); font-family: 'JetBrains Mono', monospace; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }

.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 0 40px; align-items: center; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; margin: 30px auto; } }
.left { display: flex; flex-direction: column; animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 3px; background: #fff; border-radius: 2px; box-shadow: 0 0 10px #fff; }
h1 { font-size: 54px; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: #fff; letter-spacing: -0.04em; text-shadow: 0 0 20px rgba(255,255,255,0.2); position: relative; }
h1 span { background: var(--metal); -webkit-background-clip: text; background-clip: text; color: transparent; }
h1::before { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 100%; transform: translateY(-50%); background: radial-gradient(ellipse, rgba(255,255,255,0.06), transparent 70%); z-index: -1; animation: ambientPulse 4s ease-in-out infinite; pointer-events: none; }
@keyframes ambientPulse { 0%, 100% { opacity: 0.5; transform: translateY(-50%) scale(1); } 50% { opacity: 1; transform: translateY(-50%) scale(1.15); } }
.desc { font-size: 16px; line-height: 1.7; color: var(--text-muted); margin-bottom: 40px; font-weight: 500; max-width: 90%; }
.terminal-box { background: #000; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #fff; height: 160px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02); position: relative; border: 1px solid var(--border); }
.terminal-box::before { content: 'root@titanium:~#'; color: #fff; display: block; margin-bottom: 10px; font-weight: bold; opacity: 0.8; }
.term-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; color: #a1a1aa; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
.challenge-module { background: rgba(24, 24, 27, 0.6); backdrop-filter: blur(20px); border-radius: 24px; padding: 40px; box-shadow: 0 24px 60px -12px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1); position: relative; overflow: hidden; }
.challenge-module::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, transparent, #fff, transparent); box-shadow: 0 0 15px #fff; }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 24px; }
.help-text { text-align: center; font-size: 14px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
.help-text b { color: #fff; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #000; border: 2px solid #333; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #fff; border-color: #fff; color: #000; font-size: 14px; box-shadow: 0 0 15px rgba(255,255,255,0.4); }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: #fff; background: #000; box-shadow: 0 0 0 6px rgba(255,255,255,0.1), inset 0 0 0 4px #fff; }
.step-label { font-size: 13px; font-weight: 700; color: var(--text-muted); }
.step.completed .step-label, .step.active .step-label { color: #fff; }
.step-line { flex: 1; height: 2px; background: #333; margin: 0 15px; margin-bottom: 28px; border-radius: 2px; }
.step-line.completed { background: #fff; }
.step-line.active { background: linear-gradient(90deg, #fff, #555); }
.right { display: grid; gap: 20px; animation: fadeInUp 0.8s ease-out 0.2s both; }
.dash-card { background: rgba(24, 24, 27, 0.6); backdrop-filter: blur(24px); border: 1px solid var(--border); border-radius: 24px; padding: 28px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.5); transition: all 0.3s ease; }
.dash-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2); }
.dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.dash-title { font-size: 13px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.dash-value { font-size: 38px; font-weight: 800; color: #fff; font-family: 'JetBrains Mono', monospace; letter-spacing: -1px; }
.dash-value small { font-size: 18px; color: var(--text-muted); margin-left: 4px; }
.waveform { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin-top: 16px; }
.bar { flex: 1; background: #333; border-radius: 3px; transition: height 0.15s ease-out, background 0.15s; }
.bar.active { background: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.5); }
.radar-wrapper { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 10px; }
.radar-container { 
  width: 120px; height: 120px; 
  position: relative; border-radius: 50%; 
  border: 1px solid rgba(255,255,255,0.2); 
  overflow: hidden; 
  background: #050505; 
  box-shadow: inset 0 0 30px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1); 
}
.radar-grid { 
  position: absolute; inset: 0; 
  background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px); 
  background-size: 20px 20px; 
  border-radius: 50%;
}
.radar-circle { 
  position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); pointer-events: none; 
}
.radar-circle.c1 { inset: 20%; }
.radar-circle.c2 { inset: 40%; }
.radar-sweep { 
  position: absolute; inset: 0; 
  background: conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.4) 15%, transparent 15.1%); 
  animation: spin 2s linear infinite; border-radius: 50%; z-index: 2;
}
@keyframes spin { 100% { transform: rotate(360deg); } }

/* Các chấm mục tiêu */
.radar-target { 
  position: absolute; width: 6px; height: 6px; background: #fff; border-radius: 50%; 
  box-shadow: 0 0 10px #fff, 0 0 20px rgba(255,255,255,0.8); 
  animation: radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite; 
  z-index: 3; 
}
@keyframes radarPing { 
  0% { transform: scale(1); opacity: 1; box-shadow: 0 0 10px #fff; } 
  50% { transform: scale(3); opacity: 0; box-shadow: 0 0 20px #fff; } 
  100% { transform: scale(1); opacity: 0; } 
}

.radar-target.t1 { top: 30%; left: 70%; animation-delay: 0s; }
.radar-target.t2 { top: 70%; left: 30%; animation-delay: 0.6s; width: 5px; height: 5px; }
.radar-target.t3 { top: 50%; left: 20%; animation-delay: 1.2s; width: 4px; height: 4px; }

.radar-info h4 { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
.radar-info p { font-size: 13px; font-weight: 600; color: #a1a1aa; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; }
.stat-item { background: #111; padding: 20px; text-align: center; }
.stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; }
.stat-val { font-size: 15px; font-weight: 800; color: #fff; }
`;

export const CSS_APP = `
:root { color-scheme: dark; --bg: #09090b; --text: #f4f4f5; --text-muted: #a1a1aa; --primary: #ffffff; --brand: #e4e4e7; --border: #27272a; --metal: linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 50%, #52525b 100%); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; background-image: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 70%); cursor: default; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.04), transparent 40%); }
.bg-shapes { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; opacity: 0.03; }
.shape { position: absolute; border: 6px solid #fff; pointer-events: none; }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid #fff; border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }

.wrapper { flex: 1; display: flex; align-items: flex-start; justify-content: center; padding: 40px 20px; position: relative; z-index: 10; perspective: 1000px; }
.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; animation: fadeInUp 0.6s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }

.glass-card { background: rgba(24, 24, 27, 0.6); backdrop-filter: blur(30px) saturate(150%); -webkit-backdrop-filter: blur(30px) saturate(150%); border: 1px solid var(--border); border-radius: 24px; padding: 30px; box-shadow: 0 30px 60px -12px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.1); margin-bottom: 20px; transition: transform 0.1s ease-out, box-shadow 0.3s; transform-style: preserve-3d; position: relative; overflow: hidden; border-width: 1px 1px 2px 1px; border-color: #333 #333 #111 #333; }
.glass-card::after { content: ''; position: absolute; top: -50%; left: -100%; width: 60%; height: 200%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent); transform: skewX(-20deg); transition: left 1s; pointer-events: none; z-index: 1; }
.glass-card:hover { border-color: rgba(255,255,255,0.2); box-shadow: 0 40px 80px -12px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.2); transform: translateY(-6px); }
.glass-card:hover::after { left: 150%; }
.header-title { font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; transform: translateZ(20px); transition: text-shadow 0.3s; }
.header-title:hover { text-shadow: 0 0 20px rgba(255,255,255,0.6); }
.header-desc { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; transform: translateZ(15px); }

/* TELEGRAM BANNER */
.telegram-banner { background: #000; border-radius: 16px; padding: 20px; color: #fff; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; border: 1px solid var(--border); transform: translateZ(10px); }
.telegram-banner h4 { font-size: 16px; font-weight: 700; }
.telegram-btn { background: var(--metal); color: #000; padding: 12px; border-radius: 12px; font-weight: 800; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s; position: relative; overflow: hidden; box-shadow: 0 4px 15px rgba(255,255,255,0.1); }
.telegram-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transition: 0.5s; }
.telegram-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2); }
.telegram-btn:hover::before { left: 100%; }

/* 4-STEPPER */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; transform: translateZ(15px); }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; width: 25%; }
.step-line { position: absolute; top: 16px; left: 50%; width: 100%; height: 2px; background: #333; z-index: 0; }
.step:last-child .step-line { display: none; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #000; border: 2px solid #333; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; color: #a1a1aa; z-index: 1; transition: 0.3s; }
.step.active .step-circle { background: #fff; border-color: #fff; color: #000; box-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
.step-label { font-size: 12px; font-weight: 600; color: #a1a1aa; text-align: center; }
.step.active .step-label { color: #fff; }

/* SLIDING TIER SELECTOR */
.tier-selector { position: relative; display: flex; background: #000; padding: 6px; border-radius: 20px; margin-bottom: 24px; border: 1px solid var(--border); box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); transform: translateZ(20px); }
.tier-slider { position: absolute; top: 6px; left: 6px; width: calc(50% - 6px); height: calc(100% - 12px); background: var(--metal); border-radius: 14px; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 4px 15px rgba(255,255,255,0.1); z-index: 1; }
.tier-option { flex: 1; text-align: center; padding: 14px; cursor: pointer; font-size: 14px; font-weight: 700; color: var(--text-muted); transition: color 0.3s; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 8px; }
.tier-option input { display: none; }
.tier-option.selected { color: #000; }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: #333; color: #a1a1aa; transition: all 0.3s; }
.tier-option.selected .tier-badge { background: #000; color: #fff; }

/* KEY SELECTOR */
.key-input-group { background: #000; border: 1px solid #333; border-radius: 16px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; transform: translateZ(15px); }
.key-input-group label { font-size: 14px; font-weight: 600; color: #a1a1aa; }
.key-badge { background: rgba(255,255,255,0.1); color: #fff; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700; }

.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 800; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.4s; position: relative; overflow: hidden; transform: translateZ(25px); }
.btn::after { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(0,0,0,0.1); border-radius: 50%; transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }
.btn:active::after { width: 400px; height: 400px; transition: 0s; }
.btn:active, .telegram-btn:active, .tier-option:active, .btn-save:active { transform: translateY(2px) scale(0.97) !important; }
.btn-primary { background: var(--metal); color: #000; box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.2); }
.btn-primary:hover { transform: translateY(-3px) scale(1.02) translateZ(25px); box-shadow: 0 15px 35px -5px rgba(255, 255, 255, 0.4); }
.btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none !important; }
.btn-copied { background: #10b981 !important; color: #fff !important; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4) !important; }

/* DEVICE INFO CARD */
.device-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; transform: translateZ(15px); }
.device-item { background: #000; border: 1px solid #333; border-radius: 16px; padding: 16px; transition: 0.3s; }
.device-item:hover { border-color: #555; }
.device-label { font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; margin-bottom: 8px; }
.device-val { font-size: 20px; font-weight: 800; color: #fff; font-variant-numeric: tabular-nums; }
.device-sub { font-size: 12px; color: #a1a1aa; margin-top: 4px; line-height: 1.4; }
.device-sub b { color: #fff; }

/* PRICING & INFO */
.info-box { background: #000; border: 1px solid #333; border-radius: 16px; padding: 24px; transform: translateZ(10px); }
.info-box h4 { font-size: 16px; font-weight: 800; margin-bottom: 16px; color: #fff; }
.info-list { list-style: none; font-size: 14px; color: #a1a1aa; line-height: 1.6; }
.info-list li { margin-bottom: 8px; }
.info-list b { color: #fff; }
.pricing { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; font-weight: 600; color: #fff; }
.pricing div { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #111; border-radius: 8px; border: 1px solid #333; transition: all 0.3s; }
.pricing div:hover { border-color: var(--brand); background: rgba(255,255,255,0.05); }

/* FOOTER */
.footer { text-align: center; padding: 40px 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: auto; position: relative; z-index: 10; }
.footer p { font-size: 13px; font-weight: 500; color: var(--text-muted); }
.footer p span { background: var(--metal); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 900; text-transform: uppercase; }
.footer a { color: #fff; font-weight: 700; text-decoration: none; }

/* FLOATING WIDGET */
.float-widget { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: var(--metal); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #000; box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2); z-index: 100; cursor: pointer; transition: transform 0.3s; text-decoration: none; animation: floatBtn 3s infinite ease-in-out; }
.float-widget:hover { transform: scale(1.1); box-shadow: 0 15px 35px rgba(255, 255, 255, 0.4); }
@keyframes floatBtn { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }
.float-dot { position: absolute; top: 0; right: 0; width: 14px; height: 14px; background: #ef4444; border-radius: 50%; border: 2px solid #000; }

/* SOCIAL BUTTONS PRO MAX */
.social-btns { display: flex; gap: 12px; margin-top: 20px; transform: translateZ(20px); }
.social-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 14px; border-radius: 16px; font-weight: 800; font-size: 14px; text-decoration: none; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; transform-style: preserve-3d; }
.social-btn svg { transition: transform 0.3s; animation: breathing 3s infinite ease-in-out; }
@keyframes breathing { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
.social-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
.social-btn:hover::before { left: 100%; }

/* YouTube - Siêu Nổi */
.social-btn.yt { background: linear-gradient(135deg, #ff1a1a, #cc0000, #990000); color: #fff; border: 2px solid rgba(255, 255, 255, 0.3); box-shadow: 0 10px 25px -5px rgba(255, 0, 0, 0.6), 0 20px 40px -10px rgba(255, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 5px rgba(0, 0, 0, 0.3); transform: translateZ(0); }
.social-btn.yt:hover { transform: translateY(-8px) scale(1.05) translateZ(30px); border-color: rgba(255, 255, 255, 0.8); box-shadow: 0 25px 50px -5px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.6), inset 0 -2px 5px rgba(0, 0, 0, 0.3); }
.social-btn.yt:hover svg { transform: scale(1.3) rotate(-10deg); filter: drop-shadow(0 0 10px #fff); }

/* Zalo - Siêu Nổi */
.social-btn.zalo { background: linear-gradient(135deg, #1a88ff, #0068FF, #0044aa); color: #fff; border: 2px solid rgba(255, 255, 255, 0.3); box-shadow: 0 10px 25px -5px rgba(0, 104, 255, 0.6), 0 20px 40px -10px rgba(0, 104, 255, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 5px rgba(0, 0, 0, 0.3); transform: translateZ(0); }
.social-btn.zalo:hover { transform: translateY(-8px) scale(1.05) translateZ(30px); border-color: rgba(255, 255, 255, 0.8); box-shadow: 0 25px 50px -5px rgba(0, 104, 255, 0.8), 0 0 40px rgba(0, 104, 255, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.6), inset 0 -2px 5px rgba(0, 0, 0, 0.3); }
.social-btn.zalo:hover svg { transform: scale(1.3) rotate(10deg); filter: drop-shadow(0 0 10px #fff); }

/* SKELETON */
.skeleton { background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.skeleton-text { height: 16px; width: 100%; margin-bottom: 10px; }
.skeleton-text:last-child { width: 60%; }
.skeleton-box { height: 120px; width: 100%; border-radius: 16px; margin-bottom: 15px; }
.skeleton-btn { height: 56px; width: 100%; border-radius: 16px; }

/* TOAST */
.toast-container { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
.toast { background: #18181b; color: #fff; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); opacity: 0; transform: translateY(20px); animation: toastIn 0.3s forwards; border: 1px solid #333; }
.toast.success { border-left: 4px solid #10b981; }
.toast.error { border-left: 4px solid #ef4444; }
@keyframes toastIn { to { opacity: 1; transform: translateY(0); } }
@keyframes toastOut { to { opacity: 0; transform: translateY(20px); } }
`;

export const CSS_MOBILE = `
@media (max-width: 900px) {
  .wrapper { padding: 20px 15px; }
  .glass-card { padding: 24px; margin-bottom: 15px; }
  .header-title { font-size: 20px; }
  .device-grid { grid-template-columns: 1fr; }
  .stepper { margin-bottom: 20px; }
  .step-circle { width: 28px; height: 28px; font-size: 12px; }
  .step-label { font-size: 11px; }
  .glass-card { animation: mobileFloat 6s ease-in-out infinite; }
  .glass-card:nth-child(2) { animation-delay: -3s; }
  @keyframes mobileFloat {
    0% { transform: translateY(0px); box-shadow: 0 15px 35px -5px rgba(0,0,0,0.5); }
    50% { transform: translateY(-8px); box-shadow: 0 25px 45px -5px rgba(0,0,0,0.7); }
    100% { transform: translateY(0px); box-shadow: 0 15px 35px -5px rgba(0,0,0,0.5); }
  }
  .btn:active, .telegram-btn:active, .tier-option:active { transform: scale(0.96) !important; filter: brightness(0.8); }
  .float-widget { bottom: 20px; right: 20px; width: 50px; height: 50px; }
  .float-widget svg { width: 24px; height: 24px; }
  .glass-card::after { display: none; }
}
`;

export const CSS_MODAL = `
.modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); z-index: 9999; display: none; align-items: center; justify-content: center; padding: 20px; opacity: 0; transition: opacity 0.3s ease; }
.modal-overlay.show { display: flex; opacity: 1; }
.modal-box { background: #121214; border: 1px solid #27272a; border-radius: 24px; width: 100%; max-width: 420px; padding: 30px; box-shadow: 0 30px 80px -12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.05); transform: translateY(20px) scale(0.95); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; }
.modal-box::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, transparent, #f59e0b, transparent); box-shadow: 0 0 20px #f59e0b; }
.modal-overlay.show .modal-box { transform: translateY(0) scale(1); }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.modal-title { font-size: 16px; font-weight: 800; color: #f59e0b; display: flex; align-items: center; gap: 8px; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 0 20px rgba(245, 158, 11, 0.4); }
.modal-close-icon { background: #18181b; border: 1px solid #333; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #a1a1aa; cursor: pointer; transition: all 0.3s; }
.modal-close-icon:hover { background: #27272a; color: #fff; transform: rotate(90deg); }
.modal-content { background: #09090b; border-radius: 16px; padding: 24px; margin-bottom: 24px; font-size: 14px; line-height: 1.7; color: #e4e4e7; border: 1px solid #27272a; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5); }
.modal-content p { margin-bottom: 10px; }
.modal-content p:last-child { margin-bottom: 0; }
.modal-content b { color: #fff; font-weight: 800; }
.modal-actions { display: flex; flex-direction: column; gap: 12px; }
.btn-snooze { background: linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 50%, #52525b 100%); color: #000; padding: 16px; border-radius: 14px; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s; box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1); position: relative; overflow: hidden; }
.btn-snooze::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transition: left 0.6s; }
.btn-snooze:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2); }
.btn-snooze:hover::before { left: 100%; }
.btn-close { background: transparent; color: #a1a1aa; padding: 16px; border-radius: 14px; font-weight: 700; border: 1px solid #27272a; cursor: pointer; transition: all 0.3s; }
.btn-close:hover { background: #18181b; color: #fff; border-color: #52525b; }
`;

export const CSS_ADMIN = `
.admin-container { max-width: 800px; margin: 0 auto; width: 100%; }
.admin-card { background: rgba(24, 24, 27, 0.8); backdrop-filter: blur(20px); border: 1px solid #333; border-radius: 20px; padding: 30px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8); margin-bottom: 20px; }
.admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid #333; padding-bottom: 16px; }
.admin-title { font-size: 20px; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 10px; }
.admin-title i { color: var(--brand); }
.login-form { display: flex; flex-direction: column; gap: 16px; max-width: 400px; margin: 40px auto; text-align: center; }
.login-icon { width: 64px; height: 64px; background: rgba(255,0,85,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--brand); }
.input-field { background: #000; border: 1px solid #333; border-radius: 12px; padding: 16px; color: #fff; font-size: 15px; transition: 0.3s; outline: none; width: 100%; }
.input-field:focus { border-color: var(--brand); box-shadow: 0 0 15px rgba(255,0,85,0.2); }
.dashboard-content { display: none; }
.dashboard-content.active { display: block; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.form-group { margin-bottom: 20px; }
.form-label { display: block; font-size: 13px; font-weight: 600; color: #a1a1aa; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
.toggle-switch { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.toggle-track { width: 50px; height: 28px; background: #333; border-radius: 30px; position: relative; transition: 0.3s; }
.toggle-thumb { width: 24px; height: 24px; background: #fff; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: 0.3s; }
.toggle-switch input { display: none; }
.toggle-switch input:checked + .toggle-track { background: #10b981; }
.toggle-switch input:checked + .toggle-track .toggle-thumb { transform: translateX(22px); }
.toggle-label { font-size: 14px; font-weight: 600; color: #fff; }
.btn-save { background: var(--brand); color: #fff; padding: 16px; border-radius: 12px; font-weight: 800; font-size: 16px; border: none; cursor: pointer; transition: 0.3s; width: 100%; box-shadow: 0 10px 25px -5px rgba(255,0,85,0.4); }
.btn-save:hover { transform: translateY(-2px); box-shadow: 0 15px 35px -5px rgba(255,0,85,0.6); }
.btn-save:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.preview-box { background: #fff; border-radius: 24px; padding: 24px; max-width: 350px; margin: 20px auto 0; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.preview-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.preview-title { font-size: 16px; font-weight: 800; color: #f59e0b; display: flex; align-items: center; gap: 8px; text-transform: uppercase; }
.preview-content { background: #f8fafc; border-radius: 16px; padding: 20px; font-size: 14px; line-height: 1.6; color: #0f172a; border: 1px solid #e2e8f0; white-space: pre-wrap; }
`;

export const CSS_PREMIUM = `
/* Top Progress Bar */
.progress-bar { position: fixed; top: 0; left: 0; height: 3px; width: 0%; background: linear-gradient(90deg, #555, #fff, #555); box-shadow: 0 0 15px #fff, 0 0 30px rgba(255,255,255,0.5); z-index: 10000; transition: width 0.1s linear; }
/* Page Load Bar */
.page-loader { position: fixed; top: 0; left: 0; width: 100%; height: 3px; z-index: 10001; overflow: hidden; }
.page-loader-bar { height: 100%; background: linear-gradient(90deg, #555, #fff, #ff0055, #fff); box-shadow: 0 0 20px #fff; animation: pageLoad 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards; }
@keyframes pageLoad { 0% { width: 0%; } 40% { width: 60%; } 70% { width: 90%; } 100% { width: 100%; opacity: 0; } }
/* Aurora Background */
.aurora { position: fixed; inset: 0; z-index: -2; pointer-events: none; overflow: hidden; }
.aurora-blob { position: absolute; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); opacity: 0.15; }
.aurora-blob:nth-child(1) { top: -10%; left: -10%; background: radial-gradient(circle, #ffffff, transparent 70%); animation: aurora1 25s infinite ease-in-out; }
.aurora-blob:nth-child(2) { top: 40%; right: -15%; background: radial-gradient(circle, #a1a1aa, transparent 70%); animation: aurora2 30s infinite ease-in-out; }
.aurora-blob:nth-child(3) { bottom: -15%; left: 30%; background: radial-gradient(circle, #52525b, transparent 70%); animation: aurora3 20s infinite ease-in-out; }
@keyframes aurora1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(150px, 100px) scale(1.3); } }
@keyframes aurora2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-100px, -80px) scale(0.85); } }
@keyframes aurora3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(80px, -100px) scale(1.15); } }
/* Reveal & Stagger */
.reveal-opacity { opacity: 0; transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.reveal-opacity.visible { opacity: 1; }
.stagger-item { opacity: 0; animation: staggerIn 0.6s ease-out forwards; }
@keyframes staggerIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
/* Magnetic */
.magnetic { translate: 0 0; transition: translate 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
/* Live Pulse */
.live-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; animation: livePulse 1.5s ease-in-out infinite; display: inline-block; }
@keyframes livePulse { 0%, 100% { box-shadow: 0 0 10px #10b981; transform: scale(1); } 50% { box-shadow: 0 0 20px #10b981, 0 0 30px #10b981; transform: scale(1.2); } }
`;

export const JS = `
const canvas = document.createElement('canvas');
canvas.id = 'snow-bg';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let width, height, snowflakes;
function initCanvas() {
  width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight;
  snowflakes = [];
  const count = Math.floor(width * height / 10000);
  for (let i = 0; i < count; i++) {
    snowflakes.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.5 + 0.5, speedY: (Math.random() - 0.5) * 0.8, speedX: Math.random() * 0.8 - 0.4, sway: Math.random() * 2, swayPhase: Math.random() * Math.PI * 2, opacity: Math.random() * 0.5 + 0.2 });
  }
}
function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  snowflakes.forEach(p => {
    ctx.fillStyle = 'rgba(200, 200, 200, ' + p.opacity + ')';
    ctx.shadowBlur = 4; ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
    p.y += p.speedY; p.x += p.speedX + Math.sin(p.swayPhase) * p.sway; p.swayPhase += 0.02;
    if (p.y > height + 10) { p.y = -10; p.x = Math.random() * width; }
    if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
    if (p.x > width + 10) p.x = -10; if (p.x < -10) p.x = width + 10;
  });
  requestAnimationFrame(drawSnow);
}
window.addEventListener('resize', initCanvas); initCanvas(); drawSnow();

const spotlight = document.createElement('div'); spotlight.className = 'spotlight'; document.body.prepend(spotlight);
document.addEventListener('mousemove', (e) => { spotlight.style.setProperty('--mouse-x', e.clientX + 'px'); spotlight.style.setProperty('--mouse-y', e.clientY + 'px'); });

document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

function animateValue(obj, start, end, duration) {
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
function updateDeviceInfo() {
  const now = new Date();
  const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  const resetTime = new Date(vnTime);
  resetTime.setHours(24, 0, 0, 0);
  const timeUntilReset = resetTime - vnTime;
  const hoursLeft = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minsLeft = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  let limit = parseInt(localStorage.getItem('daily_limit') || '5');
  let success = parseInt(localStorage.getItem('success_count') || '0');
  let lastTime = localStorage.getItem('last_time') || 'Chưa có';
  let retries = parseInt(localStorage.getItem('retry_count') || '0');

  const elLimit = document.getElementById('dev-limit'); if(elLimit) animateValue(elLimit, 0, limit, 1000);
  const elSuccess = document.getElementById('dev-success'); if(elSuccess) animateValue(elSuccess, 0, success, 1000);
  const elLast = document.getElementById('dev-last'); if(elLast) elLast.innerText = lastTime;
  const elRetry = document.getElementById('dev-retry'); if(elRetry) elRetry.innerText = retries;
  const elReset = document.getElementById('dev-reset'); if(elReset) elReset.innerText = hoursLeft + 'h ' + minsLeft + 'p';
}
updateDeviceInfo();

setInterval(() => {
  const clockEl = document.getElementById('vn-clock');
  if(clockEl) {
    const vnTime = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
    clockEl.innerText = vnTime;
  }
}, 1000);

setTimeout(() => {
  const term = document.getElementById('terminal');
  if(term) {
    const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
    let idx = 0; let int = setInterval(() => { if(idx < logs.length) { term.innerHTML += '<div class="term-line">> ' + logs[idx] + '</div>'; idx++; } else { clearInterval(int); } }, 600);
  }
}, 500);

const barCount = 50; let graphData = new Array(barCount).fill(10);
setInterval(() => {
  const bars = document.querySelectorAll('.bar'); if(bars.length === 0) return;
  graphData.shift(); let newVal = 10 + Math.random() * 15;
  if(Math.random() > 0.9) newVal = 60 + Math.random() * 40; else if(Math.random() > 0.7) newVal = 30 + Math.random() * 30;
  graphData.push(newVal);
  bars.forEach((bar, i) => { bar.style.height = graphData[i] + '%'; if(graphData[i] > 40) bar.classList.add('active'); else bar.classList.remove('active'); });
}, 100);

window.showToast = function(message, type = 'success') {
  const container = document.querySelector('.toast-container') || (() => { const c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); return c; })();
  const toast = document.createElement('div'); toast.className = 'toast ' + type;
  toast.innerHTML = (type === 'success' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>') + ' ' + message;
  container.appendChild(toast); if(window.lucide) lucide.createIcons();
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
};

document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => {
    const orig = b.innerHTML;
    b.innerHTML = '<i data-lucide="check"></i> Đã copy!';
    b.classList.add('btn-copied');
    if(window.lucide) lucide.createIcons();
    localStorage.setItem('last_key', t.innerText);
    setTimeout(() => { b.innerHTML = orig; b.classList.remove('btn-copied'); if(window.lucide) lucide.createIcons(); }, 2000);
  });
});
`;

export const JS_MODAL = `
window.closeModal = function(snooze) {
  const modal = document.getElementById('customModal');
  if(modal) {
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
  if (snooze) {
    const snoozeTime = Date.now() + 3600000;
    localStorage.setItem('modal_snooze_until', snoozeTime);
  } else {
    sessionStorage.setItem('modal_closed', 'true');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('customModal');
  if (!modal) return;
  const snoozeUntil = localStorage.getItem('modal_snooze_until');
  const closed = sessionStorage.getItem('modal_closed');
  if ((!snoozeUntil || Date.now() > parseInt(snoozeUntil)) && !closed) {
    setTimeout(() => {
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    }, 1000);
  }
});
`;

export const JS_PREMIUM = `
// 2. Top Progress Bar
(function() {
  const bar = document.createElement('div'); bar.className = 'progress-bar'; document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const st = window.scrollY; const dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = dh > 0 ? (st / dh * 100) + '%' : '0%';
  });
})();

// 3. Page Load Bar
(function() {
  const loader = document.createElement('div'); loader.className = 'page-loader';
  loader.innerHTML = '<div class="page-loader-bar"></div>';
  document.body.prepend(loader);
  setTimeout(() => loader.remove(), 2000);
})();

// 4. Aurora Blobs
(function() {
  const aurora = document.createElement('div'); aurora.className = 'aurora';
  aurora.innerHTML = '<div class="aurora-blob"></div><div class="aurora-blob"></div><div class="aurora-blob"></div>';
  document.body.prepend(aurora);
})();

// 5. Scroll Reveal
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.info-box, .device-item, .pricing div, .challenge-module, .terminal-box').forEach(el => {
    el.classList.add('reveal-opacity'); observer.observe(el);
  });
})();

// 6. Stagger Children
(function() {
  const containers = document.querySelectorAll('.features, .device-grid, .pricing, .stepper, .info-list');
  containers.forEach(container => {
    Array.from(container.children).forEach((child, i) => {
      child.classList.add('stagger-item');
      child.style.animationDelay = (i * 0.08) + 's';
    });
  });
})();

// 7. Magnetic Buttons
(function() {
  document.querySelectorAll('.btn, .telegram-btn, .btn-save').forEach(btn => {
    btn.classList.add('magnetic');
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
      btn.style.translate = x + 'px ' + y + 'px';
    });
    btn.addEventListener('mouseleave', () => { btn.style.translate = '0 0'; });
  });
})();

// 8. Header Shrink
(function() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.top-nav');
    if (nav) { if (window.scrollY > 50) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  });
})();

// 10. Haptic
(function() {
  if ('vibrate' in navigator) {
    document.querySelectorAll('.btn, .tier-option, .telegram-btn').forEach(el => {
      el.addEventListener('click', () => navigator.vibrate(10));
    });
  }
})();
`;
