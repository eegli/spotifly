import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

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
  string
> = provider => async userId =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `users/${userId}`,
    })
  );

const getUsersTop: <Response>(
  type: 'artists' | 'tracks'
) => AsyncFnWithProvider<
  Response,
  unknown,
  {
    limit: number;
    offset: number;
    time_range: 'long_term ' | 'medium_term' | 'short_term';
  }
> = type => provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `me/top/${type}`,
    })
  );

export const USERS_TOP_LIMIT = 50;
export const getUsersTopArtists =
  getUsersTop<SpotifyApi.UsersTopArtistsResponse>('artists');
export const getUsersTopTracks =
  getUsersTop<SpotifyApi.UsersTopTracksResponse>('tracks');

export const followPlaylist: AsyncFnWithProvider<
  SpotifyApi.FollowPlaylistResponse,
  string,
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
  string
> = provider => async playlistId =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: `playlists/${playlistId}/followers`,
    })
  );

export const getUsersFollowedArtists: AsyncFnWithProvider<
  SpotifyApi.UsersFollowedArtistsResponse,
  unknown,
  { after: string; limit: number }
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
export const checkUserFollowsArtist =
  follow<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    type: 'artist',
    url: 'me/following/contains',
    method: Method.GET,
  });
export const checkUserFollowsUsers =
  follow<SpotifyApi.UserFollowsUsersOrArtistsResponse>({
    type: 'user',
    url: 'me/following/contains',
    method: Method.GET,
  });

export const checkUsersFollowPlaylists: AsyncFnWithProvider<
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
