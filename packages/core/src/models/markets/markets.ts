import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { AvailableMarketsResponse } from '../params';

export const getAvailableMarkets: AsyncFnWithProvider<
  AvailableMarketsResponse
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'markets',
    })
  );
