import * as factory from '../../factory';
import type { AsyncProvider } from '../../types';
import {
  getArtist,
  getArtistsAlbums,
  getArtistsRelatedArtists,
  getArtistsTopTracks,
  getSeveralArtists,
  LIMIT_GET_ARTIST_ALBUMS,
  LIMIT_GET_SEVERAL_ARTISTS,
} from './artists';

export default function Artists(provider: AsyncProvider) {
  return {
    /**
     * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artist Get Artist}
     */
    getArtist: getArtist(provider),
    /**
     * Get Spotify catalog information for several artists based on their Spotify IDs.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists Get Several Artists}
     */
    getSeveralArtists: getSeveralArtists(provider),
    /**
     * Get Spotify catalog information for several artists based on their Spotify IDs.
     *
     * This method takes care of chunking the ids and making multiple requests to the Spotify API.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists Get Several Artists}
     */
    getAllArtists: factory.handleLimited(
      getSeveralArtists(provider),
      LIMIT_GET_SEVERAL_ARTISTS,
    ),
    /**
     * Get Spotify catalog information about an artist's albums.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums Get Artist's Albums}
     */
    getArtistsAlbums: getArtistsAlbums(provider),
    /**
     * Get Spotify catalog information about an artist's albums.
     *
     * This method automatically handles pagination and fetches all items.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums Get Artist's Albums}
     */
    getAllArtistsAlbums: factory.resolveOffsetPaginated(
      getArtistsAlbums(provider),
      LIMIT_GET_ARTIST_ALBUMS,
    ),
    /**
     * Get Spotify catalog information about an artist's top tracks by country.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-top-tracks Get Artist's Top Tracks}
     */
    getArtistsTopTracks: getArtistsTopTracks(provider),
    /**
     * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-related-artists Get Artist's Related Artists}
     */
    getArtistsRelatedArtists: getArtistsRelatedArtists(provider),
  };
}
