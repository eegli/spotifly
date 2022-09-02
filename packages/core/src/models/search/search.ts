import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, Limit, Market, Offset } from '../../types';

export const searchForItem: AsyncFnWithProvider<
  SpotifyApi.SearchResponse,
  { query: string; type: string },
  {
    include_external: 'audio';
  } & Limit &
    Market &
    Offset
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
