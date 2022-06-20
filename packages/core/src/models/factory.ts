/* eslint-disable @typescript-eslint/no-explicit-any */
import { chunkify } from '../utils';

/* 
Generate methods for paginated/finite endpoints (e.g. a user's saved
tracks) automatically. Same thing for unpaginated/infinite endpoints
(e.g. multiple tracks, multiple artists)
*/
function fromUnpaginated<
  Func extends (...args: any[]) => Promise<any[]>,
  Res = ReturnType<Func>
>({ func, params, limit }: { limit: number; params: any[]; func: Func }) {
  return {
    get: async function get(): Promise<Res[]> {
      return chunkify(params, limit).reduce(async (acc, idsChunk) => {
        const res = await func(...idsChunk);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<Res[]>[]));
    },
    iter: async function* iter(chunkSize = limit): AsyncGenerator<Res[]> {
      if (chunkSize < 1) {
        throw new TypeError('Chunk size must be strictly positive');
      }
      chunkSize = chunkSize > limit ? limit : chunkSize;
      const chunks = chunkify(params, chunkSize);
      for (let i = 0; i < chunks.length; i++) {
        yield func(...chunks[i]);
      }
    },
  };
}

function fromPaginated<
  Func extends (...args: any[]) => Promise<any>,
  Iter extends (...args: any[]) => AsyncGenerator<any[]>,
  Res = ReturnType<Func>
>({ iter, func }: { iter: Iter; func: Func }) {
  return {
    get: func,
    iter,
    getAll: async function getAll(): Promise<Res[]> {
      const result = [];
      for await (const chunk of iter()) {
        result.push(...chunk);
      }
      return result;
    },
  };
}

export default {
  fromPaginated,
  fromUnpaginated,
};
