import { Method, transformResponse } from '../../request';
import { AlbumId, AsyncFnWithProvider, Params } from '../../types';

export const getAlbum: AsyncFnWithProvider<
  SpotifyApi.SingleAlbumResponse,
  AlbumId,
  Pick<Params, 'market'>
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
  AlbumId[],
  Pick<Params, 'market'>
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

export const LIMIT_SEVERAL_ALBUMS = 20;

export const getAlbumTracks: AsyncFnWithProvider<
  SpotifyApi.AlbumTracksResponse,
  AlbumId,
  Pick<Params, 'limit' | 'market' | 'offset'>
> = provider => async (albumId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `albums/${albumId}/tracks`,
      params,
    })
  );

export const LIMIT_ALBUM_TRACKS = 50;

export const getUsersSavedAlbums: AsyncFnWithProvider<
  SpotifyApi.UsersSavedAlbumsResponse,
  unknown,
  Pick<Params, 'limit' | 'market' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/albums',
      params,
    })
  );

export const LIMIT_USER_ALBUMS_GET = 50;

const userAlbums: <Response>(conf: {
  url: string;
  method: Method;
}) => AsyncFnWithProvider<Response, AlbumId[]> =
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

export const LIMIT_USER_ALBUMS_MODIFY_CHECK = 20;

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
  Pick<Params, 'limit' | 'country' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/new-releases',
      params,
    })
  );
