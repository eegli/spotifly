import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as handlers from '.';

export const server = setupServer(
  ...[
    rest.post('https://accounts.spotify.com/api/token', req => {
      return req.passthrough();
    }),
  ],
  ...handlers.artistHandlers,
  ...handlers.trackHandlers
);
