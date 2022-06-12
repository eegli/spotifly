export type QueryParams = {
  limit: number;
  offset: number;
  market: string;
  url: string;
  id: string;
  ids: string[];
  contentOnly: boolean;
};

export type TypeFromV1<
  T extends Record<string, unknown>,
  R extends keyof T | null,
  O extends Exclude<keyof T, R> | undefined = undefined
> = Pick<T, NonNullable<R>> & Partial<Pick<T, NonNullable<O>>>;

export type TypeFromV2<
  T extends Record<string, unknown>,
  R extends keyof T | null,
  O extends keyof T | undefined = undefined
> = HasCommonTypes<R, O> extends true
  ? `${TypesInCommon<R, O>} cannot be both optional and required`
  : Pick<T, NonNullable<R>> & Partial<Pick<T, NonNullable<O>>>;

type HasCommonTypes<T1, T2> = Extract<T1, T2> extends never ? false : true;

type TypesInCommon<T1, T2> = Extract<T1, T2 & string>;
