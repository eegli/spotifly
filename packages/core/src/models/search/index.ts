import { AsyncProvider } from '../../types';
import { searchForItem } from './search';

export default function Search(provider: AsyncProvider) {
  return {
    forItem: searchForItem(provider),
  } as const;
}
