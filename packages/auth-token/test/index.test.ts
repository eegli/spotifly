import * as fs from '@spotifly/utils/fs';
import log from '@spotifly/utils/log';
import { AuthorizeOptions, authorize } from '../src/authorize';
import { parser } from '../src/cli';
import * as server from '../src/server';
import * as utils from '../src/utils';

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
    }),
);

const testState = 'ou8n1fu8n1';
jest.spyOn(utils, 'randomState').mockReturnValue(testState);

const token = 'AQDKHwNyRapw';
const localhostSpy = jest
  .spyOn(server, 'localhostUrl')
  .mockResolvedValue(`?code=${token}&state=${testState}`);

const logInfoSpy = jest.spyOn(log, 'info').mockImplementation(() => {});
const logLogSpy = jest.spyOn(log, 'log').mockImplementation(() => {});
const logErrorSpy = jest.spyOn(log, 'error').mockImplementation(() => {});

const writeSpy = jest
  .spyOn(fs, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));

afterEach(() => {
  jest.clearAllMocks();
});

const options: AuthorizeOptions = {
  ...parser.options,
  clientId: 'cid',
  clientSecret: 'secret',
  scopes: 'user-do-nothing user-balabla',
};

describe('Authorize via package', () => {
  it("fails if states don't match", async () => {
    localhostSpy.mockResolvedValueOnce(
      `?code=${token}&state=${testState + 'XXX'}`,
    );
    await authorize({
      options,
    });
    expect(logErrorSpy).toHaveBeenCalledWith(
      'Error: Received and original state do not match',
    );
  });

  it('fails if no code is received', async () => {
    localhostSpy.mockResolvedValueOnce(`?state=${testState}`);
    await authorize({
      options,
    });
    expect(logErrorSpy).toHaveBeenCalledWith(
      'Error: No code received from Spotify, did you cancel the login?',
    );
  });

  it('works with emit mode', async () => {
    await authorize({
      options: {
        ...options,
        outDir: 'some-dir',
        noEmit: false,
      },
    });
    expect(logLogSpy.mock.calls).toMatchSnapshot('log');
    expect(logInfoSpy.mock.calls).toMatchSnapshot('info');
    expect(localhostSpy).toHaveBeenCalledWith(options.port);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });

  it('works with no emit mode', async () => {
    await authorize({
      options: {
        ...options,
        noEmit: true,
      },
    });
    expect(logInfoSpy.mock.calls).toMatchSnapshot('info');
    expect(writeSpy).not.toHaveBeenCalled();
  });
});
