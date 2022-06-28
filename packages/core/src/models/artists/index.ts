import methodFactory from '../factory';
import { ArtistsBase } from './base';

export class Artists extends ArtistsBase {
  /**
   * Returns an object literal that offers multiple ways to fetch
   * artist data. If the number of ids exceeds the limit, the
   * request is split into chunks.
   *
   * @public
   * @param {...string[]} ids Spotify artist ids
   *
   */
  public info(...ids: string[]) {
    return methodFactory.fromUnpaginated({
      func: this.getSeveralArtists.bind(this),
      limit: 50,
      toChunk: ids,
    });
  }

  public albums(artistId: string) {
    return methodFactory.fromPaginated({
      func: this.getArtistsAlbums.bind(this, artistId),
      limit: 50,
    });
  }
}
