import * as fs from '@spotifly/utils/fs';
import log from '@spotifly/utils/log';
import { Options, authorize } from '../src/index';
import * as server from '../src/server';
import { SpotifyTokenResponse } from '../src/types';
import * as utils from '../src/utils';

const fakeDate = new Date('1996-04-20T22:00:00.000Z');
const returnedToken: SpotifyTokenResponse = {
  access_token: 'access_token',
  refresh_token: 'refresh_token',
  expires_in: 3600,
  scope: 'user-read-private user-read-email',
  token_type: 'Bearer',
  date_obtained: fakeDate.toUTCString(),
};
const testState = 'ou8n1fu8n1';

jest.useFakeTimers().setSystemTime(fakeDate);

jest.mock(
  'node-fetch',
  () => () =>
    Promise.resolve({
      json: () => Promise.resolve(returnedToken),
    }),
);

jest.spyOn(utils, 'randomState').mockReturnValue(testState);

const localhostSpy = jest
  .spyOn(server, 'localhostUrl')
  .mockResolvedValue(`?code=123&state=${testState}`);

const logInfoSpy = jest.spyOn(log, 'info').mockImplementation(() => {});
const logLogSpy = jest.spyOn(log, 'log').mockImplementation(() => {});
const logErrorSpy = jest.spyOn(log, 'error').mockImplementation(() => {});

const writeSpy = jest
  .spyOn(fs, 'writeJSON')
  .mockImplementation(opts => Promise.resolve(opts.path));

afterEach(() => {
  jest.clearAllMocks();
});

const params: Options = {
  clientId: 'cid',
  clientSecret: 'secret',
};

describe('Authorize via package', () => {
  it("fails if states don't match", async () => {
    localhostSpy.mockResolvedValueOnce(`?code=123&state=${testState + 'XXX'}`);
    const userToken = await authorize(params);
    expect(userToken).toBeUndefined();
    expect(logErrorSpy).toHaveBeenCalledWith(
      'Error: Received and original state do not match',
    );
  });

  it('fails if no code is received', async () => {
    localhostSpy.mockResolvedValueOnce(`?state=${testState}`);
    const userToken = await authorize(params);
    expect(userToken).toBeUndefined();
    expect(logErrorSpy).toHaveBeenCalledWith(
      'Error: No code received from Spotify, did you cancel the login?',
    );
  });

  it('works with emit mode', async () => {
    const userToken = await authorize({
      ...params,
      outDir: 'some-dir',
      port: 1234,
      noEmit: false,
      scopes: 'user-read-email user-read-private',
      fileName: 'some-file',
    });
    expect(userToken).toStrictEqual(returnedToken);
    expect(logLogSpy.mock.calls).toMatchSnapshot('log');
    expect(logInfoSpy.mock.calls).toMatchSnapshot('info');
    expect(localhostSpy).toHaveBeenCalledWith(1234);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });

  it('works with no emit mode', async () => {
    const userToken = await authorize({
      ...params,
      noEmit: true,
    });
    expect(userToken).toStrictEqual(returnedToken);
    expect(logInfoSpy.mock.calls).toMatchSnapshot('info');
    expect(writeSpy).not.toHaveBeenCalled();
  });

  it('doc examples', async () => {
    {
      const token = await authorize({
        clientId: 'clientId',
        clientSecret: 'clientSecret',
        port: 3000,
        scopes: 'user-read-email user-top-read',
      });
      expect(token).toStrictEqual(returnedToken);
    }
    {
      const options: Options = {
        clientId: 's',
        clientSecret: 's',
        noEmit: true,
      };

      const token = await authorize(options);
      expect(token).toStrictEqual(returnedToken);
    }
  });
});
