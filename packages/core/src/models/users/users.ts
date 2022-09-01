import { Method, transformResponse } from '../../request';
import {
  After,
  AsyncFnWithProvider,
  Limit,
  Offset,
  PlaylistId,
  TimeRange,
  UserId,
} from '../../types';

export const getCurrentUsersProfile: AsyncFnWithProvider<
  SpotifyApi.UserProfileResponse,
  unknown
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me',
    })
  );

export const getUsersProfile: AsyncFnWithProvider<
  SpotifyApi.UserProfileResponse,
  UserId
> = provider => async userId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `users/${userId}`,
    })
  );

const getUsersTop: <
  T extends 'artists' | 'tracks',
  R = T extends 'artists'
    ? SpotifyApi.UsersTopArtistsResponse
    : SpotifyApi.UsersTopTracksResponse
>(
  type: T
) => AsyncFnWithProvider<R, unknown, TimeRange & Limit & Offset> =
  type => provider => async (_, params) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        url: `me/top/${type}`,
        params,
      })
    );

export const USERS_TOP_LIMIT = 50;
export const getUsersTopArtists = getUsersTop('artists');
export const getUsersTopTracks = getUsersTop('tracks');

export const followPlaylist: AsyncFnWithProvider<
  SpotifyApi.FollowPlaylistResponse,
  PlaylistId,
  { public: boolean }
> = provider => async (playlistId, data) =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      data,
      url: `playlists/${playlistId}/followers`,
    })
  );

export const unfollowPlaylist: AsyncFnWithProvider<
  SpotifyApi.UnfollowPlaylistResponse,
  PlaylistId
> = provider => async playlistId =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: `playlists/${playlistId}/followers`,
    })
  );

export const getFollowedArtists: AsyncFnWithProvider<
  SpotifyApi.UsersFollowedArtistsResponse,
  unknown,
  After & Limit
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      params: {
        ...params,
        type: 'artist',
      },
      url: 'me/following',
    })
  );

const follow: <Response>(conf: {
  url: string;
  type: 'artist' | 'user';
  method: Method;
}) => AsyncFnWithProvider<Response, string[]> =
  ({ method, type, url }) =>
  provider =>
  async ids =>
    transformResponse(
      await provider.request({
        method,
        params: {
          type,
          ids: ids.join(','),
        },
        url,
      })
    );

export const FOLLOW_LIMIT = 50;
export const followArtists = follow<SpotifyApi.FollowArtistsOrUsersResponse>({
  type: 'artist',
  url: 'me/following',
  method: Method.PUT,
});
export const followUsers = follow<SpotifyApi.FollowArtistsOrUsersResponse>({
  type: 'user',
  url: 'me/following',
  method: Method.PUT,
});
export const unfollowArtists =
  follow<SpotifyApi.UnfollowArtistsOrUsersResponse>({
    type: 'artist',
    url: 'me/following',
    method: Method.DELETE,
  });
export const unfollowUsers = follow<SpotifyApi.UnfollowArtistsOrUsersResponse>({
  type: 'user',
  url: 'me/following',
  method: Method.DELETE,
});
export const checkFollowsArtists =
  follow<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    type: 'artist',
    url: 'me/following/contains',
    method: Method.GET,
  });
export const checkFollowsUsers =
  follow<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    type: 'user',
    url: 'me/following/contains',
    method: Method.GET,
  });

export const checkUsersFollowPlaylist: AsyncFnWithProvider<
  SpotifyApi.UsersFollowPlaylistResponse,
  { playlistId: string; userIds: string[] }
> =
  provider =>
  async ({ playlistId, userIds }) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        params: {
          ids: userIds.join(','),
        },
        url: `playlists/${playlistId}/followers/contains`,
      })
    );
