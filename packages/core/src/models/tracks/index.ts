import methodFactory from '../factory';
import { TracksBase } from './base';

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
  public tracks(...ids: string[]) {
    return methodFactory.fromUnpaginated({
      func: this.getSeveralTracks.bind(this),
      limit: this.endpoints.severalTracks.limit,
      params: ids,
    });
  }

  /**
   * Returns an object literal that offers multiple ways to fetch a
   * user's saved tracks.
   *
   * @public
   *
   */
  public get userSavedTracks() {
    return methodFactory.fromPaginated({
      func: this.getUserSavedTracks.bind(this),
      iter: this.getUserSavedTracksIter.bind(this),
    });
  }
}
