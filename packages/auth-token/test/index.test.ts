import * as utils from '@spotifly/utils';
import { authorize } from '../src';
import * as server from '../src/server';

jest.useFakeTimers().setSystemTime(new Date('1996-04-20T22:00:00.000Z'));

jest.mock(
  'node-fetch',
  () => () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          access_token: 'access_token',
          refresh_token: 'refresh_token',
          expires_in: 3600,
          scope: 'user-read-private user-read-email',
          token_type: 'Bearer',
        }),
    })
);

// Math.random().toString(36).slice(2) now returns "ou8n1fu8n1"
jest.spyOn(Math, 'random').mockReturnValue(0.69);
const testState = 'ou8n1fu8n1';

const localhostSpy = jest
  .spyOn(server, 'localhostUrl')
  .mockResolvedValue(`?code=AQDKHwNyRapw&state=${testState}`);

const consoleSpy = jest.spyOn(global.console, 'info');

const writeSpy = jest
  .spyOn(utils, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Authorize via package', () => {
  it("fails if states don't match", async () => {
    localhostSpy.mockResolvedValueOnce(
      `?code=AQDKHwNyRapw&state=${testState}XXX`
    );
    await expect(
      authorize({ clientId: 'cid', clientSecret: 'cs' })
    ).rejects.toThrow();
  });

  it('fails if no code is received', async () => {
    localhostSpy.mockResolvedValueOnce(`?state=${testState}`);
    await expect(
      authorize({ clientId: 'cid', clientSecret: 'cs' })
    ).rejects.toThrow();
  });

  it('works with emit mode', async () => {
    const config = {
      clientId: 'cid',
      clientSecret: 'cs',
      port: 1000,
      outDir: 'out/token/',
      fileName: 'mytoken',
      scopes: 'user-do-nothing user-balabla',
    };
    const result = await authorize(config);
    expect(result).toBeDefined();
    expect(consoleSpy.mock.calls[1][0]).toMatchSnapshot('auth url');
    expect(localhostSpy).toHaveBeenCalledWith(config.port);
    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy.mock.calls[3][0]).toMatch(new RegExp(config.outDir));
  });

  it('works with no emit mode', async () => {
    const result = await authorize({
      clientId: 'cid',
      clientSecret: 'cs',
      noEmit: true,
    });
    expect(result).toBeDefined();
    expect(writeSpy).not.toHaveBeenCalled();
  });
});
