import { AsyncProvider } from '../../types';
import { getAvailableMarkets } from './markets';

export default function Markets(provider: AsyncProvider) {
  return {
    /**
     * Get the list of markets where Spotify is available.
     * @see {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-available-markets Get Available Markets}
     */
    getAvailableMarkets: getAvailableMarkets(provider),
  };
}
