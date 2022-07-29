import { DataPromise } from './abstract';

export function getAllFromPaginated<
  P extends { limit: number; offset: number },
  F extends (params: P) => DataPromise<SpotifyApi.PagingObject<unknown>>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return async function (cb?: (params: R) => unknown): Promise<R[]> {
    let nextPage: string | null = null;
    let offset = 0;
    const responses = [];
    do {
      const response = (await getFn({
        limit,
        offset,
      } as P)) as R;
      responses.push(response);
      nextPage = response.data.next;
      offset += limit;
      if (cb) await cb(response);
    } while (nextPage);

    return responses as R[];
  };
}
