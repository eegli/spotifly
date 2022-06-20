import factory from './factory';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Method factory', () => {
  describe('unpaginated ', () => {
    const mockFunc = jest.fn().mockResolvedValue([]);
    const e = factory.fromUnpaginated({
      func: mockFunc,
      limit: 10,
      params: Array.from({ length: 11 }).fill(0),
    });

    test('get', async () => {
      await e.get();
      expect(mockFunc).toHaveBeenCalledTimes(2);
      mockFunc.mock.calls.forEach(call => {
        expect(call.length).toBeLessThanOrEqual(10);
      });
    });
    test('iter with default chunk size', async () => {
      for await (const _ of e.iter());
      expect(mockFunc).toHaveBeenCalledTimes(2);
      mockFunc.mock.calls.forEach(call => {
        expect(call.length).toBeLessThanOrEqual(10);
      });
    });
    test('iter with with chunk size below limit 1', async () => {
      for await (const _ of e.iter(1));
      expect(mockFunc).toHaveBeenCalledTimes(11);
      mockFunc.mock.calls.forEach(call => {
        expect(call.length).toBeLessThanOrEqual(10);
      });
    });
    test('iter with with chunk size above limit', async () => {
      for await (const _ of e.iter(11));
      expect(mockFunc).toHaveBeenCalledTimes(2);
      mockFunc.mock.calls.forEach(call => {
        expect(call.length).toBeLessThanOrEqual(10);
      });
    });
    test('iter with non-positive chunk size should throw', async () => {
      await expect(async () => {
        for await (const _ of e.iter(0));
      }).rejects.toThrow();
      await expect(async () => {
        for await (const _ of e.iter(-1));
      }).rejects.toThrow();
    });
  });
});
