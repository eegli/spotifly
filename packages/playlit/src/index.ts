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

function getLargestAbsValue<T extends number[]>(data: T): number {
  return Math.max(...data.map(Math.abs));
}
export default function () {
  const acousticness = Data.map(el => el.acousticness);
  console.log({ red: acousticness });
  console.log(standardize(acousticness));
  console.log(getLargestAbsValue(acousticness));
}
