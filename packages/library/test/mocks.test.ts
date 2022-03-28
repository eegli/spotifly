import {
  RES_MULTIPLE_ARTISTS,
  RES_MULTIPLE_AUDIO_FEATURES,
  RES_USER_SAVED_TRACKS,
} from './fixtures';

describe('Mocks', () => {
  it('has an artist response for each artist in the library', () => {
    const artists = RES_USER_SAVED_TRACKS.data.items
      .map(item => item.track.artists.map(artist => artist.id))
      .flat();
    const libraryArtists = new Set(artists);
    const albumArtists = new Set(
      RES_MULTIPLE_ARTISTS.data.artists.map(a => a.id)
    );

    expect(libraryArtists).toEqual(albumArtists);
  });
  it('has an audio features response for each track in the library', () => {
    const trackLibraryIds = new Set(
      RES_USER_SAVED_TRACKS.data.items.map(item => item.track.id)
    );

    const trackFeatureIds = new Set(
      RES_MULTIPLE_AUDIO_FEATURES.data.audio_features.map(a => a.id)
    );
    expect(trackLibraryIds).toEqual(trackFeatureIds);
  });
});
