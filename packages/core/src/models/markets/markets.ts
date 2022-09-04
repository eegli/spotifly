import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, AvailableMarketsResponse } from '../../types';

export const getAvailableMarkets: AsyncFnWithProvider<
  AvailableMarketsResponse
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'markets',
    })
  );
