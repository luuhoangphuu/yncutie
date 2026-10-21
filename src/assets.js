export const CSS = `
/* ============ TOKENS ============ */
:root{
  --bg:#07080a;
  --text:#f4f6f8;
  --muted:#a9b0ba;
  --dim:#8a919c;
  --silver:#d6dae1;
  --border:rgba(255,255,255,.09);
  --border-strong:rgba(255,255,255,.2);
  --field:rgba(0,0,0,.36);
  --ok:#86d8aa;--warn:#e3b96f;--danger:#f19a9a;
  --metal:linear-gradient(135deg,#ffffff 0%,#e3e6eb 30%,#a5acb7 62%,#f0f2f5 100%);
  --metal-text:linear-gradient(180deg,#ffffff 0%,#d0d5dc 55%,#8f97a3 100%);
  --r-lg:28px;--r-md:16px;--r-sm:12px;
  --ease:cubic-bezier(.2,.7,.2,1);
  color-scheme:dark;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:'Manrope','Inter',system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid #fff;outline-offset:3px;border-radius:8px}
::selection{background:rgba(255,255,255,.25)}
.skip{position:fixed;left:16px;top:-60px;z-index:100001;padding:10px 16px;border-radius:10px;background:#fff;color:#0b0c0e;font-weight:700;font-size:14px;transition:top .2s}
.skip:focus{top:12px}

/* ============ NỀN ============ */
.bg-glow{position:fixed;inset:0;z-index:0;pointer-events:none;background:
  radial-gradient(1000px 560px at 50% -12%,rgba(214,220,230,.17),transparent 70%),
  radial-gradient(640px 460px at 105% 105%,rgba(140,150,165,.09),transparent 70%),
  radial-gradient(520px 380px at -10% 70%,rgba(120,130,148,.06),transparent 70%)}
.bg-grid{position:fixed;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse 70% 50% at 50% 0%,#000 20%,transparent 75%);mask-image:radial-gradient(ellipse 70% 50% at 50% 0%,#000 20%,transparent 75%)}
#snow-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}

/* ============ NAV ============ */
.nav{position:fixed;top:max(14px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:6px 6px 6px 20px;background:rgba(16,18,22,.6);backdrop-filter:blur(24px) saturate(150%);-webkit-backdrop-filter:blur(24px) saturate(150%);border:1px solid var(--border);border-radius:99px;width:calc(100% - 28px);max-width:720px;box-shadow:0 20px 40px -20px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.09);transition:background .3s,border-color .3s}
.nav.scrolled{background:rgba(14,16,19,.86);border-color:var(--border-strong)}
.logo-text{font-weight:800;font-size:17px;letter-spacing:-.02em;display:flex;align-items:center;gap:8px;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent;min-height:44px}
.logo-text svg{width:18px;height:18px;fill:var(--silver);flex:none}
.nav-links{display:flex;gap:2px}
.nav-links a{display:flex;align-items:center;min-height:40px;color:var(--muted);font-size:14px;font-weight:600;padding:0 18px;border-radius:99px;transition:color .2s,background .2s}
.nav-links a:hover{color:var(--text);background:rgba(255,255,255,.07)}
.nav-links a.on{color:#0b0c0e;background:var(--metal)}

/* ============ LAYOUT ============ */
.wrap{position:relative;z-index:10;width:100%;max-width:1040px;margin:0 auto;padding:108px clamp(16px,4vw,28px) 72px;flex:1}
.wrap.narrow{max-width:640px}
.center{text-align:center}

/* ============ TITANIUM: vật liệu chính, điểm nhấn duy nhất ============ */
.ti{position:relative;border-radius:var(--r-lg);overflow:hidden;isolation:isolate;
  background:
    linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0) 36%),
    repeating-linear-gradient(0deg,rgba(255,255,255,.022) 0 1px,rgba(0,0,0,.05) 1px 3px),
    linear-gradient(150deg,#3b3f47 0%,#1f2228 50%,#2c3037 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(0,0,0,.55),0 50px 90px -40px rgba(0,0,0,.95),0 12px 30px -16px rgba(0,0,0,.7)}
.ti::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(60% 75% at var(--mx,28%) var(--my,0%),rgba(255,255,255,.2),transparent 65%)}
.ti::after{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(160deg,rgba(255,255,255,.7),rgba(255,255,255,.06) 38%,rgba(255,255,255,.04) 62%,rgba(255,255,255,.32));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}

/* ============ CHỮ ============ */
h1.hero-title{font-size:clamp(46px,9vw,88px);font-weight:800;line-height:1;letter-spacing:-.055em;margin-bottom:16px;background:linear-gradient(100deg,#8f97a3 0%,#ffffff 22%,#c9ced6 42%,#8f97a3 60%,#f2f4f7 82%,#a9b0bb 100%);background-size:240% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:sheen 2.6s var(--ease) .25s 1 forwards}
@keyframes sheen{to{background-position:0 0}}
.hero{text-align:center;margin-bottom:40px}
.hero-sub{color:var(--muted);font-size:clamp(15px,2.2vw,17px);max-width:480px;margin:0 auto}
h2{font-size:20px;font-weight:700;letter-spacing:-.02em}
h3{font-weight:700;letter-spacing:-.01em}
.sec-title{font-size:15px;font-weight:700;color:var(--text);margin-bottom:14px}

/* ============ NÚT ============ */
.btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:14px;font-size:14px;font-weight:700;transition:transform .18s,box-shadow .2s,background .2s,border-color .2s,color .2s;border:1px solid transparent;font-family:inherit;cursor:pointer}
.btn:active{transform:scale(.985)}
.btn-primary{width:100%;min-height:56px;font-size:15px;background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.7);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 rgba(0,0,0,.15),0 14px 30px -14px rgba(255,255,255,.4)}
.btn-primary::after{content:'';position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.75),transparent);transform:skewX(-18deg);transition:left .7s var(--ease);pointer-events:none}
.btn-primary:hover{box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 rgba(0,0,0,.15),0 18px 36px -12px rgba(255,255,255,.55)}
.btn-primary:hover::after{left:130%}
.btn-secondary{background:rgba(255,255,255,.04);color:var(--text);border-color:var(--border-strong)}
.btn-secondary:hover{background:rgba(255,255,255,.09)}
.btn-download{width:100%;min-height:48px;font-size:14px;background:rgba(255,255,255,.05);color:var(--text);border-color:var(--border-strong)}
.btn-download:hover{background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.7)}
.btn[aria-disabled="true"]{opacity:.45;pointer-events:none}
.link-quiet{display:inline-flex;align-items:center;min-height:44px;font-size:14px;font-weight:600;color:var(--muted);transition:color .2s}
.link-quiet:hover{color:var(--text)}

/* ============ THẺ LẤY KEY ============ */
.keycard{max-width:720px;margin:0 auto;padding:34px clamp(20px,5vw,44px) 22px}
.kc-head{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin-bottom:12px}
.kc-quota{font-size:14px;color:var(--muted)}
.kc-quota b{color:var(--text);font-size:18px;font-weight:800;margin-right:4px}
.meter{height:4px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden;margin-bottom:26px}
.meter i{display:block;height:100%;border-radius:4px;background:var(--metal);box-shadow:0 0 12px rgba(255,255,255,.35)}
.kc-foot{display:flex;justify-content:center;margin-top:8px}

.stepper-wrap{display:flex;align-items:flex-start;margin:0 0 28px}
.step{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;font-size:12.5px;font-weight:600;color:var(--dim);text-align:center}
.step::before{content:'';position:absolute;top:15px;right:50%;width:100%;height:1px;background:rgba(255,255,255,.16)}
.step:first-child::before{display:none}
.step-num{position:relative;z-index:1;width:31px;height:31px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;background:#1c1f24;border:1px solid rgba(255,255,255,.16);color:var(--dim)}
.step.active{color:var(--text)}
.step.active .step-num{background:var(--metal);color:#0b0c0e;border-color:#fff;box-shadow:0 0 0 5px rgba(255,255,255,.08)}
.step.done{color:var(--silver)}
.step.done::before,.step.active::before{background:rgba(255,255,255,.55)}
.step.done .step-num{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.4)}

.radio-group{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px}
@media(max-width:480px){.radio-group{grid-template-columns:1fr}}
.radio-label{display:block;cursor:pointer}
.radio-label input{position:absolute;opacity:0;pointer-events:none}
.radio-label>span{display:grid;grid-template-columns:auto 1fr auto;align-items:center;column-gap:14px;padding:16px 18px;min-height:68px;border:1px solid rgba(255,255,255,.12);border-radius:var(--r-sm);background:var(--field);box-shadow:inset 0 2px 6px rgba(0,0,0,.35);color:var(--muted);transition:border-color .2s,background .2s,color .2s}
.radio-label>span::before{content:'';grid-row:1/3;width:18px;height:18px;border-radius:50%;border:1.5px solid var(--dim);transition:all .2s}
.radio-label b{font-size:15px;font-weight:800;color:inherit;line-height:1.3}
.radio-label small{grid-column:2;font-size:12.5px;color:var(--dim);line-height:1.4}
.radio-label em{grid-column:3;grid-row:1/3;font-style:normal;font-size:12px;font-weight:800;padding:4px 10px;border-radius:99px;background:var(--metal);color:#0b0c0e}
.radio-label:hover>span{border-color:rgba(255,255,255,.3);color:var(--text)}
.radio-label input:checked+span{border-color:rgba(255,255,255,.75);background:rgba(255,255,255,.09);color:var(--text);box-shadow:inset 0 2px 6px rgba(0,0,0,.3),0 0 0 4px rgba(255,255,255,.05)}
.radio-label input:checked+span::before{border-color:#fff;background:#fff;box-shadow:inset 0 0 0 4px #272a30}
.radio-label input:focus-visible+span{outline:2px solid #fff;outline-offset:2px}

/* ============ THÔNG TIN ============ */
.info{display:grid;grid-template-columns:repeat(2,1fr);margin-top:60px;border-top:1px solid var(--border)}
.info>div{padding:28px 28px 4px 0}
.info>div+div{padding-left:28px;border-left:1px solid var(--border)}
@media(max-width:800px){.info{grid-template-columns:1fr;margin-top:44px}.info>div,.info>div+div{padding:24px 0 4px;border-left:0}.info>div+div{border-top:1px solid var(--border)}}
.price-row,.stat-row{display:flex;justify-content:space-between;padding:11px 0;font-size:14px;color:var(--muted);border-bottom:1px dashed rgba(255,255,255,.1)}
.price-row:last-of-type,.stat-row:last-of-type{border-bottom:0}
.price-row span:last-child,.stat-row span:last-child{color:var(--text);font-weight:700}
.note{font-size:13px;color:var(--dim);margin-top:12px}

/* ============ ỨNG DỤNG ============ */
.apps{margin-top:52px}
.app-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:760px){.app-grid{grid-template-columns:1fr}}
.app{border:1px solid var(--border);border-radius:20px;padding:22px;background:rgba(255,255,255,.025);display:flex;flex-direction:column}
.app-top{display:flex;gap:14px;align-items:center;margin-bottom:16px}
.app-icon{width:48px;height:48px;flex:none;border-radius:13px;background:linear-gradient(145deg,#4a5059,#1a1d22);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:inset 0 1px 0 rgba(255,255,255,.2)}
.app-warning{font-size:13px;font-weight:600;color:var(--warn)}
.app-list{font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.75;padding:0}
.app-list li{list-style:none}

/* ============ HỖ TRỢ ============ */
.support{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:720px;margin:18px auto 0}
@media(max-width:600px){.support{grid-template-columns:1fr}}
.sup{position:relative;display:flex;align-items:center;gap:16px;padding:16px 18px;border-radius:20px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.025));box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 20px 40px -26px rgba(0,0,0,.9);transition:border-color .25s,box-shadow .25s,transform .25s;overflow:hidden}
.sup::before{content:'';position:absolute;inset:0;background:radial-gradient(180px 120px at 0% 50%,var(--c),transparent 70%);opacity:.14;transition:opacity .25s;pointer-events:none}
.sup:hover{transform:translateY(-2px);border-color:var(--c);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 44px -12px var(--c),0 24px 40px -24px rgba(0,0,0,.9)}
.sup:hover::before{opacity:.3}
.sup-zalo{--c:#2b7bff}.sup-yt{--c:#ff3b3b}
.sup-ic{position:relative;flex:none;width:50px;height:50px;border-radius:15px;display:grid;place-items:center;color:#fff;font-weight:800;font-size:15px;letter-spacing:-.02em;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 10px 24px -10px var(--c)}
.sup-zalo .sup-ic{background:linear-gradient(145deg,#4d93ff,#0a5cf0)}
.sup-yt .sup-ic{background:linear-gradient(145deg,#ff5757,#e01919)}
.sup-yt .sup-ic svg{width:24px;height:24px;fill:#fff}
.sup-tx{position:relative;display:flex;flex-direction:column;line-height:1.35;min-width:0}
.sup-tx b{font-size:15.5px;font-weight:800;letter-spacing:-.015em}
.sup-tx small{font-size:13px;color:var(--muted)}
.sup-go{position:relative;margin-left:auto;font-size:18px;color:var(--muted);transition:transform .25s,color .25s}
.sup:hover .sup-go{color:#fff;transform:translate(2px,-2px)}

.fab{position:fixed;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:90;display:flex;align-items:center;gap:10px;padding:6px 18px 6px 6px;border-radius:99px;background:rgba(18,20,24,.88);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--border-strong);box-shadow:0 18px 40px -14px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.1);font-size:13.5px;font-weight:700;transition:border-color .2s,box-shadow .2s}
.fab:hover{border-color:#2b7bff;box-shadow:0 0 36px -10px #2b7bff,0 18px 40px -14px rgba(0,0,0,.9)}
.fab i{font-style:normal;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#4d93ff,#0a5cf0);color:#fff;font-size:12px;font-weight:800;animation:fabPulse 2.8s infinite}
@keyframes fabPulse{0%{box-shadow:0 0 0 0 rgba(43,123,255,.5)}70%,100%{box-shadow:0 0 0 10px rgba(43,123,255,0)}}
@media(max-width:480px){.fab span{display:none}.fab{padding:6px}}

/* ============ CAM KẾT ============ */
.trust{display:grid;grid-template-columns:repeat(4,1fr);max-width:720px;margin:28px auto 0;border:1px solid var(--border);border-radius:20px;background:rgba(255,255,255,.02)}
.trust>div{display:flex;flex-direction:column;gap:6px;padding:18px}
.trust>div+div{border-left:1px solid var(--border)}
.trust svg{width:22px;height:22px;stroke:var(--silver);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;margin-bottom:4px}
.trust b{font-size:14px;font-weight:700;letter-spacing:-.01em}
.trust small{font-size:12.5px;color:var(--muted);line-height:1.45}
@media(max-width:700px){.trust{grid-template-columns:1fr 1fr}.trust>div:nth-child(3){border-left:0}.trust>div:nth-child(n+3){border-top:1px solid var(--border)}}


/* ============ 3D RADAR ============ */
.radar-wrap {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--field); border: 1px solid var(--border);
  border-radius: 14px; padding: 14px 16px; margin-bottom: 16px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,.35);
}
.radar-text { display: flex; flex-direction: column; gap: 4px; }
.radar-text b { font-size: 14px; color: var(--text); font-weight: 700; letter-spacing: -.01em;}
.radar-text small { font-size: 12px; color: var(--ok); font-weight: 600; }
.dial {
  position: relative; width: 64px; height: 64px; border-radius: 50%;
  overflow: hidden;
  background:
    radial-gradient(circle, transparent 31%, rgba(255,255,255,.15) 32%, transparent 33.5%, transparent 64%, rgba(255,255,255,.15) 65%, transparent 66.5%),
    linear-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08)) center / 1px 100% no-repeat,
    linear-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08)) center / 100% 1px no-repeat,
    radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.4) 72%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.15), 0 0 20px -4px rgba(134,216,170,0.45);
}
.sweep {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(134,216,170,.6), rgba(134,216,170,0) 28%);
  animation: radar-spin 3.6s linear infinite;
}
.blip {
  position: absolute; width: 4px; height: 4px; margin: -2px 0 0 -2px; border-radius: 50%;
  background: var(--ok); box-shadow: 0 0 8px 1px rgba(134,216,170,.8);
  opacity: 0; animation: radar-blip 3.6s linear infinite;
}
.blip.one { top: 30%; left: 64%; animation-delay: 0.45s; }
.blip.two { top: 70%; left: 72%; animation-delay: 1.35s; }
.blip.three { top: 62%; left: 26%; animation-delay: 2.4s; }
.blip.four { top: 24%; left: 34%; animation-delay: 3.1s; }
@keyframes radar-spin { to { transform: rotate(360deg); } }
@keyframes radar-blip { 0%, 10% { opacity: 0; transform: scale(0.4); } 14% { opacity: 1; transform: scale(1); } 46% { opacity: 0; } 100% { opacity: 0; } }

/* ============ CHECK BOT ============ */
.cp{padding:32px clamp(20px,4vw,40px) 28px;text-align:center;display:flex;flex-direction:column;align-items:center}
.cp-icon{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;margin-bottom:16px;background:rgba(0,0,0,.3);box-shadow:inset 0 2px 8px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.12);transition:box-shadow .4s}
.cp-icon svg{width:26px;height:26px;stroke:var(--silver);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;transition:stroke .3s}
.cp-icon .tick{opacity:0;stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .5s .1s,opacity .2s}
.cp.is-ok .cp-icon{box-shadow:inset 0 2px 8px rgba(0,0,0,.5),0 0 40px rgba(134,216,170,.3)}
.cp.is-ok .cp-icon svg{stroke:var(--ok)}
.cp.is-ok .cp-icon .tick{opacity:1;stroke-dashoffset:0}
.cp.is-ok .cp-icon .shield{opacity:.3}
.cp.is-fail .cp-icon svg{stroke:var(--danger)}
.cp-title{font-size:clamp(24px,3.2vw,30px);font-weight:800;line-height:1.15;letter-spacing:-.035em;margin-bottom:10px}
.cp-sub{color:var(--muted);font-size:14.5px;max-width:380px;margin-bottom:20px}
.ts-box{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:96px;padding:16px;margin-bottom:16px;background:var(--field);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-md);box-shadow:inset 0 2px 8px rgba(0,0,0,.45);transition:border-color .3s}
#tsMount{width:100%;min-height:65px;display:flex;justify-content:center}
.cp.is-verifying .ts-box{border-color:rgba(255,255,255,.35)}
.cp.is-ok .ts-box{border-color:rgba(134,216,170,.5)}
.cp-status{font-size:14px;color:var(--muted);min-height:22px}
.cp-status strong{color:var(--text)}
.err{color:var(--danger)}
.cp-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:20px;max-width:980px;margin:0 auto;align-items:stretch}
@media(max-width:860px){.cp-grid{grid-template-columns:1fr}}
.cp-steps{list-style:none;display:flex;gap:8px;margin:0 0 18px;padding:0;width:100%}
.cp-steps li{flex:1;font-size:12.5px;font-weight:600;color:var(--dim);text-align:left;transition:color .3s}
.cp-steps li::before{content:'';display:block;height:3px;border-radius:3px;background:rgba(255,255,255,.14);margin-bottom:8px;transition:background .4s}
.cp-steps li.done{color:var(--silver)}
.cp-steps li.done::before{background:var(--metal)}
.cp-steps li.active{color:var(--text)}
.cp-steps li.active::before{background:linear-gradient(90deg,rgba(255,255,255,.14),#fff,rgba(255,255,255,.14));background-size:200% 100%;animation:barflow 1.3s linear infinite}
@keyframes barflow{from{background-position:200% 0}to{background-position:-200% 0}}
.cp.is-ok .cp-steps li::before{background:var(--ok)}
.console{border-radius:var(--r-lg);border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.015)),rgba(10,11,13,.7);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 40px 70px -40px rgba(0,0,0,.95);padding:20px;display:flex;flex-direction:column;gap:16px}
.con-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.con-title{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;letter-spacing:-.01em}
.con-pill{font-size:12.5px;font-weight:700;color:var(--ok);padding:5px 12px;border-radius:99px;background:rgba(134,216,170,.1);border:1px solid rgba(134,216,170,.35)}
.live-dot{width:8px;height:8px;background:var(--ok);border-radius:50%;animation:pulse 2s infinite;flex:none}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(134,216,170,.5)}70%,100%{box-shadow:0 0 0 8px rgba(134,216,170,0)}}
.con-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.metric{padding:12px 14px;border-radius:14px;background:var(--field);border:1px solid var(--border);box-shadow:inset 0 2px 6px rgba(0,0,0,.35)}
.metric p{font-size:12.5px;color:var(--muted);font-weight:600;margin-bottom:4px}
.metric b{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:17px;font-weight:700;color:var(--text);font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.metric b small{font-size:13px;color:var(--muted);margin-left:2px}
.con-label{font-size:13px;color:var(--muted);font-weight:600;margin-bottom:10px}
.con-log{flex:1;display:flex;flex-direction:column}
.con-logbox{flex:1;min-height:118px;background:var(--field);border:1px solid var(--border);border-radius:14px;padding:14px 16px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;box-shadow:inset 0 2px 6px rgba(0,0,0,.35)}
.cp-log{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12.5px;line-height:1.5}
.cp-log li{display:flex;gap:12px;animation:fadeIn .4s both}
.cp-log time{color:var(--dim);flex:none;min-width:44px}
.cp-log span{color:var(--muted)}
.cp-log li.ok span{color:var(--ok)}
.cp-log li.warn span{color:var(--warn)}
.cp-log li.err span{color:var(--danger)}
.con-chips{display:flex;flex-wrap:wrap;gap:8px}
.con-chips span{font-size:12.5px;font-weight:600;color:var(--silver);padding:6px 12px;border-radius:99px;border:1px solid var(--border-strong);background:rgba(255,255,255,.04)}

/* ============ BƯỚC VƯỢT LINK / KẾT QUẢ ============ */
.panel{padding:40px clamp(20px,5vw,44px) 34px;text-align:center}
.pips{display:flex;justify-content:center;gap:8px;margin:0 0 26px}
.pips i{width:34px;height:5px;border-radius:5px;background:rgba(255,255,255,.14)}
.pips i.on{background:var(--metal);box-shadow:0 0 10px rgba(255,255,255,.3)}
.chips{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:0 0 20px}
.chips span{font-size:13px;font-weight:700;color:var(--silver);padding:6px 14px;border-radius:99px;border:1px solid var(--border-strong);background:rgba(255,255,255,.05)}
.keybox{margin:0 0 20px;padding:28px 16px;border-radius:var(--r-md);background:rgba(0,0,0,.4);box-shadow:inset 0 3px 10px rgba(0,0,0,.6),0 1px 0 rgba(255,255,255,.1);text-align:center;font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:700;font-size:clamp(17px,4.4vw,24px);word-break:break-all;color:#eceff3;text-shadow:0 1px 0 rgba(255,255,255,.12),0 -1px 0 rgba(0,0,0,.7);cursor:pointer;border:1px solid transparent;transition:background .2s,border-color .3s}
.keybox:hover{background:rgba(0,0,0,.3)}
.keybox.copied{border-color:rgba(134,216,170,.6)}
.back-link{display:inline-flex;align-items:center;min-height:44px;margin-top:14px;font-size:14px;font-weight:600;color:var(--muted);transition:color .2s}
.back-link:hover{color:var(--text)}

/* ============ FAQ ============ */
.faq{max-width:720px;margin:0 auto;border-top:1px solid var(--border)}
.faq details{border-bottom:1px solid var(--border)}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 4px;font-size:17px;font-weight:700;letter-spacing:-.01em}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';flex:none;width:30px;height:30px;border-radius:50%;border:1px solid var(--border-strong);display:grid;place-items:center;font-size:17px;font-weight:500;color:var(--muted);transition:transform .25s,background .2s}
.faq details[open] summary::after{transform:rotate(45deg);background:rgba(255,255,255,.08);color:var(--text)}
.faq p{color:var(--muted);font-size:15px;padding:0 4px 24px;max-width:600px}

/* ============ FORM / ADMIN ============ */
.admin{padding:40px clamp(20px,5vw,40px) 34px}
.input-group{margin-bottom:18px;text-align:left}
.input-group label{display:block;font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px}
.input-group input,.input-group textarea{width:100%;padding:14px 16px;border-radius:var(--r-sm);background:var(--field);border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 2px 6px rgba(0,0,0,.4);color:var(--text);font:inherit;font-size:16px;transition:border-color .2s,box-shadow .2s}
.input-group textarea{min-height:140px;resize:vertical}
.input-group input:focus,.input-group textarea:focus{outline:none;border-color:rgba(255,255,255,.6);box-shadow:inset 0 2px 6px rgba(0,0,0,.4),0 0 0 4px rgba(255,255,255,.08)}
.input-group ::placeholder{color:var(--dim)}
.alert{padding:14px 18px;border:1px solid rgba(241,154,154,.4);background:rgba(241,154,154,.08);color:var(--danger);border-radius:var(--r-md);font-weight:600;font-size:14px;margin-bottom:24px;max-width:720px;margin-left:auto;margin-right:auto}

/* ============ MODAL ============ */
.modal-overlay{position:fixed;inset:0;background:rgba(5,6,8,.74);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:100000;display:none;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.modal-overlay.show{display:flex;opacity:1}
.modal-content{background:linear-gradient(180deg,#1d2025,#121418);border:1px solid var(--border-strong);border-radius:24px;width:90%;max-width:480px;max-height:86dvh;overflow:auto;padding:28px;box-shadow:0 40px 80px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.1);transform:translateY(14px);transition:transform .3s}
.modal-overlay.show .modal-content{transform:translateY(0)}
.modal-header{font-size:19px;font-weight:800;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;letter-spacing:-.02em}
.modal-close{background:rgba(255,255,255,.06);border:1px solid var(--border);width:36px;height:36px;border-radius:50%;color:var(--muted);font-size:18px;cursor:pointer;line-height:1}
.modal-close:hover{color:var(--text);background:rgba(255,255,255,.12)}
.modal-body{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:24px;white-space:pre-wrap}
.modal-actions{display:flex;gap:10px;flex-wrap:wrap}
.modal-actions .modal-btn{flex:1 1 140px}
.modal-btn-ghost{background:rgba(255,255,255,.06)!important;color:var(--text)!important;border:1px solid var(--border-strong)!important}
.modal-btn-ghost:hover{background:rgba(255,255,255,.11)!important}
.modal-btn{width:100%;min-height:48px;padding:14px;border-radius:12px;background:var(--metal);color:#0b0c0e;font-weight:800;font-family:inherit;font-size:14px;border:1px solid rgba(255,255,255,.7);cursor:pointer}

/* ============ FOOTER / CHUYỂN ĐỘNG ============ */
.foot{position:relative;z-index:10;margin-top:auto;padding:26px;text-align:center;font-size:13px;color:var(--dim);border-top:1px solid var(--border);background:rgba(8,9,11,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.reveal{animation:fadeIn .8s var(--ease) var(--d,0s) backwards}
@keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}h1.hero-title{background-position:0 0}}

/* ============ HIỆU ỨNG NÂNG CAO ============ */
@property --ang{syntax:'<angle>';inherits:false;initial-value:0deg}
.aurora{position:fixed;inset:-18% -10% auto;height:82vh;z-index:0;pointer-events:none;overflow:hidden;-webkit-mask-image:linear-gradient(#000 40%,transparent 100%);mask-image:linear-gradient(#000 40%,transparent 100%)}
.aurora i{position:absolute;border-radius:50%;filter:blur(72px);will-change:transform;mix-blend-mode:screen}
.aurora i:nth-child(1){width:46vw;height:46vw;max-width:640px;max-height:640px;left:4%;top:-6%;background:radial-gradient(circle,rgba(205,214,228,.3),transparent 68%);animation:drift1 22s ease-in-out infinite alternate}
.aurora i:nth-child(2){width:38vw;height:38vw;max-width:520px;max-height:520px;right:2%;top:8%;background:radial-gradient(circle,rgba(150,166,192,.26),transparent 68%);animation:drift2 27s ease-in-out infinite alternate}
.aurora i:nth-child(3){width:30vw;height:30vw;max-width:420px;max-height:420px;left:38%;top:-16%;background:radial-gradient(circle,rgba(255,255,255,.17),transparent 68%);animation:drift3 31s ease-in-out infinite alternate}
@keyframes drift1{to{transform:translate3d(16vw,12vh,0) scale(1.18)}}
@keyframes drift2{to{transform:translate3d(-14vw,9vh,0) scale(1.12)}}
@keyframes drift3{to{transform:translate3d(-10vw,16vh,0) scale(1.25)}}

/* viền ánh sáng chạy quanh khối titanium */
.ti.spin::after{padding:1.5px;background:conic-gradient(from var(--ang),rgba(255,255,255,.07) 0deg,rgba(255,255,255,.07) 205deg,rgba(255,255,255,.95) 265deg,rgba(255,255,255,.07) 325deg);animation:spin 7s linear infinite}
@keyframes spin{to{--ang:360deg}}

/* nghiêng 3D theo con trỏ (desktop) */
.tilt{transform:perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .45s var(--ease);will-change:transform}
.tilt.hot{transition:transform .08s linear}

/* tiêu đề: hiện mờ -> nét, rồi vệt sáng kim loại chạy lặp */
h1.hero-title{animation:titleIn 1.5s var(--ease) .1s backwards,sheenLoop 8s ease-in-out 1.8s infinite alternate}
@keyframes titleIn{from{opacity:0;filter:blur(14px);letter-spacing:.09em;transform:translateY(10px)}}
@keyframes sheenLoop{from{background-position:100% 0}to{background-position:0 0}}

/* cuộn tới đâu hiện tới đó (JS thêm class, không có JS vẫn thấy đủ) */
.rv{opacity:0;transform:translateY(22px) scale(.985);transition:opacity .8s var(--ease),transform .8s var(--ease);transition-delay:var(--rd,0s)}
.rv.in{opacity:1;transform:none}

/* thanh lượt: đổ đầy + vệt sáng */
.meter i{position:relative;overflow:hidden;transform-origin:left;animation:fillIn 1.3s var(--ease) .6s backwards}
.meter i::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent,rgba(255,255,255,.95),transparent);transform:translateX(-100%);animation:glint 3.4s ease-in-out 2s infinite}
@keyframes fillIn{from{transform:scaleX(0)}}
@keyframes glint{60%,100%{transform:translateX(100%)}}

.step.active .step-num{animation:ring 2.4s ease-out infinite}
@keyframes ring{0%{box-shadow:0 0 0 0 rgba(255,255,255,.38)}100%{box-shadow:0 0 0 12px rgba(255,255,255,0)}}
.logo-text svg{animation:logoGlow 4.5s ease-in-out infinite}
@keyframes logoGlow{50%{filter:drop-shadow(0 0 6px rgba(255,255,255,.75))}}

.cp-icon .shield{stroke-dasharray:70;stroke-dashoffset:70;animation:draw 1.4s var(--ease) .3s forwards}
@keyframes draw{to{stroke-dashoffset:0}}
.ts-box{position:relative}
.cp.is-verifying .ts-box::after{content:'';position:absolute;left:0;right:0;top:0;height:60px;border-radius:var(--r-md);background:linear-gradient(180deg,transparent,rgba(255,255,255,.16),transparent);animation:scan 1.3s linear infinite alternate;pointer-events:none}
@keyframes scan{to{top:calc(100% - 60px)}}

.rip{position:absolute;border-radius:50%;background:rgba(255,255,255,.55);transform:scale(0);animation:rip .65s ease-out forwards;pointer-events:none}
@keyframes rip{to{transform:scale(1);opacity:0}}

/* ============ ĐỜI TIẾP THEO: HIỆU ỨNG NẶNG ============ */
/* nền: đèn theo chuột + tia sáng quét từ trên xuống */
.bg-glow{overflow:hidden;background:
  radial-gradient(560px circle at var(--cx,50%) var(--cy,-30%),rgba(255,255,255,.075),transparent 65%),
  radial-gradient(900px 520px at 50% -10%,rgba(205,211,221,.14),transparent 70%),
  radial-gradient(700px 480px at 100% 100%,rgba(140,150,165,.09),transparent 70%),
  radial-gradient(520px 380px at -10% 70%,rgba(120,130,148,.06),transparent 70%)}
.bg-glow::before,.bg-glow::after{content:'';position:absolute;left:50%;top:-30%;width:150%;height:100%;margin-left:-75%;transform-origin:50% 0;-webkit-mask-image:linear-gradient(#000,transparent 80%);mask-image:linear-gradient(#000,transparent 80%)}
.bg-glow::before{background:conic-gradient(from 180deg at 50% 0%,transparent 0deg,rgba(255,255,255,.058) 9deg,transparent 20deg,transparent 340deg,rgba(255,255,255,.058) 351deg,transparent 360deg);animation:sway 16s ease-in-out infinite alternate}
.bg-glow::after{background:conic-gradient(from 180deg at 50% 0%,transparent 0deg,rgba(255,255,255,.04) 26deg,transparent 40deg,transparent 320deg,rgba(255,255,255,.04) 334deg,transparent 360deg);animation:sway 23s ease-in-out infinite alternate-reverse}
@keyframes sway{from{transform:rotate(-7deg)}to{transform:rotate(7deg)}}

/* tiêu đề: từng chữ lật vào, vệt sáng quét lặp */
h1.hero-title{display:block;position:relative;background:none;-webkit-background-clip:border-box;background-clip:border-box;color:inherit;animation:none;perspective:700px}
.hero-title .ch{display:inline-block;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent;transform-origin:50% 100%;animation:chIn 1.1s var(--ease) calc(.15s + var(--i) * .08s) backwards}
.hero-title .sp{display:inline-block;width:.3em}
@keyframes chIn{from{opacity:0;transform:translateY(55%) rotateX(-80deg);filter:blur(12px)}}
.hero-title::after{content:attr(data-t);position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,transparent 42%,rgba(255,255,255,.95) 50%,transparent 58%) 130% 0/250% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:titleSweep 6.5s ease-in-out 2s infinite}
@keyframes titleSweep{0%{background-position:130% 0}40%,100%{background-position:-60% 0}}

/* lấp lánh + vệt sáng quét trên mặt titanium */
.gl{position:absolute;z-index:-1;pointer-events:none;opacity:0;background:radial-gradient(circle,rgba(255,255,255,.75) 0,transparent 42%),linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent) 50% 50%/100% 1px no-repeat,linear-gradient(0deg,transparent,rgba(255,255,255,.85),transparent) 50% 50%/1px 100% no-repeat;animation:twinkle var(--du,4s) ease-in-out var(--dl,0s) infinite}
@keyframes twinkle{0%,100%{opacity:0;transform:scale(.35)}50%{opacity:.6;transform:scale(1)}}
.sweep{position:absolute;top:0;bottom:0;left:-40%;width:30%;pointer-events:none;background:linear-gradient(100deg,transparent,rgba(255,255,255,.1),transparent);transform:skewX(-18deg);animation:sweepx 7s ease-in-out 2.5s infinite}
@keyframes sweepx{0%{left:-40%}35%,100%{left:140%}}

/* màn mở đầu (chỉ 1 lần mỗi phiên, trang chủ) */
.intro{display:none;position:fixed;inset:0;min-height:100vh;min-height:100dvh;z-index:200000;flex-direction:column;align-items:center;justify-content:center;gap:20px;clip-path:inset(0);background:radial-gradient(700px 420px at 50% 42%,rgba(205,212,224,.13),transparent 70%),#07080a}
html.intro-on .intro{display:flex}
html.intro-out .intro{pointer-events:none;animation:introOut .9s var(--ease) forwards}
@keyframes introOut{to{clip-path:inset(0 0 100% 0)}}
.intro svg{width:58px;height:58px;fill:rgba(230,233,238,0);stroke:#e6e9ee;stroke-width:1.1;stroke-linejoin:round;stroke-dasharray:130;stroke-dashoffset:130;animation:draw 1.2s var(--ease) .1s forwards,introFill .7s ease 1s forwards}
@keyframes introFill{to{fill:rgba(230,233,238,.95)}}
.intro b{font-size:clamp(30px,6vw,46px);font-weight:800;letter-spacing:-.04em;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent;opacity:0;animation:introTxt 1s var(--ease) .5s forwards}
@keyframes introTxt{from{opacity:0;transform:translateY(12px);letter-spacing:.12em;filter:blur(8px)}to{opacity:1;transform:none;letter-spacing:-.04em;filter:none}}
.intro i{display:block;width:140px;height:1px;background:linear-gradient(90deg,transparent,#fff,transparent);transform:scaleX(0);animation:introLine 1s var(--ease) .7s forwards}
@keyframes introLine{to{transform:scaleX(1)}}
html.intro-on:not(.intro-out) .wrap *,html.intro-on:not(.intro-out) .wrap *::before,html.intro-on:not(.intro-out) .wrap *::after{animation-play-state:paused!important}

/* chuyển trang mượt */
html.leaving .wrap,html.leaving .foot{opacity:0;transform:translateY(-10px);transition:opacity .22s,transform .22s}

/* ============ TỐI ƯU CHO CẢM ỨNG / MOBILE ============ */
@media(hover:none),(pointer:coarse){
  .tilt{transform:none!important;will-change:auto}
  .btn-primary::after{display:none}
}
@media(max-width:600px){
  .aurora i{mix-blend-mode:normal;filter:blur(40px);opacity:.8}
  .bg-glow::after{display:none}
  .gl:nth-of-type(n+4){display:none}
  .sweep{display:none}
  .foot{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(8,9,11,.9)}
  .nav{padding:4px 4px 4px 14px;width:calc(100% - 20px)}
  .logo-text{font-size:15px;gap:6px}
  .logo-text svg{width:16px;height:16px}
  .nav-links a{padding:0 12px;font-size:13px}
  h1.hero-title{font-size:clamp(44px,14vw,64px)}
  .hero-sub{max-width:300px}
  .kc-head{margin-bottom:10px}
  .trust small{font-size:12px}
  .ti{box-shadow:inset 0 1px 0 rgba(255,255,255,.35),inset 0 -1px 0 rgba(0,0,0,.5),0 24px 40px -24px rgba(0,0,0,.9)}
  .console{padding:16px}
  .metric b{font-size:15px}
}
@media(max-width:600px){.intro svg{width:50px;height:50px}.intro i{width:110px}}
@media(max-width:360px){
  .nav-links a{padding:0 9px;font-size:12.5px}
  .logo-text{font-size:14px}
  .step span{font-size:10.5px}
}

/* ============ MOBILE ============ */
@media(max-width:600px){
  .wrap{padding-top:92px;padding-bottom:88px}
  .hero{margin-bottom:28px}
  .nav{padding-left:16px}
  .nav-links a{padding:0 14px}
  .keycard{padding:26px 18px 16px;border-radius:24px}
  .stepper-wrap{margin-bottom:22px}
  .step{font-size:11.5px}
  .app{padding:18px}
  .aurora i{filter:blur(48px)}
  .foot{padding-bottom:max(26px,env(safe-area-inset-bottom))}
}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Nav đậm hơn khi cuộn
    var nv = document.querySelector('.nav');
    if (nv) {
      var onScroll = function() { nv.classList.toggle('scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    }

    var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Nghiêng 3D theo con trỏ
    if (fine && !calm) [].forEach.call(document.querySelectorAll('.tilt'), function(el) {
      el.addEventListener('pointermove', function(e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.classList.add('hot');
        el.style.setProperty('--ry', (x * 6).toFixed(2) + 'deg'); el.style.setProperty('--rx', (-y * 5).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', function() {
        el.classList.remove('hot'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
      });
    });

    // Cuộn tới đâu hiện tới đó
    if ('IntersectionObserver' in window && !calm) {
      var io = new IntersectionObserver(function(es) {
        es.forEach(function(en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
      [].forEach.call(document.querySelectorAll('.support,.trust,.info>div,.app,.faq details'), function(el, i) {
        el.classList.add('rv'); el.style.setProperty('--rd', ((i % 3) * 0.09) + 's'); io.observe(el);
      });
    }

    // Gợn sóng khi bấm nút
    document.addEventListener('pointerdown', function(e) {
      var b = e.target.closest && e.target.closest('.btn');
      if (!b || b.getAttribute('aria-disabled') === 'true') return;
      var r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2, d = document.createElement('span');
      d.className = 'rip';
      d.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (e.clientX - r.left - s / 2) + 'px;top:' + (e.clientY - r.top - s / 2) + 'px';
      b.appendChild(d); setTimeout(function() { d.remove(); }, 700);
    });

    // Số lượt đếm lên
    var qb = document.querySelector('.kc-quota b');
    if (qb && !calm) {
      var to = parseInt(qb.textContent, 10), q0 = performance.now();
      if (to > 0) (function s(n) {
        var p = Math.max(0, Math.min(1, (n - q0 - 500) / 900));
        qb.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(s);
      })(q0);
    }

    // Giải mã key + bắn tuyết khi nhận key
    var kb = document.querySelector('.keybox[data-key]');
    if (kb && !calm) {
      var real = kb.getAttribute('data-key'), set = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', k0 = performance.now();
      (function d(n) {
        var p = (n - k0 - 300) / 1100, out = '';
        for (var i = 0; i < real.length; i++) {
          var ch = real.charAt(i);
          out += (p >= i / real.length || !/[A-Za-z0-9]/.test(ch)) ? ch : set.charAt((Math.random() * set.length) | 0);
        }
        kb.textContent = p < 1 ? out : real;
        if (p < 1) requestAnimationFrame(d);
      })(k0);
      setTimeout(function() { window.dispatchEvent(new Event('snowburst')); }, 500);
    }

    // Đèn nền bám theo con trỏ
    // (gắn trong paint bên dưới)

    // Lấp lánh + vệt quét trên mặt titanium
    if (!calm) [].forEach.call(document.querySelectorAll('.keycard,.panel,.cp,.admin'), function(el) {
      for (var i = 0; i < 6; i++) {
        var g = document.createElement('span'), sz = 8 + Math.random() * 10;
        g.className = 'gl'; g.setAttribute('aria-hidden', 'true');
        g.style.cssText = 'left:' + (6 + Math.random() * 88) + '%;top:' + (4 + Math.random() * 90) + '%;width:' + sz + 'px;height:' + sz + 'px;--dl:' + (Math.random() * 5).toFixed(2) + 's;--du:' + (3 + Math.random() * 3).toFixed(1) + 's';
        el.appendChild(g);
      }
      if (el.classList.contains('keycard')) { var sw = document.createElement('span'); sw.className = 'sweep'; sw.setAttribute('aria-hidden', 'true'); el.appendChild(sw); }
    });

    // Nút chính hút nhẹ về phía con trỏ
    if (fine && !calm) [].forEach.call(document.querySelectorAll('.btn-primary'), function(b) {
      b.addEventListener('pointermove', function(e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .08).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * .22).toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', function() { b.style.transform = ''; });
    });

    // Chuyển trang mượt (chỉ link nội bộ cùng tab)
    document.addEventListener('click', function(e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || calm || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || a.target === '_blank' || a.hasAttribute('download')) return;
      var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
      if (u.origin !== location.origin || (u.pathname === location.pathname && u.search === location.search)) return;
      e.preventDefault(); document.documentElement.classList.add('leaving');
      setTimeout(function() { location.href = u.href; }, 230);
    });
    window.addEventListener('pageshow', function() { document.documentElement.classList.remove('leaving'); });

    // Ánh sáng phản chiếu trên mặt titanium: theo con trỏ (desktop) hoặc độ nghiêng máy (mobile)
    var tis = [].slice.call(document.querySelectorAll('.ti')), raf = 0, last = null;
    function paint() {
      raf = 0; if (!last) return;
      document.documentElement.style.setProperty('--cx', last[0] + 'px'); document.documentElement.style.setProperty('--cy', last[1] + 'px');
      tis.forEach(function(el) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((last[0] - r.left) / r.width * 100) + '%');
        el.style.setProperty('--my', ((last[1] - r.top) / r.height * 100) + '%');
      });
    }
    function aim(cx, cy) { last = [cx, cy]; if (!raf) raf = requestAnimationFrame(paint); }
    if (tis.length) {
      window.addEventListener('mousemove', function(e) { aim(e.clientX, e.clientY); }, { passive: true });
      window.addEventListener('deviceorientation', function(e) {
        if (e.gamma == null) return;
        var g = Math.max(-30, Math.min(30, e.gamma)), b = Math.max(-30, Math.min(30, (e.beta || 45) - 45));
        aim(window.innerWidth * (0.5 + g / 60), window.innerHeight * (0.4 + b / 60));
      }, { passive: true });
    }

    // Thông báo: có thể ẩn 1 giờ (lưu theo nội dung, thông báo mới vẫn hiện ngay)
    var modal = document.getElementById('noticeModal');
    if (modal) {
      var sig = (modal.textContent || '').replace(/\\s+/g, ' ').trim(), h = 5381;
      for (var i = 0; i < sig.length; i++) h = ((h << 5) + h + sig.charCodeAt(i)) | 0;
      var KEY = 'zwic_notice_snooze_' + (h >>> 0).toString(36);
      var until = 0;
      try { until = parseInt(localStorage.getItem(KEY) || '0', 10) || 0; } catch (e) {}
      var hide = function() { modal.classList.remove('show'); };
      if (Date.now() >= until) setTimeout(function() { modal.classList.add('show'); }, document.documentElement.classList.contains('intro-on') ? 2900 : 700);

      var closeBtn = modal.querySelector('.modal-close');
      var actionBtn = modal.querySelector('.modal-btn');
      var snoozeBtn = modal.querySelector('.modal-snooze');
      if (closeBtn) closeBtn.onclick = hide;
      if (actionBtn) actionBtn.onclick = hide;
      if (snoozeBtn) snoozeBtn.onclick = function() {
        try { localStorage.setItem(KEY, String(Date.now() + 3600000)); } catch (e) {}
        hide();
        window.__toast('Đã ẩn thông báo trong 1 giờ');
      };
      modal.addEventListener('click', function(e) { if (e.target === modal) hide(); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hide(); });
    }
  } catch (e) { console.warn('UI script failed', e); }
});

window.__toast = function(msg) {
  var t = document.createElement('div');
  t.setAttribute('role', 'status');
  t.style.cssText = 'position:fixed;bottom:max(28px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);background:rgba(24,27,32,.94);color:#f6f7f9;padding:13px 26px;border-radius:99px;font-weight:600;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.2);box-shadow:0 14px 40px rgba(0,0,0,.6);transition:opacity .3s;max-width:calc(100% - 32px);text-align:center';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { t.style.opacity = '0'; setTimeout(function() { t.remove(); }, 300); }, 2200);
};
function __copy(c) {
  var el = document.getElementById(c.getAttribute('data-copy')); if (!el) return;
  var txt = (el.getAttribute('data-key') || el.textContent).trim();
  function ok() {
    el.classList.add('copied'); window.__toast('Đã sao chép key');
    setTimeout(function() { el.classList.remove('copied'); }, 1600);
  }
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(ok, fallback);
  else fallback();
  function fallback() {
    try {
      var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0;top:0'; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove(); ok();
    } catch (e) { window.__toast('Không sao chép được, hãy chọn key và copy thủ công'); }
  }
}
document.addEventListener('click', function(e) { var c = e.target.closest('[data-copy]'); if (c) __copy(c); });
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  var c = e.target.closest && e.target.closest('[data-copy][role="button"]');
  if (c) { e.preventDefault(); __copy(c); }
});
`;

export const CHECKPOINT_JS = `(function(){
  var $ = function(id) { return document.getElementById(id); };
  var app = $('app'), tsWrap = $('tsWrap'), errBox = $('errorBox'), help = $('helpText');
  var logEl = $('cpLog'), timer = $('timer');
  var t0 = performance.now(), busy = false;

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
  function step(n, st) { var li = document.querySelector('.cp-steps li[data-s="' + n + '"]'); if (li) li.className = st; }
  function state(s) { app.className = app.className.replace(/ is-(verifying|ok|fail)/g, '') + (s ? ' is-' + s : ''); }
  function showErr(m) { errBox.style.display = 'block'; errBox.textContent = m; }

  try {
    var nv = performance.getEntriesByType('navigation')[0];
    if (nv) {
      var ttfb = Math.round(nv.responseStart - nv.requestStart);
      if (ttfb >= 0) $('mTtfb').innerHTML = ttfb + '<small>ms</small>';
      var p = nv.nextHopProtocol || '';
      $('mProto').textContent = p === 'h2' ? 'HTTP/2' : p === 'h3' ? 'HTTP/3' : p === 'http/1.1' ? 'HTTP/1.1' : (p || '—').toUpperCase();
    }
    $('mTls').textContent = location.protocol === 'https:' ? 'HTTPS' : 'Không mã hoá';
  } catch (e) {}

  log('Khởi tạo phiên xác minh');
  setTimeout(function() {
    log(location.protocol === 'https:' ? 'Kết nối HTTPS an toàn' : 'Kết nối chưa mã hoá', location.protocol === 'https:' ? 'ok' : 'warn');
    step(1, 'done'); step(2, 'active');
  }, 350);
  var mount = $('tsMount');
  function loadFail(msg) {
    log(msg, 'err'); showErr(msg);
    help.textContent = 'Hãy tải lại trang. Nếu vẫn lỗi, tắt trình chặn quảng cáo hoặc báo admin.';
  }
  function renderWidget() {
    try {
      turnstile.render(mount, {
        sitekey: mount.getAttribute('data-sitekey'), theme: 'dark', size: 'flexible',
        callback: function(t) { window.onTurnstileSuccess(t); },
        'error-callback': function() { window.onTurnstileError(); },
        'expired-callback': function() { log('Token hết hạn, hãy xác nhận lại', 'warn'); }
      });
      log('Đã tải Cloudflare Turnstile', 'ok'); log('Đang chờ bạn xác nhận');
      setTimeout(function() {
        if (!busy && !mount.hasChildNodes()) loadFail('Captcha không hiển thị. Kiểm tra CSP (frame-src challenges.cloudflare.com), site key và tên miền đã khai báo trong Cloudflare.');
      }, 4000);
    } catch (err) { loadFail('Không hiển thị được captcha: ' + ((err && err.message) || err)); }
  }
  var ts = document.createElement('script');
  ts.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  ts.async = true; ts.defer = true;
  var cs = document.currentScript; if (cs && cs.nonce) ts.nonce = cs.nonce;
  ts.onload = renderWidget;
  ts.onerror = function() { loadFail('Không tải được Turnstile (có thể do CSP hoặc trình chặn quảng cáo)'); };
  document.head.appendChild(ts);
  setTimeout(function() { if (!window.turnstile && !busy) loadFail('Captcha tải quá chậm'); }, 10000);

  function fail(msg) {
    state('fail'); showErr(msg); log(msg, 'err');
    step(3, ''); step(2, 'active');
    help.innerHTML = 'Bấm vào ô <strong>Verify you are human</strong> để thử lại.';
    busy = false;
    setTimeout(function() { state(''); }, 1600);
    if (window.turnstile) turnstile.reset();
  }
  window.onTurnstileError = function() { fail('Captcha gặp lỗi. Hãy tải lại trang.'); };
  window.onTurnstileSuccess = function(token) {
    if (busy) return; busy = true;
    errBox.style.display = 'none';
    state('verifying'); step(2, 'done'); step(3, 'active');
    help.innerHTML = '<strong>Đang xác minh...</strong>';
    log('Đã nhận token từ Turnstile', 'ok'); log('Gửi token tới máy chủ');
    fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (d && d.success) {
          clearInterval(tick); state('ok'); step(3, 'done');
          log('Máy chủ xác nhận hợp lệ', 'ok');
          help.innerHTML = '<strong style="color:var(--ok)">Xác minh thành công. Đang chuyển trang...</strong>';
          setTimeout(function() { location.href = app.getAttribute('data-next'); }, 900);
        } else fail((d && d.error) || 'Xác minh thất bại. Vui lòng thử lại.');
      })
      .catch(function() { fail('Lỗi mạng. Vui lòng thử lại.'); });
  };
})();`;

// Tuyết 3 tầng + tuyết ĐỌNG trên mép thẻ titanium + bụi sáng theo chuột + pháo tuyết.
// Tầng gần (bông mờ lớn) và tuyết đọng vẽ ở canvas phía trước nội dung để có chiều sâu.
export const JS_FX = `(function(){
  try {
    var c = document.getElementById('snow-canvas');
    if (!c) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var f2 = document.createElement('canvas');
    f2.setAttribute('aria-hidden', 'true');
    f2.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;z-index:60;pointer-events:none';
    document.body.appendChild(f2);
    var ctx = c.getContext('2d'), fx = f2.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var weak = (navigator.hardwareConcurrency || 4) <= 4 || window.innerWidth < 600;
    var wind = 0, windTarget = 0, nextGust = 0, running = true, last = performance.now();
    var px = 0, py = 0, tx = 0, ty = 0, mx = -9999, my = -9999, dust = [], lastTrail = 0;
    var BW = 6, MAXH = 6.5, piles = new WeakMap(), surfEls = [];
    var rnd = function(a, b) { return a + Math.random() * (b - a); };

    function dot(soft) {
      var s = document.createElement('canvas'); s.width = s.height = 64;
      var g = s.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      if (soft) { r.addColorStop(0, 'rgba(255,255,255,.75)'); r.addColorStop(.5, 'rgba(235,240,248,.28)'); r.addColorStop(1, 'rgba(255,255,255,0)'); }
      else { r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.4, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)'); }
      g.fillStyle = r; g.fillRect(0, 0, 64, 64); return s;
    }
    function crystal() {
      var s = document.createElement('canvas'); s.width = s.height = 64;
      var g = s.getContext('2d'); g.translate(32, 32);
      g.strokeStyle = 'rgba(245,248,252,.95)'; g.lineWidth = 2.2; g.lineCap = 'round';
      for (var i = 0; i < 6; i++) {
        g.save(); g.rotate(i * Math.PI / 3);
        g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -24);
        g.moveTo(0, -14); g.lineTo(-6, -20); g.moveTo(0, -14); g.lineTo(6, -20);
        g.stroke(); g.restore();
      }
      var r = g.createRadialGradient(0, 0, 0, 0, 0, 9);
      r.addColorStop(0, 'rgba(255,255,255,.9)'); r.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = r; g.fillRect(-10, -10, 20, 20);
      return s;
    }
    var SHARP = dot(false), SOFT = dot(true), CRYS = crystal();

    var LAYERS = [
      { k: 0.56, r: [0.7, 1.4], v: [0.2, 0.5],  a: [0.22, 0.45], par: 8,  imgs: [SHARP],       wind: 0.4, tw: 1, land: 0, front: 0 },
      { k: 0.32, r: [1.4, 2.8], v: [0.5, 1.0],  a: [0.4, 0.75],  par: 20, imgs: [SHARP, CRYS], wind: 0.8, tw: 0, land: 1, front: 0 },
      { k: 0.12, r: [4, 8],     v: [1.1, 2.1],  a: [0.1, 0.24],  par: 44, imgs: [SOFT],        wind: 1.4, tw: 0, land: 0, front: 1 }
    ];
    // Màn nhỏ: bông mờ lớn ở tầng gần dễ thành "vệt bẩn" đè lên chữ, nên thu nhỏ + giảm bớt; tuyết đọng mỏng hơn
    if (window.innerWidth < 600) { LAYERS[2].r = [2.4, 4.4]; LAYERS[2].a = [.07, .16]; LAYERS[2].k = .06; MAXH = 4; }
    var flakes = [];

    function make(L, anywhere) {
      var r = rnd(L.r[0], L.r[1]), img = L.imgs[(Math.random() * L.imgs.length) | 0];
      return { L: L, img: img, crys: img === CRYS, x: Math.random() * W, y: anywhere ? Math.random() * H : -r * 6, r: r,
        vy: rnd(L.v[0], L.v[1]), vx: 0, tvx: rnd(-.3, .3), nt: 0,
        p1: rnd(0, 6.28), p2: rnd(0, 6.28), f1: rnd(.006, .02), f2: rnd(.002, .009), amp: rnd(.15, .7),
        a: rnd(L.a[0], L.a[1]), rot: rnd(0, 6.28), rs: rnd(-.014, .014) };
    }
    function resize() {
      W = window.innerWidth; H = window.innerHeight;
      [c, f2].forEach(function(cv) { cv.width = W * dpr; cv.height = H * dpr; });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); fx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var total = Math.round(Math.min(weak ? 95 : 180, Math.max(50, W / 8)));
      flakes = [];
      LAYERS.forEach(function(L) { for (var i = 0, n = Math.round(total * L.k); i < n; i++) flakes.push(make(L, true)); });
      surfEls = [].slice.call(document.querySelectorAll('.ti'));
    }

    function spawn(x, y, n, pow) {
      for (var i = 0; i < n && dust.length < 260; i++) {
        var an = rnd(0, 6.28), sp = rnd(.3, 1) * pow;
        dust.push({ x: x, y: y, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp - .4, life: 1, dec: rnd(.011, .024), r: rnd(.9, 2.3) });
      }
    }
    window.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY; tx = e.clientX / W - .5; ty = e.clientY / H - .5;
      var t = performance.now(); if (t - lastTrail > 42) { lastTrail = t; spawn(mx, my, 1, .55); }
    }, { passive: true });
    window.addEventListener('mouseout', function() { mx = my = -9999; });
    window.addEventListener('pointerdown', function(e) {
      if (e.target.closest && e.target.closest('.btn,.keybox')) spawn(e.clientX, e.clientY, 16, 2.4);
    });
    window.addEventListener('snowburst', function() { spawn(W / 2, H * .42, 120, 5.2); });
    window.addEventListener('deviceorientation', function(e) {
      if (e.gamma == null) return;
      tx = Math.max(-.5, Math.min(.5, e.gamma / 60)); ty = Math.max(-.5, Math.min(.5, ((e.beta || 45) - 45) / 90));
    }, { passive: true });

    function surfaces() {
      var out = [];
      for (var s = 0; s < surfEls.length; s++) {
        var r = surfEls[s].getBoundingClientRect();
        if (r.width < 200 || r.top < 0 || r.top > H) continue;
        var n = Math.floor((r.width - 60) / BW); if (n < 8) continue;
        var o = piles.get(surfEls[s]);
        if (!o || o.p.length !== n) {
          o = { p: new Float32Array(n) };
          var ph = Math.random() * 6.28;
          for (var k = 0; k < n; k++) o.p[k] = Math.min(MAXH - .5, 1.7 + 1.5 * Math.abs(Math.sin(k * .17 + ph)) + Math.random() * .8);
          piles.set(surfEls[s], o);
        }
        out.push({ l: r.left + 30, r: r.right - 30, t: r.top, p: o.p, el: surfEls[s], rect: r });
      }
      return out;
    }
    function relax(p, dt) {
      for (var i = 0; i < p.length; i++) {
        var nb = ((i > 0 ? p[i - 1] : p[i]) + (i < p.length - 1 ? p[i + 1] : p[i])) * .5;
        p[i] += (nb - p[i]) * .05 * dt;
        p[i] = Math.max(1.2, p[i] - .0002 * dt);
      }
    }
    // Tuyết đọng vẽ trên canvas riêng NẰM TRONG TRANG (cuộn cùng nội dung) nên không bị lệch/văng khi kéo trang
    var caps = new WeakMap();
    function capFor(el) {
      var o = caps.get(el);
      if (!o) {
        var wrap = el.closest('.wrap') || document.body, cv = document.createElement('canvas');
        cv.setAttribute('aria-hidden', 'true');
        cv.style.cssText = 'position:absolute;pointer-events:none;z-index:11;opacity:0;transition:opacity 1s ease 1.4s';
        wrap.appendChild(cv);
        o = { cv: cv, cx: cv.getContext('2d'), wrap: wrap, w: 0, lx: '', ly: '' };
        caps.set(el, o);
        requestAnimationFrame(function() { cv.style.opacity = '1'; });
      }
      return o;
    }
    function drawCap(sf) {
      var o = capFor(sf.el), r = sf.rect, w = Math.round(r.width), h = 16, wr = o.wrap.getBoundingClientRect();
      if (o.w !== w) {
        o.cv.width = w * dpr; o.cv.height = h * dpr; o.cv.style.width = w + 'px'; o.cv.style.height = h + 'px';
        o.cx.setTransform(dpr, 0, 0, dpr, 0, 0); o.w = w;
      }
      var lx = (r.left - wr.left).toFixed(1), ly = (r.top - wr.top - 14.5).toFixed(1);
      if (o.lx !== lx) { o.cv.style.left = lx + 'px'; o.lx = lx; }
      if (o.ly !== ly) { o.cv.style.top = ly + 'px'; o.ly = ly; }
      var cx = o.cx, p = sf.p, n = p.length, base = h - 1, x0 = 30;
      function X(i) { return x0 + i * BW + BW / 2; }
      function Y(i) { return base - p[i] * Math.min(1, i / 7, (n - 1 - i) / 7); }
      cx.clearRect(0, 0, w, h);
      cx.beginPath(); cx.moveTo(x0, base); cx.lineTo(X(0), Y(0));
      for (var i = 1; i < n - 1; i++) cx.quadraticCurveTo(X(i), Y(i), (X(i) + X(i + 1)) / 2, (Y(i) + Y(i + 1)) / 2);
      cx.lineTo(X(n - 1), Y(n - 1)); cx.lineTo(x0 + n * BW, base); cx.closePath();
      var g = cx.createLinearGradient(0, base - MAXH, 0, base);
      g.addColorStop(0, 'rgba(255,255,255,.96)'); g.addColorStop(1, 'rgba(206,213,226,.6)');
      cx.fillStyle = g; cx.shadowColor = 'rgba(255,255,255,.35)'; cx.shadowBlur = 6; cx.fill(); cx.shadowBlur = 0;
    }

    function frame(now) {
      if (!running) return;
      var dt = Math.min(3, (now - last) / 16.67); last = now;
      if (now > nextGust) { windTarget = rnd(-1.7, 1.7); nextGust = now + rnd(2500, 7000); }
      wind += (windTarget - wind) * .015 * dt;
      px += (tx - px) * .05; py += (ty - py) * .05;
      ctx.clearRect(0, 0, W, H); fx.clearRect(0, 0, W, H);
      f2.style.opacity = document.querySelector('.modal-overlay.show') ? '0' : '1';
      var surf = surfaces();
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i], L = f.L, size = f.r * 2.6, cx = L.front ? fx : ctx, oy = f.y;
        if (now > f.nt) { f.tvx = rnd(-.35, .35); f.nt = now + rnd(800, 3500); }
        f.vx += (f.tvx - f.vx) * .02 * dt;
        f.p1 += f.f1 * dt; f.p2 += f.f2 * dt; f.rot += f.rs * dt;
        var dx = f.vx + Math.sin(f.p1) * f.amp + Math.sin(f.p2 * 2.3) * f.amp * .5 + wind * L.wind * .5;
        var dy = f.vy * (1 + Math.sin(f.p2 * 3) * .12);
        if (mx > -999) {
          var ex = f.x - mx, ey = f.y - my, d2 = ex * ex + ey * ey;
          if (d2 < 14400 && d2 > 1) { var d = Math.sqrt(d2), k = (1 - d / 120) * 1.6 * (L.par / 20 + .4); dx += ex / d * k; dy += ey / d * k * .4; }
        }
        f.x += dx * dt; f.y += dy * dt;
        if (L.land) {
          var hit = false;
          for (var q = 0; q < surf.length; q++) {
            var sf = surf[q];
            if (f.x > sf.l && f.x < sf.r && oy < sf.t && f.y >= sf.t && Math.random() < .8) {
              var bi = ((f.x - sf.l) / BW) | 0, add = f.r * .9, pp = sf.p;
              for (var w = -2; w <= 2; w++) {
                var bj = bi + w; if (bj < 0 || bj >= pp.length) continue;
                pp[bj] = Math.min(MAXH, pp[bj] + add * (w === 0 ? 1 : Math.abs(w) === 1 ? .6 : .3));
              }
              flakes[i] = make(L, false); hit = true; break;
            }
          }
          if (hit) continue;
        }
        if (f.y > H + size * 2) { flakes[i] = make(L, false); continue; }
        if (f.x < -size * 3) f.x = W + size * 2; else if (f.x > W + size * 3) f.x = -size * 2;
        cx.globalAlpha = f.a * (L.tw ? .72 + .28 * Math.sin(f.p1 * 3) : 1);
        var X = f.x - px * L.par, Y = f.y - py * L.par * .6;
        if (f.crys) {
          cx.save(); cx.translate(X, Y); cx.rotate(f.rot);
          cx.drawImage(f.img, -size, -size, size * 2, size * 2); cx.restore();
        } else cx.drawImage(f.img, X - size, Y - size, size * 2, size * 2);
      }
      for (var s = 0; s < surf.length; s++) { relax(surf[s].p, dt); drawCap(surf[s]); }
      for (var j = dust.length - 1; j >= 0; j--) {
        var p = dust[j];
        p.vx *= Math.pow(.985, dt); p.vy += .022 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= p.dec * dt;
        if (p.life <= 0) { dust.splice(j, 1); continue; }
        var ds = p.r * 3.2; fx.globalAlpha = Math.min(1, p.life) * .85;
        fx.drawImage(SHARP, p.x - ds, p.y - ds, ds * 2, ds * 2);
      }
      ctx.globalAlpha = 1; fx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    document.addEventListener('visibilitychange', function() {
      running = !document.hidden; if (running) { last = performance.now(); requestAnimationFrame(frame); }
    });
    window.addEventListener('resize', resize);
    resize(); requestAnimationFrame(frame);
  } catch (e) { console.warn('snow failed', e); }
})();`;