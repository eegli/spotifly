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
