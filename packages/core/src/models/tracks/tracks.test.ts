import { AuthProvider } from '../../provider';
import TracksFactory from './index';

const Tracks = TracksFactory(
  new AuthProvider({
    accessToken:
      'BQAwh3mIaDY5ZRSDS0w9LdnMkPFA9_QgzAfxNUhkVrmSaoz3LKutbb0vcvokmEX-CpYLQlyDiTL_93A4etowLJnFKvgY7FzNwWk3dAfuUK91QPf-nZEmQNqjLB5A9tQRiUVNLoYsl7Ujx3Ks8EU0z5WlEkc1hWeBwSVHJ2CYyTpTBcqPz3XLxRcHfVzg',
  })
);

describe('Test', () => {
  test('Test', async () => {
    const r1 = await Tracks.SingleTrack.get({
      trackId: '40SBS57su9xLiE1WqkXOVr',
    });
    expect(r1).toMatchSnapshot();
    const r2 = await Tracks.MultipleTracks.get({
      trackIds: ['40SBS57su9xLiE1WqkXOVr', '2wNZlBkr1y9nBiuNB0IcRy'],
    });
    expect(r2).toMatchSnapshot();
  });
});
