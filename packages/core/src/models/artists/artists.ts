import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';

export const getArtist: AsyncFnWithProvider<
  SpotifyApi.SingleArtistResponse,
  string
> = provider => async artistId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `artists/${artistId}`,
    })
  );

export const getSeveralArtists: AsyncFnWithProvider<
  SpotifyApi.MultipleArtistsResponse,
  string[]
> = provider => async artistIds =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'artists',
      params: {
        ids: artistIds.join(','),
      },
    })
  );

export const LIMIT_GET_SEVERAL_ARTISTS = 50;

export const getArtistsAlbums: AsyncFnWithProvider<
  SpotifyApi.ArtistsAlbumsResponse,
  string,
  {
    include_groups: string;
    offset: number;
    limit: number;
    market: string;
  }
> = provider => async (artistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `artists/${artistId}/albums`,
      params,
    })
  );

export const LIMIT_GET_ARTIST_ALBUMS = 50;

export const getArtistsTopTracks: AsyncFnWithProvider<
  SpotifyApi.ArtistsTopTracksResponse,
  string,
  { market: string }
> = provider => async (artistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
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
      method: Method.GET,
      url: `artists/${artistId}/related-artists`,
    })
  );
