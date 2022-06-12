import { chunkify } from '../utils';

export function createIninitePaginationMethods<
  Func extends (...args: any[]) => Promise<any[]>,
  Result = ReturnType<Func>
>({ func, params, limit }: { limit: number; params: string[]; func: Func }) {
  return {
    get: async function get(): Promise<Result[]> {
      return chunkify(params, limit).reduce(async (acc, idsChunk) => {
        const res = await func(...idsChunk);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<Result[]>[]));
    },
    iter: async function* iter(chunkSize = limit): AsyncGenerator<Result[]> {
      chunkSize = chunkSize > limit ? limit : chunkSize;
      const chunks = chunkify(params, chunkSize);
      for (let i = 0; i < chunks.length; i++) {
        yield func(...chunks[i]);
      }
    },
  };
}

export function createFinitePaginationMethods<
  Func extends (...args: any[]) => Promise<any>,
  Iter extends (...args: any[]) => AsyncGenerator<any[]>
>({ iter, func }: { iter: Iter; func: Func }) {
  return {
    get: func,
    iter,
    getAll: async function getAll(): Promise<ReturnType<Func>> {
      const result = [];
      for await (const chunk of iter()) {
        result.push(...chunk);
      }
      return result;
    },
  };
}
