type ExportedLibrary = 'full' | 'light';

export type Options = {
  token: string;
  type?: ExportedLibrary;
  genres?: boolean;
  features?: boolean;
  compact?: boolean;
  outDir?: string;
  since?: string;
  last?: number;
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

export type TrackFull = SpotifyApi.TrackObjectFull;

type AnyTrack = TrackLight | TrackFull;

type LibraryExport<T> = {
  meta: {
    date_generated: string;
    output_type: ExportedLibrary;
  };
  library: Library<T>;
};

export type Library<T = AnyTrack> = {
  added_at: string;
  track: T & {
    genres?: string[][];
    features?: SpotifyApi.AudioFeaturesObject;
  };
}[];

export type LibraryHandler = (
  opts: Options,
) => Promise<LibraryExport<AnyTrack>>;
