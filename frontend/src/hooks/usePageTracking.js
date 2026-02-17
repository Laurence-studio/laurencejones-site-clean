import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, hasAcceptedCookies } from '../utils/analytics';

// Hook to track page views with React Router
export const usePageTracking = () => {
  const location = useLocation();
  const previousPath = useRef(null);

  useEffect(() => {
    // Only track if path changed and user has consented
    if (previousPath.current !== location.pathname && hasAcceptedCookies()) {
      trackPageView(location.pathname);
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
};

export default usePageTracking;
