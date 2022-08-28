import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getSingleCategory: AsyncFnWithProvider<
  SpotifyApi.SingleCategoryResponse,
  string,
  { country: string; locale: string }
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
  { country: string; limit: number; locale: string; offset: number }
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/categories',
      params,
    })
  );

export const getSeveralCategoriesLimit = 50;
