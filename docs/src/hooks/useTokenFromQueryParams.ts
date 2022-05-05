import { useEffect } from 'react';

export const useTokenFromQueryParams = () => {
  useEffect(() => {
    if (window.opener && typeof window.opener.spotifyCallback === 'function') {
      const cb = window.opener.spotifyCallback as typeof window.spotifyCallback;
      const code = new URLSearchParams(window.location.search).get('code');
      cb(code);
    }
  }, []);
};
