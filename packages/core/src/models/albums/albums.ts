import { Methods, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getSingleAlbum: AsyncFnWithProvider<
  SpotifyApi.SingleAlbumResponse,
  string,
  { market: string }
> = p => async (albumId, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: `albums/${albumId}`,
      params,
    })
  );

export const getSeveralAlbums: AsyncFnWithProvider<
  SpotifyApi.MultipleAlbumsResponse,
  string[],
  { market: string }
> = p => async (albumIds, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: 'albums',
      params: {
        ...params,
        ids: albumIds.join(','),
      },
    })
  );

export const getSeveralAlbumsLimit = 20;

export const getAlbumTracks: AsyncFnWithProvider<
  SpotifyApi.AlbumTracksResponse,
  string,
  { limit: number; market: string; offset: number }
> = p => async (albumId, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: `albums/${albumId}/tracks`,
      params,
    })
  );

export const getAlbumTracksLimit = 50;

export const getUsersSavedAlbums: AsyncFnWithProvider<
  SpotifyApi.UsersSavedAlbumsResponse,
  unknown,
  { limit: number; market: string; offset: number }
> = p => async (_, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: 'me/albums',
      params,
    })
  );

export const getUsersSavedAlbumsLimit = 50;

export const saveAlbumsForUser: AsyncFnWithProvider<
  SpotifyApi.SaveAlbumsForUserResponse,
  string[]
> = p => async albumIds =>
  transformResponse(
    await p.request({
      method: Methods.PUT,
      url: 'me/albums',
      params: {
        ids: albumIds.join(','),
      },
    })
  );

export const saveAlbumsForUserLimit = 20;

export const removeUsersSavedAlbums: AsyncFnWithProvider<
  SpotifyApi.RemoveAlbumsForUserResponse,
  string[]
> = p => async albumIds =>
  transformResponse(
    await p.request({
      method: Methods.DELETE,
      url: 'me/albums',
      params: {
        ids: albumIds.join(','),
      },
    })
  );

export const removeUsersSavedAlbumsLimit = 20;

export const checkUsersSavedAlbums: AsyncFnWithProvider<
  SpotifyApi.CheckUserSavedAlbumsResponse,
  string[]
> = p => async albumIds =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: 'me/albums/contains',
      params: {
        ids: albumIds.join(','),
      },
    })
  );

export const checkUsersSavedAlbumsLimit = 20;

export const getNewAlbumReleases: AsyncFnWithProvider<
  SpotifyApi.ListOfNewReleasesResponse,
  unknown,
  { country: string; limit: number; offset: number }
> = p => async params =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: 'browse/new-releases',
      params,
    })
  );

export const getNewAlbumReleasesLimit = 50;
