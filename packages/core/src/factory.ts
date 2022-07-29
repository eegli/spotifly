import { chunkify } from '@spotifly/utils';
import type { ConditionalKeys } from 'type-fest';
import { DataPromise } from './request';

type PaginationParams = {
  limit: number;
  offset: number;
};

type PaginationReturn = DataPromise<SpotifyApi.PagingObject<unknown>>;

export function getAllFromPaginated<
  F extends (arg: PaginationParams) => PaginationReturn,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return async function (cb?: (param: R) => unknown): Promise<R[]> {
    let nextPage: string | null = null;
    let offset = 0;
    const responses = [];
    do {
      const response = (await getFn({
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
}

type FirstParam<T> = T extends (arg: infer A) => any ? A : never;

export function getAllFromLimited<
  F extends (...args: any[]) => DataPromise,
  P extends FirstParam<F>,
  S extends ConditionalKeys<P, string[]>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, toSlice: S, limit: number) {
  return async function (args: P, cb?: (param: R) => unknown): Promise<R[]> {
    const chunks = chunkify(args[toSlice], limit);
    return chunks.reduce(async (acc, curr) => {
      const res = (await getFn({ ...args, [toSlice]: curr })) as R;
      if (cb) await cb(res);
      (await acc).push(res);
      return acc;
    }, Promise.resolve([] as R[]));
  };
}
