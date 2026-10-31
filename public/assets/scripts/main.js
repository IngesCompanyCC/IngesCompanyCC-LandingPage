import { i18n } from './i18n.js';
import { initializeLanguageSwitcher } from './components/language-switcher.js';
import { initializeNavbar } from './components/navbar.js';
import { initializeSegmentAccess } from './components/segment-access.js';
import { initializeAccordions } from './components/accordion.js';
import { initializeBillingToggle } from './components/billing-toggle.js';
import { initializeVideoPlayers } from './components/video-player.js';
import { initializeMagneticEffect } from './effects/magnetic.effect.js';

/**
 * Entry point of the Landing Page.
 * Each component checks that its elements exist on the current page.
 */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await i18n.init();
  } catch (error) {
    // The HTML already contains the English texts, so the page stays usable.
    console.error(error);
  }

  initializeLanguageSwitcher();
  initializeNavbar();
  initializeSegmentAccess();
  initializeAccordions();
  initializeBillingToggle();
  initializeVideoPlayers();
  initializeMagneticEffect();
});
