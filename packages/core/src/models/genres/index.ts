import { AsyncProvider } from '../../types';
import { getAvailableGenreSeeds } from './genres';

export default function Genres(provider: AsyncProvider) {
  return {
    /**
     * Retrieve a list of available genres seed parameter values for recommendations.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendation-genres Get Available Genre Seeds}
     */
    getAvailableGenreSeeds: getAvailableGenreSeeds(provider).bind(null, null),
  };
}
