import axios from 'axios';
import { AuthProvider } from '../src/provider';

beforeEach(() => {
  jest.clearAllMocks();
});

jest.useFakeTimers();

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
mockAxios.create.mockReturnThis();

const ONE_HOUR_IN_MS = 60 * 60 * 1000;
const HALF_AN_HOUR_IN_MS = 30 * 60 * 1000;

describe('Auth provider', () => {
  test('with access token', async () => {
    const provider = new AuthProvider({ accessToken: 'my-token' });
    await provider.request({
      url: 'example',
      headers: { 'x-my-header': 'value' },
    });
    expect(mockAxios).toHaveBeenCalledWith({
      url: 'example',
      headers: { Authorization: 'Bearer my-token', 'x-my-header': 'value' },
    });
  });
  test('with client credentials', async () => {
    const provider = new AuthProvider({
      clientId: 'my-client-id',
      clientSecret: 'my-client-secret',
      refreshToken: 'my-refresh-token',
    });
    mockAxios.post.mockResolvedValueOnce({
      data: { access_token: 'token111' },
    });

    await provider.request({ url: 'example' });
    expect(mockAxios).toHaveBeenNthCalledWith(1, {
      url: 'example',
      headers: { Authorization: 'Bearer token111' },
    });

    jest.advanceTimersByTime(HALF_AN_HOUR_IN_MS);
    await provider.request({ url: 'example' });
    expect(mockAxios).toHaveBeenNthCalledWith(2, {
      url: 'example',
      headers: { Authorization: 'Bearer token111' },
    });

    jest.advanceTimersByTime(ONE_HOUR_IN_MS);
    mockAxios.post.mockResolvedValueOnce({
      data: { access_token: 'token222' },
    });
    await provider.request({ url: 'example' });
    expect(mockAxios).toHaveBeenNthCalledWith(3, {
      url: 'example',
      headers: { Authorization: 'Bearer token222' },
    });
  });
});
