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
  });
});

/**
 * Initializes the text content of elements with the data-i18n attribute when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', updateTexts);

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
