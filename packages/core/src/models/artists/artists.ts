import { Methods, transformResponse } from '../../request';
import type { AsyncFnWithProvider, Permutations } from '../../types';

export const getSingleArtist: AsyncFnWithProvider<
  SpotifyApi.SingleArtistResponse,
  string
> = p => async artistId =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: `artists/${artistId}`,
    })
  );

export const getSeveralArtists: AsyncFnWithProvider<
  SpotifyApi.MultipleArtistsResponse,
  string[]
> = p => async artistIds =>
  transformResponse(
    await p.request({
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
      'album' | 'single' | 'appears_on' | 'compilation',
      ','
    >;
    offset: number;
    limit: number;
    market: string;
  }
> = p => async (artistId, params) =>
  transformResponse(
    await p.request({
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
> = p => async (artistId, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: `artists/${artistId}/top-tracks`,
      params,
    })
  );

export const getArtistsRelatedArtists: AsyncFnWithProvider<
  SpotifyApi.ArtistsRelatedArtistsResponse,
  string
> = p => async artistId =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: `artists/${artistId}/related-artists`,
    })
  );
