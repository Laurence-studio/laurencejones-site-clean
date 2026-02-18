/**
 * Application configuration - single source of truth for environment variables
 * CRA only exposes REACT_APP_* env vars to the frontend
 */

// API Base URL - falls back to same-origin /api if not set
// In production on Vercel, REACT_APP_BACKEND_URL should be set to the deployed backend URL
export const API_BASE = process.env.REACT_APP_BACKEND_URL 
  ? `${process.env.REACT_APP_BACKEND_URL}/api`
  : '/api';

// Check if we're in production
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Log config in development for debugging
if (!IS_PRODUCTION) {
  console.log('[Config] API_BASE:', API_BASE);
  console.log('[Config] REACT_APP_BACKEND_URL:', process.env.REACT_APP_BACKEND_URL);
}
