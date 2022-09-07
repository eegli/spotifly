import { Method, transformResponse } from '../../request';
import type { AsyncFnWithProvider } from '../../types';
import type { CategoryId, Params } from '../params';

export const getCategory: AsyncFnWithProvider<
  SpotifyApi.SingleCategoryResponse,
  CategoryId,
  Pick<Params, 'country' | 'locale'>
> = provider => async (categoryId, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: `browse/categories/${categoryId}`,
      params,
    })
  );

export const getSeveralCategories: AsyncFnWithProvider<
  SpotifyApi.MultipleCategoriesResponse,
  unknown,
  Pick<Params, 'country' | 'limit' | 'locale' | 'offset'>
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/categories',
      params,
    })
  );
