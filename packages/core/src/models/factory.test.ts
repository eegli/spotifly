import factory from './factory';

function createMock(endpointLimit: number) {
  return jest.fn((ids: number[], { attr }: { attr: string }) => {
    if (ids.length > endpointLimit) throw new Error();
    return Promise.resolve(ids);
  });
}

const unique = new Set();

beforeEach(() => {
  jest.clearAllMocks();
  unique.clear();
});

describe('Method factory', () => {
  describe('unpaginated ', () => {
    const LIMIT = 5;
    const PARAM_LEN = 11;

    const mockFunc = createMock(LIMIT);
    const e = factory.fromUnpaginated({
      func: mockFunc,
      limit: LIMIT,
      toChunk: Array.from({ length: PARAM_LEN }, (_, i) => i),
      opts: { attr: 'test' },
    });

    test('get', async () => {
      const res = await e.get();
      expect(res).toHaveLength(11);
      expect(mockFunc).toHaveBeenCalledTimes(3);
      expect(mockFunc).toHaveBeenCalledWith(expect.any(Object), {
        attr: 'test',
      });
      mockFunc.mock.calls.forEach(call => {
        expect(call.length).toBeLessThanOrEqual(10);
      });
    });
    test('iter with default chunk size (limit)', async () => {
      for await (const res of e.iter()) {
        res.forEach(item => unique.add(item));
        expect(res.length).toBeLessThanOrEqual(5);
        expect(res.length).toBeGreaterThanOrEqual(1);
      }
      expect(unique.size).toBe(PARAM_LEN);
      expect(mockFunc).toHaveBeenCalledTimes(3);
    });
    test('iter with minimum chunk size', async () => {
      for await (const res of e.iter(1)) {
        res.forEach(item => unique.add(item));
        expect(res).toHaveLength(1);
      }
      expect(unique.size).toBe(PARAM_LEN);
      expect(mockFunc).toHaveBeenCalledTimes(3);
    });
    test('iter with with chunk size below limit', async () => {
      for await (const res of e.iter(3)) {
        res.forEach(item => unique.add(item));
        expect(res.length).toBeLessThanOrEqual(3);
        expect(res.length).toBeGreaterThanOrEqual(2);
      }
      expect(unique.size).toBe(PARAM_LEN);
      expect(mockFunc).toHaveBeenCalledTimes(3);
    });
    test('iter with with chunk size above limit', async () => {
      for await (const res of e.iter(6)) {
        res.forEach(item => unique.add(item));
        expect(res.length).toBeLessThanOrEqual(6);
        expect(res.length).toBeGreaterThanOrEqual(5);
      }

      expect(unique.size).toBe(PARAM_LEN);
      expect(mockFunc).toHaveBeenCalledTimes(3);
    });
    test('iter with with chunk size above param len', async () => {
      for await (const res of e.iter(12)) {
        res.forEach(item => unique.add(item));
        expect(res.length).toBe(11);
      }
      expect(unique.size).toBe(PARAM_LEN);
      expect(mockFunc).toHaveBeenCalledTimes(3);
    });
    test('iter with non-positive chunk size throws', async () => {
      await expect(async () => {
        for await (const _ of e.iter(0));
      }).rejects.toThrow();
      await expect(async () => {
        for await (const _ of e.iter(-1));
      }).rejects.toThrow();
    });
  });
});
