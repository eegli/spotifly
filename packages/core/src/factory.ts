import { Params } from './models/params';
import type { AnyObject, AsyncFn, OmitFromAsyncFnParams } from './types';

type PagingObject<T = unknown> = SpotifyApi.PagingObject<T>;

type CursorObject<T = unknown> = SpotifyApi.CursorBasedPagingObject<T>;

type PaginationParams = Pick<Params, 'limit' | 'offset'>;

export function resolveOffsetPaginated<
  F extends AsyncFn<PagingObject, string, PaginationParams>,
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

export function handleLimited<
  F extends AsyncFn<unknown, string[], AnyObject>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return function (...args: Parameters<F>) {
    const [ids, rest] = args;
    return async function (cb?: (param: R) => unknown): Promise<R[]> {
      const responses: R[] = [];
      for (let i = 0; i < ids.length; i += limit) {
        const chunk = ids.slice(i, i + limit);
        const response = (await getFn(chunk, rest)) as R;
        if (cb) await cb(response);
        responses.push(response);
      }
      return responses;
    };
  };
}
