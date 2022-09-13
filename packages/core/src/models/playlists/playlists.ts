import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type {
  Base64URL,
  CategoryId,
  Params,
  PlaylistId,
  Uri,
  UserId,
} from '../params';

export const getPlaylist: AsyncFnWithProvider<
  SpotifyApi.SinglePlaylistResponse,
  PlaylistId,
  Pick<Params, 'additional_types' | 'market' | 'fields'>
> =
  provider =>
  async (playlistId, { additional_types, ...params } = {}) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        url: `playlists/${playlistId}`,
        params: {
          ...params,
          additional_types: additional_types?.join(','),
        },
      })
    );

export const changePlaylis: AsyncFnWithProvider<
  SpotifyApi.ChangePlaylistDetailsResponse,
  PlaylistId,
  Pick<Params, 'name' | 'description' | 'public' | 'collaborative'>
> = provider => async (playlistId, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: `playlists/${playlistId}`,
      data,
    })
  );

export const getPlaylistItems: AsyncFnWithProvider<
  SpotifyApi.PlaylistTrackResponse,
  PlaylistId,
  Pick<Params, 'additional_types' | 'fields' | 'limit' | 'market' | 'offset'>
> =
  provider =>
  async (playlistId, { additional_types, ...params } = {}) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        url: `playlists/${playlistId}/tracks`,
        params: {
          ...params,
          additional_types: additional_types?.join(','),
        },
      })
    );

export const PLAYLIST_ITEMS_LIMIT = 50;

export const addPlaylistItems: AsyncFnWithProvider<
  SpotifyApi.AddTracksToPlaylistResponse,
  PlaylistId,
  Uri[],
  Pick<Params, 'position'>
> = provider => async (playlistId, uris, data) =>
  transformResponse(
    await provider.request({
      method: Method.POST,
      url: `playlists/${playlistId}/tracks`,
      data: {
        position: data?.position,
        uris,
      },
    })
  );

export const reorderPlaylistItems: AsyncFnWithProvider<
  SpotifyApi.ReorderPlaylistTracksResponse,
  PlaylistId,
  Pick<Params, 'range_start' | 'insert_before' | 'range_length' | 'snapshot_id'>
> = provider => async (playlistId, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: `playlists/${playlistId}/tracks`,
      data,
    })
  );

export const removePlaylistItems: AsyncFnWithProvider<
  SpotifyApi.RemoveTracksFromPlaylistResponse,
  PlaylistId,
  { uri: string }[],
  Pick<Params, 'snapshot_id'>
> = provider => async (playlistId, tracks, data) =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: `playlists/${playlistId}/tracks`,
      data: { ...data, tracks },
    })
  );

export const getCurrentUsersPlaylists: AsyncFnWithProvider<
  SpotifyApi.ListOfUsersPlaylistsResponse,
  unknown,
  Pick<Params, 'limit' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/playlists',
      params,
    })
  );

export const getUsersPlaylists: AsyncFnWithProvider<
  SpotifyApi.ListOfUsersPlaylistsResponse,
  UserId,
  Pick<Params, 'limit' | 'offset'>
> = provider => async (userId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `users/${userId}/playlists`,
      params,
    })
  );

export const USERS_PLAYLISTS_LIMIT = 50;

export const createPlaylist: AsyncFnWithProvider<
  SpotifyApi.CreatePlaylistResponse,
  UserId,
  string,
  Pick<Params, 'public' | 'collaborative' | 'description'>
> = provider => async (userId, name, data) =>
  transformResponse(
    await provider.request({
      method: Method.POST,
      url: `users/${userId}/playlists`,
      data: { ...data, name },
    })
  );

export const getFeaturedPlaylists: AsyncFnWithProvider<
  SpotifyApi.ListOfFeaturedPlaylistsResponse,
  unknown,
  Pick<Params, 'country' | 'limit' | 'locale' | 'offset' | 'timestamp'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/featured-playlists',
      params,
    })
  );

export const getCategoryPlaylists: AsyncFnWithProvider<
  SpotifyApi.CategoryPlaylistsResponse,
  CategoryId,
  Pick<Params, 'country' | 'limit' | 'offset'>
> = provider => async (categoryId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `browse/categories/${categoryId}/playlists`,
      params,
    })
  );

export const getPlaylistCoverImage: AsyncFnWithProvider<
  SpotifyApi.PlaylistCoverImageResponse,
  PlaylistId
> = provider => async playlistId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `playlists/${playlistId}/images`,
    })
  );

export const uploadCustomPlaylistCoverImage: AsyncFnWithProvider<
  SpotifyApi.UploadCustomPlaylistCoverImageResponse,
  PlaylistId,
  Base64URL
> = provider => async (playlistId, base64URL) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: `playlists/${playlistId}/images`,
      headers: {
        'Content-Type': 'image/jpeg',
      },
      data: base64URL.replace(/^data:image\/jpeg;base64,/, ''),
    })
  );
