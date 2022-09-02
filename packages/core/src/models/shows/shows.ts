import { Method, transformResponse } from '../../request';
import {
  AsyncFnWithProvider,
  BooleanResponse,
  Limit,
  Market,
  Offset,
  ShowId,
} from '../../types';

export const getShow: AsyncFnWithProvider<
  SpotifyApi.SingleShowResponse,
  ShowId,
  Market
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
  Market
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
  Limit & Market & Offset
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
  Limit & Offset
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/shows',
      params,
    })
  );

export const saveShowsForUser: AsyncFnWithProvider<
  // TODO fix this type
  SpotifyApi.VoidResponse,
  ShowId[]
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

export const removeUsersSavedShows: AsyncFnWithProvider<
  // TODO fix this type
  SpotifyApi.VoidResponse,
  ShowId[],
  Market
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
  // TODO fix this type
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
