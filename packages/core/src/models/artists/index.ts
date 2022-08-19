import * as factory from '../../factory';
import type { AsyncProvider } from '../../types';
import {
  getArtistsAlbums,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getSeveralArtists,
  getSingleArtist,
  LIMIT_GET_ARTIST_ALBUMS,
  LIMIT_GET_SEVERAL_ARTISTS,
} from './artists';

export default function Artists(provider: AsyncProvider) {
  return {
    Artist: {
      /**
       * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist Get Artist}
       */
      get: getSingleArtist(provider),
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists Get Several Artists}
       */
      getSeveral: getSeveralArtists(provider),
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       *
       * This method takes care of chunking the ids and making multiple requests to the Spotify API.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists Get Several Artists}
       */
      getAll: factory.forLimited(
        getSeveralArtists(provider),
        LIMIT_GET_SEVERAL_ARTISTS
      ),
    },
    Albums: {
      /**
       * Get Spotify catalog information about an artist's albums.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums Get Artist's Albums}
       */
      get: getArtistsAlbums(provider),
      /**
       * Get Spotify catalog information about an artist's albums.
       *
       * This method automatically handles pagination and fetches all items.
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums Get Artist's Albums}
       */
      getAll: factory.forPaginated(
        getArtistsAlbums(provider),
        LIMIT_GET_ARTIST_ALBUMS
      ),
    },
    TopTracks: {
      get: getArtistsTopTracks(provider),
    },
    RelatedArtists: {
      get: getArtistsRelatedArtists(provider),
    },
  } as const;
}
