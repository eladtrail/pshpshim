/* ═══════════════════════════════════════════════════════
   פשפשים — Accessibility Widget
   עומד בתקן IS 5568 / WCAG 2.1 AA (חוק נגישות ישראלי)
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STORAGE_KEY = 'pshpsh_a11y';
  const defaults = {
    fontSize: 0,       // -2 to +4 steps
    contrast: false,
    grayscale: false,
    links: false,
    noAnim: false,
    dyslexic: false,
    cursor: false,
  };

  let state = Object.assign({}, defaults, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));

  /* ── Inject CSS ── */
  const style = document.createElement('style');
  style.id = 'a11y-styles';
  style.textContent = `
    /* Widget Container */
    #a11y-toggle {
      position: fixed;
      bottom: 90px;
      inset-inline-start: 16px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
    #a11y-btn {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: #2563EB;
      color: #fff;
      border: 3px solid #fff;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,.3);
      font-size: 26px;
      transition: background 0.2s, transform 0.2s;
      outline: none;
    }
    #a11y-btn:focus-visible { outline: 3px solid #F97316; outline-offset: 3px; }
    #a11y-btn:hover { background: #1D4ED8; transform: scale(1.08); }
    #a11y-btn[aria-expanded="true"] { background: #1D4ED8; }

    #a11y-panel {
      display: none;
      background: #fff;
      border: 2px solid #2563EB;
      border-radius: 16px;
      padding: 16px;
      width: 272px;
      box-shadow: 0 8px 32px rgba(0,0,0,.18);
      direction: rtl;
    }
    #a11y-panel.open { display: block; }

    .a11y-title {
      font-size: 15px; font-weight: 800;
      color: #1E3A8A; margin: 0 0 12px;
      display: flex; align-items: center; gap: 8px;
      border-bottom: 1px solid #E5E7EB; padding-bottom: 10px;
    }

    .a11y-row {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 10px;
    }
    .a11y-label {
      font-size: 13px; font-weight: 600; color: #374151;
      display: flex; align-items: center; gap: 6px;
    }
    .a11y-ctrl {
      display: flex; gap: 6px;
    }
    .a11y-btn-sm {
      min-width: 32px; height: 32px; padding: 0 10px;
      border-radius: 8px; border: 1.5px solid #D1D5DB;
      background: #F9FAFB; color: #374151;
      font-size: 14px; font-weight: 700; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.15s;
    }
    .a11y-btn-sm:hover { background: #EFF6FF; border-color: #2563EB; color: #2563EB; }
    .a11y-btn-sm:focus-visible { outline: 2px solid #2563EB; }
    .a11y-btn-sm.active { background: #2563EB; color: #fff; border-color: #2563EB; }

    .a11y-font-val {
      font-size: 13px; min-width: 32px; text-align: center;
      color: #374151; font-weight: 600;
    }

    .a11y-reset {
      width: 100%; margin-top: 12px; padding: 9px;
      border-radius: 10px; border: none;
      background: #EF4444; color: #fff;
      font-size: 13px; font-weight: 700; cursor: pointer;
      transition: background 0.2s;
    }
    .a11y-reset:hover { background: #DC2626; }

    .a11y-law-note {
      font-size: 10px; color: #9CA3AF; text-align: center;
      margin-top: 10px; line-height: 1.5;
    }

    /* ── Applied accessibility classes ── */
    body.a11y-high-contrast {
      filter: contrast(1.6) !important;
    }
    body.a11y-grayscale {
      filter: grayscale(1) !important;
    }
    body.a11y-high-contrast.a11y-grayscale {
      filter: contrast(1.6) grayscale(1) !important;
    }
    body.a11y-links a {
      text-decoration: underline !important;
      text-decoration-thickness: 2px !important;
      color: #0000EE !important;
    }
    body.a11y-no-anim *, body.a11y-no-anim *::before, body.a11y-no-anim *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
    body.a11y-dyslexic, body.a11y-dyslexic * {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif !important;
      letter-spacing: 0.05em !important;
      word-spacing: 0.15em !important;
      line-height: 1.75 !important;
    }
    body.a11y-big-cursor, body.a11y-big-cursor * {
      cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M5 0L5 25L10 20L15 30L18 28.5L13 18.5L20 18.5Z' fill='black'/%3E%3Cpath d='M5 0L5 25L10 20L15 30L18 28.5L13 18.5L20 18.5Z' fill='white' stroke='black' stroke-width='1'/%3E%3C/svg%3E") 5 0, auto !important;
    }
  `;
  document.head.appendChild(style);

  /* ── Build HTML ── */
  const container = document.createElement('div');
  container.id = 'a11y-toggle';
  container.innerHTML = `
    <div id="a11y-panel" role="dialog" aria-modal="false" aria-label="תפריט נגישות">
      <p class="a11y-title">♿ תפריט נגישות</p>

      <div class="a11y-row">
        <span class="a11y-label">🔠 גודל טקסט</span>
        <div class="a11y-ctrl">
          <button class="a11y-btn-sm" id="a11y-font-down" aria-label="הקטן טקסט">A−</button>
          <span class="a11y-font-val" id="a11y-font-val">100%</span>
          <button class="a11y-btn-sm" id="a11y-font-up" aria-label="הגדל טקסט">A+</button>
        </div>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">🌗 ניגודיות גבוהה</span>
        <button class="a11y-btn-sm" id="a11y-contrast" aria-pressed="false">כבוי</button>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">⬜ גווני אפור</span>
        <button class="a11y-btn-sm" id="a11y-gray" aria-pressed="false">כבוי</button>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">🔗 הדגש קישורים</span>
        <button class="a11y-btn-sm" id="a11y-links" aria-pressed="false">כבוי</button>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">🎬 עצור אנימציות</span>
        <button class="a11y-btn-sm" id="a11y-anim" aria-pressed="false">כבוי</button>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">📖 גופן קריא</span>
        <button class="a11y-btn-sm" id="a11y-dyslexic" aria-pressed="false">כבוי</button>
      </div>

      <div class="a11y-row">
        <span class="a11y-label">🖱️ סמן גדול</span>
        <button class="a11y-btn-sm" id="a11y-cursor" aria-pressed="false">כבוי</button>
      </div>

      <button class="a11y-reset" id="a11y-reset">↺ איפוס הכל</button>
      <p class="a11y-law-note">כלי נגישות זה עומד בתקן ישראלי IS 5568 ו-WCAG 2.1 AA</p>
    </div>

    <button id="a11y-btn" aria-label="פתח תפריט נגישות" aria-expanded="false" aria-controls="a11y-panel">
      ♿
    </button>
  `;
  document.body.appendChild(container);

  /* ── Apply state to DOM ── */
  function applyState() {
    const body = document.body;
    const pct = 100 + state.fontSize * 10;

    document.documentElement.style.fontSize = `${pct}%`;
    document.getElementById('a11y-font-val').textContent = pct + '%';

    body.classList.toggle('a11y-high-contrast', state.contrast);
    body.classList.toggle('a11y-grayscale', state.grayscale);
    body.classList.toggle('a11y-links', state.links);
    body.classList.toggle('a11y-no-anim', state.noAnim);
    body.classList.toggle('a11y-dyslexic', state.dyslexic);
    body.classList.toggle('a11y-big-cursor', state.cursor);

    setBtn('a11y-contrast', state.contrast);
    setBtn('a11y-gray', state.grayscale);
    setBtn('a11y-links', state.links);
    setBtn('a11y-anim', state.noAnim);
    setBtn('a11y-dyslexic', state.dyslexic);
    setBtn('a11y-cursor', state.cursor);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function setBtn(id, active) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.textContent = active ? 'פעיל' : 'כבוי';
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  }

  function toggle(id) {
    const btn = document.getElementById(id);
    const panel = document.getElementById('a11y-panel');
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', (!isOpen).toString());
  }

  /* ── Wire up ── */
  document.getElementById('a11y-btn').addEventListener('click', () => {
    toggle('a11y-btn');
  });

  document.getElementById('a11y-font-up').addEventListener('click', () => {
    if (state.fontSize < 4) { state.fontSize++; applyState(); }
  });
  document.getElementById('a11y-font-down').addEventListener('click', () => {
    if (state.fontSize > -2) { state.fontSize--; applyState(); }
  });

  document.getElementById('a11y-contrast').addEventListener('click', () => {
    state.contrast = !state.contrast; applyState();
  });
  document.getElementById('a11y-gray').addEventListener('click', () => {
    state.grayscale = !state.grayscale; applyState();
  });
  document.getElementById('a11y-links').addEventListener('click', () => {
    state.links = !state.links; applyState();
  });
  document.getElementById('a11y-anim').addEventListener('click', () => {
    state.noAnim = !state.noAnim; applyState();
  });
  document.getElementById('a11y-dyslexic').addEventListener('click', () => {
    state.dyslexic = !state.dyslexic; applyState();
  });
  document.getElementById('a11y-cursor').addEventListener('click', () => {
    state.cursor = !state.cursor; applyState();
  });

  document.getElementById('a11y-reset').addEventListener('click', () => {
    state = Object.assign({}, defaults);
    document.documentElement.style.fontSize = '';
    applyState();
  });

  /* Close on outside click */
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('a11y-panel');
    const wrapper = document.getElementById('a11y-toggle');
    if (panel.classList.contains('open') && !wrapper.contains(e.target)) {
      panel.classList.remove('open');
      document.getElementById('a11y-btn').setAttribute('aria-expanded', 'false');
    }
  });

  /* Close on Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('a11y-panel').classList.remove('open');
      document.getElementById('a11y-btn').setAttribute('aria-expanded', 'false');
    }
  });

  /* Apply saved state on load */
  applyState();
})();
