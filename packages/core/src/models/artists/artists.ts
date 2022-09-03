import { Method, transformResponse } from '../../request';
import type { ArtistId, AsyncFnWithProvider, Params } from '../../types';

export const getArtist: AsyncFnWithProvider<
  SpotifyApi.SingleArtistResponse,
  ArtistId
> = provider => async artistId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `artists/${artistId}`,
    })
  );

export const getSeveralArtists: AsyncFnWithProvider<
  SpotifyApi.MultipleArtistsResponse,
  ArtistId[]
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
  ArtistId,
  Pick<Params, 'include_groups' | 'offset' | 'limit' | 'market'>
> = provider => async (artistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `artists/${artistId}/albums`,
      params: {
        include_groups: params?.include_groups?.join(','),
        offset: params?.offset,
        limit: params?.limit,
        market: params?.market,
      },
    })
  );

export const LIMIT_GET_ARTIST_ALBUMS = 50;

export const getArtistsTopTracks: AsyncFnWithProvider<
  SpotifyApi.ArtistsTopTracksResponse,
  ArtistId,
  Pick<Params, 'market'>
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
  ArtistId
> = provider => async artistId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `artists/${artistId}/related-artists`,
    })
  );
