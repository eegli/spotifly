import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { Params } from '../params';

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
