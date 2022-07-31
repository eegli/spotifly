export type Permutations<T extends string, U extends string = T> = T extends any
  ? T | `${T},${Permutations<Exclude<U, T>>}`
  : never;

export type OmitFromIterable<
  T extends readonly unknown[],
  K extends keyof any
> = T extends [infer First, ...infer Rest]
  ? Partial<Record<never, never>> extends Required<Omit<First, K>>
    ? [...OmitFromIterable<Rest, K>]
    : [Omit<First, K>, ...OmitFromIterable<Rest, K>]
  : T;
