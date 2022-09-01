import { Method, transformResponse } from '../../request';
import type {
  AdditionalTypes,
  AsyncFnWithProvider,
  CategoryId,
  Country,
  Fields,
  Limit,
  Locale,
  Market,
  Offset,
  PlaylistId,
  SnapshotId,
  Timestamp,
  Uris,
  UserId,
} from '../../types';

export const getPlaylist: AsyncFnWithProvider<
  SpotifyApi.SinglePlaylistResponse,
  PlaylistId,
  AdditionalTypes & Market & Limit & Offset & Fields
> = provider => async (playlistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `playlists/${playlistId}`,
      params,
    })
  );

export const changePlaylis: AsyncFnWithProvider<
  SpotifyApi.ChangePlaylistDetailsResponse,
  PlaylistId,
  {
    name: string;
    description: string;
    public: boolean;
    collaborative: boolean;
  }
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
  AdditionalTypes & Fields & Limit & Market & Offset
> = provider => async (playlistId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `playlists/${playlistId}/tracks`,
      params,
    })
  );

export const getPlaylistItemsLimit = 50;

export const addPlaylistItems: AsyncFnWithProvider<
  SpotifyApi.AddTracksToPlaylistResponse,
  PlaylistId,
  Uris,
  {
    position: number;
  }
> = provider => async (playlistId, uris, data) =>
  transformResponse(
    await provider.request({
      method: Method.POST,
      url: `playlists/${playlistId}/tracks`,
      data: {
        position: data?.position,
        uris: uris.join(','),
      },
    })
  );

export const reorderPlaylistItems: AsyncFnWithProvider<
  SpotifyApi.ReorderPlaylistTracksResponse,
  PlaylistId,
  {
    range_start: number;
    insert_before: number;
    range_length: number;
  } & SnapshotId
> = provider => async (playlistId, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: `playlists/${playlistId}/tracks`,
      data,
    })
  );

export const replacePlaylistItems: AsyncFnWithProvider<
  SpotifyApi.ReplacePlaylistTracksResponse,
  PlaylistId,
  Uris
> = provider => async (playlistId, uris) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: `playlists/${playlistId}/tracks`,
      data: {
        uris: uris.join(','),
      },
    })
  );

export const removePlaylistItems: AsyncFnWithProvider<
  SpotifyApi.RemoveTracksFromPlaylistResponse,
  PlaylistId,
  { uri: string }[],
  SnapshotId
> = provider => async (playlistId, tracks, data) =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: `playlists/${playlistId}/tracks`,
      data: {
        ...data,
        tracks,
      },
    })
  );

export const getCurrentUsersPlaylists: AsyncFnWithProvider<
  SpotifyApi.ListOfUsersPlaylistsResponse,
  unknown,
  Limit & Offset
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
  Limit & Offset
> = provider => async (userId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `users/${userId}/playlists`,
      params,
    })
  );

export const usersPlaylistsLimit = 50;

export const createPlaylist: AsyncFnWithProvider<
  SpotifyApi.CreatePlaylistResponse,
  UserId,
  string,
  {
    public: boolean;
    collaborative: boolean;
    description: string;
  }
> = provider => async (userId, name, data) =>
  transformResponse(
    await provider.request({
      method: Method.POST,
      url: `users/${userId}/playlists`,
      data: {
        name,
        ...data,
      },
    })
  );

export const getFeaturedPlaylists: AsyncFnWithProvider<
  SpotifyApi.ListOfFeaturedPlaylistsResponse,
  unknown,
  Country & Limit & Locale & Offset & Timestamp
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/featured-playlists',
      params,
    })
  );

export const getFeaturedPlaylistsLimit = 50;

export const getCategoryPlaylists: AsyncFnWithProvider<
  SpotifyApi.CategoryPlaylistsResponse,
  CategoryId,
  {
    country: string;
    limit: number;
    offset: number;
  }
> = provider => async (categoryId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `browse/categories/${categoryId}/playlists`,
      params,
    })
  );

export const getPlaylistCoverImage: AsyncFnWithProvider<
  SpotifyApi.ImageObject[],
  PlaylistId
> = provider => async playlistId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `playlists/${playlistId}/images`,
    })
  );
