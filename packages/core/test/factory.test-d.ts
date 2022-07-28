import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import { DataPromise, DataResponse } from '../src/abstract';
import * as factory from '../src/factory';

type Custom = { prop: string };

declare function fetcher(params: {
  limit: number;
  offset: number;
}): DataPromise<SpotifyApi.PagingObject<Custom>>;

declare function badFetcher1(params: {
  limit: number;
  offset: number;
}): DataPromise<null>;

declare function badFetcher2(
  params: null
): DataPromise<SpotifyApi.PagingObject<Custom>>;

describe('Factory', () => {
  test('Auto pagination factory parameters', async () => {
    type Params = Parameters<typeof factory.getAllFromPaginated>;
    expectAssignable<Readonly<Params>>([fetcher, 5] as const);
    expectNotAssignable<Readonly<Readonly<Params>>>([badFetcher1, 5] as const);
    expectNotAssignable<Readonly<Readonly<Params>>>([badFetcher2, 5] as const);
  });
  test('Auto pagination return type', async () => {
    const getAll = factory.getAllFromPaginated(fetcher, 10);
    expectType<Custom[]>(await getAll());
  });
  test('Auto pagination callback', async () => {
    const getAll = factory.getAllFromPaginated(fetcher, 10);
    getAll(r => {
      expectAssignable<DataResponse<SpotifyApi.PagingObject<Custom>>>(r);
    });
  });
});
