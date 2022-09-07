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
  /**
   * A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss.
   */
  market: string;
  /**
   * The desired language, consisting of a lowercase ISO 639-1
   * language code and an uppercase ISO 3166-1 alpha-2 country code,
   * joined by an underscore.
   *
   * @example
   * es_MX
   */
  locale: string;
  /**
   * An ISO 3166-1 alpha-2 country code.
   *
   * @example
   * SE
   */
  country: string;
  /**
   * A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss.
   */
  timestamp: string;
  additional_types: LiteralUnion<'track' | ' episode'>[];
  /**
   * The playlist's snapshot ID against which you want to make the
   * changes. The API will validate that the specified items exist and
   * in the specified positions and make the changes, even if more
   * recent changes have been made to the playlist.
   */
  snapshot_id: string;
  /**
   * The id of the device this command is targeting. If not supplied,
   * the user's currently active device is the target.
   */
  device_id: string;
  fields: string;
  time_range: 'long_term ' | 'medium_term' | 'short_term';
  include_groups: LiteralUnion<
    'album' | ' single' | ' appears_on' | ' compilation'
  >[];
  /**
   * Spotify URI of the context to play. Valid contexts are albums,
   * artists & playlists.
   *
   * @example
   * spotify:album:73TcBRSRsPLKmxnjnVsSV3
   */
  context_uri: string;
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
  play: boolean;
  /**
   * A JSON array of Spotify URIs.
   *
   * @example
   * ["spotify:track:7MaeDTjnd8zh4Dx0XpZmUQ"]
   */
  uris: Uri[];
  after: string;
  range_start: number;
  insert_before: number;
  range_length: number;
  include_external: 'audio';
  /**
   * The maximum number of items to return.
   */
  limit: number;
  /**
   * The index of the first item to return.
   */
  offset: number;
  /**
   * The position to insert the items, a zero-based index. For
   * example, to insert the items in the first position: position=0;
   * to insert the items in the third position: position=2. If
   * omitted, the items will be appended to the playlist. Items are
   * added in the order they are listed in the query string or request
   * body.
   *
   * @example
   * 25000
   */
  position: number;
  /**
   * The position in milliseconds to seek to. Must be a positive
   * number. Passing in a position that is greater than the length of
   * the track will cause the player to start playing the next song.
   *
   * @example
   * 25000
   */
  position_ms: number;
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
