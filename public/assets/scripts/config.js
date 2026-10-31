/**
 * Settings of the Landing Page that depend on other DoofPlus products.
 */

/** Base URL of the DoofPlus Web Application, published on Firebase Hosting. */
export const WEB_APP_URL = 'https://ingescompanycc-frontend.web.app';

/**
 * Embed URLs of the videos (e.g. https://www.youtube.com/embed/<id>).
 * Paste each URL when the video is published on YouTube.
 */
export const VIDEO_URLS = {
  product: '',
  team: ''
};

/** Web Application routes opened by the segment access buttons (US48). */
export const APP_ROUTES = {
  signin: '/sign-in',
  qa: '/sign-in/qa',
  production: '/sign-in/production',
  register: '/register'
};
