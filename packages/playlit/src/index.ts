import _Data from '../test/payloads/data.json';

const Data = _Data as SpotifyApi.AudioFeaturesObject[];

type AudioFeatures = SpotifyApi.AudioFeaturesObject;
type Weights = Record<keyof AudioFeatures, number>;
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

export type Options = {
  weights: Partial<Weights>;
};

const options: Options = {
  weights: {
    acousticness: 1,
  },
};

const add = (a: number, b: number) => a + b;

function standardize<T extends number[]>(data: T): T {
  const N = data.length;
  const mean = data.reduce(add) / N;
  const variance = data.map(x => (x - mean) ** 2).reduce(add) / N;
  const stdized = data.map(x => (x - mean) / Math.sqrt(variance));
  return stdized as T;
}

function sortNumeric(a: number, b: number, ascending = true) {
  const sign = ascending ? 1 : -1;
  return (a - b) * sign;
}

export function sortOnIndex(arr: number[], ascending = true): number[] {
  const range = [...Array(arr.length).keys()];
  return range.sort((a, b) => sortNumeric(arr[a], arr[b], ascending));
}

export function toBin(arr: number[], coeff: number): number[][] {
  if (coeff > 1 || coeff < 0) {
    throw new RangeError('Bin coefficient must be in the range [0, 1]');
  }
  if (coeff === 0) return [arr];
  const binCount = Math.ceil(arr.length * coeff);
  const size = Math.ceil(arr.length / binCount);
  return Array.from({ length: binCount }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

const acousticness = Data.map(el => el.acousticness);
const acoustincIndex = sortOnIndex(acousticness);
console.log({ acousticness });
console.log({ acoustincIndex });
console.log(toBin(acoustincIndex, 0.8));
