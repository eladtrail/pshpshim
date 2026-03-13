/* ============================================
   i18n.js — Translations (HE / EN / RU)
   פשפשים — Trilingual Support
   ============================================ */

const TRANSLATIONS = {
  he: {
    dir: 'rtl',
    lang: 'he',

    /* Navbar */
    nav_home: 'בית',
    nav_shop: 'חנות',
    nav_deals: 'מבצעים',
    nav_secondhand: 'יד שנייה',
    nav_contact: 'צור קשר',
    nav_cta: 'WhatsApp',

    /* Hero */
    hero_badge: '🔥 מוצרים חמים',
    hero_title: 'פשפשים',
    hero_subtitle: 'מציאות אמיתיות מ-Amazon ו-AliExpress + יד שנייה איכותית',
    hero_cta_shop: 'לחנות',
    hero_cta_contact: 'צור קשר',

    /* Stats */
    stat_products: 'מוצרים',
    stat_categories: 'קטגוריות',
    stat_platforms: 'פלטפורמות',
    stat_savings: 'חיסכון ממוצע',

    /* Sections */
    section_categories: 'קטגוריות',
    section_categories_sub: 'מצא את מה שאתה מחפש',
    section_deals: '🔥 מבצעי אפיליאייט',
    section_deals_sub: 'המוצרים הכי חמים מ-Amazon ו-AliExpress',
    section_secondhand: '♻️ יד שנייה',
    section_secondhand_sub: 'מוצרים אישיים — מצב מצוין, מחיר הגון',
    section_how: 'איך זה עובד?',
    section_how_sub: 'קל, מהיר, ובלי סיבוכים',
    see_all: 'צפה בכל המוצרים',

    /* How it works */
    how1_title: 'גלה מוצרים',
    how1_desc: 'עיין בקטלוג המוצרים שלנו — מבצעי Amazon, AliExpress ויד שנייה',
    how2_title: 'בחר ורכוש',
    how2_desc: 'לחץ על מוצר אפיליאייט לרכישה ישירה, או פנה אלינו ב-WhatsApp ליד שנייה',
    how3_title: 'קבל את המוצר',
    how3_desc: 'Amazon — משלוח עד הבית. AliExpress — לנקודת איסוף קרובה. יד שנייה — תיאום מסירה בקלות',

    /* WhatsApp CTA */
    wa_title: 'שאלה? נשמח לעזור!',
    wa_desc: 'שלח לנו הודעה ב-WhatsApp לכל שאלה על מוצר, תיאום מסירה, או הצעת מחיר',
    wa_btn: 'פתח WhatsApp',

    /* Shop */
    shop_hero_title: 'כל המוצרים',
    shop_search: 'חיפוש מוצרים...',
    filter_all: 'הכל',
    filter_affiliate: '🔗 מבצעים',
    filter_secondhand: '♻️ יד שנייה',
    sort_label: 'מיון:',
    sort_newest: 'חדש ביותר',
    sort_price_asc: 'מחיר: נמוך לגבוה',
    sort_price_desc: 'מחיר: גבוה לנמוך',
    sort_discount: 'הנחה הגבוהה ביותר',
    cat_all: 'הכל',
    cat_tech: 'טכנולוגיה',
    cat_fashion: 'אופנה',
    cat_home: 'בית',
    cat_sport: 'ספורט',
    cat_books: 'ספרים',
    cat_kids: 'ילדים',
    cat_gaming: 'גיימינג',
    cat_tools: 'כלים',
    cat_health: 'בריאות',
    cat_other: 'אחר',
    no_results: 'לא נמצאו מוצרים',
    no_results_sub: 'נסה לשנות את הפילטרים או חפש משהו אחר',

    /* Product card */
    btn_buy: 'קנה עכשיו',
    btn_contact: 'צור קשר',
    label_condition: 'מצב:',
    label_platform: 'פלטפורמה:',
    badge_new: 'חדש',
    badge_hot: '🔥 חם',
    badge_sale: '🏷️ מבצע',
    badge_used: 'יד שנייה',

    /* Footer */
    footer_desc: 'מציאות אמיתיות מ-Amazon, AliExpress ועוד — ומוצרי יד שנייה מכל הלב.',
    footer_links: 'קישורים',
    footer_contact_title: 'צור קשר',
    footer_rights: '© 2025 פשפשים. כל הזכויות שמורות.',
    footer_credit: 'נבנה ע"י SLAVX.SITE',

    /* Product detail page */
    prod_loading: 'טוען מוצר...',
    prod_zoom: 'לחץ על התמונה להגדלה',
    prod_back_cat: '← חזרה לקטגוריה',
    prod_back_shop: 'חזרה לחנות',
    prod_cta_sub_affiliate: '⚡ מחיר מבצע — לחץ לראות מחיר עדכני',
    prod_cta_sub_secondhand: '📞 ליצור קשר לפרטים ומסירה',
    prod_buy_at: 'קנה עכשיו ב-',
    prod_contact_wa: 'צור קשר ב-WhatsApp',
    prod_trust_secure: '🔒 תשלום מאובטח',
    prod_trust_ship_amazon: '📦 משלוח עד הבית',
    prod_trust_ship_aliexpress: '📦 משלוח / נקודת איסוף',
    prod_trust_ship_default: '📦 משלוח בינלאומי',
    prod_trust_return: '↩️ החזר קל',
    prod_trust_response: '💬 תגובה מהירה',
    prod_trust_pickup: '🤝 מסירה נוחה',
    prod_trust_fair: '✅ מחיר הוגן',
    prod_section_desc: '📋 תיאור המוצר',
    prod_section_desc_title: 'פרטים מלאים',
    prod_why_title: 'למה לקנות דרכנו?',
    prod_why_1: 'מצאנו את המחיר הטוב ביותר עבורך',
    prod_why_2: 'קישור ישיר לאתר הרשמי',
    prod_why_3: 'תשלום מאובטח ומוגן',
    prod_why_4_amazon: 'משלוח עד הבית',
    prod_why_4_aliexpress: 'משלוח לנקודת איסוף קרובה (לעיתים עד הבית)',
    prod_why_4_default: 'משלוח בינלאומי',
    prod_why_5: 'אחריות ומדיניות החזרה של הפלטפורמה',
    prod_details_title: 'פרטי המוצר',
    prod_detail_cond: 'מצב:',
    prod_detail_cond_default: 'ראה תיאור',
    prod_detail_price: 'מחיר:',
    prod_detail_negotiate: 'ניתן למשא ומתן',
    prod_detail_delivery: 'מסירה: בתיאום אישי',
    prod_detail_payment: 'תשלום: מזומן / Bit / PayBox',
    prod_section_specs: '📊 מפרט',
    prod_section_specs_title: 'מפרט מוצר',
    prod_spec_key: 'פרט',
    prod_spec_val: 'מידע',
    prod_spec_name: 'שם',
    prod_spec_category: 'קטגוריה',
    prod_spec_price: 'מחיר',
    prod_spec_original: 'מחיר מקורי',
    prod_spec_saving: 'חיסכון',
    prod_spec_platform: 'פלטפורמה',
    prod_spec_condition: 'מצב',
    prod_spec_type: 'סוג',
    prod_type_affiliate: '🔗 אפיליאייט',
    prod_type_secondhand: '♻️ יד שנייה',
    prod_section_related_tag: '✨ קשורים',
    prod_section_related_title: 'מוצרים דומים',
    prod_related_view: 'צפה',
    prod_saving_label: 'חיסכון',
    prod_cta_bottom_affiliate: '⚡ קנה עכשיו במחיר מבצע',
    prod_cta_bottom_secondhand: '💬 מעוניין? צור קשר',
    prod_cta_bottom_sub_aff: 'לחץ לראות את המחיר העדכני ב-',
    prod_cta_bottom_sub_sh: 'שלח הודעה ב-WhatsApp לפרטים נוספים',
    prod_buy_link: '👉 לקנייה ב-',
    prod_wa_contact: '📲 WhatsApp',

    /* Footer */
    footer_legal: 'משפטי',
    footer_terms: 'תקנון',
    footer_privacy: 'מדיניות פרטיות',

    /* Legal pages */
    legal_terms_badge: '📄 מסמך משפטי',
    legal_terms_title: 'תקנון האתר',
    legal_terms_updated: '📅 עדכון אחרון: מרץ 2025',
    legal_terms_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_terms_notice: '⚠️ אנא קרא/י את התקנון בעיון. השימוש באתר מהווה הסכמה לתנאים המפורטים להלן.',
    legal_privacy_badge: '🔒 מדיניות פרטיות',
    legal_privacy_title: 'מדיניות פרטיות',
    legal_privacy_updated: '📅 עדכון אחרון: מרץ 2025',
    legal_privacy_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_privacy_notice: '🛡️ פשפשים מכבדת את פרטיותך. מדיניות זו מפרטת כיצד אנו מטפלים במידע של המשתמשים, בהתאם לחוק הגנת הפרטיות ורגולציית GDPR.',
    legal_contact_q: 'יש לכם שאלות?',
    legal_contact_desc: 'אנחנו כאן לעזור — צרו קשר ישירות דרך WhatsApp',
    legal_contact_btn: '📲 054-792-1821',
    legal_privacy_q: '🔒 שאלות על פרטיות?',
    legal_privacy_resp: 'נחזור אליך תוך 48 שעות בימי עסקים',

    /* Cookie consent */
    cookie_msg: '🍪 האתר שומר העדפות שפה ונגישות ב-localStorage בלבד (ללא cookies אמיתיים).',
    cookie_accept: 'הבנתי ✓',
    cookie_link: 'מדיניות פרטיות',
  },

  en: {
    dir: 'ltr',
    lang: 'en',

    nav_home: 'Home',
    nav_shop: 'Shop',
    nav_deals: 'Deals',
    nav_secondhand: 'Secondhand',
    nav_contact: 'Contact',
    nav_cta: 'WhatsApp',

    hero_badge: '🔥 Hot Products',
    hero_title: 'פשפשים',
    hero_subtitle: 'Real deals from Amazon & AliExpress + Quality secondhand items',
    hero_cta_shop: 'Shop Now',
    hero_cta_contact: 'Contact Us',

    stat_products: 'Products',
    stat_categories: 'Categories',
    stat_platforms: 'Platforms',
    stat_savings: 'Avg. Savings',

    section_categories: 'Categories',
    section_categories_sub: 'Find what you\'re looking for',
    section_deals: '🔥 Affiliate Deals',
    section_deals_sub: 'The hottest products from Amazon & AliExpress',
    section_secondhand: '♻️ Secondhand',
    section_secondhand_sub: 'Personal items — great condition, fair price',
    section_how: 'How It Works',
    section_how_sub: 'Simple, fast, no hassle',
    see_all: 'View All Products',

    how1_title: 'Browse Products',
    how1_desc: 'Explore our catalog — Amazon & AliExpress deals and secondhand items',
    how2_title: 'Choose & Buy',
    how2_desc: 'Click affiliate products to buy directly, or contact us on WhatsApp for secondhand',
    how3_title: 'Receive It',
    how3_desc: 'Amazon — delivered to your door. AliExpress — to a nearby pickup point. Secondhand — easy personal arrangement',

    wa_title: 'Got a Question?',
    wa_desc: 'Send us a WhatsApp message for any product question, pickup coordination, or price offer',
    wa_btn: 'Open WhatsApp',

    shop_hero_title: 'All Products',
    shop_search: 'Search products...',
    filter_all: 'All',
    filter_affiliate: '🔗 Deals',
    filter_secondhand: '♻️ Secondhand',
    sort_label: 'Sort:',
    sort_newest: 'Newest',
    sort_price_asc: 'Price: Low to High',
    sort_price_desc: 'Price: High to Low',
    sort_discount: 'Biggest Discount',
    cat_all: 'All',
    cat_tech: 'Tech',
    cat_fashion: 'Fashion',
    cat_home: 'Home',
    cat_sport: 'Sports',
    cat_books: 'Books',
    cat_kids: 'Kids',
    cat_gaming: 'Gaming',
    cat_tools: 'Tools',
    cat_health: 'Health',
    cat_other: 'Other',
    no_results: 'No products found',
    no_results_sub: 'Try adjusting filters or search for something else',

    btn_buy: 'Buy Now',
    btn_contact: 'Contact',
    label_condition: 'Condition:',
    label_platform: 'Platform:',
    badge_new: 'New',
    badge_hot: '🔥 Hot',
    badge_sale: '🏷️ Sale',
    badge_used: 'Secondhand',

    footer_desc: 'Real deals from Amazon, AliExpress and more — plus quality secondhand items.',
    footer_links: 'Links',
    footer_contact_title: 'Contact',
    footer_rights: '© 2025 פשפשים. All rights reserved.',
    footer_credit: 'Built by SLAVX.SITE',

    /* Product detail page */
    prod_loading: 'Loading product...',
    prod_zoom: 'Click image to enlarge',
    prod_back_cat: '← Back to category',
    prod_back_shop: 'Back to shop',
    prod_cta_sub_affiliate: '⚡ Sale price — click to see current price',
    prod_cta_sub_secondhand: '📞 Contact us for details and pickup',
    prod_buy_at: 'Buy now on ',
    prod_contact_wa: 'Contact on WhatsApp',
    prod_trust_secure: '🔒 Secure payment',
    prod_trust_ship_amazon: '📦 Delivered to your door',
    prod_trust_ship_aliexpress: '📦 Delivery or pickup point',
    prod_trust_ship_default: '📦 International shipping',
    prod_trust_return: '↩️ Easy returns',
    prod_trust_response: '💬 Fast response',
    prod_trust_pickup: '🤝 Easy pickup',
    prod_trust_fair: '✅ Fair price',
    prod_section_desc: '📋 Product description',
    prod_section_desc_title: 'Full details',
    prod_why_title: 'Why buy through us?',
    prod_why_1: 'We found the best price for you',
    prod_why_2: 'Direct link to the official store',
    prod_why_3: 'Secure and protected payment',
    prod_why_4_amazon: 'Delivery to your door',
    prod_why_4_aliexpress: 'Delivery to nearby pickup point (sometimes door-to-door)',
    prod_why_4_default: 'International shipping',
    prod_why_5: 'Platform\'s warranty and return policy',
    prod_details_title: 'Item details',
    prod_detail_cond: 'Condition:',
    prod_detail_cond_default: 'See description',
    prod_detail_price: 'Price:',
    prod_detail_negotiate: 'Negotiable',
    prod_detail_delivery: 'Pickup: by personal arrangement',
    prod_detail_payment: 'Payment: Cash / Bit / PayBox',
    prod_section_specs: '📊 Specs',
    prod_section_specs_title: 'Product specs',
    prod_spec_key: 'Detail',
    prod_spec_val: 'Info',
    prod_spec_name: 'Name',
    prod_spec_category: 'Category',
    prod_spec_price: 'Price',
    prod_spec_original: 'Original price',
    prod_spec_saving: 'Saving',
    prod_spec_platform: 'Platform',
    prod_spec_condition: 'Condition',
    prod_spec_type: 'Type',
    prod_type_affiliate: '🔗 Affiliate',
    prod_type_secondhand: '♻️ Secondhand',
    prod_section_related_tag: '✨ Related',
    prod_section_related_title: 'Similar products',
    prod_related_view: 'View',
    prod_saving_label: 'Saving',
    prod_cta_bottom_affiliate: '⚡ Buy now at sale price',
    prod_cta_bottom_secondhand: '💬 Interested? Contact us',
    prod_cta_bottom_sub_aff: 'Click to see current price on ',
    prod_cta_bottom_sub_sh: 'Send a WhatsApp message for more details',
    prod_buy_link: '👉 Buy on ',
    prod_wa_contact: '📲 WhatsApp',

    /* Footer */
    footer_legal: 'Legal',
    footer_terms: 'Terms',
    footer_privacy: 'Privacy Policy',

    /* Legal pages */
    legal_terms_badge: '📄 Legal Document',
    legal_terms_title: 'Terms of Service',
    legal_terms_updated: '📅 Last updated: March 2025',
    legal_terms_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_terms_notice: '⚠️ Please read these terms carefully. Using this site constitutes acceptance of all terms listed below.',
    legal_privacy_badge: '🔒 Privacy Policy',
    legal_privacy_title: 'Privacy Policy',
    legal_privacy_updated: '📅 Last updated: March 2025',
    legal_privacy_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_privacy_notice: '🛡️ פשפשים respects your privacy. This policy details how we handle user information per Israeli Privacy Law and GDPR.',
    legal_contact_q: 'Have Questions?',
    legal_contact_desc: "We're here to help — contact us directly via WhatsApp",
    legal_contact_btn: '📲 054-792-1821',
    legal_privacy_q: '🔒 Privacy Questions?',
    legal_privacy_resp: "We'll respond within 48 business hours",

    /* Cookie consent */
    cookie_msg: '🍪 This site saves language and accessibility preferences in your browser\'s localStorage only (no real cookies).',
    cookie_accept: 'Got it ✓',
    cookie_link: 'Privacy Policy',
  },

  ru: {
    dir: 'ltr',
    lang: 'ru',

    nav_home: 'Главная',
    nav_shop: 'Магазин',
    nav_deals: 'Акции',
    nav_secondhand: 'Б/У товары',
    nav_contact: 'Контакты',
    nav_cta: 'WhatsApp',

    hero_badge: '🔥 Горячие товары',
    hero_title: 'פשפשים',
    hero_subtitle: 'Настоящие скидки с Amazon и AliExpress + качественные б/у товары',
    hero_cta_shop: 'В магазин',
    hero_cta_contact: 'Связаться',

    stat_products: 'Товаров',
    stat_categories: 'Категорий',
    stat_platforms: 'Платформ',
    stat_savings: 'Средняя экономия',

    section_categories: 'Категории',
    section_categories_sub: 'Найдите то, что ищете',
    section_deals: '🔥 Партнёрские акции',
    section_deals_sub: 'Самые горячие товары с Amazon и AliExpress',
    section_secondhand: '♻️ Б/У товары',
    section_secondhand_sub: 'Личные вещи — отличное состояние, честная цена',
    section_how: 'Как это работает?',
    section_how_sub: 'Просто, быстро, без лишних хлопот',
    see_all: 'Посмотреть все товары',

    how1_title: 'Просматривайте',
    how1_desc: 'Изучайте наш каталог — акции Amazon, AliExpress и б/у товары',
    how2_title: 'Выбирайте',
    how2_desc: 'Нажмите на партнёрский товар для покупки или свяжитесь через WhatsApp для б/у',
    how3_title: 'Получайте',
    how3_desc: 'Amazon — доставка домой. AliExpress — до ближайшего пункта выдачи. Б/У — личная договорённость',

    wa_title: 'Есть вопросы?',
    wa_desc: 'Напишите нам в WhatsApp по любому вопросу о товаре, доставке или цене',
    wa_btn: 'Открыть WhatsApp',

    shop_hero_title: 'Все товары',
    shop_search: 'Поиск товаров...',
    filter_all: 'Все',
    filter_affiliate: '🔗 Акции',
    filter_secondhand: '♻️ Б/У',
    sort_label: 'Сортировка:',
    sort_newest: 'Новые',
    sort_price_asc: 'Цена: по возрастанию',
    sort_price_desc: 'Цена: по убыванию',
    sort_discount: 'Наибольшая скидка',
    cat_all: 'Все',
    cat_tech: 'Техника',
    cat_fashion: 'Мода',
    cat_home: 'Дом',
    cat_sport: 'Спорт',
    cat_books: 'Книги',
    cat_kids: 'Дети',
    cat_gaming: 'Игры',
    cat_tools: 'Инструменты',
    cat_health: 'Здоровье',
    cat_other: 'Другое',
    no_results: 'Товары не найдены',
    no_results_sub: 'Попробуйте изменить фильтры или найти что-то другое',

    btn_buy: 'Купить',
    btn_contact: 'Написать',
    label_condition: 'Состояние:',
    label_platform: 'Платформа:',
    badge_new: 'Новый',
    badge_hot: '🔥 Хит',
    badge_sale: '🏷️ Акция',
    badge_used: 'Б/У',

    footer_desc: 'Настоящие скидки с Amazon, AliExpress и других сайтов + качественные б/у товары.',
    footer_links: 'Ссылки',
    footer_contact_title: 'Контакты',
    footer_rights: '© 2025 פשפשים. Все права защищены.',
    footer_credit: 'Разработано SLAVX.SITE',

    /* Product detail page */
    prod_loading: 'Загрузка товара...',
    prod_zoom: 'Нажмите для увеличения',
    prod_back_cat: '← Назад в категорию',
    prod_back_shop: 'Вернуться в магазин',
    prod_cta_sub_affiliate: '⚡ Цена по акции — нажмите для актуальной цены',
    prod_cta_sub_secondhand: '📞 Свяжитесь для деталей и получения',
    prod_buy_at: 'Купить на ',
    prod_contact_wa: 'Написать в WhatsApp',
    prod_trust_secure: '🔒 Безопасная оплата',
    prod_trust_ship_amazon: '📦 Доставка до двери',
    prod_trust_ship_aliexpress: '📦 Доставка или пункт выдачи',
    prod_trust_ship_default: '📦 Международная доставка',
    prod_trust_return: '↩️ Простой возврат',
    prod_trust_response: '💬 Быстрый ответ',
    prod_trust_pickup: '🤝 Удобное получение',
    prod_trust_fair: '✅ Честная цена',
    prod_section_desc: '📋 Описание товара',
    prod_section_desc_title: 'Подробная информация',
    prod_why_title: 'Почему купить через нас?',
    prod_why_1: 'Мы нашли для вас лучшую цену',
    prod_why_2: 'Прямая ссылка на официальный магазин',
    prod_why_3: 'Безопасная и защищённая оплата',
    prod_why_4_amazon: 'Доставка до двери',
    prod_why_4_aliexpress: 'Доставка до пункта выдачи (иногда до двери)',
    prod_why_4_default: 'Международная доставка',
    prod_why_5: 'Гарантия и политика возврата платформы',
    prod_details_title: 'Детали товара',
    prod_detail_cond: 'Состояние:',
    prod_detail_cond_default: 'Смотрите описание',
    prod_detail_price: 'Цена:',
    prod_detail_negotiate: 'Возможен торг',
    prod_detail_delivery: 'Получение: по договорённости',
    prod_detail_payment: 'Оплата: Наличные / Bit / PayBox',
    prod_section_specs: '📊 Характеристики',
    prod_section_specs_title: 'Характеристики товара',
    prod_spec_key: 'Параметр',
    prod_spec_val: 'Значение',
    prod_spec_name: 'Название',
    prod_spec_category: 'Категория',
    prod_spec_price: 'Цена',
    prod_spec_original: 'Первоначальная цена',
    prod_spec_saving: 'Экономия',
    prod_spec_platform: 'Платформа',
    prod_spec_condition: 'Состояние',
    prod_spec_type: 'Тип',
    prod_type_affiliate: '🔗 Партнёрский',
    prod_type_secondhand: '♻️ Б/У',
    prod_section_related_tag: '✨ Похожие',
    prod_section_related_title: 'Похожие товары',
    prod_related_view: 'Смотреть',
    prod_saving_label: 'Экономия',
    prod_cta_bottom_affiliate: '⚡ Купить по акционной цене',
    prod_cta_bottom_secondhand: '💬 Заинтересованы? Напишите нам',
    prod_cta_bottom_sub_aff: 'Нажмите для актуальной цены на ',
    prod_cta_bottom_sub_sh: 'Напишите в WhatsApp для получения деталей',
    prod_buy_link: '👉 Купить на ',
    prod_wa_contact: '📲 WhatsApp',

    /* Footer */
    footer_legal: 'Юридическое',
    footer_terms: 'Условия',
    footer_privacy: 'Политика конфиденциальности',

    /* Legal pages */
    legal_terms_badge: '📄 Юридический документ',
    legal_terms_title: 'Условия использования',
    legal_terms_updated: '📅 Последнее обновление: март 2025',
    legal_terms_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_terms_notice: '⚠️ Пожалуйста, внимательно прочитайте эти условия. Использование сайта означает принятие всех перечисленных условий.',
    legal_privacy_badge: '🔒 Политика конфиденциальности',
    legal_privacy_title: 'Политика конфиденциальности',
    legal_privacy_updated: '📅 Последнее обновление: март 2025',
    legal_privacy_site: '🌐 פשפשים — pshpshim.vercel.app',
    legal_privacy_notice: '🛡️ פשפשים уважает вашу конфиденциальность. Эта политика описывает, как мы обрабатываем данные пользователей в соответствии с законом о конфиденциальности и GDPR.',
    legal_contact_q: 'Есть вопросы?',
    legal_contact_desc: 'Мы здесь, чтобы помочь — свяжитесь с нами через WhatsApp',
    legal_contact_btn: '📲 054-792-1821',
    legal_privacy_q: '🔒 Вопросы о конфиденциальности?',
    legal_privacy_resp: 'Ответим в течение 48 рабочих часов',

    /* Cookie consent */
    cookie_msg: '🍪 Сайт сохраняет языковые и настройки доступности только в localStorage браузера (без реальных cookies).',
    cookie_accept: 'Понятно ✓',
    cookie_link: 'Конфиденциальность',
  }
};

/* ── Current language state ── */
let currentLang = localStorage.getItem('pshpsh_lang') || 'he';

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS['he'][key] ?? key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('pshpsh_lang', lang);

  const tr = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = tr.dir;
  document.body.classList.toggle('ltr', tr.dir === 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = tr[key] || TRANSLATIONS['he'][key] || key;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = tr[key] || TRANSLATIONS['he'][key] || key;
    el.title = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
