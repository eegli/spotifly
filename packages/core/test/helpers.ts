import { AxiosRequestHeaders, AxiosResponse } from 'axios';

export const market = 'CH';
export const country = 'UA';
export const locale = 'sv_SE';
export const fields = 'total,limit';
export const uris = ['spotify:track:1'];
export const timestamp = '2014-10-23T09:00:00';
export const additional_types = ['track', 'episode'];
export const include_groups = ['album', 'appears_on'];

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
  config: { headers: {} as AxiosRequestHeaders },
});
