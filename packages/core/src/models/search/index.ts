import { AsyncProvider } from '../../types';
import { searchForItem } from './search';

export default function Search(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/search Search for Item}
     */
    forItem: searchForItem(provider),
  } as const;
}
