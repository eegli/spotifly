import { DataPromise } from '../src/abstract';
import { getAllFromPaginated } from '../src/factory';

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
const createMockAPIEndpoint = function ({
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

const mockCb = jest.fn((...args: unknown[]) => Promise.resolve(args));

describe('Factory', () => {
  const testCases = [
    { limit: 6, itemCount: 20, expectedCalls: 4 },
    { limit: 6, itemCount: 5, expectedCalls: 1 },
    { limit: 6, itemCount: 12, expectedCalls: 2 },
    { limit: 6, itemCount: 1, expectedCalls: 1 },
  ];

  for (let i = 0; i < testCases.length; i++) {
    test(`gets all items and invokes callback in between, ${i}`, async () => {
      const { limit, itemCount, expectedCalls } = testCases[i];
      const mockGetter = createMockAPIEndpoint({ itemCount, limit });

      const result = await getAllFromPaginated(
        mockGetter,
        limit
      )(args => mockCb(args));

      expect(result).toHaveLength(expectedCalls);
      const allItems = result.reduce(
        (acc, curr) => [...acc, ...curr.data.items],
        [] as unknown[]
      );
      expect(allItems).toHaveLength(itemCount);
      expect(result).toMatchSnapshot('result');

      expect(mockGetter).toHaveBeenCalledTimes(expectedCalls);
      expect(mockGetter.mock.calls).toMatchSnapshot('getter invocation');

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
  }
});
