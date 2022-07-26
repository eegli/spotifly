export function createAutoPaginated<
  F extends (params: {
    limit: number;
    offset: number;
  }) => Promise<SpotifyApi.PagingObject<any>>
>(getFn: F, limit: number) {
  return async function (
    cb?: (args: SpotifyApi.PagingObject<Awaited<ReturnType<F>>>) => void
  ): Promise<Awaited<ReturnType<F>>[]> {
    let nextPage: string | null = null;
    let offset = 0;
    const tracks = [];
    while (nextPage) {
      const response = await getFn({
        limit,
        offset,
      });
      tracks.push(...response.items);
      nextPage = response.next;
      offset += limit;
      if (cb) cb(response);
    }
    return tracks;
  };
}
