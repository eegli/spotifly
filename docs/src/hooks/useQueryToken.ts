import { useEffect } from 'react';

export const useSpotifyCallbackFromQueryParams = () => {
  useEffect(() => {
    if (window.opener && typeof window.opener.spotifyCallback === 'function') {
      const error =
        new URLSearchParams(window.location.search).get('error') || '';
      const token = window.location.hash.slice(1).split('&')[0].split('=')[1];
      (window.opener.spotifyCallback as typeof window.spotifyCallback)(
        token,
        error
      );
    }
  }, []);
};
