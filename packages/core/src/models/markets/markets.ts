import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';

export const getAvailableMarkets: AsyncFnWithProvider<
  SpotifyApi.AvailableMarketsResponse
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'markets',
    })
  );
