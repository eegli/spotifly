import { chunkify } from '@spotifly/utils';
import { AsyncFn, OmitFromAsyncFnParams } from './types';

type PaginationParams = {
  limit: number;
  offset: number;
};

export function forPaginated<
  F extends AsyncFn<SpotifyApi.PagingObject<unknown>, string, PaginationParams>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return function (...args: OmitFromAsyncFnParams<F, PaginationParams>) {
    return async function (cb?: (param: R) => unknown): Promise<R[]> {
      const [arg1, arg2] = args;
      let nextPage: string | null = null;
      let offset = 0;
      const responses = [];
      do {
        const response = (await getFn(arg1, {
          ...arg2,
          limit,
          offset,
        })) as R;
        responses.push(response);
        nextPage = response.data.next;
        offset += limit;
        if (cb) await cb(response);
      } while (nextPage);
      return responses;
    };
  };
}

export function forLimited<
  F extends AsyncFn<unknown, string[], unknown>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return function (...args: Parameters<F>) {
    const [ids, rest] = args;
    return async function (cb?: (param: R) => unknown): Promise<R[]> {
      const chunks = chunkify(ids, limit);
      return chunks.reduce(async (acc, curr) => {
        const res = (await getFn(curr, rest)) as R;
        if (cb) await cb(res);
        (await acc).push(res);
        return acc;
      }, Promise.resolve([] as R[]));
    };
  };
}
