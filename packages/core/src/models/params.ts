import type { EmptyObject, LiteralUnion } from '../types';

// Branded types - T = T & {} - improve IntelliSense experience
// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
type _ = EmptyObject;

/**
 * The user's Spotify user ID.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type UserId = string & _;
/**
 *  The Spotify ID of the artist.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type ArtistId = string & _;
/**
 *  The Spotify ID for the track.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type TrackId = string & _;
/**
 *  The Spotify ID of the album.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type AlbumId = string & _;
/**
 *  The Spotify ID for the episode.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type EpisodeId = string & _;
/**
 *  The Spotify ID for the show.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type ShowId = string & _;
/**
 *  The Spotify ID of the playlist.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type PlaylistId = string & _;
/**
 *  The Spotify category ID for the category.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type CategoryId = string & _;
/**
 *  The id of the device this command is targeting.
 *
 * @example
 * 7MaeDTjnd8zh4Dx0XpZmUQ
 */
export type DeviceId = string & _;
/**
 * The unique resource identifier that you can enter, for example, in the
 * Spotify Desktop client’s search box to locate an artist, album,
 * or track. To find a Spotify URI simply right-click (on Windows)
 * or Ctrl-Click (on a Mac) on the artist’s or album’s or track’s
 * name.
 *
 * @example
 * spotify:track:7MaeDTjnd8zh4Dx0XpZmUQ
 * spotify:episode:512ojhOuo1ktJprKbVcKyQ
 */
export type Uri = string & _;
/**
 * The position in milliseconds to seek to. Must be a positive number.
 * Passing in a position that is greater than the length of the track
 * will cause the player to start playing the next song.
 */
export type PositionMS = number & _;
/**
 * The volume to set. Must be a value from 0 to 100 inclusive.
 */
export type VolumePercent = number & _;
/**
 * true: Shuffle user's playback.
 *
 * false: Do not shuffle user's playback.
 */
export type PlaybackShuffle = boolean & _;

export type Params = {
  additional_types: LiteralUnion<'track' | ' episode'>[];
  after: string;
  collaborative: boolean;
  context_uri: string;
  country: string;
  description: string;
  device_id: string;
  fields: string;
  include_external: 'audio';
  include_groups: LiteralUnion<
    'album' | ' single' | ' appears_on' | ' compilation'
  >[];
  insert_before: number;
  limit: number;
  locale: string;
  market: string;
  name: string;
  offset: number;
  play: boolean;
  position: number;
  position_ms: number;
  public: boolean;
  range_length: number;
  range_start: number;
  snapshot_id: string;
  time_range: 'long_term ' | 'medium_term' | 'short_term';
  timestamp: string;
  uris: Uri[];
};

type SinglePropertyResponse<Key extends string> = {
  [Property in Key]: string[];
};

// TODO Types
export type AvailableMarketsResponse = SinglePropertyResponse<'markets'>;
export type UsersQueueResponse = {
  currently_playing: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObjectFull;

  queue: (SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObjectFull)[];
};
export type BooleanResponse = boolean[];
export type VoidResponse = SpotifyApi.VoidResponse;
