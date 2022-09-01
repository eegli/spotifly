import { AxiosRequestConfig, AxiosResponse } from 'axios';

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
  R,
  P1 = undefined,
  P2 = undefined,
  P3 = undefined,
  RT = DataPromise<R>
> = P1 extends undefined
  ? () => RT
  : P2 extends undefined
  ? (required: P1) => RT
  : P3 extends undefined
  ? P2 extends AnyObject
    ? (required: P1, optional?: Partial<P2>) => RT
    : (required1: P1, required2: P2) => RT
  : P3 extends AnyObject
  ? (required1: P1, required2: P2, optional?: Partial<P3>) => RT
  : never;

export type AsyncFnWithProvider<
  R,
  A = undefined,
  B = undefined,
  C = undefined,
  OR1 = R,
  OA1 = A,
  OB1 = B,
  OC1 = C,
  OR2 = OR1,
  OA2 = OA1,
  OB2 = OB1,
  OC2 = OC1
> = {
  (provider: AsyncProvider): AsyncFn<R, A, B, C>;
  (provider: AsyncProvider): AsyncFn<OR1, OA1, OB1, OC1>;
  (provider: AsyncProvider): AsyncFn<OR2, OA2, OB2, OC2>;
};

export type AnyObject = Record<string, unknown>;

export type AnyFunc = (...args: any[]) => unknown;

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

// Branded types - T = T & {} - improve IntelliSense experience
// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
type _ = Record<never, never>;
export type UserId = string & _;
export type TrackId = string & _;
export type TrackIds = TrackId[];
export type Uris = string[];
export type PlaylistId = string & _;
export type CategoryId = string & _;
export type DeviceId = string & _;

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
export type TimeRange = {
  time_range: 'long_term ' | 'medium_term' | 'short_term';
};

export type After = { after: string };
export type Limit = { limit: number };
export type Offset = { offset: number };

export type SinglePropertyResponse<K extends string> = {
  [P in K]: string[];
};
