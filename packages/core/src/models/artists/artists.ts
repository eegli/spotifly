import { createIninitePaginationMethods } from '../factory';
import { ArtistsBase } from './base';

export class Artists extends ArtistsBase {
  /**
   * Returns an object literal that offers multiple ways to fetch
   * artist data. If the number of artist ids exceeds the limit, the
   * request is split into chunks
   *
   * @public
   * @param {...string[]} ids Spotify artist ids
   *
   */
  public artists(...ids: string[]) {
    return createIninitePaginationMethods({
      func: this.getSeveralArtists.bind(this),
      limit: this.endpoints.severalArtists.limit,
      params: ids,
    });
  }
}
