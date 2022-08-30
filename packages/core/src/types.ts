import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type { AxiosResponse } from 'axios';

export type DataResponse<T = unknown> = {
  data: T;
  headers: Record<string, string>;
  statusCode: number;
};
export type DataPromise<T = unknown> = Promise<DataResponse<T>>;

export type AsyncProvider = {
  request(req: AxiosRequestConfig): Promise<AxiosResponse>;
};

export type AsyncFn<
  Return,
  Required,
  Optional extends AnyObject | undefined = undefined
> = Optional extends undefined
  ? (required: Required) => DataPromise<Return>
  : (required: Required, optional?: Partial<Optional>) => DataPromise<Return>;

export type AnyObject = Record<never, never>;

export type AnyFunc = (...args: any[]) => unknown;

export type AsyncFnWithProvider<
  Return,
  Required,
  Optional extends AnyObject | undefined = undefined,
  RT1 = Return,
  RQ1 = Required,
  OPT1 extends AnyObject | undefined = Optional,
  RT2 = Return,
  RQ2 = Required,
  OPT2 extends AnyObject | undefined = Optional
> = {
  (provider: AsyncProvider): AsyncFn<Return, Required, Optional>;
  (provider: AsyncProvider): AsyncFn<RT1, RQ1, OPT1>;
  (provider: AsyncProvider): AsyncFn<RT2, RQ2, OPT2>;
};

export type Permutations<
  T extends string,
  D extends string,
  U extends string = T
> = T extends unknown ? T | `${T}${D}${Permutations<Exclude<U, T>, D>}` : never;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<T, E> = {
  [P in keyof T as Exclude<P, E>]: T[P];
};

export type OmitFromAsyncFnParams<
  F extends AnyFunc,
  O extends AnyObject
> = F extends (arg1: infer A, arg2: infer B) => unknown
  ? [A, BetterOmit<B, keyof O>?]
  : never;

export type ReadOnlyParams<T extends AnyFunc> = T extends (
  ...args: infer P
) => unknown
  ? Readonly<P>
  : never;

// eslint-disable-next-line @typescript-eslint/ban-types
// Branded types - T = T & {} - improve IntelliSense experience
// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377

type _ = AnyObject;
export type UserId = string & _;
export type TrackId = string & _;
export type TrackIds = TrackId[];
export type PlaylistId = string & _;
export type CategoryId = string & _;

export type Market = { market: string };
export type Locale = { locale: string };
export type Country = { country: string };
export type Timestamp = { timestamp: string };

export type Fields = { fields: string };
export type AdditionalTypes = {
  additional_types: string;
};
export type SnapshotId = {
  snapshot_id: string;
};

export type Limit = { limit: number };
export type Offset = { offset: number };
