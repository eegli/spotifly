/* eslint-disable @typescript-eslint/no-explicit-any */
import { chunkify } from '../utils';

/* 
Generate methods for paginated/finite endpoints (e.g. a user's saved
tracks) automatically. Same thing for unpaginated/infinite endpoints
(e.g. multiple tracks, multiple artists)
*/
function fromUnpaginated<
  Func extends (...args: any[]) => Promise<any[]>,
  ResArray = Awaited<ReturnType<Func>>,
  ResItem = ResArray extends (infer E)[] ? E : never
>({ func, params, limit }: { limit: number; params: any[]; func: Func }) {
  return {
    get: async function get(): Promise<ResItem[]> {
      return chunkify(params, limit).reduce(async (acc, idsChunk) => {
        const res = await func(...idsChunk);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<ResItem[]>[]));
    },
    iter: async function* iter(chunkSize = limit): AsyncGenerator<ResItem[]> {
      if (chunkSize < 1) {
        throw new TypeError('Chunk size must be strictly positive');
      }
      if (chunkSize >= params.length) {
        return yield this.get();
      }

      let reserve: ResItem[] = [];

      for await (const idsChunk of chunkify(params, limit)) {
        // Append from previous iteration
        const current = reserve;
        reserve = [];
        current.push(...(await func(...idsChunk)));

        // How many times can we yield given the chunk size and
        // fetched items?
        const yieldableCnt = Math.floor(current.length / chunkSize);

        // We don't have enough items for a chunk yet, continue
        // filling up
        if (yieldableCnt === 0) {
          reserve.push(...current);
          continue;
        }

        // Yield as many times as possible if the chunk size is
        // smaller than the limit. Otherwise, this has no effect
        for (let i = 0; i < yieldableCnt; i++) {
          yield current.slice(i * chunkSize, (i + 1) * chunkSize);
        }

        // Amount of items left that will not fit into a chunk
        const leftoverCnt = current.length % chunkSize;

        // If the leftover count is 0, we were able to yield all
        // currently available items and do not need to transfer
        // leftover items to the next iteration. Otherwise, consider
        // them for the next iteration
        if (leftoverCnt > 0) {
          reserve.push(...current.slice(leftoverCnt * yieldableCnt));
        }
      }

      // The very last chunk of leftovers if there are
      if (reserve.length > 0) return yield reserve;
    },
  };
}

function fromPaginated<
  Func extends (...args: any[]) => Promise<any>,
  Iter extends (...args: any[]) => AsyncGenerator<any[]>,
  Res = Awaited<ReturnType<Func>>
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
