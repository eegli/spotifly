import { AuthProvider } from '../src/request';
import { server } from './mocks/server';

export const authProvider_WILL_HIT_API = new AuthProvider({
  clientId: process.env.SPT_CLIENT_ID || '',
  clientSecret: process.env.SPT_CLIENT_SECRET || '',
  refreshToken: process.env.SPT_REFRESH_TOKEN || '',
});

export const authProvider = new AuthProvider({
  accessToken: '',
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
