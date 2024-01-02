import { initialize, isError } from '@spotifly/core';
import { writeJSON } from '@spotifly/utils';
import { defaultConfig } from './config';
import type { Library, LibraryHandler, TrackLight } from './types';
import { createProgressBar, isBeforeDate } from './utils';

export const libraryHandler: LibraryHandler = async options => {
  try {
    const config = { ...defaultConfig, ...options };
    const spotifyClient = initialize({ accessToken: config.token });

    let library: Library = [];

    let progress = createProgressBar('user library');

    progress.start(0, 0);

    let nextPage: string | null = null;
    let offset = 0;

    fetchLoop: do {
      const { data } = await spotifyClient.Tracks.getUsersSavedTracks({
        limit: 50,
        offset,
      });
      progress.setTotal(data.total);
      progress.increment(data.items.length);

      for (let i = 0; i < data.items.length; i++) {
        const track = data.items[i];
        if (library.length === config.last) {
          break fetchLoop;
        }
        if (isBeforeDate(track.added_at, config.since)) {
          break fetchLoop;
        }
        library.push(track);
      }
      nextPage = data.next;
      offset += 50;
    } while (nextPage);

    progress.stop();

    // Reduce library if necessary
    if (config.type === 'light') {
      library = library.reduce(
        (acc, curr) => {
          acc.push({
            added_at: curr.added_at,
            track: {
              id: curr.track.id,
              name: curr.track.name,
              album: {
                id: curr.track.album.id,
                name: curr.track.album.name,
              },
              artists: curr.track.artists.map(a => ({
                id: a.id,
                name: a.name,
              })),
            },
          });
          return acc;
        },
        <Library<TrackLight>>[],
      );
    }

    // Add genres if specified
    if (config.genres) {
      const artists = library.map(t => t.track.artists.map(a => a.id)).flat();
      const artistIds = [...new Set<string>(artists)];
      const genres: Record<string, string[]> = {};

      progress = createProgressBar('artists');
      progress.start(artistIds.length, 0);

      await spotifyClient.Artists.getAllArtists(artistIds)(({ data }) => {
        data.artists.forEach(artist => {
          genres[artist.id] = artist.genres;
        });
        progress.increment(data.artists.length);
      });

      progress.stop();
      library.forEach(({ track }) => {
        track.genres = track.artists.map(({ id }) => genres[id]);
      });
    }

    // Add audio features if specified
    if (config.features) {
      const trackIds = library.map(t => t.track.id);
      const features: Record<string, SpotifyApi.AudioFeaturesObject> = {};

      progress = createProgressBar('audio features');

      progress.start(trackIds.length, 0);

      await spotifyClient.Tracks.getAllAudioFeatures(trackIds)(({ data }) => {
        data.audio_features.forEach(f => {
          features[f.id] = f;
        });
        progress.increment(data.audio_features.length);
      });

      progress.stop();
      library.forEach(({ track }) => {
        track.features = features[track.id];
      });
    }

    const libExport = {
      meta: {
        date_generated: new Date().toISOString(),
        output_type: config.type,
      },
      library,
    };

    const outDir = await writeJSON({
      fileName: 'spotify-library',
      path: config.outDir,
      data: libExport,
      compact: config.compact,
    });

    console.info("Success! Library written to '%s'", outDir);

    return libExport;
  } catch (error) {
    if (isError(error) && error.response) {
      const { status, message } = error.response.data.error;
      throw new Error(`Status ${status}, ${message}`);
    } else {
      throw new Error('Something went wrong');
    }
  }
};
