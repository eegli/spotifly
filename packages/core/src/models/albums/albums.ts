import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getSingleAlbum: AsyncFnWithProvider<
  SpotifyApi.SingleAlbumResponse,
  string,
  { market: string }
> = provider => async (albumId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `albums/${albumId}`,
      params,
    })
  );

export const getSeveralAlbums: AsyncFnWithProvider<
  SpotifyApi.MultipleAlbumsResponse,
  string[],
  { market: string }
> = provider => async (albumIds, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'albums',
      params: {
        ...params,
        ids: albumIds.join(','),
      },
    })
  );

export const LIMIT_GET_SEVERAL_ALBUMS = 20;

export const getAlbumTracks: AsyncFnWithProvider<
  SpotifyApi.AlbumTracksResponse,
  string,
  { limit: number; market: string; offset: number }
> = provider => async (albumId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `albums/${albumId}/tracks`,
      params,
    })
  );

export const LIMIT_GET_ALBUM_TRACKS = 50;

export const getUsersSavedAlbums: AsyncFnWithProvider<
  SpotifyApi.UsersSavedAlbumsResponse,
  unknown,
  { limit: number; market: string; offset: number }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/albums',
      params,
    })
  );

export const LIMIT_GET_USER_ALBUMS = 50;

const userAlbums: <Response>(conf: {
  url: string;
  method: Method;
}) => AsyncFnWithProvider<Response, string[]> =
  ({ method, url }) =>
  provider =>
  async ids =>
    transformResponse(
      await provider.request({
        method,
        params: {
          ids: ids.join(','),
        },
        url,
      })
    );

export const LIMIT_MODIFY_CHECK_USER_ALBUMS = 20;

export const saveAlbumsForUser =
  userAlbums<SpotifyApi.SaveAlbumsForUserResponse>({
    method: Method.PUT,
    url: 'me/albums',
  });

export const removeUsersSavedAlbums =
  userAlbums<SpotifyApi.RemoveAlbumsForUserResponse>({
    method: Method.DELETE,
    url: 'me/albums',
  });

export const checkUsersSavedAlbums =
  userAlbums<SpotifyApi.CheckUserSavedAlbumsResponse>({
    method: Method.GET,
    url: 'me/albums/contains',
  });

export const getNewAlbumReleases: AsyncFnWithProvider<
  SpotifyApi.ListOfNewReleasesResponse,
  unknown,
  { country: string; limit: number; offset: number }
> = provider => async params =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/new-releases',
      params,
    })
  );
