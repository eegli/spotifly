import { AsyncProvider } from '../../types';
import { getSeveralCategories, getSingleCategory } from './categories';

export default function Categories(provider: AsyncProvider) {
  return {
    Category: {
      /**
       * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-category Get Single Browse Category}
       */
      get: getSingleCategory(provider),
      /**
       * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-categories Get Several Browse Categories}
       */
      getSeveral: getSeveralCategories(provider).bind(null, null),
    },
  } as const;
}
