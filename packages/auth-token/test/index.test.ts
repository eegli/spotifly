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
const resolveJson = jest.fn().mockResolvedValue(returnedToken);

jest.useFakeTimers().setSystemTime(fakeDate);

// @ts-expect-error only provide JSON method
jest.spyOn(global, 'fetch').mockResolvedValue({
  json: resolveJson,
});

jest.spyOn(utils, 'randomState').mockReturnValue(testState);

const localhostSpy = jest
  .spyOn(server, 'localhostUrl')
  .mockResolvedValue(`?code=123&state=${testState}`);

const logInfoSpy = jest.spyOn(log, 'info').mockImplementation(() => {});
const logLogSpy = jest.spyOn(log, 'log').mockImplementation(() => {});
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
    await expect(authorize(params)).rejects.toThrow(
      'Error: Received and original state do not match',
    );
  });

  it('fails if no code is received', async () => {
    localhostSpy.mockResolvedValueOnce(`?state=${testState}`);
    await expect(authorize(params)).rejects.toThrow(
      'Error: No code received from Spotify, did you cancel the login?',
    );
  });

  it('fails if no Spotify does not respond', async () => {
    resolveJson.mockRejectedValueOnce(new Error('Failed to fetch'));
    await expect(authorize(params)).rejects.toThrow('Error: Failed to fetch');
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
    expect(logLogSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "Please click the link to login to Spotify in the browser
      ",
        ],
        [
          "https://accounts.spotify.com/authorize?response_type=code&show_dialog=true&state=ou8n1fu8n1&client_id=cid&redirect_uri=http%3A%2F%2Flocalhost%3A1234&scope=user-read-email+user-read-private
      ",
        ],
        [
          "Login successfull! Cleaning up...
      ",
        ],
      ]
    `);
    expect(logInfoSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "Success! Saved Spotify access token to "some-dir"",
        ],
      ]
    `);
    expect(localhostSpy).toHaveBeenCalledWith(1234);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });

  it('works with no emit mode', async () => {
    await authorize({
      ...params,
      noEmit: true,
    });
    expect(logInfoSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "Token:
      {
        "access_token": "access_token",
        "refresh_token": "refresh_token",
        "expires_in": 3600,
        "scope": "user-read-private user-read-email",
        "token_type": "Bearer",
        "date_obtained": "Sat, 20 Apr 1996 22:00:00 GMT"
      }",
        ],
      ]
    `);
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
