import { AxiosResponse } from 'axios';

type PickActual<T, P extends keyof T> = T[P];

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

export type TrackLight = {
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

export type TrackFull = PickActual<SpotifyApi.SavedTrackObject, 'track'>;

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

export type UsersSavedTracks =
  AxiosResponse<SpotifyApi.UsersSavedTracksResponse>;
export type MultipleArtists = AxiosResponse<SpotifyApi.MultipleArtistsResponse>;
export type MultipleAudioFeatures =
  AxiosResponse<SpotifyApi.MultipleAudioFeaturesResponse>;
