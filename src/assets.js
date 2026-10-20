export const CSS = `
/* ============ TITANIUM DESIGN TOKENS ============ */
:root{
  --bg:#0a0b0d;
  --bg-2:#101216;
  --surface:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.022));
  --surface-solid:#14161a;
  --field:rgba(0,0,0,.38);
  --border:rgba(255,255,255,.09);
  --border-strong:rgba(255,255,255,.2);
  --text:#f5f6f8;
  --muted:#9ba1ab;
  --dim:#6c727d;
  --silver:#d3d7de;
  --accent:#e7eaee;
  --ok:#86d8aa;
  --warn:#e3b96f;
  --danger:#f19a9a;
  --metal:linear-gradient(135deg,#ffffff 0%,#dfe2e7 30%,#a4abb6 62%,#eceff3 100%);
  --metal-text:linear-gradient(180deg,#ffffff 0%,#cfd4db 55%,#8f97a3 100%);
  --hairline:inset 0 1px 0 rgba(255,255,255,.09);
  --shadow:0 24px 48px -24px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.35);
  --r-lg:24px;--r-md:16px;--r-sm:12px;
  color-scheme:dark;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Manrope','Inter',system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;font-feature-settings:'cv11','ss01'}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--silver);outline-offset:3px;border-radius:8px}
::selection{background:rgba(231,234,238,.28)}

/* ============ BACKGROUND (quiet brushed-metal atmosphere) ============ */
.bg-glow{position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(900px 520px at 50% -8%,rgba(214,219,228,.16),transparent 70%),
    radial-gradient(700px 480px at 100% 100%,rgba(150,160,175,.09),transparent 70%),
    radial-gradient(600px 420px at 0% 70%,rgba(255,255,255,.04),transparent 70%)}
.bg-grid{position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:64px 64px;
  -webkit-mask-image:radial-gradient(ellipse 70% 55% at 50% 0%,#000 20%,transparent 75%);
  mask-image:radial-gradient(ellipse 70% 55% at 50% 0%,#000 20%,transparent 75%)}
#snow-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.spot{position:fixed;inset:0;z-index:1;pointer-events:none;
  background:radial-gradient(420px circle at var(--px,50%) var(--py,-20%),rgba(255,255,255,.055),transparent 70%)}

/* ============ NAV ============ */
.nav{position:fixed;top:max(16px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:8px 8px 8px 22px;background:rgba(16,18,22,.62);backdrop-filter:blur(24px) saturate(140%);-webkit-backdrop-filter:blur(24px) saturate(140%);border:1px solid var(--border);border-radius:99px;width:calc(100% - 32px);max-width:720px;box-shadow:var(--shadow),var(--hairline)}
.logo-text{font-weight:800;font-size:18px;letter-spacing:-.02em;display:flex;align-items:center;gap:8px;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent}
.logo-text svg{width:18px;height:18px;fill:var(--silver);flex:none}
.nav-links{display:flex;gap:2px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:600;padding:9px 18px;border-radius:99px;transition:color .2s,background .2s}
.nav-links a:hover{color:var(--text);background:rgba(255,255,255,.06)}
.nav-links a.on{color:#0b0c0e;background:var(--metal);box-shadow:0 1px 0 rgba(255,255,255,.6) inset,0 6px 16px -6px rgba(255,255,255,.35)}

/* ============ LAYOUT ============ */
.wrap{position:relative;z-index:10;width:100%;max-width:1120px;margin:0 auto;padding:128px clamp(16px,4vw,28px) 72px;flex:1}
.wrap.narrow{max-width:680px}
.center{text-align:center}

/* ============ SURFACES ============ */
.bento-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:28px}
.bento-item,.panel,.hud-container,.admin-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:var(--shadow),var(--hairline);position:relative;overflow:hidden}
.bento-item{padding:28px;display:flex;flex-direction:column;justify-content:space-between;transition:border-color .25s,transform .25s}
.bento-item:hover{border-color:var(--border-strong)}
.bento-item.col-span-2{grid-column:span 2}
.bento-item.col-span-4{grid-column:span 4}
.bento-item::before,.panel::before,.hud-container::before{content:'';position:absolute;inset:0;border-radius:inherit;background:radial-gradient(560px circle at var(--mx,50%) var(--my,0%),rgba(255,255,255,.06),transparent 45%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.bento-item:hover::before,.panel:hover::before,.hud-container:hover::before{opacity:1}
.bento-item>*,.panel>*,.hud-container>*{position:relative;z-index:1}
@media(max-width:900px){.bento-grid{grid-template-columns:1fr}.bento-item.col-span-2,.bento-item.col-span-4{grid-column:span 1}}

/* ============ TYPOGRAPHY ============ */
h1.hero-title{font-size:clamp(44px,7vw,76px);font-weight:800;line-height:1.02;letter-spacing:-.045em;margin-bottom:14px;background:linear-gradient(100deg,#8f97a3 0%,#ffffff 22%,#c9ced6 42%,#8f97a3 60%,#f2f4f7 82%,#a9b0bb 100%);background-size:240% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:sheen 2.8s cubic-bezier(.2,.7,.2,1) .2s 1 forwards}
@keyframes sheen{to{background-position:0 0}}
.hero-sub{color:var(--muted);font-size:17px;max-width:560px;margin-bottom:8px;min-height:56px}
.typewriter::after{content:'';display:inline-block;width:2px;height:1em;background:var(--silver);margin-left:3px;vertical-align:-2px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
h2{font-size:19px;font-weight:700;margin-bottom:14px;color:var(--text);letter-spacing:-.015em}
h3{font-weight:700;letter-spacing:-.01em}

/* ============ BUTTONS ============ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:14px;font-size:14px;font-weight:700;letter-spacing:-.005em;transition:transform .2s,box-shadow .2s,background .2s,border-color .2s,color .2s;text-decoration:none;border:1px solid transparent;font-family:inherit;overflow:hidden;cursor:pointer}
.btn:active{transform:scale(.98)}
.btn-primary{width:100%;min-height:54px;background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.55);box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 -1px 0 rgba(0,0,0,.12) inset,0 14px 30px -14px rgba(255,255,255,.35)}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,0 -1px 0 rgba(0,0,0,.12) inset,0 18px 36px -14px rgba(255,255,255,.5)}
.btn-secondary{background:rgba(255,255,255,.035);color:var(--text);border-color:var(--border);box-shadow:var(--hairline)}
.btn-secondary:hover{background:rgba(255,255,255,.075);border-color:var(--border-strong)}
.btn-download{width:100%;min-height:48px;font-size:13.5px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--text);border-color:var(--border-strong);box-shadow:var(--hairline)}
.btn-download:hover{background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.6)}
.btn-tele{width:100%;min-height:48px;font-size:14px;border-radius:12px;background:rgba(255,255,255,.04);color:var(--text);border-color:var(--border-strong);box-shadow:var(--hairline)}
.btn-tele:hover{background:rgba(255,255,255,.09)}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.28);transform:scale(0);animation:rippleAnim .55s ease-out;pointer-events:none}
.btn-primary .ripple{background:rgba(0,0,0,.14)}
@keyframes rippleAnim{to{transform:scale(4);opacity:0}}

/* ============ STEPPER ============ */
.stepper-wrap{display:flex;align-items:flex-start;margin:4px 0 22px}
.step{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;font-size:12px;font-weight:600;color:var(--dim);text-align:center}
.step::before{content:'';position:absolute;top:15px;right:50%;width:100%;height:1px;background:var(--border)}
.step:first-child::before{display:none}
.step-num{position:relative;z-index:1;width:31px;height:31px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;background:var(--surface-solid);border:1px solid var(--border);color:var(--dim)}
.step.active{color:var(--text)}
.step.active .step-num{background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.6);box-shadow:0 0 0 5px rgba(255,255,255,.07)}
.step.done{color:var(--silver)}
.step.done::before,.step.active::before{background:linear-gradient(90deg,rgba(255,255,255,.5),rgba(255,255,255,.25))}
.step.done .step-num{background:rgba(255,255,255,.1);color:var(--text);border-color:var(--border-strong)}

/* ============ FORM ============ */
.radio-group{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}
@media(max-width:480px){.radio-group{grid-template-columns:1fr}}
.radio-label{display:block;cursor:pointer}
.radio-label input{position:absolute;opacity:0;pointer-events:none}
.radio-label span{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid var(--border);border-radius:var(--r-sm);background:var(--field);font-size:13.5px;font-weight:600;color:var(--muted);transition:border-color .2s,background .2s,color .2s}
.radio-label span::before{content:'';flex:none;width:16px;height:16px;border-radius:50%;border:1.5px solid var(--dim);transition:border-color .2s,box-shadow .2s,background .2s}
.radio-label:hover span{border-color:var(--border-strong);color:var(--text)}
.radio-label input:checked+span{border-color:rgba(255,255,255,.5);background:rgba(255,255,255,.06);color:var(--text)}
.radio-label input:checked+span::before{border-color:#fff;background:#fff;box-shadow:inset 0 0 0 3.5px #14161a}
.radio-label input:focus-visible+span{outline:2px solid var(--silver);outline-offset:2px}
.input-group{margin-bottom:18px;text-align:left}
.input-group label{display:block;font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px}
.input-group input,.input-group textarea{width:100%;padding:14px 16px;border-radius:var(--r-sm);background:var(--field);border:1px solid var(--border);color:var(--text);font:inherit;font-size:14px;transition:border-color .2s,box-shadow .2s}
.input-group textarea{min-height:140px;resize:vertical}
.input-group input:focus,.input-group textarea:focus{outline:none;border-color:rgba(255,255,255,.5);box-shadow:0 0 0 4px rgba(255,255,255,.07)}
.input-group ::placeholder{color:var(--dim)}
.admin-card{max-width:560px;margin:0 auto;padding:40px 36px}

/* ============ CHECKPOINT ============ */
.checkpoint-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:stretch;max-width:1000px;margin:0 auto}
@media(max-width:850px){.checkpoint-layout{grid-template-columns:1fr}}
.panel{padding:40px;display:flex;flex-direction:column;justify-content:center}
.panel-title{font-size:clamp(30px,4vw,42px);font-weight:800;line-height:1.1;letter-spacing:-.035em;color:var(--text);margin-bottom:12px}
.panel-sub{color:var(--muted);font-size:15px;margin-bottom:28px}
.ts-box{position:relative;background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:36px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;overflow:hidden;transition:border-color .3s}
.ts-box::after{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);opacity:0;transition:opacity .3s}
.ts-box.active{border-color:rgba(255,255,255,.35)}
.ts-box.active::after{opacity:1;animation:scanline 1.8s linear infinite}
.ts-box.success{border-color:rgba(134,216,170,.45)}
@keyframes scanline{0%{top:0}100%{top:100%}}
.ts-help{font-size:14px;color:var(--muted)}
.ts-help strong{color:var(--text)}
.err{color:var(--danger)}

.hud-container{padding:30px;display:flex;flex-direction:column;gap:22px}
.hud-header{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid var(--border);padding-bottom:16px}
.hud-label{font-size:12px;color:var(--muted);font-weight:600}
.hud-value{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:34px;font-weight:700;color:var(--text);line-height:1.1;font-variant-numeric:tabular-nums}
.heartbeat-container{height:76px;display:flex;align-items:center;justify-content:center;gap:4px;background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;overflow:hidden}
.heartbeat-bar{width:5px;min-height:3px;background:linear-gradient(180deg,#fff,#8f97a3);border-radius:3px;transition:height .12s}
.hud-footer{display:flex;justify-content:space-between;font-size:13px;color:var(--muted);border-top:1px solid var(--border);padding-top:16px}
.hud-footer b{color:var(--text);font-weight:700}
.live-dot{width:8px;height:8px;background:var(--ok);border-radius:50%;box-shadow:0 0 0 0 rgba(134,216,170,.5);animation:pulse 2s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 8px rgba(134,216,170,0)}100%{box-shadow:0 0 0 0 rgba(134,216,170,0)}}

/* ============ APP CARDS / QUOTA / PRICE ============ */
.app-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:760px){.app-grid{grid-template-columns:1fr}}
.app-card{background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:22px;display:flex;flex-direction:column;transition:border-color .25s}
.app-card:hover{border-color:var(--border-strong)}
.app-icon{width:52px;height:52px;flex:none;border-radius:14px;background:linear-gradient(145deg,#4a5059,#1a1d22);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;color:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:var(--hairline)}
.app-warning{font-size:12.5px;font-weight:600;color:var(--warn)}
.app-list{font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.7;padding:0}
.app-list li{list-style:none}
.quota-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.quota-item{background:var(--field);border:1px solid var(--border);border-radius:14px;padding:14px 16px}
.quota-item p{font-size:12px;color:var(--muted);font-weight:600;margin-bottom:4px}
.quota-item b{font-size:20px;color:var(--text);font-weight:800;letter-spacing:-.02em}
.price-box{background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:8px 16px;margin-bottom:16px}
.price-row{display:flex;justify-content:space-between;padding:11px 0;color:var(--muted);font-size:13.5px;font-weight:600;border-bottom:1px dashed rgba(255,255,255,.1)}
.price-row:last-child{border-bottom:0}
.price-row span:last-child{color:var(--text);font-weight:800}
.alert{padding:14px 18px;border:1px solid rgba(241,154,154,.4);background:rgba(241,154,154,.07);color:var(--danger);border-radius:var(--r-md);font-weight:600;font-size:14px;margin-bottom:24px}

/* ============ KEY RESULT ============ */
.keybox{margin-bottom:24px;padding:28px 20px;border-radius:var(--r-md);border:1px solid var(--border-strong);background:var(--field);text-align:center;font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:700;font-size:clamp(18px,4vw,24px);word-break:break-all;color:var(--text);cursor:pointer;box-shadow:inset 0 0 40px rgba(0,0,0,.6),var(--hairline);transition:border-color .2s}
.keybox:hover{border-color:rgba(255,255,255,.45)}
.back-link{display:block;margin-top:22px;font-size:14px;font-weight:600;color:var(--muted);transition:color .2s}
.back-link:hover{color:var(--text)}

/* ============ MODAL ============ */
.modal-overlay{position:fixed;inset:0;background:rgba(5,6,8,.72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:100000;display:none;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.modal-overlay.show{display:flex;opacity:1}
.modal-content{background:linear-gradient(180deg,#1a1d22,#121418);border:1px solid var(--border-strong);border-radius:var(--r-lg);width:90%;max-width:480px;padding:30px;box-shadow:0 40px 80px rgba(0,0,0,.7),var(--hairline);position:relative;transform:translateY(14px);transition:transform .3s}
.modal-overlay.show .modal-content{transform:translateY(0)}
.modal-header{font-size:19px;font-weight:800;color:var(--text);margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;letter-spacing:-.02em}
.modal-close{background:rgba(255,255,255,.05);border:1px solid var(--border);width:32px;height:32px;border-radius:50%;color:var(--muted);font-size:18px;cursor:pointer;line-height:1;transition:color .2s,background .2s}
.modal-close:hover{color:var(--text);background:rgba(255,255,255,.1)}
.modal-body{font-size:14px;color:var(--muted);line-height:1.75;margin-bottom:24px;white-space:pre-wrap}
.modal-btn{width:100%;padding:14px;border-radius:12px;background:var(--metal);color:#0b0c0e;font-weight:800;font-family:inherit;border:1px solid rgba(255,255,255,.55);cursor:pointer;box-shadow:0 1px 0 rgba(255,255,255,.8) inset}

/* ============ FOOTER ============ */
.foot{position:relative;z-index:10;margin-top:auto;padding:28px;text-align:center;font-size:13px;color:var(--dim);border-top:1px solid var(--border);background:rgba(10,11,13,.7);backdrop-filter:blur(16px);font-weight:500}

/* ============ ENTRANCE (single orchestrated moment) ============ */
.reveal{animation:fadeIn .8s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
@keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}h1.hero-title{background-position:0 0}}

/* ============ DEPTH & POLISH ============ */
.bg-glow{animation:drift 22s ease-in-out infinite alternate}
@keyframes drift{from{transform:translate3d(0,0,0) scale(1)}to{transform:translate3d(0,-18px,0) scale(1.08)}}
/* viền sáng chạy theo con trỏ */
.bento-item::after,.panel::after,.hud-container::after,.cp-card::after,.cp-side::after{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(240px circle at var(--mx,50%) var(--my,0%),rgba(255,255,255,.6),transparent 62%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}
.bento-item:hover::after,.panel:hover::after,.hud-container:hover::after,.cp-card:hover::after,.cp-side:hover::after{opacity:1}
/* ánh kim quét qua nút chính */
.btn-primary::before{content:'';position:absolute;top:0;left:-120%;width:55%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.75),transparent);transform:skewX(-20deg);transition:left .75s cubic-bezier(.2,.7,.2,1);pointer-events:none}
.btn-primary:hover::before{left:150%}
.step.active .step-num{animation:stepPulse 2.4s ease-in-out infinite}
@keyframes stepPulse{50%{box-shadow:0 0 0 9px rgba(255,255,255,0)}}
.hud-value small{font-size:16px;color:var(--muted);margin-left:2px}

/* ============ CHECKPOINT PRO ============ */
.cp{display:grid;grid-template-columns:1.1fr .9fr;gap:22px;max-width:980px;margin:0 auto;align-items:stretch}
@media(max-width:850px){.cp{grid-template-columns:1fr}}
.cp-card,.cp-side{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:var(--shadow),var(--hairline);position:relative;overflow:hidden}
.cp-card>*,.cp-side>*{position:relative;z-index:1}
.cp-card{padding:42px 36px 34px;display:flex;flex-direction:column;align-items:center;text-align:center}
.cp-side{padding:28px;display:flex;flex-direction:column;gap:20px}

.cp-orb{position:relative;width:112px;height:112px;margin-bottom:28px;display:grid;place-items:center}
.cp-orb::before{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid rgba(255,255,255,.28);animation:ping 2.8s ease-out infinite}
@keyframes ping{from{transform:scale(1);opacity:.7}to{transform:scale(1.9);opacity:0}}
.cp-ring{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.95) 28%,rgba(255,255,255,0) 52%);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));animation:spin 2.4s linear infinite}
.cp-ring.r2{inset:-12px;opacity:.35;animation-duration:4.2s;animation-direction:reverse}
@keyframes spin{to{transform:rotate(360deg)}}
.cp-core{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#30343c,#121418);border:1px solid var(--border-strong);box-shadow:var(--hairline),0 0 44px rgba(255,255,255,.08);transition:box-shadow .4s}
.cp-core svg{width:34px;height:34px;stroke:var(--silver);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;transition:stroke .3s}
.cp-core .tick{opacity:0;stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .5s .1s,opacity .2s}
.cp-orb.verifying .cp-ring{animation-duration:.8s}
.cp-orb.ok::before{animation:none;opacity:0}
.cp-orb.ok .cp-ring{animation:none;background:conic-gradient(var(--ok),var(--ok))}
.cp-orb.ok .cp-ring.r2{opacity:0}
.cp-orb.ok .cp-core{box-shadow:var(--hairline),0 0 56px rgba(134,216,170,.28)}
.cp-orb.ok .cp-core svg{stroke:var(--ok)}
.cp-orb.ok .cp-core .tick{opacity:1;stroke-dashoffset:0}
.cp-orb.ok .cp-core .shield{opacity:.35}
.cp-orb.fail::before{animation:none;opacity:0}
.cp-orb.fail .cp-ring{animation:none;background:conic-gradient(var(--danger),var(--danger))}
.cp-orb.fail .cp-core svg{stroke:var(--danger)}

.cp-title{font-size:clamp(28px,4vw,38px);font-weight:800;line-height:1.1;letter-spacing:-.035em;margin-bottom:10px}
.cp-sub{color:var(--muted);font-size:15px;max-width:380px;margin-bottom:26px}
.cp-steps{list-style:none;display:flex;gap:8px;margin:0 0 22px;padding:0;width:100%}
.cp-steps li{flex:1;font-size:12px;font-weight:600;color:var(--dim);text-align:left;transition:color .3s}
.cp-steps li::before{content:'';display:block;height:3px;border-radius:3px;background:rgba(255,255,255,.1);margin-bottom:8px;transition:background .4s}
.cp-steps li.done{color:var(--silver)}
.cp-steps li.done::before{background:var(--metal)}
.cp-steps li.active{color:var(--text)}
.cp-steps li.active::before{background:linear-gradient(90deg,rgba(255,255,255,.12),#fff,rgba(255,255,255,.12));background-size:200% 100%;animation:barflow 1.3s linear infinite}
@keyframes barflow{from{background-position:200% 0}to{background-position:-200% 0}}
.cp-card .ts-box{width:100%;margin-bottom:18px;min-height:96px}
.cp-meta{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:22px;padding-top:18px;border-top:1px solid var(--border);width:100%;font-size:12.5px;color:var(--dim)}
.cp-meta b{color:var(--silver);font-weight:700}

.cp-side-head{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:16px;border-bottom:1px solid var(--border)}
.cp-state{font-size:14px;font-weight:700;display:flex;align-items:center;gap:8px;justify-content:flex-end}
.cp-logbox{background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:16px;flex:1;min-height:200px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden}
.cp-log{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;line-height:1.5}
.cp-log li{display:flex;gap:12px;animation:fadeIn .4s both}
.cp-log time{color:var(--dim);flex:none;min-width:42px}
.cp-log span{color:var(--muted)}
.cp-log li.ok span{color:var(--ok)}
.cp-log li.warn span{color:var(--warn)}
.cp-log li.err span{color:var(--danger)}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Soft light that follows the pointer (desktop only)
    var spot = document.querySelector('.spot');
    if (spot && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', function(e) {
        spot.style.setProperty('--px', e.clientX + 'px');
        spot.style.setProperty('--py', e.clientY + 'px');
      }, { passive: true });
    }

    // Per-card highlight
    document.querySelectorAll('.bento-item, .panel, .hud-container').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });

    // Button ripple
    document.body.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn');
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      ripple.className = 'ripple';
      var size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });

    // Count-up cho các con số
    document.querySelectorAll('[data-count]').forEach(function(el) {
      var end = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (end === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = end; return; }
      var s0 = performance.now();
      (function step(now) {
        var p = Math.min(1, (now - s0) / 1000);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(s0);
    });

    // Notice modal
    var modal = document.getElementById('noticeModal');
    if (modal) {
      setTimeout(function() { modal.classList.add('show'); }, 700);
      var hide = function() { modal.classList.remove('show'); };
      var closeBtn = modal.querySelector('.modal-close');
      var actionBtn = modal.querySelector('.modal-btn');
      if (closeBtn) closeBtn.onclick = hide;
      if (actionBtn) actionBtn.onclick = hide;
      modal.addEventListener('click', function(e) { if (e.target === modal) hide(); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hide(); });
    }

    // Typewriter (respects reduced motion)
    var typeEl = document.querySelector('.typewriter');
    if (typeEl) {
      var text = typeEl.getAttribute('data-text') || '';
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        typeEl.textContent = text;
      } else {
        var i = 0;
        typeEl.textContent = '';
        (function type() {
          if (i < text.length) {
            typeEl.textContent += text.charAt(i++);
            setTimeout(type, 22);
          }
        })();
      }
    }
  } catch (e) { console.warn('UI script failed', e); }
});

window.__toast = function(msg) {
  var t = document.createElement('div');
  t.setAttribute('role', 'status');
  t.style.cssText = 'position:fixed;bottom:max(28px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);background:rgba(24,27,32,.92);color:#f5f6f8;padding:13px 26px;border-radius:99px;font-weight:600;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.18);box-shadow:0 14px 40px rgba(0,0,0,.6);transition:opacity .3s';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { t.style.opacity = '0'; setTimeout(function() { t.remove(); }, 300); }, 2200);
};

document.addEventListener('click', function(e) {
  var c = e.target.closest('[data-copy]'); if (!c) return;
  var el = document.getElementById(c.getAttribute('data-copy')); if (!el) return;
  if (navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function() { window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var t0 = performance.now();
  var $ = function(id) { return document.getElementById(id); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer = $('timer'), logEl = $('cpLog'), orb = $('orb'), errBox = $('errorBox'), tsWrap = $('tsWrap'), help = $('helpText');

  var tick = setInterval(function() {
    timer.innerHTML = ((performance.now() - t0) / 1000).toFixed(2) + '<small>s</small>';
  }, 50);

  function log(msg, kind) {
    var li = document.createElement('li');
    if (kind) li.className = kind;
    var t = document.createElement('time'); t.textContent = ((performance.now() - t0) / 1000).toFixed(2) + 's';
    var s = document.createElement('span'); s.textContent = msg;
    li.appendChild(t); li.appendChild(s); logEl.appendChild(li);
    while (logEl.children.length > 7) logEl.removeChild(logEl.firstChild);
  }
  function step(n, state) {
    var li = document.querySelector('.cp-steps li[data-s="' + n + '"]');
    if (li) li.className = state;
  }
  function setOrb(state) { orb.className = 'cp-orb' + (state ? ' ' + state : ''); }
  function showErr(m) { errBox.style.display = 'block'; errBox.textContent = m; }

  // Nhịp kết nối (trang trí)
  var hb = $('heartbeat');
  if (hb) {
    for (var i = 0; i < 32; i++) { var b = document.createElement('div'); b.className = 'heartbeat-bar'; b.style.height = '12%'; hb.appendChild(b); }
    var bars = hb.querySelectorAll('.heartbeat-bar');
    if (!reduce) setInterval(function() {
      for (var j = 0; j < bars.length; j++) bars[j].style.height = (Math.random() > 0.82 ? (40 + Math.random() * 60) : (10 + Math.random() * 22)) + '%';
    }, 140);
  }

  // Nhật ký phản ánh đúng các sự kiện thật của trang
  log('Khởi tạo phiên xác minh');
  setTimeout(function() { log('Kết nối HTTPS an toàn', 'ok'); step(1, 'done'); step(2, 'active'); }, 350);
  var poll = setInterval(function() {
    if (window.turnstile) { clearInterval(poll); log('Đã tải Cloudflare Turnstile', 'ok'); log('Đang chờ bạn xác nhận'); }
    else if (performance.now() - t0 > 10000) { clearInterval(poll); log('Tải captcha chậm, hãy kiểm tra mạng', 'warn'); }
  }, 250);

  var busy = false;
  window.onTurnstileError = function() {
    setOrb('fail'); showErr('Lỗi Captcha. Hãy tải lại trang và thử lại.'); log('Captcha gặp lỗi', 'err');
  };
  window.onTurnstileSuccess = function(token) {
    if (busy) return; busy = true;
    errBox.style.display = 'none';
    tsWrap.classList.add('active'); setOrb('verifying');
    step(2, 'done'); step(3, 'active');
    help.innerHTML = '<strong>Đang xác minh...</strong>';
    log('Đã nhận token từ Turnstile', 'ok'); log('Gửi token tới máy chủ');
    fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (d && d.success) {
          clearInterval(tick);
          tsWrap.className = 'ts-box success'; setOrb('ok'); step(3, 'done');
          log('Máy chủ xác nhận hợp lệ', 'ok');
          help.innerHTML = '<strong style="color:var(--ok)">✓ Thành công! Đang chuyển...</strong>';
          setTimeout(function() { location.href = $('app').getAttribute('data-next'); }, 900);
        } else {
          fail((d && d.error) || 'Xác minh thất bại. Vui lòng thử lại.');
        }
      })
      .catch(function() { fail('Lỗi mạng. Vui lòng thử lại.'); });
  };
  function fail(msg) {
    tsWrap.classList.remove('active'); setOrb('fail'); step(3, ''); step(2, 'active');
    showErr(msg); log(msg, 'err');
    help.innerHTML = 'Bấm vào ô <strong>Verify you are human</strong> để thử lại.';
    busy = false;
    setTimeout(function() { setOrb(''); }, 1600);
    if (window.turnstile) turnstile.reset();
  }
})();`;

// Tuyết nền nhiều tầng: xa (nhỏ, mờ, chậm) -> gần (to, nhoè, nhanh), lệch nhẹ theo con trỏ để có chiều sâu.
export const JS_FX = `(function(){
  try {
    var c = document.getElementById('snow-canvas');
    if (!c) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = c.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var wind = 0, windTarget = 0, tick = 0, running = true;
    var px = 0, py = 0, tx = 0, ty = 0; // lệch theo con trỏ (-1..1)

    function sprite(soft) {
      var s = document.createElement('canvas'); s.width = s.height = 64;
      var g = s.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      if (soft) { r.addColorStop(0, 'rgba(255,255,255,.85)'); r.addColorStop(.55, 'rgba(255,255,255,.35)'); r.addColorStop(1, 'rgba(255,255,255,0)'); }
      else { r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.4, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)'); }
      g.fillStyle = r; g.fillRect(0, 0, 64, 64); return s;
    }
    var SHARP = sprite(false), SOFT = sprite(true);

    // k: tỉ lệ số lượng, r: bán kính, v: tốc độ rơi, a: độ đậm, par: độ lệch parallax (px)
    var LAYERS = [
      { k: 0.55, r: [0.7, 1.5],  v: [0.25, 0.6], a: [0.25, 0.5],  par: 8,  img: SHARP, wind: 0.4 },
      { k: 0.35, r: [1.3, 2.6],  v: [0.6, 1.1],  a: [0.45, 0.8],  par: 20, img: SHARP, wind: 0.8 },
      { k: 0.10, r: [3.5, 7],    v: [1.3, 2.4],  a: [0.18, 0.4],  par: 46, img: SOFT,  wind: 1.4 }
    ];
    var flakes = [];

    function make(L, anywhere) {
      var rr = L.r[0] + Math.random() * (L.r[1] - L.r[0]);
      return { L: L, x: Math.random() * W, y: anywhere ? Math.random() * H : -rr * 4, r: rr,
        vy: L.v[0] + Math.random() * (L.v[1] - L.v[0]), vx: (Math.random() - 0.5) * 0.7,
        sway: Math.random() * 0.9 + 0.15, phase: Math.random() * 6.28, spin: 0.004 + Math.random() * 0.016,
        a: L.a[0] + Math.random() * (L.a[1] - L.a[0]) };
    }
    function resize() {
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var total = Math.round(Math.min(190, Math.max(70, W / 7)));
      flakes = [];
      LAYERS.forEach(function(L) { for (var i = 0, n = Math.round(total * L.k); i < n; i++) flakes.push(make(L, true)); });
      // vẽ tầng xa trước, tầng gần sau
      flakes.sort(function(a, b) { return LAYERS.indexOf(a.L) - LAYERS.indexOf(b.L); });
    }

    window.addEventListener('mousemove', function(e) { tx = e.clientX / W - 0.5; ty = e.clientY / H - 0.5; }, { passive: true });
    window.addEventListener('deviceorientation', function(e) {
      if (e.gamma == null) return; tx = Math.max(-0.5, Math.min(0.5, e.gamma / 60)); ty = Math.max(-0.5, Math.min(0.5, (e.beta - 45) / 90));
    }, { passive: true });

    function frame() {
      if (!running) return;
      tick++;
      if (tick % 150 === 0) windTarget = (Math.random() - 0.5) * 2.6;
      wind += (windTarget - wind) * 0.012;
      px += (tx - px) * 0.05; py += (ty - py) * 0.05;

      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i], L = f.L;
        f.phase += f.spin;
        f.x += f.vx + Math.sin(f.phase) * f.sway + wind * L.wind * 0.5;
        f.y += f.vy;
        var size = f.r * 2.4;
        if (f.y > H + size || f.x < -size * 3 || f.x > W + size * 3) {
          var n = make(L, false);
          if (f.x < -size * 3) n.x = W + size; else if (f.x > W + size * 3) n.x = -size;
          flakes[i] = n; continue;
        }
        var dx = -px * L.par, dy = -py * L.par * 0.6;
        ctx.globalAlpha = f.a;
        ctx.drawImage(L.img, f.x + dx - size, f.y + dy - size, size * 2, size * 2);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }

    document.addEventListener('visibilitychange', function() { running = !document.hidden; if (running) requestAnimationFrame(frame); });
    window.addEventListener('resize', resize);
    resize(); requestAnimationFrame(frame);
  } catch (e) { console.warn('snow failed', e); }
})();`;