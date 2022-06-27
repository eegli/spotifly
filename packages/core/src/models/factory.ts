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
>({
  func,
  toChunk,
  opts,
  limit,
}: {
  limit: number;
  toChunk: Parameters<Func>[0] extends (infer U)[] ? U[] : never;
  opts: Parameters<Func>[1] extends infer O
    ? O extends Record<string, any> | undefined
      ? O
      : never
    : never;
  func: Func;
}) {
  return {
    get: async function get(): Promise<ResItem[]> {
      return chunkify(toChunk, limit).reduce(async (acc, idsChunk) => {
        const res = await func(idsChunk, opts);
        acc.then(existing => existing.push(...res));
        return acc;
      }, Promise.resolve(<ResItem[]>[]));
    },
    iter: async function* iter(chunkSize = limit): AsyncGenerator<ResItem[]> {
      if (chunkSize < 1) {
        throw new TypeError('Chunk size must be strictly positive');
      }
      if (chunkSize >= toChunk.length) {
        return yield this.get();
      }

      let reserve: ResItem[] = [];

      for await (const idsChunk of chunkify(toChunk, limit)) {
        // Append from previous iteration
        const current = reserve;
        reserve = [];
        current.push(...(await func(idsChunk, opts)));

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
  Func extends (
    params: Record<string, any>
  ) => Promise<SpotifyApi.PagingObject<any>>,
  Res = Awaited<ReturnType<Func>>
>({
  func,
  limit,
  opts,
}: {
  func: Func;
  limit: number;
  opts: Parameters<Func>[0];
}) {
  async function* iter() {
    let offset = 0;
    let nextPage: string | null = null;
    do {
      const data = await func({ limit, offset, ...opts });
      offset += limit;
      nextPage = data.next;
      yield data.items;
    } while (nextPage);
  }

  return {
    get: func,
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
