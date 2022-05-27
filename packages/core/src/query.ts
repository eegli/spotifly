type QueryParams = {
  limit: number;
  offset: number;
  market: string;
  url: string;
  id: string;
  ids: string[];
};

type Options<Obj> = { required: keyof Obj; optional?: keyof Obj };

type HasCommonTypes<T1, T2> = Extract<T1, T2> extends never ? false : true;

type PropsInCommon<T1, T2> = Extract<T1, string & T2>;

type GracefulPick<Obj, MaybeKey> = MaybeKey extends keyof Obj
  ? {
      [P in MaybeKey]: Obj[P];
    }
  : {};

export type GenericQuery<
  P extends Options<QueryParams>,
  K1 = P['required'],
  K2 = P['optional'],
  R = GracefulPick<QueryParams, K1>,
  O = GracefulPick<QueryParams, K2>
> = HasCommonTypes<O, R> extends true
  ? `Parameter ${PropsInCommon<K1, K2>} cannot be optional and required`
  : {
      [K in keyof R]: R[K];
    } & {
      [K in keyof O]?: O[K];
    };

const query: GenericQuery<{
  required: 'ids' | 'url';
  optional: 'market';
}> = {
  ids: ['1', '2', '3'],
  url: 'https://example.com',
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
