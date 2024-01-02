import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { ArtistId, Params, PlaylistId, UserId } from '../params';

export const getCurrentUsersProfile: AsyncFnWithProvider<
  SpotifyApi.UserProfileResponse,
  unknown
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me',
    }),
  );

export const getUsersProfile: AsyncFnWithProvider<
  SpotifyApi.UserProfileResponse,
  UserId
> = provider => async userId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `users/${userId}`,
    }),
  );

const getUsersTop: <T extends 'artists' | 'tracks'>(
  type: T,
) => AsyncFnWithProvider<
  T extends 'artists'
    ? SpotifyApi.UsersTopArtistsResponse
    : SpotifyApi.UsersTopTracksResponse,
  unknown,
  Pick<Params, 'time_range' | 'limit' | 'offset'>
> = type => provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `me/top/${type}`,
      params,
    }),
  );

export const USERS_TOP_LIMIT = 50;
export const getUsersTopArtists = getUsersTop('artists');
export const getUsersTopTracks = getUsersTop('tracks');

export const followPlaylist: AsyncFnWithProvider<
  SpotifyApi.FollowPlaylistResponse,
  PlaylistId,
  Pick<Params, 'public'>
> = provider => async (playlistId, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      data,
      url: `playlists/${playlistId}/followers`,
    }),
  );

export const unfollowPlaylist: AsyncFnWithProvider<
  SpotifyApi.UnfollowPlaylistResponse,
  PlaylistId
> = provider => async playlistId =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: `playlists/${playlistId}/followers`,
    }),
  );

export const getUsersFollowedArtists: AsyncFnWithProvider<
  SpotifyApi.UsersFollowedArtistsResponse,
  unknown,
  Pick<Params, 'after' | 'limit'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      params: {
        ...params,
        type: 'artist',
      },
      url: 'me/following',
    }),
  );

const artists: <R>(conf: {
  url: string;
  method: Method;
}) => AsyncFnWithProvider<R, ArtistId[]> =
  ({ method, url }) =>
  provider =>
  async ids =>
    transformResponse(
      await provider.request({
        method,
        params: {
          type: 'artist',
          ids: ids.join(','),
        },
        url,
      }),
    );

const users: <R>(conf: {
  url: string;
  method: Method;
}) => AsyncFnWithProvider<R, UserId[]> =
  ({ method, url }) =>
  provider =>
  async ids =>
    transformResponse(
      await provider.request({
        method,
        params: {
          type: 'user',
          ids: ids.join(','),
        },
        url,
      }),
    );

export const FOLLOW_LIMIT = 50;
export const followArtists = artists<SpotifyApi.FollowArtistsOrUsersResponse>({
  url: 'me/following',
  method: Method.PUT,
});
export const followUsers = users<SpotifyApi.FollowArtistsOrUsersResponse>({
  url: 'me/following',
  method: Method.PUT,
});
export const unfollowArtists =
  artists<SpotifyApi.UnfollowArtistsOrUsersResponse>({
    url: 'me/following',
    method: Method.DELETE,
  });
export const unfollowUsers = users<SpotifyApi.UnfollowArtistsOrUsersResponse>({
  url: 'me/following',
  method: Method.DELETE,
});
export const checkFollowsArtists =
  artists<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    url: 'me/following/contains',
    method: Method.GET,
  });
export const checkFollowsUsers =
  users<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    url: 'me/following/contains',
    method: Method.GET,
  });

export const checkUsersFollowPlaylist: AsyncFnWithProvider<
  SpotifyApi.UsersFollowPlaylistResponse,
  PlaylistId,
  UserId[]
> = provider => async (playlistId, userIds) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      params: {
        ids: userIds.join(','),
      },
      url: `playlists/${playlistId}/followers/contains`,
    }),
  );
