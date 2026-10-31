/**
 * Settings of the Landing Page that depend on other DoofPlus products.
 */

/** True when the Landing Page runs on the developer's machine. */
const IS_LOCAL = ['localhost', '127.0.0.1'].includes(window.location.hostname);

/**
 * Base URL of the DoofPlus Web Application: the local development server (Vite)
 * while working locally, and the version published on Firebase Hosting otherwise.
 */
export const WEB_APP_URL = IS_LOCAL ? 'http://localhost:5173' : 'https://ingescompanycc-frontend.web.app';

/**
 * Embed URLs of the videos (e.g. https://www.youtube.com/embed/<id>).
 * Paste each URL when the video is published on YouTube.
 */
export const VIDEO_URLS = {
  product: '',
  team: ''
};

/** Web Application routes opened by the sign-in link and the call to action buttons (US48). */
export const APP_ROUTES = {
  signin: '/sign-in',
  qa: '/sign-in/qa',
  production: '/sign-in/production',
  register: '/register'
};
