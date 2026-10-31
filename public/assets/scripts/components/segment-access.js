import { APP_ROUTES, WEB_APP_URL } from '../config.js';

/**
 * Access buttons of the final call to action: QA/QC specialists and production
 * supervisors open the sign-in of their own environment in the Web Application,
 * and new laboratories open its registration.
 * While the Web Application is not deployed, they lead to the call to action.
 */
export function initializeSegmentAccess() {
  const onIndex = Boolean(document.querySelector('#cta'));
  document.querySelectorAll('[data-app-segment]').forEach(link => {
    const route = APP_ROUTES[link.dataset.appSegment];
    if (WEB_APP_URL && route) {
      link.href = WEB_APP_URL + route;
    } else {
      link.href = onIndex ? '#cta' : 'index.html#cta';
    }
  });
}
