import { AsyncFnWithProvider, Methods, transformResponse } from '../../request';
import type { Permutations } from '../../types';

export const getSingleArtist: AsyncFnWithProvider<
  SpotifyApi.SingleArtistResponse,
  string
> = provider => async artistId =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${artistId}`,
    })
  );

export const getMultipleArtists: AsyncFnWithProvider<
  SpotifyApi.MultipleArtistsResponse,
  string[]
> = provider => async artistIds =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: 'artists',
      params: {
        ids: artistIds.join(','),
      },
    })
  );

export const getMultipleArtistsLimit = 50;

export const getArtistsAlbums: AsyncFnWithProvider<
  SpotifyApi.ArtistsAlbumsResponse,
  string,
  {
    include_groups: Permutations<
      'album' | 'single' | 'appears_on' | 'compilation'
    >;
    offset: number;
    limit: number;
    market: string;
  }
> = provider => async (artistId, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${artistId}/albums`,
      params,
    })
  );
export const getArtistsAlbumsLimit = 50;

export const getArtistsTopTracks: AsyncFnWithProvider<
  SpotifyApi.ArtistsTopTracksResponse,
  string,
  { market: string }
> = provider => async (artistId, params) =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${artistId}/top-tracks`,
      params,
    })
  );

export const getArtistsRelatedArtists: AsyncFnWithProvider<
  SpotifyApi.ArtistsRelatedArtistsResponse,
  string
> = provider => async artistId =>
  transformResponse(
    await provider.request({
      method: Methods.GET,
      url: `artists/${artistId}/related-artists`,
    })
  );
