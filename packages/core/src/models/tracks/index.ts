import methodFactory from '../factory';
import {
  GetSeveralTracksOptions,
  GetUserSavedTrackOptions,
  TracksBase,
} from './base';

export class Tracks extends TracksBase {
  /**
   * Returns an object literal that offers multiple ways to fetch
   * track data. If the number of ids exceeds the limit, the
   * request is split into chunks.
   *
   * @public
   * @param {...string[]} ids Spotify track ids
   *
   */
  public trackInfo(ids: string[], opts: GetSeveralTracksOptions = {}) {
    return methodFactory.fromUnpaginated({
      func: this.getSeveralTracks.bind(this),
      limit: 50,
      toChunk: ids,
      opts,
    });
  }

  /**
   * Returns an object literal that offers multiple ways to fetch a
   * user's saved tracks.
   *
   * @public
   *
   */
  public userSavedTracks(opts: GetUserSavedTrackOptions = {}) {
    return methodFactory.fromPaginated({
      func: this.getUserSavedTracks.bind(this),
      limit: 50,
      opts,
    });
  }
}
