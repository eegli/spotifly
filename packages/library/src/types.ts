import type { WithGlobals, WithOptions } from '@eegli/tinyparse';
import type { Options } from './config';

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

export type TrackFormat = TrackLight | TrackFull;

export type TrackFull = SpotifyApi.TrackObjectFull;

export type LibraryExport = {
  meta: {
    date_generated: string;
  };
  library: Library;
};

export type Library = {
  added_at: string;
  track: TrackFormat & {
    genres?: string[][];
    features?: SpotifyApi.AudioFeaturesObject;
  };
}[];

export type LibraryOptions = WithOptions<Options>;
export type LibraryGlobals = WithGlobals<Options>;

export type LibraryParams = LibraryOptions & LibraryGlobals;
