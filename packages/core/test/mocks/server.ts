import { setupServer } from 'msw/node';
import * as handlers from '.';

export const server = setupServer(
  ...handlers.artistHandlers,
  ...handlers.trackHandlers
);
