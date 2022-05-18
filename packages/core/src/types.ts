export type MapCollection<T> = Map<string, T>;
export type SetCollection<T> = Set<T>;

export type PickActual<T, P extends keyof T> = T[P];

type RequiredConfig = {
  token: string;
};

type OptionalConfig = {
  type: 'full' | 'light';
  genres: boolean;
  features: boolean;
  compact: boolean;
  outDir: string;
};

export type LibraryOptions = RequiredConfig & Partial<OptionalConfig>;
export type LibraryConfig = RequiredConfig & OptionalConfig;
export type EnhancedTrack<T> = T & {
  genres?: string[][];
  features?: SpotifyApi.AudioFeaturesObject;
};

export type TrackFull = SpotifyApi.TrackObjectFull;
export type TrackSimplified = SpotifyApi.TrackObjectSimplified;
export type EnhancedSavedTrack = EnhancedTrack<SpotifyApi.SavedTrackObject>;
export type EnhancedFullTrack = EnhancedTrack<SpotifyApi.TrackObjectFull>;

export type CustomTrackLight = {
  id: string;
  name: string;
  album: {
    name: string;
    id: string;
  };
  artists: {
    id: string;
    name: string;
  }[];
};

export type LibraryExport<T> = {
  meta: {
    date_generated: string;
    output_type: PickActual<LibraryConfig, 'type'>;
  };
  library: Library<T>;
};

export type Library<T = unknown> = {
  added_at: string;
  track: T & {
    genres?: string[][];
    features?: SpotifyApi.AudioFeaturesObject;
  };
}[];
