export function createAutoPaginated<
  P extends { limit: number; offset: number },
  F extends (params: P) => Promise<SpotifyApi.PagingObject<unknown>>,
  R extends Awaited<ReturnType<F>>
>(getFn: F, limit: number) {
  return async function (cb?: (params: R) => unknown): Promise<R[]> {
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
      if (cb) cb(response as R);
    } while (nextPage);

    return tracks as R[];
  };
}
