import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider, SinglePropertyResponse } from '../../types';

export const getAvailableGenreSeeds: AsyncFnWithProvider<
  SinglePropertyResponse<'genres'>,
  unknown
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'recommendations/available-genre-seeds',
    })
  );
