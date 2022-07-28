import { DataPromise } from './abstract';

export function getAllFromPaginated<
  P extends { limit: number; offset: number },
  F extends (params: P) => DataPromise<SpotifyApi.PagingObject<unknown>>,
  R extends Awaited<ReturnType<F>>,
  D extends R['data']['items']
>(getFn: F, limit: number) {
  return async function (cb?: (params: R) => unknown): Promise<D> {
    let nextPage: string | null = null;
    let offset = 0;
    const items = [];
    do {
      const response = (await getFn({
        limit,
        offset,
      } as P)) as R;
      items.push(...response.data.items);
      nextPage = response.data.next;
      offset += limit;
      if (cb) cb(response);
    } while (nextPage);

    return items as D;
  };
}
