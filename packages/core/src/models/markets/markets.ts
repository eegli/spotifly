import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, SinglePropertyResponse } from '../../types';

export const getAvailableMarkets: AsyncFnWithProvider<
  SinglePropertyResponse<'markets'>
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'markets',
    })
  );
