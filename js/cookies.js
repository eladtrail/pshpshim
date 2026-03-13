/* ============================================
   cookies.js — Cookie / localStorage Consent Banner
   פשפשים
   ============================================ */

(function () {
  const STORAGE_KEY = 'pshpsh_consent';

  if (localStorage.getItem(STORAGE_KEY)) return;

  function getT(key) {
    if (typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined') {
      return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS['he']?.[key] ?? key;
    }
    // Fallback before i18n loads
    const fallback = {
      he: { cookie_msg: '🍪 האתר שומר העדפות שפה ונגישות ב-localStorage בלבד.', cookie_accept: 'הבנתי ✓', cookie_link: 'מדיניות פרטיות' },
      en: { cookie_msg: '🍪 This site saves language & accessibility preferences in localStorage only.', cookie_accept: 'Got it ✓', cookie_link: 'Privacy Policy' },
      ru: { cookie_msg: '🍪 Сайт сохраняет настройки языка и доступности только в localStorage.', cookie_accept: 'Понятно ✓', cookie_link: 'Конфиденциальность' },
    };
    const lang = localStorage.getItem('pshpsh_lang') || 'he';
    return fallback[lang]?.[key] ?? fallback['he'][key];
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'הסכמה לשמירת נתונים');

    const msg = document.createElement('p');
    msg.setAttribute('data-i18n', 'cookie_msg');
    msg.textContent = getT('cookie_msg');

    const link = document.createElement('a');
    link.href = '/privacy';
    link.setAttribute('data-i18n', 'cookie_link');
    link.textContent = getT('cookie_link');

    const btn = document.createElement('button');
    btn.id = 'cookie-accept';
    btn.setAttribute('data-i18n', 'cookie_accept');
    btn.textContent = getT('cookie_accept');
    btn.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, '1');
      banner.classList.add('cookie-hide');
      setTimeout(() => banner.remove(), 400);
    });

    const inner = document.createElement('div');
    inner.className = 'cookie-inner';

    const textWrap = document.createElement('div');
    textWrap.className = 'cookie-text';
    textWrap.appendChild(msg);
    textWrap.appendChild(link);

    inner.appendChild(textWrap);
    inner.appendChild(btn);
    banner.appendChild(inner);
    document.body.appendChild(banner);

    // Update text when language changes
    document.addEventListener('langchange', () => {
      msg.textContent = getT('cookie_msg');
      link.textContent = getT('cookie_link');
      btn.textContent = getT('cookie_accept');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner);
  } else {
    createBanner();
  }
})();
