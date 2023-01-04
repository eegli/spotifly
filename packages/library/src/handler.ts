import { initialize, isError } from '@spotifly/core';
import { writeJSON } from '@spotifly/utils';
import { defaultConfig } from './config';
import {
  enrichLibraryWithFeatures,
  enrichLibraryWithGenres,
  getUserSavedTracks,
  reduceLibraryToLight,
} from './library';
import type { Config, LibraryHandler } from './types';
import { createProgressBar } from './utils';

export const libraryHandler: LibraryHandler = async userConfig => {
  try {
    const config: Config = { ...defaultConfig, ...userConfig };
    const spotifyClient = initialize({ accessToken: config.token });

    let library = await getUserSavedTracks(spotifyClient, {
      last: config.last,
      since: config.since,
      progressBar: createProgressBar('user library'),
    });

    // Reduce library if necessary
    if (config.type === 'light') {
      library = reduceLibraryToLight(library);
    }

    // Add genres if specified
    if (config.genres) {
      library = await enrichLibraryWithGenres(spotifyClient, library, {
        progressBar: createProgressBar('artists'),
      });
    }

    // Add audio features if specified
    if (config.features) {
      library = await enrichLibraryWithFeatures(spotifyClient, library, {
        progressBar: createProgressBar('audio features'),
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
    if (isError(error)) {
      const { status, message } = error.response!.data.error;
      throw new Error(`Status ${status}, ${message}`);
    } else {
      throw new Error('Something went wrong');
    }
  }
};
