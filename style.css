/* ── reset ────────────────────────────────────────── */
*, *::before, *::after {
  margin: 0; padding: 0;
  box-sizing: border-box;
}

/* ── tokens ──────────────────────────────────────── */
:root {
  --bg:       #0b0c0f;
  --surface:  #13151a;
  --border:   #2a2d38;
  --accent:   #e8ff47;
  --accent2:  #47d9ff;
  --text:     #dde0ec;
  --muted:    #5a5f74;
  --font-display: 'Bebas Neue', Impact, sans-serif;
  --font-mono:    'DM Mono', 'Courier New', monospace;
}

/* ── body ─────────────────────────────────────────── */
body {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

/* ── noise texture overlay ────────────────────────── */
.noise {
  position: fixed;
  inset: -50%;
  width: 200%; height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  z-index: 0;
  animation: grain 0.4s steps(1) infinite;
}
@keyframes grain {
  0%,100%  { transform: translate(0, 0); }
  20%      { transform: translate(-3%, -5%); }
  40%      { transform: translate(3%, 2%); }
  60%      { transform: translate(-2%, 4%); }
  80%      { transform: translate(5%, -3%); }
}

/* ── subtle grid overlay ──────────────────────────── */
.grid-overlay {
  position: fixed; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
}

/* ── header ───────────────────────────────────────── */
.site-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;
  animation: fadeUp 0.6s ease both;
}

.logo {
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 5.5rem);
  letter-spacing: 0.08em;
  color: var(--text);
  line-height: 1;
}

.logo em {
  font-style: normal;
  color: var(--accent);
}

.tagline {
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ── main wrap ────────────────────────────────────── */
.main-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 440px;
  z-index: 1;
  animation: fadeUp 0.6s 0.1s ease both;
}

/* ── search form ──────────────────────────────────── */
.search-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-label {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: var(--muted);
}

.place-input {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1rem;
  padding: 14px 16px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  caret-color: var(--accent);
}

.place-input::placeholder { color: var(--muted); }

.place-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(232,255,71,0.1), inset 0 0 20px rgba(232,255,71,0.03);
}

.enter-btn {
  width: 100%;
  background: var(--accent);
  color: #0b0c0f;
  border: none;
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  padding: 14px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.15s, transform 0.12s;
  position: relative;
  overflow: hidden;
}

.enter-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.15);
  transform: translateX(-105%);
  transition: transform 0.35s ease;
  skew: -8deg;
}

.enter-btn:hover::after { transform: translateX(105%); }
.enter-btn:hover { background: #f5ff6e; }
.enter-btn:active { transform: scale(0.98); }

.btn-arrow { font-size: 1.4rem; transition: transform 0.2s; }
.enter-btn:hover .btn-arrow { transform: translateX(4px); }

/* ── weather card ─────────────────────────────────── */
.container {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 28px 28px 24px;
  position: relative;
  overflow: hidden;
  animation: fadeUp 0.6s 0.2s ease both;
}

/* corner accent marks */
.container::before,
.container::after {
  content: '';
  position: absolute;
  width: 16px; height: 16px;
  border-color: var(--accent);
  border-style: solid;
}
.container::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.container::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

/* scan line animation */
.scan-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent2), transparent);
  opacity: 0;
  animation: scan 4s 1.5s ease-in-out infinite;
}
@keyframes scan {
  0%   { top: 0; opacity: 0; }
  5%   { opacity: 0.6; }
  95%  { opacity: 0.4; }
  100% { top: 100%; opacity: 0; }
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.location {
  font-family: var(--font-display);
  font-size: 1.8rem;
  letter-spacing: 0.06em;
  color: var(--text);
  line-height: 1;
  min-height: 1.8rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon img {
  width: 64px;
  height: 64px;
  filter: drop-shadow(0 0 12px rgba(71,217,255,0.5));
}

.icon-placeholder {
  font-size: 2rem;
  color: var(--muted);
  opacity: 0.4;
  animation: sway 3s ease-in-out infinite;
}
@keyframes sway {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-4px); }
}

.card-mid {
  margin-bottom: 20px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
}

.temp {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 14vw, 5rem);
  letter-spacing: -0.01em;
  color: var(--accent);
  line-height: 1;
}

.card-bot {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary-label {
  font-size: 0.58rem;
  letter-spacing: 0.32em;
  color: var(--muted);
  text-transform: uppercase;
}

.summary {
  font-size: 0.95rem;
  color: var(--text);
  text-transform: capitalize;
  letter-spacing: 0.04em;
}

/* ── footer ───────────────────────────────────────── */
.site-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: var(--muted);
  text-transform: uppercase;
  z-index: 1;
  animation: fadeUp 0.6s 0.3s ease both;
}

.blink {
  color: var(--accent);
  font-size: 0.5rem;
  animation: blink 1.4s step-end infinite;
}
@keyframes blink {
  0%,100% { opacity: 1; }
  50%     { opacity: 0; }
}

/* ── shared animation ────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
