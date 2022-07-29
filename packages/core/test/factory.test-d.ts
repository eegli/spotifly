import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import { DataPromise, DataResponse } from '../src/abstract';
import * as factory from '../src/factory';

type ReadOnlyParams<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? Readonly<P>
  : never;

type Custom = { prop: string };

declare function fetchFn(params: {
  limit: number;
  offset: number;
}): DataPromise<SpotifyApi.PagingObject<Custom>>;

declare function badFetchFn1(params: {
  limit: number;
  offset: number;
}): DataPromise<null>;

declare function badFetchFn2(
  params: null
): DataPromise<SpotifyApi.PagingObject<Custom>>;

describe('Factory, pagination handling', () => {
  const getAll = factory.getAllFromPaginated(fetchFn, 10);

  test('parameters', async () => {
    type Params = ReadOnlyParams<typeof factory.getAllFromPaginated>;
    expectAssignable<Params>([fetchFn, 5] as const);
    expectNotAssignable<Params>([badFetchFn1, 5] as const);
    expectNotAssignable<Params>([badFetchFn2, 5] as const);
  });
  test('return type', async () => {
    expectType<DataResponse<SpotifyApi.PagingObject<Custom>>[]>(await getAll());
  });
  test('callback', async () => {
    getAll(r => {
      expectAssignable<DataResponse<SpotifyApi.PagingObject<Custom>>>(r);
    });
  });
});

declare function limitedFn(params: {
  ids: string[];
  market?: string;
}): DataPromise<Custom>;

describe('Factory, limited endpoint handling', () => {
  const getAll = factory.getAllFromLimited(limitedFn, 'ids', 10);
  test('parameters', async () => {
    type Params = ReadOnlyParams<typeof factory.getAllFromLimited>;
    expectAssignable<Params>([limitedFn, 'ids', 1] as const);
  });
  test('return type', async () => {
    expectType<DataResponse<Custom>[]>(await getAll({ ids: [] }));
  });
  test('callback', async () => {
    getAll({ ids: [] }, r => {
      expectAssignable<DataResponse<Custom>>(r);
    });
  });
});
