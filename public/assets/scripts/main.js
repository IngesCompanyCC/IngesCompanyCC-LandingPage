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
    renderContactConfirmation();
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
 * @param {Object} [vars] - Values that replace {name} placeholders; they are HTML-escaped.
 */
function translate(key, vars = {}) {
  let text = key.split('.').reduce((value, part) => (value ? value[part] : undefined), translations[currentLang]) || '';
  Object.entries(vars).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, escapeHtml(value));
  });
  return text;
}

/**
 * Escapes the HTML special characters of a value typed by the visitor.
 * @param {string} value - The value to escape.
 */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const contactForm = document.querySelector('.contact-form');
const contactSuccess = document.querySelector('[data-contact-success]');
let sentInquiry = null;

/**
 * Marks a field of the contact form as valid or invalid and shows its error.
 * @param {HTMLElement} input - The input or textarea of the field.
 * @param {boolean} invalid - Whether the field is invalid.
 */
function setInvalid(input, invalid) {
  input.closest('.field').classList.toggle('invalid', invalid);
  input.setAttribute('aria-invalid', String(invalid));
  input.closest('.field').querySelector('.field-error').hidden = !invalid;
}

/**
 * Fills the confirmation text of the contact form in the current language.
 */
function renderContactConfirmation() {
  if (!sentInquiry || !contactSuccess) return;
  contactSuccess.querySelector('.success-text').innerHTML = translate('form.success_text', sentInquiry);
}

/**
 * Contact inquiry form: the visitor sends a question to the DoofPlus team.
 * A valid inquiry replaces the form with a confirmation in the current language.
 */
if (contactForm && contactSuccess) {
  const fields = {
    name: { input: contactForm.elements.name, isValid: value => value.trim().length > 0 },
    email: { input: contactForm.elements.email, isValid: value => EMAIL_PATTERN.test(value.trim()) },
    message: { input: contactForm.elements.message, isValid: value => value.trim().length > 0 }
  };
  const banner = contactForm.querySelector('.form-error');

  Object.values(fields).forEach(field => {
    field.input.addEventListener('input', () => {
      if (field.input.getAttribute('aria-invalid') === 'true' && field.isValid(field.input.value)) {
        setInvalid(field.input, false);
      }
    });
  });

  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const invalid = Object.values(fields).filter(field => !field.isValid(field.input.value));
    Object.values(fields).forEach(field => setInvalid(field.input, invalid.includes(field)));
    banner.hidden = invalid.length === 0;
    if (invalid.length) return invalid[0].input.focus();

    sentInquiry = { name: contactForm.elements.name.value.trim(), email: contactForm.elements.email.value.trim() };
    contactForm.hidden = true;
    contactSuccess.hidden = false;
    renderContactConfirmation();
    contactSuccess.focus();
  });

  contactSuccess.querySelector('[data-contact-again]').addEventListener('click', () => {
    contactForm.reset();
    sentInquiry = null;
    contactSuccess.hidden = true;
    contactForm.hidden = false;
    fields.name.input.focus();
  });
}

/** Base URL of the DoofPlus Web Application. Set it when the Web Application is deployed. */
const WEB_APP_URL = '';

/** Web Application routes opened by the segment access buttons. */
const APP_ROUTES = {
  qa: '/login?segment=qa',
  production: '/login?segment=production',
  register: '/register'
};

/**
 * Segment access buttons: QA/QC specialists and production supervisors open the
 * sign-in of their own environment in the Web Application.
 * While the Web Application is not deployed, they lead to the workspace section.
 */
document.querySelectorAll('[data-app-segment]').forEach(link => {
  const route = APP_ROUTES[link.dataset.appSegment];
  link.href = WEB_APP_URL && route ? WEB_APP_URL + route : '#workspace';
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

/**
 * Opens or closes the full-screen mobile menu.
 * @param {boolean} open - Whether the menu is open.
 */
function setMenuOpen(open) {
  if (!menuToggle || !mobileMenu) return;
  mobileMenu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', translate(open ? 'nav.close' : 'nav.menu'));
  document.body.classList.toggle('menu-open', open);
}

/**
 * Mobile menu: the toggle opens it, and a link, the Escape key or a desktop-size screen close it.
 */
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => setMenuOpen(mobileMenu.hidden));
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
    if (event.matches) setMenuOpen(false);
  });
}
