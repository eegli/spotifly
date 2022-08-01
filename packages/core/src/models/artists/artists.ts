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

export const getSeveralArtists: AsyncFnWithProvider<
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

export const getSeveralArtistsLimit = 50;

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
