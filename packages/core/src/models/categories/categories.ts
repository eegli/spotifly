import { Method, transformResponse } from '../../request';
import {
  AsyncFnWithProvider,
  CategoryId,
  Country,
  Limit,
  Locale,
  Offset,
} from '../../types';

export const getSingleCategory: AsyncFnWithProvider<
  SpotifyApi.SingleCategoryResponse,
  CategoryId,
  Country & Locale
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
  Country & Limit & Locale & Offset
> = provider => async (_, params) =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'browse/categories',
      params,
    })
  );
