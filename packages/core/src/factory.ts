import { chunkify } from '@spotifly/utils';
import { AsyncFn, DataPromise } from './request';
import type { OmitFromIterable } from './types';

type PaginationParams = {
  limit: number;
  offset: number;
};

type Params = [{ limit: number; offset?: number; market?: string }];
const x: OmitFromIterable<Params, 'limit'> = [{ offset: 0, market: 'US' }];

export function forPaginated<
  F extends (
    params?: PaginationParams
  ) => DataPromise<SpotifyApi.PagingObject<any>>,
  R extends Awaited<ReturnType<F>>,
  A extends OmitFromIterable<Parameters<F>, keyof PaginationParams>
>(getFn: F, limit: number) {
  return function (...args: A) {
    return async function (cb?: (param: R) => unknown): Promise<R[]> {
      let nextPage: string | null = null;
      let offset = 0;
      const responses = [];
      do {
        const response = (await getFn({
          ...args,
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
  F extends AsyncFn<unknown, string[], any>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return function (...args: Parameters<F>) {
    const [ids, ...rest] = args;
    return async function (cb?: (param: R) => unknown): Promise<R[]> {
      const chunks = chunkify(ids, limit);
      return chunks.reduce(async (acc, curr) => {
        const res = (await getFn(curr, ...rest)) as R;
        if (cb) await cb(res);
        (await acc).push(res);
        return acc;
      }, Promise.resolve([] as R[]));
    };
  };
}
