export type QueryParams = {
  limit: number;
  offset: number;
  market: string;
  url: string;
  id: string;
  ids: string[];
};

type GracefulPick<T, K> = K extends keyof T
  ? { [P in K]?: T[P] }
  : Record<never, never>;

export type GenericFields<
  T extends Record<string, unknown>,
  R extends keyof T | null,
  O extends Exclude<keyof T, R> | undefined = undefined
> = GracefulPick<T, R> & Partial<GracefulPick<T, O>>;

export type GenericFieldsWithError<
  T extends Record<string, unknown>,
  R extends keyof T | null,
  O extends keyof T | undefined = undefined
> = HasCommonTypes<R, O> extends true
  ? `${TypesInCommon<R, O>} cannot be both optional and required`
  : GracefulPick<T, R> & Partial<GracefulPick<T, O>>;

type HasCommonTypes<T1, T2> = Extract<T1, T2> extends never ? false : true;

type TypesInCommon<T1, T2> = Extract<T1, T2 & string>;

const q1: GenericFields<FormOptions, null, 'message'> = {
  message: {
    header: "What's up?",
    body: 'Some text',
  },
};

const q2: GenericFields<FormOptions, 'name' | 'email', 'message'> = {
  name: 'Elisa',
  email: 'elisa@gmail.com',
  message: {
    header: "What's up?",
    body: 'Some text',
  },
};

const q3: GenericFieldsWithError<FormOptions, 'name' | 'email', 'message'> = {
  name: 'Elisa',
  email: 'elisa@gmail.com',
};

type FormOptions = {
  name: string;
  email: string;
  message: {
    header: string;
    body: string;
  };
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
