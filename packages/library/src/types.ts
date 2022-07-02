import { AxiosResponse } from 'axios';

type PickActual<T, P extends keyof T> = T[P];

type ExportedLibrary = 'full' | 'light';

export type Options = {
  token: string;
  type?: ExportedLibrary;
  genres?: boolean;
  features?: boolean;
  compact?: boolean;
  outDir?: string;
};

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
    output_type: ExportedLibrary;
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

export type MultipleAudioFeatures =
  AxiosResponse<SpotifyApi.MultipleAudioFeaturesResponse>;
