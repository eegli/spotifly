import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

type Optional = {
  include_external: 'audio';
  limit: number;
  market: string;
  offset: number;
};

export const searchForItem: AsyncFnWithProvider<
  SpotifyApi.SearchResponse,
  { query: string; type: string },
  Optional
> =
  provider =>
  async ({ query, type }, params) =>
    transformResponse(
      await provider.request({
        method: Method.GET,
        url: 'search',
        params: {
          q: query,
          type,
          ...params,
        },
      })
    );

export const searchForItemLimit = 50;
