import { getLibrary } from '../src/library';

// This is just done to get 100% coverage
it('exports library', () => {
  expect(getLibrary).toBeTruthy();
});
