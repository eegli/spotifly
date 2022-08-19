import { AxiosResponse } from 'axios';

export const market = 'CH';
export const country = 'UA';

export const limit = 1;
export const offset = 1;

export const stringId = 'id1';
export const stringIds = Array.from({ length: 51 }, (_, i) => 'id' + (i + 1));

export const pagingResponse: SpotifyApi.PagingObject<unknown> = {
  href: '',
  items: [],
  limit: 0,
  next: 'next',
  offset: 0,
  previous: null,
  total: 0,
};

export const fakeAxiosResponse = (data: unknown): AxiosResponse => ({
  data,
  status: 200,
  statusText: 'ok',
  headers: {},
  config: {},
});
