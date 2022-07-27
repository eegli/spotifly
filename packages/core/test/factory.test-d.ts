import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import * as factory from '../src/factory';

type Custom = unknown;

declare function fetcher(params: {
  limit: number;
  offset: number;
}): Promise<SpotifyApi.PagingObject<Custom>>;

declare function badFetcher1(params: {
  limit: number;
  offset: number;
}): Promise<null>;

declare function badFetcher2(
  params: null
): Promise<SpotifyApi.PagingObject<Custom>>;

describe('Factory', () => {
  test('Auto pagination factory parameters', async () => {
    type Params = Parameters<typeof factory.createAutoPaginated>;
    expectAssignable<Readonly<Params>>([fetcher, 5] as const);
    expectNotAssignable<Readonly<Readonly<Params>>>([badFetcher1, 5] as const);
    expectNotAssignable<Readonly<Readonly<Params>>>([badFetcher2, 5] as const);
  });
  test('Auto pagination return type', async () => {
    const paginated = factory.createAutoPaginated(fetcher, 10);
    expectType<SpotifyApi.PagingObject<Custom>[]>(await paginated());
  });
  test('Auto pagination callback', async () => {
    const paginated = factory.createAutoPaginated(fetcher, 10);
    paginated(r => {
      expectAssignable<SpotifyApi.PagingObject<Custom>>(r);
    });
  });
});
