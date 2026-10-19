export const CSS_CHECKPOINT = `
/* Giữ nguyên phần Checkpoint vì nó đang chạy tốt */
:root { color-scheme: light only; --bg: #f4f6f9; --text: #09090b; --text-muted: #64748b; --primary: #4f46e5; --accent: #ec4899; --border: rgba(0,0,0,0.06); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79, 70, 229, 0.08), transparent 40%); }
.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(244, 246, 249, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
.logo { font-size: 18px; font-weight: 800; display: flex; align-items: center; gap: 10px; color: #0f172a; }
.logo-icon { width: 32px; height: 32px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 4px 15px rgba(79,70,229,0.5); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #059669; background: #ecfdf5; padding: 8px 16px; border-radius: 30px; border: 1px solid #a7f3d0; box-shadow: 0 0 15px rgba(16,185,129,0.2); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; animation: pulse 2s infinite; }
.time-badge { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: var(--primary); background: rgba(79, 70, 229, 0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(79, 70, 229, 0.2); font-family: 'JetBrains Mono', monospace; box-shadow: 0 0 15px rgba(79,70,229,0.1); }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 0 40px; align-items: center; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; margin: 30px auto; } }
.left { display: flex; flex-direction: column; animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800; color: var(--primary); margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 3px; background: var(--primary); border-radius: 2px; box-shadow: 0 0 10px var(--primary); }
h1 { font-size: 54px; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: #0f172a; letter-spacing: -0.04em; }
h1 span { background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.desc { font-size: 16px; line-height: 1.7; color: var(--text-muted); margin-bottom: 40px; font-weight: 500; max-width: 90%; }
.terminal-box { background: #0f172a; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #38bdf8; height: 160px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(15,23,42,0.2), inset 0 0 20px rgba(56,189,248,0.1); position: relative; border: 1px solid #1e293b; }
.terminal-box::before { content: 'root@system:~#'; color: #10b981; display: block; margin-bottom: 10px; font-weight: bold; opacity: 0.8; text-shadow: 0 0 5px #10b981; }
.term-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; text-shadow: 0 0 5px rgba(56,189,248,0.5); }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
.challenge-module { background: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 24px 60px -12px rgba(79,70,229,0.2), inset 0 0 0 1px rgba(255,255,255,1); position: relative; overflow: hidden; }
.challenge-module::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #4f46e5, #ec4899); box-shadow: 0 0 15px #ec4899; }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 24px; }
.help-text { text-align: center; font-size: 14px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
.help-text b { color: #0f172a; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 2px solid #cbd5e1; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #10b981; border-color: #10b981; color: #fff; font-size: 14px; box-shadow: 0 0 15px rgba(16,185,129,0.6); }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: #4f46e5; background: #4f46e5; box-shadow: 0 0 0 6px rgba(79,70,229,0.2), 0 0 20px rgba(79,70,229,0.4); }
.step-label { font-size: 13px; font-weight: 700; color: var(--text-muted); }
.step.completed .step-label, .step.active .step-label { color: #0f172a; }
.step-line { flex: 1; height: 2px; background: #e2e8f0; margin: 0 15px; margin-bottom: 28px; border-radius: 2px; }
.step-line.completed { background: #10b981; box-shadow: 0 0 10px #10b981; }
.step-line.active { background: linear-gradient(90deg, #10b981, #4f46e5); }
.right { display: grid; gap: 20px; animation: fadeInUp 0.8s ease-out 0.2s both; }
.dash-card { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,1); border-radius: 24px; padding: 28px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.05), 0 0 20px rgba(79,70,229,0.05); transition: all 0.3s ease; }
.dash-card:hover { transform: translateY(-4px); box-shadow: 0 25px 45px -5px rgba(0,0,0,0.08), 0 0 30px rgba(79,70,229,0.15); }
.dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.dash-title { font-size: 13px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.dash-value { font-size: 38px; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; letter-spacing: -1px; text-shadow: 0 0 20px rgba(79,70,229,0.3); }
.dash-value small { font-size: 18px; color: var(--text-muted); margin-left: 4px; }
.waveform { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin-top: 16px; }
.bar { flex: 1; background: #e2e8f0; border-radius: 3px; transition: height 0.15s ease-out, background 0.15s; }
.bar.active { background: linear-gradient(to top, #4f46e5, #ec4899); box-shadow: 0 0 12px rgba(79,70,229,0.6); }
.radar-wrapper { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 10px; }
.radar-container { width: 110px; height: 110px; position: relative; border-radius: 50%; border: 1px solid rgba(79,70,229,0.2); overflow: hidden; background: #f8fafc; box-shadow: inset 0 0 20px rgba(79,70,229,0.1), 0 0 20px rgba(79,70,229,0.1); }
.radar-sweep { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: conic-gradient(from 0deg, transparent 60%, rgba(79,70,229,0.4) 100%); animation: spin 2s linear infinite; border-radius: 50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 8px; height: 8px; background: #ec4899; border-radius: 50%; box-shadow: 0 0 15px #ec4899; animation: pulse 1.5s infinite; }
.radar-info h4 { font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
.radar-info p { font-size: 13px; font-weight: 600; color: var(--primary); }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; }
.stat-item { background: #fff; padding: 20px; text-align: center; }
.stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; }
.stat-val { font-size: 15px; font-weight: 800; color: #0f172a; }
`;

export const CSS_APP = `
:root { color-scheme: light only; --bg: #f0f4f8; --text: #0f172a; --text-muted: #64748b; --primary: #4f46e5; --accent: #ec4899; --card-bg: rgba(255, 255, 255, 0.85); --card-border: rgba(255, 255, 255, 0.6); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: 0.4; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(236, 72, 153, 0.06), transparent 40%); }
.bg-shapes { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; opacity: 0.04; }
.shape { position: absolute; border: 6px solid var(--accent); pointer-events: none; }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid var(--primary); border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }
.wrapper { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 20px; position: relative; z-index: 10; }
.container { position: relative; z-index: 10; width: 100%; max-width: 1000px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; animation: fadeInUp 0.6s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }
.glass-card { background: var(--card-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--card-border); border-radius: 32px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 30px rgba(79,70,229,0.05); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.glass-card:hover { transform: translateY(-6px); box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 0 40px rgba(79,70,229,0.15); }
.hero { text-align: center; }
.badge { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); box-shadow: 0 0 15px rgba(79,70,229,0.2); }
h1 { font-size: 42px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.04em; }
.grad { background: linear-gradient(135deg, #4f46e5, #ec4899, #4f46e5); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradientMove 4s linear infinite; text-shadow: 0 0 20px rgba(236,72,153,0.3); }
@keyframes gradientMove { to { background-position: 200% center; } }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500; max-width: 90%; margin-left: auto; margin-right: auto; }

/* SLIDING TIER SELECTOR SIÊU MƯỢT */
.tier-selector { position: relative; display: flex; background: rgba(0,0,0,0.04); padding: 6px; border-radius: 20px; margin-bottom: 24px; border: 1px solid rgba(0,0,0,0.05); box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); }
.tier-slider { position: absolute; top: 6px; left: 6px; width: calc(50% - 6px); height: calc(100% - 12px); background: #fff; border-radius: 14px; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.08), 0 0 15px rgba(79,70,229,0.15); z-index: 1; }
.tier-option { flex: 1; text-align: center; padding: 14px; cursor: pointer; font-size: 14px; font-weight: 700; color: var(--text-muted); transition: color 0.3s; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 8px; }
.tier-option input { display: none; }
.tier-option.selected { color: var(--primary); }
.tier-option[data-tier="VIP"].selected { color: var(--accent); }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: #e2e8f0; color: #64748b; transition: all 0.3s; }
.tier-option.selected .tier-badge { background: var(--primary); color: #fff; box-shadow: 0 0 10px var(--primary); }
.tier-option[data-tier="VIP"].selected .tier-badge { background: var(--accent); box-shadow: 0 0 10px var(--accent); }

/* BUTTON ANIMATION */
.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 700; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.4s; position: relative; overflow: hidden; }
.btn-primary { background: linear-gradient(135deg, #4f46e5, #7c3aed, #4f46e5); background-size: 200% auto; color: #fff; box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.5); animation: gradientMove 3s linear infinite; }
.btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 15px 35px -5px rgba(79, 70, 229, 0.7); }
.btn-primary:active { transform: translateY(0) scale(0.98); }
.btn-ghost { background: #f8fafc; border: 1px solid #e2e8f0; color: var(--text); }
.btn-youtube { background: linear-gradient(135deg, #ff0000, #cc0000); color: #fff; box-shadow: 0 10px 25px -5px rgba(255,0,0,0.4); }
.btn-youtube:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 15px 35px -5px rgba(255,0,0,0.6); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 10px 25px -5px rgba(245,158,11,0.4); }
.btn-ads:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 15px 35px -5px rgba(245,158,11,0.6); }

.info-col { display: flex; flex-direction: column; gap: 20px; }
.stat-card { display: flex; align-items: center; gap: 16px; padding: 24px; background: #ffffff; border: 1px solid var(--card-border); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.stat-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 0 20px rgba(79,70,229,0.08); }
.stat-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: rgba(79, 70, 229, 0.1); color: var(--primary); box-shadow: 0 0 15px rgba(79,70,229,0.2); transition: transform 0.3s; }
.stat-card:hover .stat-icon { transform: rotate(10deg) scale(1.1); }
.stat-info h4 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.stat-info p { font-size: 13px; color: var(--text-muted); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; display: inline-block; margin-right: 6px; animation: pulse 2s infinite; }

/* STEPPER */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border: 2px solid #cbd5e1; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 20px rgba(79,70,229,0.5); }
.step small { font-size: 12px; font-weight: 600; color: var(--text-muted); }
.step.active small { color: var(--primary); }
.line { flex: 1; height: 3px; background: #e2e8f0; margin: 0 12px; margin-bottom: 24px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); box-shadow: 0 0 10px var(--primary); }

/* KEY BOX */
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 20px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 20px; position: relative; overflow: hidden; }
.key-box::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(79,70,229,0.05), transparent); transform: translateX(-100%); animation: shine 3s infinite; }
@keyframes shine { 100% { transform: translateX(100%); } }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 24px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 2px; text-align: center; text-shadow: 0 0 15px rgba(79,70,229,0.3); }
.skeleton { background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; height: 24px; width: 100%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* PREMIUM FOOTER */
.footer { text-align: center; padding: 40px 20px; position: relative; z-index: 10; background: linear-gradient(180deg, transparent, rgba(255,255,255,0.6)); border-top: 1px solid rgba(0,0,0,0.04); margin-top: auto; }
.footer p { font-size: 13px; font-weight: 500; color: var(--text-muted); margin-bottom: 24px; letter-spacing: 0.5px; }
.footer p b { color: var(--text); font-weight: 800; font-family: 'JetBrains Mono', monospace; background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; color: transparent; }
.footer div { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.footer a { position: relative; display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 16px; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
.footer a svg { transition: transform 0.3s; }
.footer a:hover { transform: translateY(-5px) scale(1.02); }
.footer a:hover svg { transform: scale(1.2) rotate(-10deg); }
.footer a::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent); transform: skewX(-20deg); transition: 0.5s; }
.footer a:hover::before { left: 150%; }
.footer a.zalo { color: #0068FF; border-color: rgba(0, 104, 255, 0.2); box-shadow: 0 4px 15px rgba(0, 104, 255, 0.1); }
.footer a.zalo:hover { box-shadow: 0 15px 30px rgba(0, 104, 255, 0.2), inset 0 0 20px rgba(0, 104, 255, 0.05); border-color: #0068FF; }
.footer a.yt { color: #FF0000; border-color: rgba(255, 0, 0, 0.2); box-shadow: 0 4px 15px rgba(255, 0, 0, 0.1); }
.footer a.yt:hover { box-shadow: 0 15px 30px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 0, 0, 0.05); border-color: #FF0000; }

/* TOAST & FLOATING */
.toast-container { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
.toast { background: #0f172a; color: #fff; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); opacity: 0; transform: translateY(20px); animation: toastIn 0.3s forwards; }
.toast.success { border-left: 4px solid #10b981; }
.toast.error { border-left: 4px solid #ef4444; }
@keyframes toastIn { to { opacity: 1; transform: translateY(0); } }
@keyframes toastOut { to { opacity: 0; transform: translateY(20px); } }
.float-support { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #0068FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 10px 25px rgba(0, 104, 255, 0.5); z-index: 100; cursor: pointer; transition: transform 0.3s; text-decoration: none; animation: floatBtn 3s infinite ease-in-out; }
.float-support:hover { transform: scale(1.1); }
@keyframes floatBtn { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
.faq { margin-top: 40px; }
.faq-item { background: #fff; border: 1px solid var(--border); border-radius: 16px; margin-bottom: 10px; overflow: hidden; transition: all 0.3s; }
.faq-item:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.faq-item summary { padding: 20px; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: '+'; font-size: 20px; color: var(--primary); }
.faq-item[open] summary::after { content: '-'; }
.faq-item p { padding: 0 20px 20px; color: var(--text-muted); font-size: 14px; line-height: 1.6; }
`;

export const JS = `
const canvas = document.createElement('canvas');
canvas.id = 'network-bg';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let width, height, particles;
function initCanvas() {
  width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight;
  particles = [];
  const count = Math.floor(width * height / 12000);
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, radius: Math.random() * 2 + 1 });
  }
}
function drawNetwork() {
  ctx.clearRect(0, 0, width, height); ctx.fillStyle = 'rgba(79, 70, 229, 0.2)';
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]; const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = 'rgba(79, 70, 229, ' + (1 - dist/150) * 0.1 + ')'; ctx.stroke(); }
    }
  });
  requestAnimationFrame(drawNetwork);
}
window.addEventListener('resize', initCanvas); initCanvas(); drawNetwork();

const spotlight = document.createElement('div');
spotlight.className = 'spotlight';
document.body.prepend(spotlight);
document.addEventListener('mousemove', (e) => {
  spotlight.style.setProperty('--mouse-x', e.clientX + 'px');
  spotlight.style.setProperty('--mouse-y', e.clientY + 'px');
});

window.showToast = function(message, type = 'success') {
  const container = document.querySelector('.toast-container') || (() => {
    const c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); return c;
  })();
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = (type === 'success' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>') + ' ' + message;
  container.appendChild(toast);
  if(window.lucide) lucide.createIcons();
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
};

document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => {
    showToast('Đã sao chép Key vào bộ nhớ tạm!', 'success');
  });
});

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
  graphData.shift();
  let newVal = 10 + Math.random() * 15;
  if(Math.random() > 0.9) newVal = 60 + Math.random() * 40;
  else if(Math.random() > 0.7) newVal = 30 + Math.random() * 30;
  graphData.push(newVal);
  bars.forEach((bar, i) => { bar.style.height = graphData[i] + '%'; if(graphData[i] > 40) bar.classList.add('active'); else bar.classList.remove('active'); });
}, 100);
`;
