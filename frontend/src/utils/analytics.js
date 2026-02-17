import posthog from 'posthog-js';

// PostHog configuration
const POSTHOG_KEY = 'phc_Jp8TCgGWGW7yn2egebCQHpxqrWzDabwN017iGeWg2Ji';
const POSTHOG_HOST = 'https://us.i.posthog.com';

// Initialize PostHog with privacy-first defaults
export const initPostHog = () => {
  if (typeof window === 'undefined') return;
  
  // Check if already initialized
  if (posthog.__loaded) return;
  
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: false, // Disable until consent
    capture_pageview: false, // We'll handle this manually
    disable_session_recording: true, // Disable until consent
    persistence: 'localStorage',
    loaded: (ph) => {
      // Check stored consent and apply it
      const consent = localStorage.getItem('cookie_consent');
      if (consent === 'accepted') {
        ph.opt_in_capturing();
      } else if (consent === 'declined') {
        ph.opt_out_capturing();
      } else {
        // No decision yet - don't track
        ph.opt_out_capturing();
      }
    }
  });
};

// Handle user accepting cookies
export const acceptCookies = () => {
  localStorage.setItem('cookie_consent', 'accepted');
  if (posthog.__loaded) {
    posthog.opt_in_capturing();
    // Capture initial pageview after consent
    posthog.capture('$pageview');
  }
};

// Handle user declining cookies
export const declineCookies = () => {
  localStorage.setItem('cookie_consent', 'declined');
  if (posthog.__loaded) {
    posthog.opt_out_capturing();
  }
};

// Check if user has made a consent decision
export const hasConsentDecision = () => {
  return localStorage.getItem('cookie_consent') !== null;
};

// Check if user has accepted cookies
export const hasAcceptedCookies = () => {
  return localStorage.getItem('cookie_consent') === 'accepted';
};

// Track page view (only if consent given)
export const trackPageView = (pathname) => {
  if (posthog.__loaded && hasAcceptedCookies()) {
    posthog.capture('$pageview', {
      $current_url: window.location.href,
      pathname: pathname
    });
  }
};

// Track custom event (only if consent given)
export const trackEvent = (eventName, properties = {}) => {
  if (posthog.__loaded && hasAcceptedCookies()) {
    posthog.capture(eventName, properties);
  }
};

export default posthog;
