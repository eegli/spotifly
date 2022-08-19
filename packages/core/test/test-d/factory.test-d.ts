import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import * as factory from '../../src/factory';
import { DataPromise, DataResponse, ReadOnlyParams } from '../../src/types';

type Custom = { prop: string };

declare function paginatedFunc(
  id: string,
  params?: {
    market?: string;
    limit?: number;
    offset?: number;
  }
): DataPromise<SpotifyApi.PagingObject<Custom>>;

describe('Factory, pagination handling', () => {
  const get = factory.forPaginated(paginatedFunc, 10);

  test('omits pagination parameters', async () => {
    expectAssignable<ReadOnlyParams<typeof get>>(['', { market: '' }] as const);
    expectNotAssignable<ReadOnlyParams<typeof get>>([
      '',
      { limit: 1 },
    ] as const);
    expectNotAssignable<ReadOnlyParams<typeof get>>([
      '',
      { offset: 1 },
    ] as const);
  });
  test('infers return type', async () => {
    expectType<DataResponse<SpotifyApi.PagingObject<Custom>>[]>(
      await get('abc')()
    );
  });
  test('infers callback', async () => {
    get('abc')(r => {
      expectAssignable<DataResponse<SpotifyApi.PagingObject<Custom>>>(r);
    });
  });
});

declare function limitedFunc(
  ids: string[],
  params?: {
    market?: string;
  }
): DataPromise<Custom>;

describe('Factory, limited endpoint handling', () => {
  const get = factory.forLimited(limitedFunc, 10)([]);
  test('infers parameters', async () => {
    type Params = ReadOnlyParams<typeof factory.forLimited>;
    expectAssignable<Params>([limitedFunc, 1] as const);
  });
  test('infers return type', async () => {
    expectType<DataResponse<Custom>[]>(await get());
  });
  test('infers callback', async () => {
    get(r => {
      expectAssignable<DataResponse<Custom>>(r);
    });
  });
});
