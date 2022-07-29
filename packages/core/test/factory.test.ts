import { DataPromise } from '../src/abstract';
import * as factory from '../src/factory';

beforeEach(() => {
  jest.clearAllMocks();
});

function* createPaginatedBackend(
  total: number,
  atOnce: number
): Generator<
  { nextPage: string | null; items: { id: number }[] },
  void,
  unknown
> {
  const range = Array.from({ length: total }, (_, i) => ({ id: i + 1 }));
  for (let idx = total; idx > 0; idx -= atOnce) {
    yield {
      nextPage: idx > atOnce ? 'next' : null,
      items: range.slice(idx - Math.min(idx, atOnce), idx).reverse(),
    };
  }
}
const createPaginatedAPI = function ({
  itemCount,
  limit,
}: {
  itemCount: number;
  limit: number;
}) {
  const backend = createPaginatedBackend(itemCount, limit);

  return jest.fn(
    ({
      limit,
      offset,
    }: {
      limit: number;
      offset: number;
    }): DataPromise<SpotifyApi.PagingObject<{ id: number }>> => {
      let next: string | null = 'next';
      const nextValue = backend.next().value;
      if (!nextValue) throw new Error();
      if (nextValue.nextPage === null) {
        next = null;
      }

      return Promise.resolve({
        statusCode: 200,
        headers: {},
        data: {
          href: 'href',
          items: nextValue.items,
          limit,
          next,
          offset,
          previous: null,
          total: 1,
        },
      });
    }
  );
};

describe('Factory, pagination handling', () => {
  const mockCb = jest.fn((...args: unknown[]) => Promise.resolve(args));
  [
    { limit: 6, itemCount: 20, expectedCalls: 4 },
    { limit: 6, itemCount: 5, expectedCalls: 1 },
    { limit: 6, itemCount: 12, expectedCalls: 2 },
    { limit: 6, itemCount: 1, expectedCalls: 1 },
  ].forEach(testCase => {
    const { limit, itemCount, expectedCalls } = testCase;
    test(`gets all ${itemCount} items and invokes callback in between`, async () => {
      const mockAPI = createPaginatedAPI({ itemCount, limit });

      const result = await factory.getAllFromPaginated(
        mockAPI,
        limit
      )(args => mockCb(args));

      expect(result).toHaveLength(expectedCalls);
      const allItems = result.reduce(
        (acc, curr) => [...acc, ...curr.data.items],
        [] as unknown[]
      );
      expect(allItems).toHaveLength(itemCount);
      expect(result).toMatchSnapshot('result');

      expect(mockAPI).toHaveBeenCalledTimes(expectedCalls);
      expect(mockAPI.mock.calls).toMatchSnapshot('api invocation');

      expect(mockCb).toHaveBeenCalledTimes(expectedCalls);
      expect(mockCb).toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.any(Object),
          statusCode: expect.any(Number),
          data: expect.any(Object),
        })
      );
      expect(mockCb.mock.calls).toMatchSnapshot('callback invocation');
    });
  });
});

const createLimitedAPI = function (limit: number) {
  return jest.fn(
    ({ ids }: { ids: string[] }): DataPromise<{ id: number }[]> => {
      if (ids.length > limit) {
        throw new Error();
      }

      return Promise.resolve({
        statusCode: 200,
        headers: {},
        data: Array.from({ length: ids.length }).map(() => ({ id: 1 })),
      });
    }
  );
};

describe('Factory, limited endpoint handling', () => {
  const mockCb = jest.fn((...args: unknown[]) => Promise.resolve(args));

  [
    { limit: 5, itemCount: 1, expectedCalls: 1 },
    { limit: 5, itemCount: 5, expectedCalls: 1 },
    { limit: 5, itemCount: 8, expectedCalls: 2 },
    { limit: 5, itemCount: 12, expectedCalls: 3 },
  ].forEach(testCase => {
    const { limit, itemCount, expectedCalls } = testCase;
    test(`handles max ${itemCount} item with limit of ${limit}`, async () => {
      const mockAPI = createLimitedAPI(limit);

      const result = await factory.getAllFromLimited(
        mockAPI,
        'ids',
        limit
      )({ ids: Array.from({ length: itemCount }, () => 'test') }, args =>
        mockCb(args)
      );
      expect(result).toHaveLength(expectedCalls);
      const allItems = result.reduce(
        (acc, curr) => [...acc, ...curr.data],
        [] as unknown[]
      );
      expect(allItems).toHaveLength(itemCount);
      expect(result).toMatchSnapshot('result');

      expect(mockAPI).toHaveBeenCalledTimes(expectedCalls);
      mockAPI.mock.calls.forEach(call =>
        expect(call[0].ids.length).toBeLessThanOrEqual(limit)
      );

      expect(mockCb).toHaveBeenCalledTimes(expectedCalls);
      expect(mockCb).toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.any(Object),
          statusCode: expect.any(Number),
          data: expect.any(Object),
        })
      );
      expect(mockCb.mock.calls).toMatchSnapshot('callback invocation');
    });
  });
});
