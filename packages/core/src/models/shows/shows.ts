import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getShow: AsyncFnWithProvider<
  SpotifyApi.SingleShowResponse,
  string,
  { market: string }
> = provider => async (showId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `shows/${showId}`,
      params,
    })
  );

export const getSeveralShows: AsyncFnWithProvider<
  SpotifyApi.MultipleShowsResponse,
  string[],
  { market: string }
> = provider => async (showIds, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'shows',
      params: {
        ...params,
        ids: showIds.join(','),
      },
    })
  );

export const getSeveralShowsLimit = 50;

export const getShowEpisodes: AsyncFnWithProvider<
  SpotifyApi.ShowEpisodesResponse,
  string,
  { limit: number; market: string; offset: number }
> = provider => async (showId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `shows/${showId}/episodes`,
      params,
    })
  );

export const getShowEpisodesLimit = 50;

export const getUsersSavedShows: AsyncFnWithProvider<
  SpotifyApi.UsersSavedShowsResponse,
  unknown,
  { limit: number; offset: number }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/shows',
      params,
    })
  );

export const getUsersSavedShowsLimit = 50;

export const saveShowsForUser: AsyncFnWithProvider<
  // TODO fix this type
  SpotifyApi.VoidResponse,
  string[]
> = provider => async showIds =>
  transformResponse(
    await provider.request({
      method: Method.PUT,
      url: 'me/shows',
      params: {
        ids: showIds.join(','),
      },
    })
  );

export const saveShowsForUserLimit = 50;

export const removeUsersSavedShows: AsyncFnWithProvider<
  // TODO fix this type
  SpotifyApi.VoidResponse,
  string[],
  { market: string }
> = provider => async showIds =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: 'me/shows',
      params: {
        ids: showIds.join(','),
      },
    })
  );

export const removeUsersSavedShowsLimit = 50;

export const checkUsersSavedShows: AsyncFnWithProvider<
  // TODO fix this type
  boolean[],
  string[]
> = provider => async showIds =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/shows/contains',
      params: {
        ids: showIds.join(','),
      },
    })
  );

export const checkUsersSavedShowsLimit = 50;
