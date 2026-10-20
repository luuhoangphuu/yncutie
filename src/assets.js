export const CSS = `
:root{--bg:#07070b;--card:rgba(20,20,25,.6);--card-hi:rgba(30,30,38,.8);--line:rgba(255,255,255,.12);--text:#f4f4f7;--muted:#a1a1aa;--silver:#e4e4e7;--gray:#71717a;--ok:#10b981;--warn:#d4d4d8;--bad:#ef4444;--cyan:#22d3ee;--mx:50%;--my:0%;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
/* BACKGROUND */
#snow-canvas{position:fixed;inset:0;z-index:-1;pointer-events:none}
#particle-canvas{position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.6}
.bg-grid{position:fixed;inset:0;z-index:-3;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%);mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%)}
.bg-glow{position:fixed;top:-20%;left:50%;transform:translateX(-50%);width:min(800px,100vw);height:600px;background:radial-gradient(circle,rgba(255,255,255,.07),transparent 70%);pointer-events:none;z-index:-3;filter:blur(40px)}
.cursor-glow{position:fixed;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(600px circle at var(--mx) var(--my),rgba(255,255,255,.05),transparent 40%);display:none}
@media(pointer:fine){.cursor-glow{display:block}}
.aurora{position:fixed;inset:0;z-index:-3;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(120px);opacity:.1;background:radial-gradient(circle,#fff,transparent 70%)}
.aurora-blob:nth-child(1){top:-10%;left:-10%;animation:aurora1 25s infinite ease-in-out}
.aurora-blob:nth-child(2){top:40%;right:-15%;animation:aurora2 30s infinite ease-in-out}
.aurora-blob:nth-child(3){bottom:-15%;left:30%;animation:aurora3 20s infinite ease-in-out}
@keyframes aurora1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(150px,100px) scale(1.3)}}
@keyframes aurora2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-100px,-80px) scale(.85)}}
@keyframes aurora3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(80px,-100px) scale(1.15)}}
.page-loader{position:fixed;top:0;left:0;width:100%;height:3px;z-index:10001;overflow:hidden}
.page-loader-bar{height:100%;background:linear-gradient(90deg,#52525b,#f4f4f5,#a1a1aa,#f4f4f5);box-shadow:0 0 20px #fff;animation:pageLoad 1.6s cubic-bezier(.65,0,.35,1) forwards}
@keyframes pageLoad{0%{width:0%}40%{width:60%}70%{width:90%}100%{width:100%;opacity:0}}
.progress-bar{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#52525b,#f4f4f5,#52525b);box-shadow:0 0 15px #fff,0 0 30px rgba(255,255,255,.5);z-index:10000;transition:width .1s linear}
/* CORE */
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:calc(14px + env(safe-area-inset-top,0px)) clamp(16px,4vw,40px) 14px;background:rgba(7,7,11,.8);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;font-size:14px;color:#fff}
.logo i{width:12px;height:12px;border-radius:4px;background:linear-gradient(135deg,#f4f4f5,#a1a1aa,#52525b);box-shadow:0 0 15px rgba(255,255,255,.6)}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:600;padding:8px 14px;border-radius:10px;transition:.2s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.08)}
.pill{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;padding:6px 14px;border-radius:99px;border:1px solid var(--line);background:rgba(255,255,255,.03)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.wrap{width:100%;max-width:1080px;margin:0 auto;padding:clamp(28px,6vw,64px) clamp(16px,4vw,32px);flex:1;perspective:1000px}
.wrap.narrow{max-width:620px}
.hero{text-align:center;margin-bottom:34px}
h1{font-size:clamp(30px,6vw,52px);font-weight:800;line-height:1.1;letter-spacing:-.03em}
h1 em{font-style:normal;background:linear-gradient(135deg,#f4f4f5,#a1a1aa,#71717a);-webkit-background-clip:text;background-clip:text;color:transparent}
h2{font-size:22px;font-weight:800;letter-spacing:-.02em}
.lead{color:var(--muted);max-width:560px;margin:14px auto 0;font-size:16px}
.muted{color:var(--muted)}
.center{text-align:center}
.mt{margin-top:16px}
/* CARDS */
.card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:clamp(20px,4vw,30px);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .15s ease-out,box-shadow .3s,border-color .3s;will-change:transform;transform-style:preserve-3d}
.card:hover{border-color:rgba(255,255,255,.22);box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.2),0 0 40px rgba(255,255,255,.04)}
.card+.card{margin-top:16px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:760px){.grid3{grid-template-columns:1fr}}
.hide-m{display:inline-flex}
@media(max-width:760px){.hide-m{display:none!important}}
/* ALERT */
.alert{padding:14px 18px;border-radius:14px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.35);color:#fca5a5;font-weight:600;font-size:14px;margin-bottom:18px;display:flex;align-items:flex-start;gap:10px;line-height:1.5}
/* BUTTONS */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 20px;border:0;border-radius:16px;font:inherit;font-weight:800;font-size:15px;color:#fff;cursor:pointer;transition:transform .15s,box-shadow .2s,opacity .2s;overflow:hidden;text-decoration:none;min-height:52px}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
.btn-primary{background:linear-gradient(135deg,#f4f4f5 0%,#a1a1aa 55%,#71717a 100%);color:#09090b;box-shadow:0 10px 30px -5px rgba(255,255,255,.3),inset 0 1px 0 rgba(255,255,255,.8)}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);transform:skewX(-20deg);transition:left .7s}
.btn-primary:hover::after{left:150%}
.btn-warn{background:linear-gradient(135deg,#22d3ee,#0891b2);color:#001b22;box-shadow:0 10px 30px -5px rgba(34,211,238,.5),inset 0 1px 0 rgba(255,255,255,.4)}
.btn-warn::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);transition:left .7s}
.btn-warn:hover::after{left:150%}
.btn-ghost{background:rgba(255,255,255,.05);border:1px solid var(--line);color:#fff}
.btn+.btn,.btn+form,form+.btn{margin-top:12px}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.4);transform:scale(0);animation:rippleAnim .6s linear;pointer-events:none}
@keyframes rippleAnim{to{transform:scale(4);opacity:0}}
/* TIERS */
.tiers{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:22px 0}
@media(max-width:520px){.tiers{grid-template-columns:1fr}}
.tier{position:relative;display:block;cursor:pointer}
.tier input{position:absolute;opacity:0;inset:0;pointer-events:none}
.tier-body{display:block;border:1px solid var(--line);border-radius:18px;padding:18px;background:rgba(255,255,255,.02);transition:.3s;height:100%}
.tier-body b{display:block;font-size:16px;margin-bottom:4px;color:#fff}
.tier-body small{color:var(--muted);font-size:13px;display:block}
.tier:hover .tier-body{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.25);transform:translateY(-2px)}
.tier input:checked+.tier-body{border-color:rgba(255,255,255,.55);background:linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.03));box-shadow:0 0 0 1px rgba(255,255,255,.35),0 10px 30px rgba(0,0,0,.4),0 0 30px rgba(255,255,255,.12);transform:translateY(-1px)}
.tier input:checked+.tier-body b{color:#fff}
/* METER */
.meter{margin-top:6px}
.meter-top{display:flex;justify-content:space-between;font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px}
.meter-top b{color:#fff}
.bar-track{height:8px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,.5)}
.bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#e4e4e7,#71717a);box-shadow:0 0 10px rgba(255,255,255,.3);transition:width 1s cubic-bezier(.34,1.56,.64,1)}
/* SOCIAL */
.social-row{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}
.social-btn{display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 10px;border-radius:14px;font-weight:800;font-size:13px;transition:.3s;border:1px solid rgba(255,255,255,.1);position:relative;overflow:hidden;background:rgba(255,255,255,.03);color:#fff;min-height:48px}
.social-btn svg{width:20px;height:20px;flex:none}
.social-btn:hover{transform:translateY(-3px);box-shadow:0 10px 20px rgba(0,0,0,.3)}
.social-btn.zalo{border-color:rgba(0,104,255,.3);color:#4d9fff}
.social-btn.zalo:hover{background:rgba(0,104,255,.15);box-shadow:0 8px 25px rgba(0,104,255,.2)}
.social-btn.yt{border-color:rgba(225,29,46,.3);color:#ff4d5e}
.social-btn.yt:hover{background:rgba(225,29,46,.15);box-shadow:0 8px 25px rgba(225,29,46,.2)}
@media(max-width:520px){.social-row{grid-template-columns:1fr}}
/* CHECKPOINT */
.cp{display:grid;grid-template-columns:1.05fr .95fr;gap:36px;align-items:center}
@media(max-width:900px){.cp{grid-template-columns:1fr;gap:26px}}
.term{position:relative;background:#000;border:1px solid var(--line);border-radius:16px;padding:16px 18px;font-family:'JetBrains Mono',monospace;font-size:13px;height:140px;overflow:hidden;margin:22px 0;display:flex;flex-direction:column;gap:6px;box-shadow:inset 0 0 20px rgba(0,0,0,.8)}
.term::after{content:'';position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(34,211,238,.5),transparent);animation:termScan 3s linear infinite;pointer-events:none}
@keyframes termScan{0%{top:-2px;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
.term div{color:var(--muted);animation:termIn .3s ease-out}
.term div.ok{color:var(--ok)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}
.ts{position:relative;display:flex;justify-content:center;align-items:center;margin:8px 0 18px;min-height:72px;padding:10px;border-radius:16px;background:rgba(0,0,0,.35);border:1px solid var(--line);overflow:hidden;transition:border-color .3s,box-shadow .3s}
.ts.active{border-color:rgba(34,211,238,.4);box-shadow:0 0 30px rgba(34,211,238,.15),inset 0 0 20px rgba(34,211,238,.05)}
.ts.success{border-color:rgba(16,185,129,.5);box-shadow:0 0 40px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.08)}
.err{display:none;margin-top:14px;padding:12px;border-radius:12px;font-size:14px;font-weight:600;text-align:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.45);color:#fca5a5}
.trust-badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px;justify-content:center}
.trust-badges span{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.25);font-size:11px;font-weight:700;color:#6ee7b7;letter-spacing:.02em}
.trust-badges i{width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;animation:pulse 1.5s infinite}
/* DASH */
.dash-t{font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.dash-v{font-size:44px;font-weight:900;font-family:'JetBrains Mono',monospace;color:#fff;letter-spacing:-.03em;line-height:1;text-shadow:0 0 30px rgba(255,255,255,.3)}
.dash-v small{font-size:14px;color:var(--muted);font-weight:600;margin-left:4px;letter-spacing:0}
.wave{display:flex;align-items:flex-end;gap:2px;height:40px;margin-top:14px}
.wave i{flex:1;height:18%;background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.08));border-radius:2px;transition:height .2s ease,background .2s,box-shadow .2s}
.wave i.hi{background:linear-gradient(180deg,#22d3ee,rgba(34,211,238,.2));box-shadow:0 0 8px rgba(34,211,238,.6)}
/* RADAR */
.radar{display:flex;gap:20px;align-items:center}
.rd{position:relative;flex:none;width:100px;height:100px;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#000;overflow:hidden;box-shadow:0 0 20px rgba(255,255,255,.05),inset 0 0 20px rgba(0,0,0,.8)}
.rd::before{content:'';position:absolute;inset:18%;border-radius:50%;border:1px solid rgba(255,255,255,.08)}
.rd::after{content:'';position:absolute;inset:0;background:conic-gradient(from 0deg,transparent 0%,rgba(34,211,238,.5) 14%,transparent 14.2%);animation:spin 2.4s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.rd i{position:absolute;width:6px;height:6px;border-radius:50%;background:#fff;box-shadow:0 0 10px #fff;z-index:2;animation:ping 2s infinite}
.rd i:nth-child(1){top:28%;left:68%;animation-delay:0s}
.rd i:nth-child(2){top:66%;left:30%;animation-delay:.6s;width:4px;height:4px}
.rd i:nth-child(3){top:50%;left:20%;animation-delay:1.2s;width:5px;height:5px}
@keyframes ping{0%{transform:scale(1);opacity:1}80%,100%{transform:scale(3);opacity:0}}
/* STEPPER */
.stepper{display:flex;justify-content:space-between;gap:8px;list-style:none;margin-bottom:22px}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--muted);position:relative}
.stepper li b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line);background:rgba(0,0,0,.3);font-size:14px;position:relative;z-index:1;transition:.3s}
.stepper li+li::before{content:'';position:absolute;top:17px;right:50%;width:100%;height:2px;background:var(--line);transition:.3s}
.stepper li.done+li::before,.stepper li.on::before{background:linear-gradient(90deg,#f4f4f5,#71717a)}
.stepper li.on{color:#fff}
.stepper li.on b{background:linear-gradient(135deg,#f4f4f5,#a1a1aa);border-color:transparent;color:#09090b;box-shadow:0 0 20px rgba(255,255,255,.4)}
.stepper li.done b{background:var(--ok);border-color:transparent;color:#fff;box-shadow:0 0 15px rgba(16,185,129,.4)}
/* SUCCESS */
.badge-ok{width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:32px;font-weight:900;margin:0 auto 16px;box-shadow:0 0 40px rgba(16,185,129,.5),inset 0 2px 0 rgba(255,255,255,.4);animation:badgePop .6s cubic-bezier(.34,1.56,.64,1)}
@keyframes badgePop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
.keybox{position:relative;margin:20px 0;padding:22px;border-radius:16px;border:1.5px dashed rgba(34,211,238,.4);background:rgba(34,211,238,.03);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:clamp(16px,4vw,22px);word-break:break-all;user-select:all;color:#22d3ee;text-shadow:0 0 20px rgba(34,211,238,.4);box-shadow:inset 0 0 20px rgba(0,0,0,.5),0 0 30px rgba(34,211,238,.08);overflow:hidden}
.keybox::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(34,211,238,.15),transparent);animation:keyScan 3s infinite}
@keyframes keyScan{0%{left:-100%}100%{left:100%}}
/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:9999;display:none;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .3s}
.modal-overlay.show{opacity:1}
.modal-box{max-width:480px;width:100%;background:linear-gradient(180deg,rgba(30,30,38,.98),rgba(15,15,20,.98));border:1px solid var(--line);border-radius:20px;box-shadow:0 30px 80px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.1);overflow:hidden;transform:scale(.9);transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.modal-overlay.show .modal-box{transform:scale(1)}
.modal-header{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;border-bottom:1px solid var(--line);background:rgba(255,255,255,.02)}
.modal-title{font-size:16px;font-weight:800}
.modal-close{background:transparent;border:0;color:var(--muted);font-size:24px;cursor:pointer;width:32px;height:32px;border-radius:8px;display:grid;place-items:center;transition:.2s;font-family:inherit;line-height:1}
.modal-close:hover{background:rgba(255,255,255,.08);color:#fff}
.modal-body{padding:22px;color:var(--muted);font-size:14px;line-height:1.7;white-space:pre-wrap;max-height:50vh;overflow-y:auto}
.modal-footer{display:flex;gap:10px;padding:16px 22px;border-top:1px solid var(--line);background:rgba(0,0,0,.2)}
.modal-btn{flex:1;padding:12px;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.05);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:14px;transition:.2s;min-height:44px}
.modal-btn.snooze{background:transparent}
.modal-btn.close{background:linear-gradient(135deg,#f4f4f5,#a1a1aa);color:#09090b;border-color:transparent}
.modal-btn:hover{transform:translateY(-1px);filter:brightness(1.1)}
/* FEAT */
.feat{display:flex;gap:14px;align-items:flex-start}
.feat .ico{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font-weight:900;background:linear-gradient(135deg,#f4f4f5,#71717a);color:#09090b;box-shadow:0 4px 12px rgba(255,255,255,.15)}
.feat b{display:block;color:#fff;margin-bottom:2px}
.feat span{color:var(--muted);font-size:13px}
/* FAQ */
details{border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.02);margin-bottom:10px;overflow:hidden;transition:.2s}
details[open]{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.2)}
summary{padding:16px 20px;cursor:pointer;font-weight:700;font-size:15px;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:20px;font-weight:400;color:var(--muted);transition:transform .25s;line-height:1}
details[open] summary::after{transform:rotate(45deg);color:#fff}
details p{padding:0 20px 18px;color:var(--muted);font-size:14px;line-height:1.7}
/* ADMIN */
.f{display:block;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin:16px 0 6px}
input[type=text],input[type=password],input[type=email],textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:rgba(0,0,0,.4);color:#fff;font-family:inherit;font-size:14px;transition:.2s;outline:none}
input:focus,textarea:focus{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.05);box-shadow:0 0 0 3px rgba(255,255,255,.08)}
textarea{min-height:120px;resize:vertical;font-family:'JetBrains Mono',monospace;font-size:13px}
.row{display:flex;gap:10px}
.row input{flex:1}
.chk{display:flex;align-items:center;gap:10px;padding:12px;background:rgba(255,255,255,.03);border-radius:12px;border:1px solid var(--line);cursor:pointer;margin:16px 0;font-weight:600;font-size:14px;user-select:none}
.chk input{width:18px;height:18px;accent-color:#10b981;cursor:pointer}
.status{margin-top:16px;padding:12px 14px;border-radius:12px;font-size:14px;font-weight:700;text-align:center;min-height:20px;transition:.2s}
.status.ok{background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.35);color:#6ee7b7}
.status.bad{background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.35);color:#fca5a5}
/* FOOTER & ERROR */
.foot{margin-top:auto;padding:24px clamp(16px,4vw,40px) calc(24px + env(safe-area-inset-bottom,0px));text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--line);background:rgba(7,7,11,.6);backdrop-filter:blur(10px)}
.errcode{font-size:80px;font-weight:900;line-height:1;background:linear-gradient(135deg,#f4f4f5,#71717a);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.05em;margin-bottom:8px}
/* ANIMATIONS */
.reveal-opacity{opacity:0;transform:translateY(20px);transition:opacity .8s cubic-bezier(.25,.46,.45,.94),transform .8s cubic-bezier(.25,.46,.45,.94)}
.reveal-opacity.visible{opacity:1;transform:translateY(0)}
.magnetic{translate:0 0;transition:translate .3s cubic-bezier(.34,1.56,.64,1)}
@keyframes confettiFall{0%{opacity:1;transform:translateY(0) rotate(0deg)}100%{opacity:0;transform:translateY(100vh) rotate(720deg)}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;
export const COMMON_JS = `
(function(){
  var r=document.documentElement;
  window.addEventListener('pointermove',function(e){r.style.setProperty('--mx',e.clientX+'px');r.style.setProperty('--my',e.clientY+'px');},{passive:true});
  document.addEventListener('click',function(e){
    var b=e.target.closest('.btn');
    if(b){var r=b.getBoundingClientRect();var d=document.createElement('span');d.className='ripple';var s=Math.max(r.width,r.height);d.style.width=d.style.height=s+'px';d.style.left=(e.clientX-r.left-s/2)+'px';d.style.top=(e.clientY-r.top-s/2)+'px';b.appendChild(d);setTimeout(function(){d.remove();},600);}
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim(),old=c.textContent;
    function done(){c.textContent='Đã sao chép ✓';setTimeout(function(){c.textContent=old;},1800);}
    function fallback(){var t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy');done();}catch(_){}t.remove();}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,fallback);}else{fallback();}
  });
})();`;
export const CHECKPOINT_JS = `
(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  if(next.charAt(0)!=='/'||next.charAt(1)==='/')next='/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),
      help=document.getElementById('helpText'),err=document.getElementById('errorBox'),
      wave=document.getElementById('wave'),ts=document.querySelector('.ts');
  if(!term||!timerEl||!wave)return;
  var i,bars=[];for(i=0;i<32;i++){var b=document.createElement('i');b.style.height='18%';wave.appendChild(b);bars.push(b);}
  var waveInt=setInterval(function(){for(var k=0;k<bars.length;k++){var on=k>bars.length-10&&Math.random()>.35;bars[k].style.height=(on?(30+Math.random()*70):(10+Math.random()*20))+'%';bars[k].className=on?'hi':'';}},200);
  var logs=['Khởi tạo kết nối TLS 1.3...','Phân tích dấu vết trình duyệt...','Quét mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'],li=0;
  (function print(){if(li>=logs.length)return;var d=document.createElement('div');d.textContent='> '+logs[li];if(li===logs.length-1)d.className='ok';term.appendChild(d);li++;setTimeout(print,700);})();
  var t0=performance.now(),tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';},60);
  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(ts){ts.classList.remove('active','success');}if(window.turnstile){try{turnstile.reset();}catch(_){}}}
  window.onTurnstileError=function(){fail('Không tải được Captcha. Hãy tắt VPN/adblock rồi tải lại trang.');};
  window.onTurnstileExpired=function(){if(ts)ts.classList.remove('active','success');if(window.turnstile){try{turnstile.reset();}catch(_){}}};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(ts){ts.classList.add('active');}
    help.innerHTML='<b style="color:#22d3ee">Đang xác minh kết nối an toàn...</b>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(function(r){return r.json().catch(function(){return{success:false,error:'Lỗi Server ('+r.status+')'};});})
      .then(function(d){
        if(d&&d.success){
          clearInterval(tick);clearInterval(waveInt);
          if(ts){ts.classList.remove('active');ts.classList.add('success');}
          help.innerHTML='<b style="color:#10b981">✓ Xác minh thành công! Đang chuyển hướng...</b>';
          for(var k=0;k<bars.length;k++){bars[k].className='hi';bars[k].style.height='100%';}
          setTimeout(function(){location.href=next;},600);
        }else{fail((d&&d.error)||'Xác minh thất bại.');}
      })
      .catch(function(){fail('Lỗi mạng. Hãy thử lại.');});
  };
  var mo=new MutationObserver(function(){
    if(document.querySelector('.cf-turnstile iframe')&&ts)ts.classList.add('active');
  });
  if(ts)mo.observe(ts,{childList:true,subtree:true});
})();`;
export const MODAL_JS = `
(function(){
  var m=document.getElementById('noticeModal');if(!m)return;
  var snoozeUntil=localStorage.getItem('notice_snooze_until'),closed=sessionStorage.getItem('notice_closed');
  if((!snoozeUntil||Date.now()>parseInt(snoozeUntil))&&!closed){setTimeout(function(){m.style.display='flex';setTimeout(function(){m.classList.add('show');},10);},500);}
  function close(snooze){m.classList.remove('show');setTimeout(function(){m.style.display='none';},300);if(snooze){localStorage.setItem('notice_snooze_until',String(Date.now()+3600000));}else{sessionStorage.setItem('notice_closed','1');}}
  var s=m.querySelector('[data-snooze]'),c=m.querySelector('[data-close]');
  if(s)s.addEventListener('click',function(){close(true);});
  if(c)c.addEventListener('click',function(){close(false);});
  var x=m.querySelector('.modal-close');if(x)x.addEventListener('click',function(){close(false);});
  m.addEventListener('click',function(e){if(e.target===m)close(false);});
})();`;
export const ADMIN_JS = `
(function(){
  var $=function(id){return document.getElementById(id);},st=$('status');
  function say(m,ok){st.textContent=m;st.className='status '+(ok?'ok':'bad');}
  function call(body){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json();});}
  $('loadBtn').addEventListener('click',function(){
    say('Đang tải...',true);
    call({password:$('pw').value,action:'get'}).then(function(d){
      if(!d.success){say(d.error||'Lỗi.',false);return;}
      $('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';
      $('editor').style.display='block';say('Đã tải thông báo.',true);
    }).catch(function(){say('Lỗi mạng.',false);});
  });
  $('saveBtn').addEventListener('click',function(){
    say('Đang lưu...',true);
    call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}})
      .then(function(d){say(d.success?'Đã lưu thành công ✓':(d.error||'Lỗi.'),!!d.success);})
      .catch(function(){say('Lỗi mạng.',false);});
  });
})();`;
export const JS_FX = `
(function(){
  var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasFine=matchMedia('(pointer: fine)').matches;
  var isMobile=innerWidth<768;
  if(reduced)return;
  // 1. Snowfall (DPR-aware)
  (function(){
    var c=document.createElement('canvas');c.id='snow-canvas';document.body.prepend(c);
    var ctx=c.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);
    function size(){c.width=innerWidth*dpr;c.height=innerHeight*dpr;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';ctx.scale(dpr,dpr);}
    size();addEventListener('resize',function(){ctx.setTransform(1,0,0,1,0,0);size();});
    var flakes=[],count=isMobile?45:90;
    for(var i=0;i<count;i++){flakes.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+.3,vy:Math.random()*.5+.3,vx:(Math.random()-.5)*.3,s:Math.random()*2+.5,o:Math.random()*.4+.3});}
    function draw(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
      for(var i=0;i<flakes.length;i++){
        var p=flakes[i];
        ctx.fillStyle='rgba(255,255,255,'+p.o+')';
        if(p.r>1.1){ctx.shadowBlur=3;ctx.shadowColor='rgba(255,255,255,.7)';}else{ctx.shadowBlur=0;}
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
        p.y+=p.vy;p.x+=p.vx+Math.sin(p.y/40)*p.s*.08;
        if(p.y>innerHeight+10){p.y=-10;p.x=Math.random()*innerWidth;}
        if(p.y<-10){p.y=innerHeight+10;}
        if(p.x>innerWidth+10){p.x=-10;}
        if(p.x<-10){p.x=innerWidth+10;}
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();
  // 2. Particle Network
  if(!isMobile){
    var pc=document.createElement('canvas');pc.id='particle-canvas';document.body.prepend(pc);
    var pctx=pc.getContext('2d');
    function psize(){pc.width=innerWidth;pc.height=innerHeight;}
    psize();addEventListener('resize',psize);
    var pts=[];for(var j=0;j<40;j++){pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});}
    function pdraw(){
      pctx.clearRect(0,0,pc.width,pc.height);
      for(var a=0;a<pts.length;a++){
        var p1=pts[a];p1.x+=p1.vx;p1.y+=p1.vy;
        if(p1.x<0||p1.x>pc.width)p1.vx*=-1;if(p1.y<0||p1.y>pc.height)p1.vy*=-1;
        pctx.fillStyle='rgba(255,255,255,.3)';pctx.beginPath();pctx.arc(p1.x,p1.y,1.5,0,Math.PI*2);pctx.fill();
        for(var b=a+1;b<pts.length;b++){
          var p2=pts[b],dist=Math.hypot(p1.x-p2.x,p1.y-p2.y);
          if(dist<150){pctx.strokeStyle='rgba(255,255,255,'+(1-dist/150)*.15+')';pctx.lineWidth=1;pctx.beginPath();pctx.moveTo(p1.x,p1.y);pctx.lineTo(p2.x,p2.y);pctx.stroke();}
        }
      }
      requestAnimationFrame(pdraw);
    }
    pdraw();
  }
  // 3. Page loader
  var pl=document.createElement('div');pl.className='page-loader';pl.innerHTML='<div class="page-loader-bar"></div>';document.body.prepend(pl);
  setTimeout(function(){pl.remove();},1800);
  // 4. Progress bar
  var pb=document.createElement('div');pb.className='progress-bar';document.body.appendChild(pb);
  addEventListener('scroll',function(){
    var st=scrollY,dh=document.documentElement.scrollHeight-innerHeight;
    pb.style.width=dh>0?(st/dh*100)+'%':'0%';
  },{passive:true});
  // 5. Aurora
  var a=document.createElement('div');a.className='aurora';a.innerHTML='<div class="aurora-blob"></div><div class="aurora-blob"></div><div class="aurora-blob"></div>';document.body.prepend(a);
  // 6. Cursor glow (fine pointer only)
  if(hasFine){var cg=document.createElement('div');cg.className='cursor-glow';document.body.prepend(cg);}
  // 7. Reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.08});
  document.querySelectorAll('.card,.feat,.tiers,.social-row,.term,.wave,.rd,.keybox').forEach(function(el){el.classList.add('reveal-opacity');io.observe(el);});
  // 8. 3D Tilt (fine pointer only, throttled)
  if(hasFine){
    document.querySelectorAll('.card').forEach(function(card){
      var raf=null;
      card.addEventListener('mousemove',function(e){
        if(raf)return;
        raf=requestAnimationFrame(function(){
          raf=null;
          var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
          card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-3+'deg) rotateY('+((x-cx)/cx)*3+'deg) translateZ(0)';
        });
      });
      card.addEventListener('mouseleave',function(){card.style.transform='';});
    });
  }
  // 9. Magnetic (fine pointer only)
  if(hasFine){
    document.querySelectorAll('.btn,.social-btn,.tier').forEach(function(b){
      b.classList.add('magnetic');
      b.addEventListener('mousemove',function(e){
        var r=b.getBoundingClientRect();
        b.style.translate=(e.clientX-r.left-r.width/2)*.15+'px '+(e.clientY-r.top-r.height/2)*.15+'px';
      });
      b.addEventListener('mouseleave',function(){b.style.translate='0 0';});
    });
  }
})();`;
export const CONFETTI_JS = `
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var colors=['#10b981','#22d3ee','#f4f4f5','#a1a1aa','#fbbf24','#71717a'];
  var container=document.createElement('div');
  container.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:100;overflow:hidden';
  document.body.appendChild(container);
  for(var i=0;i<90;i++){
    (function(){
      var p=document.createElement('div');
      var color=colors[Math.floor(Math.random()*colors.length)];
      var size=4+Math.random()*6;
      var dur=2+Math.random()*2;
      var delay=Math.random()*.5;
      var rot=Math.random()*360;
      var shape=Math.random()>.5?'50%':'2px';
      p.style.cssText='position:absolute;left:'+(Math.random()*100)+'%;top:-20px;width:'+size+'px;height:'+size+'px;background:'+color+';border-radius:'+shape+';opacity:0;transform:rotate('+rot+'deg);animation:confettiFall '+dur+'s '+delay+'s cubic-bezier(.3,.6,.6,1) forwards';
      container.appendChild(p);
    })();
  }
  setTimeout(function(){container.remove();},5500);
})();`;
