export function createAutoPaginated<
  R extends SpotifyApi.PagingObject<any>,
  P extends { limit: number; offset: number },
  F extends (params: P) => Promise<R>,
  A extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return async function (cb?: (params: A) => unknown): Promise<A[]> {
    let nextPage: string | null = null;
    let offset = 0;
    const tracks = [];
    do {
      const response = await getFn({
        limit,
        offset,
      } as P);
      tracks.push(...response.items);
      nextPage = response.next;
      offset += limit;
      if (cb) cb(response as A);
    } while (nextPage);

    return tracks;
  };
}
