type QueryParams = {
  limit: number;
  offset: number;
  market: string;
  url: string;
  id: string;
  ids: string;
};

type Options<T> = { required: keyof T; optional: keyof T };

type GracefulPick<T, K> = K extends keyof T
  ? {
      [P in K]: T[P];
    }
  : {};

export type GenericQuery<
  P extends Options<QueryParams>,
  R = GracefulPick<QueryParams, P['required']>,
  O = GracefulPick<QueryParams, P['optional']>
> = O extends R
  ? `Parameter "${Exclude<keyof O, symbol>}" cannot be optional and required`
  : {
      [K in keyof R]: R[K];
    } & {
      [K in keyof O]?: O[K];
    };

const query: GenericQuery<{ required: 'limit' | 'offset'; optional: 'url' }> = {
  limit: 1,
  offset: 2,
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
