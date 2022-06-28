/* eslint-disable @typescript-eslint/no-explicit-any */
import { chunkify } from '../utils';

/* 
Generate methods for paginated/finite endpoints (e.g. a user's saved
tracks) automatically. Same thing for unpaginated/infinite endpoints
(e.g. multiple tracks, multiple artists)
*/

function fromUnpaginated<
  Func extends (arg1: string[], arg2: any) => Promise<any[]>,
  Options = Parameters<Func>[1] extends infer P
    ? P extends Record<string, any>
      ? P
      : never
    : never,
  ResItem = Awaited<ReturnType<Func>> extends (infer E)[] ? E : never
>({ func, toChunk, limit }: { limit: number; toChunk: string[]; func: Func }) {
  return {
    get: async function get(options?: Options): Promise<ResItem[]> {
      return chunkify(toChunk, limit).reduce(async (acc, idsChunk) => {
        const res = await func(idsChunk, { ...options });
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<ResItem[]>[]));
    },
    iter: async function* iter(
      options?: {
        chunkSize?: number;
      } & Options
    ): AsyncGenerator<ResItem[]> {
      const chunkSize = options?.chunkSize ?? limit;
      delete options?.chunkSize;

      if (chunkSize < 1) {
        throw new TypeError('Chunk size must be strictly positive');
      }
      if (chunkSize >= toChunk.length) {
        return yield this.get(options);
      }

      let reserve: ResItem[] = [];

      for await (const idsChunk of chunkify(toChunk, limit)) {
        // Append from previous iteration
        const current = reserve;
        reserve = [];
        current.push(...(await func(idsChunk, { ...options })));

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

type Paginated = { offset?: number; limit?: number };

function fromPaginated<
  Func extends (arg: any) => Promise<SpotifyApi.PagingObject<any>>,
  Options = Parameters<Func>[number] extends infer P
    ? P extends Paginated
      ? P
      : never
    : never,
  RestOptions = Omit<Options, keyof Paginated>,
  ResAll = Awaited<ReturnType<Func>>,
  Res = ResAll extends SpotifyApi.PagingObject<infer R> ? R : never
>({ func, limit }: { func: Func; limit: number }) {
  async function* iter(options?: RestOptions) {
    let offset = 0;
    let nextPage: string | null = null;
    do {
      const data = await func({ ...options });
      offset += limit;
      nextPage = data.next;
      yield data.items;
    } while (nextPage);
  }

  return {
    get: async function get(
      options?: Options
    ): Promise<SpotifyApi.PagingObject<Res>> {
      const data = await func({ ...options });
      return data;
    },
    getAll: async function getAll(options?: RestOptions): Promise<ResAll[]> {
      const result = [];
      for await (const chunk of iter(options)) {
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
