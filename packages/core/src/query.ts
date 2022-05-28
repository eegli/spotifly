type QueryParams = {
  limit: number;
  offset: number;
  market: string;
  url: string;
  id: string;
  ids: string[];
};

type HasCommonTypes<T1, T2> = Extract<T1, T2> extends never ? false : true;

type PropsInCommon<T1, T2> = Extract<T1, T2 & string>;

type GracefulPick<T, K> = K extends keyof T ? { [P in K]?: T[P] } : {};

type GenQuery<
  T extends Record<string, any>,
  R extends keyof T,
  O extends Exclude<keyof T, R> | undefined = undefined
> = Pick<T, R> & Partial<GracefulPick<T, O>>;

const x: GenQuery<QueryParams, 'id' | 'url', 'offset' | 'limit'> = {
  id: '123',
  url: 'https://example.com',
  limit: 10,
};

export const endpointsv1 = {
  getSeveralArtists: {
    url: 'artists',
    limit: 50,
  },
  getSeveralTracks: {
    limit: 50,
    url: 'tracks',
  },
  getUsersSavedTracks: {
    limit: 50,
    url: 'me/tracks',
  },
};
