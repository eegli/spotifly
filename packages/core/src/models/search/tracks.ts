import { Methods, transformResponse } from '../../request';
import { AsyncFnWithProvider, Permutations } from '../../types';

export const searchForItem: AsyncFnWithProvider<
  SpotifyApi.SearchResponse,
  string,
  {
    type: Permutations<
      'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode',
      ','
    >;
    include_external: 'audio';
    limit: number;
    market: string;
    offset: number;
  }
> = p => async (query, params) =>
  transformResponse(
    await p.request({
      method: Methods.GET,
      url: 'search',
      params: {
        q: query,
        ...params,
      },
    })
  );

export const searchForItemLimit = 50;
