import factory from './factory';

function createMock(endpointLimit: number) {
  return jest.fn((ids: string[], {}: { optionalAttribute?: string }) => {
    if (ids.length > endpointLimit) throw new Error();
    return Promise.resolve(ids);
  });
}

const unique = new Set();

beforeEach(() => {
  jest.clearAllMocks();
  unique.clear();
});

describe('Method factory, unpaginated', () => {
  const LIMIT = 5;
  const PARAM_LEN = 11;

  const mockFunc = createMock(LIMIT);
  const e = factory.fromUnpaginated({
    func: mockFunc,
    limit: LIMIT,
    toChunk: Array.from({ length: PARAM_LEN }, (_, i) => i.toString()),
  });

  test('get with optional args', async () => {
    const res = await e.get({ optionalAttribute: 'test' });
    expect(res).toHaveLength(11);
    expect(mockFunc).toHaveBeenCalledWith(expect.anything(), {
      optionalAttribute: 'test',
    });
    mockFunc.mock.calls.forEach(call => {
      expect(call.length).toBeLessThanOrEqual(10);
    });
  });

  test('get without optional args', async () => {
    const res = await e.get();
    expect(res).toHaveLength(11);
    expect(mockFunc).toHaveBeenCalledWith(expect.anything(), {});
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
    const chunkSize = 1;
    for await (const res of e.iter({ chunkSize })) {
      res.forEach(item => unique.add(item));
      expect(res).toHaveLength(chunkSize);
    }
    expect(unique.size).toBe(PARAM_LEN);
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
  test('iter with with chunk size below limit', async () => {
    const chunkSize = 3;
    for await (const res of e.iter({ chunkSize })) {
      res.forEach(item => unique.add(item));
      expect(res.length).toBeLessThanOrEqual(chunkSize);
      expect(res.length).toBeGreaterThanOrEqual(2);
    }
    expect(unique.size).toBe(PARAM_LEN);
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
  test('iter with with chunk size above limit', async () => {
    const chunkSize = 6;
    for await (const res of e.iter({ chunkSize })) {
      res.forEach(item => unique.add(item));
      expect(res.length).toBeLessThanOrEqual(chunkSize);
      expect(res.length).toBeGreaterThanOrEqual(5);
    }

    expect(unique.size).toBe(PARAM_LEN);
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
  test('iter with with chunk size above param len', async () => {
    const chunkSize = 12;
    for await (const res of e.iter({ chunkSize })) {
      res.forEach(item => unique.add(item));
      expect(res.length).toBe(11);
    }
    expect(unique.size).toBe(PARAM_LEN);
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
  test('iter with non-positive chunk size throws', async () => {
    await expect(async () => {
      for await (const _ of e.iter({ chunkSize: 0 }));
    }).rejects.toThrow();
    await expect(async () => {
      for await (const _ of e.iter({ chunkSize: -1 }));
    }).rejects.toThrow();
  });
});
