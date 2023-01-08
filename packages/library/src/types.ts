type ExportedLibrary = 'full' | 'light';

export type UserConfig = {
  token: string;
  type?: ExportedLibrary;
  genres?: boolean;
  features?: boolean;
  playlists?: boolean;
  all_playlists?: boolean;
  compact?: boolean;
  outDir?: string;
  since?: string;
  last?: number;
};

export type Config = Required<UserConfig>;

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

export type AnyTrack = TrackLight | SpotifyApi.TrackObjectFull;
export type Playlist = SpotifyApi.PlaylistObjectSimplified;

export type SavedTrackItem<T = AnyTrack> = {
  added_at: string;
  track: T & {
    genres?: string[][];
    features?: SpotifyApi.AudioFeaturesObject;
  };
};

export type Meta = {
  date_generated: string;
  saved_tracks_output_type: ExportedLibrary;
};

export type LibraryExport<T = AnyTrack, P = Playlist> = {
  meta: Meta;
  tracks?: SavedTrackItem<T>[];
  playlists?: P[];
};

export type LibraryHandler<T = AnyTrack, P = Playlist> = (
  opts: UserConfig & { _?: string[] } // TODO in tinyparse
) => Promise<LibraryExport<T, P>>;
