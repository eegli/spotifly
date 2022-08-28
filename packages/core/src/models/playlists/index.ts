import { AsyncProvider } from '../../types';
import { getPlaylist } from './playlists';

export default function Playlists(provider: AsyncProvider) {
  return {
    Playlist: {
      /**
       * Get a playlist owned by a Spotify user.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist Get Playlist}
       */
      get: getPlaylist(provider),
    },
  } as const;
}
