import { Method, transformResponse } from '../../request';
import {
  AsyncFnWithProvider,
  BooleanResponse,
  EpisodeId,
  Params,
  VoidResponse,
} from '../../types';

export const getEpisode: AsyncFnWithProvider<
  SpotifyApi.SingleEpisodeResponse,
  EpisodeId,
  Pick<Params, 'market'>
> = provider => async (episodeId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `episodes/${episodeId}`,
      params,
    })
  );

export const getSeveralEpisodes: AsyncFnWithProvider<
  SpotifyApi.MultipleEpisodesResponse,
  EpisodeId[],
  Pick<Params, 'market'>
> = provider => async (episodeIds, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'episodes',
      params: {
        ...params,
        ids: episodeIds.join(','),
      },
    })
  );

export const SEVERAL_EPISODES_LIMIT = 50;

export const getUsersSavedEpisodes: AsyncFnWithProvider<
  SpotifyApi.UsersSavedEpisodesResponse,
  unknown,
  Pick<Params, 'limit' | 'market' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/episodes',
      params,
    })
  );

const episodesForUser: <Return>(
  intent: 'save' | 'delete' | 'check'
) => AsyncFnWithProvider<Return, EpisodeId[]> =
  type => provider => async episodeIds =>
    transformResponse(
      await provider.request({
        method:
          type === 'save'
            ? Method.PUT
            : type === 'check'
            ? Method.GET
            : Method.DELETE,
        url: type === 'check' ? 'me/episodes/contains' : 'me/episodes',
        params: {
          ids: episodeIds.join(','),
        },
      })
    );

export const saveEpisodesForUser = episodesForUser<VoidResponse>('save');
export const removeUsersSavedEpisodes = episodesForUser<VoidResponse>('delete');
export const checkUsersSavedEpisodes =
  episodesForUser<BooleanResponse>('check');

export const USER_EPISODES_LIMIT = 50;
