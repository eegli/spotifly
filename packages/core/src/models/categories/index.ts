import { AsyncProvider } from '../../types';
import { getSeveralCategories, getSingleCategory } from './categories';

export default function Categories(provider: AsyncProvider) {
  return {
    /**
     * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-category Get Single Browse Category}
     */
    getSingleCategory: getSingleCategory(provider),
    /**
     * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-categories Get Several Browse Categories}
     */
    getSeveralCategories: getSeveralCategories(provider).bind(null, null),
  };
}
