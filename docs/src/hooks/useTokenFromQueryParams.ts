import { useEffect } from 'react';

export const useTokenFromQueryParams = () => {
  useEffect(() => {
    if (window.opener && typeof window.opener.spotifyCallback === 'function') {
      const cb = window.opener.spotifyCallback as typeof window.spotifyCallback;
      const params = window.location.search || window.location.hash.slice(1);
      cb(new URLSearchParams(params));
    }
  }, []);
};
