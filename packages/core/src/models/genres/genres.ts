import { Method, transformResponse } from '../../request';
import { AsyncFnWithProvider } from '../../types';

export const getAvailableGenreSeeds: AsyncFnWithProvider<
  SpotifyApi.AvailableGenreSeedsResponse
> = provider => async () =>
  transformResponse(
    await provider.request({
      method: Method.GET,
      url: 'recommendations/available-genre-seeds',
    })
  );
