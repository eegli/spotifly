import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, Params } from '../../types';

export const searchForItem: AsyncFnWithProvider<
  SpotifyApi.SearchResponse,
  { query: string; type: string },
  Pick<Params, 'include_external' | 'limit' | 'market' | 'offset'>
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
