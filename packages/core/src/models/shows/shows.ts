import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { BooleanResponse, Params, ShowId, VoidResponse } from '../params';

export const getShow: AsyncFnWithProvider<
  SpotifyApi.SingleShowResponse,
  ShowId,
  Pick<Params, 'market'>
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
  ShowId[],
  Pick<Params, 'market'>
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

export const SEVERAL_SHOWS_LIMIT = 50;

export const getShowEpisodes: AsyncFnWithProvider<
  SpotifyApi.ShowEpisodesResponse,
  ShowId,
  Pick<Params, 'market' | 'limit' | 'offset'>
> = provider => async (showId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `shows/${showId}/episodes`,
      params,
    })
  );

export const SHOW_EPISODES_LIMIT = 50;

export const USER_SHOW_LIMIT = 50;

export const getUsersSavedShows: AsyncFnWithProvider<
  SpotifyApi.UsersSavedShowsResponse,
  unknown,
  Pick<Params, 'limit' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/shows',
      params,
    })
  );

export const saveShowsForUser: AsyncFnWithProvider<VoidResponse, ShowId[]> =
  provider => async showIds =>
    transformResponse(
      await provider.request({
        method: Method.PUT,
        url: 'me/shows',
        params: {
          ids: showIds.join(','),
        },
      })
    );

export const removeUsersSavedShows: AsyncFnWithProvider<
  VoidResponse,
  ShowId[],
  Pick<Params, 'market'>
> = provider => async (showIds, params) =>
  transformResponse(
    await provider.request({
      method: Method.DELETE,
      url: 'me/shows',
      params: {
        ...params,
        ids: showIds.join(','),
      },
    })
  );

export const checkUsersSavedShows: AsyncFnWithProvider<
  BooleanResponse,
  ShowId[]
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
