import { Models } from '../src/models';

describe('Lib exports', () => {
  test('Models', () => {
    expect(Models.GetSeveralTracks).toBeDefined();
  });
});
