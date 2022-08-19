import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getSingleEpisode: AsyncFnWithProvider<
  SpotifyApi.SingleEpisodeResponse,
  string,
  { market: string }
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
  string[],
  { market: string }
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

export const getSeveralEpisodesLimit = 50;

export const getUsersSavedEpisodes: AsyncFnWithProvider<
  SpotifyApi.UsersSavedEpisodesResponse,
  unknown,
  { limit: number; offset: number; market: string }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'me/episodes',
      params,
    })
  );

const episodesForUser: <T>(
  intent: 'save' | 'delete' | 'check'
) => AsyncFnWithProvider<T, string[]> = type => provider => async episodeIds =>
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

// TODO fix these types
export const saveEpisodesForUser =
  episodesForUser<SpotifyApi.VoidResponse>('save');
export const removeUsersSavedEpisodes =
  episodesForUser<SpotifyApi.VoidResponse>('delete');
export const checkUsersSavedEpisodes = episodesForUser<boolean[]>('check');

export const userEpisodesLimit = 50;
