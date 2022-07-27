import { createAutoPaginated } from '../src/factory';

beforeEach(() => {
  jest.clearAllMocks();
});

function* createPaginatedBackend(
  total: number,
  atOnce: number
): Generator<{ nextPage: string | null; items: string[] }, void, unknown> {
  const range = Array.from({ length: total }, (_, i) => `item ${i + 1}`);
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

  return jest.fn(({ limit, offset }: { limit: number; offset: number }) => {
    let next: string | null = 'next';
    const nextValue = backend.next().value;
    if (!nextValue) throw new Error();
    if (nextValue.nextPage === null) {
      next = null;
    }

    return Promise.resolve({
      href: 'href',
      items: nextValue.items,
      limit,
      next,
      offset,
      previous: null,
      total: 1,
    } as SpotifyApi.PagingObject<string>);
  });
};

const mockCb = jest.fn();

describe('Factory', () => {
  const testCases = [
    { limit: 6, itemCount: 20, expectedCalls: 4 },
    { limit: 6, itemCount: 5, expectedCalls: 1 },
    { limit: 6, itemCount: 12, expectedCalls: 2 },
    { limit: 6, itemCount: 1, expectedCalls: 1 },
  ];

  for (let i = 0; i < testCases.length; i++) {
    test(`queries endpoint indefinitely for results and invokes callback ${i}`, async () => {
      const { limit, itemCount, expectedCalls } = testCases[i];
      const mockFn = createMockAPIEndpoint({ itemCount, limit });

      await createAutoPaginated(mockFn, limit)(args => mockCb(args));

      expect(mockFn).toHaveBeenCalledTimes(expectedCalls);
      expect(mockFn.mock.calls).toMatchSnapshot();
      expect(mockCb).toHaveBeenCalledTimes(expectedCalls);
      expect(mockCb.mock.calls).toMatchSnapshot();
    });
  }
});
