import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type DataResponse<Data = unknown> = {
  data: Data;
  headers: Record<string, string>;
  statusCode: number;
};

export type DataPromise<Data = unknown> = Promise<DataResponse<Data>>;

export type AsyncProvider = {
  request(req: AxiosRequestConfig): Promise<AxiosResponse>;
};

export type AsyncFn<
  ReturnValue,
  Param1 = undefined,
  Param2 = undefined,
  Param3 = undefined,
  ReturnType = DataPromise<ReturnValue>
> = Param1 extends undefined
  ? () => ReturnType
  : Param2 extends undefined
  ? (required: Param1) => ReturnType
  : Param3 extends undefined
  ? Param2 extends AnyObject
    ? (required: Param1, optional?: Partial<Param2>) => ReturnType
    : (required1: Param1, required2: Param2) => ReturnType
  : Param3 extends AnyObject
  ? (
      required1: Param1,
      required2: Param2,
      optional?: Partial<Param3>
    ) => ReturnType
  : never;

export type AsyncFnWithProvider<
  ReturnValue,
  Param1 = undefined,
  Param2 = undefined,
  Param3 = undefined
> = (provider: AsyncProvider) => AsyncFn<ReturnValue, Param1, Param2, Param3>;

export type AnyObject = Record<string, unknown>;

export type AnyFunc = (...args: any[]) => unknown;

// https://github.com/microsoft/TypeScript/issues/39556
export type BetterOmit<Type, Key> = {
  [P in keyof Type as Exclude<P, Key>]: Type[P];
};

export type OmitFromAsyncFnParams<
  Func extends AnyFunc,
  Object extends AnyObject
> = Func extends (arg1: infer FirstArg, arg2: infer SecondArg) => unknown
  ? [FirstArg, BetterOmit<SecondArg, keyof Object>?]
  : never;

export type ReadOnlyParams<Func extends AnyFunc> = Func extends (
  ...args: infer Params
) => unknown
  ? Readonly<Params>
  : never;

// Branded types - T = T & {} - improve IntelliSense experience
// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
type _ = Record<never, never>;
export type UserId = string & _;
export type ArtistId = string & _;
export type TrackId = string & _;
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

export type SinglePropertyResponse<Key extends string> = {
  [Property in Key]: string[];
};
