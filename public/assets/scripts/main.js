const translations = { en, es };
let currentLang = 'en';

/**
 * Updates the text content of elements with the data-i18n attribute based on the current language.
 * It also updates the active state of language buttons.
 * @param {string} lang - The language code to update the texts to.
 */
function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const keys = element.getAttribute('data-i18n').split('.');
    let text = translations[currentLang];
    for (let key of keys) {
      if (text[key] === undefined) return;
      text = text[key];
    }
    element.innerHTML = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = translate(element.getAttribute('data-i18n-placeholder'));
  });

  /**
   * Updates the active state of language buttons based on the current language.
   * It removes the 'active' class from all buttons and adds it to the button corresponding to the current language.
   */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    }
  });
}

/**
 * Adds click event listeners to language buttons.
 * When a button is clicked, it updates the current language and refreshes the text content.
 */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentLang = e.target.getAttribute('data-lang');
    updateTexts();
    updateBilling();
  });
});

/**
 * Initializes the text content of elements with the data-i18n attribute when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  updateTexts();
  updateBilling();
});

/**
 * Opens one item of an accordion and closes the others.
 * In the Features accordion, the open item also selects its preview panel.
 * @param {HTMLElement} accordion - The accordion that contains the item.
 * @param {number} index - The position of the item to open.
 */
function openAccordionItem(accordion, index) {
  if (!accordion) return;
  accordion.querySelectorAll('.accordion-item').forEach((item, i) => {
    const open = i === index;
    item.classList.toggle('open', open);
    item.querySelector('.accordion-header').setAttribute('aria-expanded', String(open));
  });

  if (accordion.dataset.accordion === 'features') {
    document.querySelectorAll('.feature-panel').forEach(panel => {
      panel.classList.toggle('active', Number(panel.dataset.panel) === index);
    });
  }
}

/**
 * Adds click event listeners to the accordion headers.
 * The "Learn more" links of the services open the related feature.
 */
document.querySelectorAll('[data-accordion]').forEach(accordion => {
  accordion.querySelectorAll('.accordion-header').forEach((header, index) => {
    header.addEventListener('click', () => openAccordionItem(accordion, index));
  });
});

document.querySelectorAll('[data-feature]').forEach(link => {
  link.addEventListener('click', () => {
    openAccordionItem(document.querySelector('[data-accordion="features"]'), Number(link.dataset.feature));
  });
});

/**
 * Embed URLs of the videos (e.g. https://www.youtube.com/embed/<id>).
 * Paste each URL when the video is published on YouTube.
 */
const VIDEO_URLS = {
  product: '',
  team: ''
};

/**
 * Returns the text of a dotted translation key in the current language.
 * @param {string} key - The translation key, e.g. "product.soon".
 */
function translate(key) {
  return key.split('.').reduce((text, part) => (text ? text[part] : undefined), translations[currentLang]) || '';
}

/**
 * Initializes the video players. Each player loads its YouTube embed only when
 * the visitor presses play. If the video is not published or cannot be loaded,
 * a message explains where to watch it.
 */
document.querySelectorAll('[data-video]').forEach(player => {
  const name = player.dataset.video;
  const url = VIDEO_URLS[name];
  const play = player.querySelector('[data-video-play]');
  const link = document.querySelector(`[data-video-link="${name}"]`);
  const message = document.querySelector(`[data-video-soon="${name}"]`);
  if (!play) return;

  const showMessage = key => {
    if (!message) return;
    message.setAttribute('data-i18n', key);
    message.innerHTML = translate(key);
    message.hidden = false;
  };

  if (!url) {
    if (link) link.hidden = true;
    play.addEventListener('click', () => showMessage(`${name}.soon`));
    return;
  }

  if (link) link.href = url.replace('/embed/', '/watch?v=');

  play.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = `${url}?autoplay=1`;
    frame.title = translate(`${name}.player_title`);
    frame.allow = 'autoplay; encrypted-media; picture-in-picture';
    frame.allowFullscreen = true;
    frame.addEventListener('error', () => showMessage(`${name}.unavailable`));
    player.appendChild(frame);
    play.hidden = true;
  });
});

let billing = 'monthly';

/**
 * Updates the prices, periods and notes of the Plans section for the selected billing.
 * Prices come from data-price-monthly / data-price-annual and notes from translation keys.
 */
function updateBilling() {
  const monthly = billing === 'monthly';
  document.querySelectorAll('[data-billing]').forEach(button => {
    const active = button.dataset.billing === billing;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-price-monthly]').forEach(price => {
    price.textContent = monthly ? price.dataset.priceMonthly : price.dataset.priceAnnual;
  });
  document.querySelectorAll('[data-period]').forEach(period => {
    period.textContent = translate(monthly ? 'plans.per_month' : 'plans.per_year');
  });
  document.querySelectorAll('[data-note-monthly]').forEach(note => {
    note.textContent = translate(monthly ? note.dataset.noteMonthly : note.dataset.noteAnnual);
  });
}

/**
 * Adds click event listeners to the monthly / annual toggle of the Plans section.
 */
document.querySelectorAll('[data-billing]').forEach(button => {
  button.addEventListener('click', () => {
    billing = button.dataset.billing;
    updateBilling();
  });
});
