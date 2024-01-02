import { AuthProvider } from '@spotifly/core/provider';
import * as credentialUtils from '../src/credentials';

const mockPkg: InvokePackageArgs = {
  callback: jest.fn(),
  help: jest.fn(),
  packageName: 'test',
  packageVersion: '1.0.0',
};

jest.mock('@spotifly/auth-token/cli', () => mockPkg);
jest.mock('@spotifly/library/cli', () => mockPkg);

import * as cli from '../src/cli';
import { InvokePackageArgs } from '../src/invoke';

jest.spyOn(AuthProvider, 'getAccessToken').mockResolvedValue({
  access_token: 'spt_token',
  expires_in: 3600,
  scope: '',
  token_type: 'Bearer',
});

const configSpy = jest
  .spyOn(credentialUtils, 'readConfig')
  .mockReturnValue(null);

const configWithPathSpy = jest
  .spyOn(credentialUtils, 'readConfigWithPath')
  .mockReturnValue(null);

const consoleInfoSpy = jest
  .spyOn(global.console, 'info')
  .mockImplementation(jest.fn);
const consoleErrorSpy = jest
  .spyOn(global.console, 'error')
  .mockImplementation(jest.fn);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CLI', () => {
  [
    ['', ''],
    ['', '', '--version'],
    ['', '', '-v'],
    ['', '', '--help'],
    ['', '', '-h'],
  ].forEach(processArgs => {
    test('Help and info command: ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockPkg.callback).not.toHaveBeenCalled();
      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy.mock.calls[0][0]).toMatch(
        /(Spotifly|@spotifly\/cli) v\d.\d.\d/g,
      );
    });
  });

  [['', '', 'profiles']].forEach(processArgs => {
    test('Meta commands: ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockPkg.callback).not.toHaveBeenCalled();
      expect(configWithPathSpy).toHaveBeenCalled();
      expect(consoleInfoSpy.mock.calls[0][0]).toMatchInlineSnapshot(
        `"No profiles found, does your config file exist?"`,
      );
      consoleInfoSpy.mockClear();
      configWithPathSpy.mockReturnValueOnce(['[default]', 'path']);
      await cli.run();
      expect(consoleInfoSpy.mock.calls[0][0]).toMatch(/Available profiles/);
    });
  });

  [
    ['', '', 'auth', '-h'],
    ['', '', 'library', '--help'],
  ].forEach(processArgs => {
    test('Delegates command (help): ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockPkg.callback).not.toHaveBeenCalled();
      expect(mockPkg.help).toHaveBeenCalledTimes(1);
    });
  });

  [
    ['', '', 'auth', 'arg', 's'],
    ['', '', 'library', 'arg'],
  ].forEach(processArgs => {
    test('Delegates command (callback): ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockPkg.callback).toHaveBeenCalledTimes(1);
      expect(mockPkg.callback).toHaveBeenCalledWith(processArgs.slice(3));
      expect(mockPkg.help).not.toHaveBeenCalled();
    });
  });

  [
    ['', '', 'x'],
    ['', '', '', 'y'],
  ].forEach(processArgs => {
    test('Ignores command ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockPkg.callback).not.toHaveBeenCalled();
      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy.mock.calls[0][0]).toMatch(
        /Unknown argument .*[\s\S]Run 'spotifly --help' for available commands/s,
      );
    });
  });

  test('Skips adding refresh token if token arg is present', async () => {
    process.argv = ['', '', 'library', '--token', 'x'];
    await cli.run();
    expect(configSpy).not.toHaveBeenCalled();
    expect(mockPkg.callback).toHaveBeenCalledWith(['--token', 'x']);
  });

  test('With refresh token and default profile', async () => {
    process.argv = ['', '', 'library'];
    configSpy.mockReturnValueOnce(`[default]
      spt_client_id=a02b6c2ef3e7
      spt_client_secret=4e11b25b6f
      spt_refresh_token=AQChZXEeZs0r8wNdLaQmCxtORFIh5j4`);
    await cli.run();
    expect(mockPkg.callback).toHaveBeenCalledWith(['--token', 'spt_token']);
  });

  test('With refresh token and custom profile', async () => {
    process.argv = ['', '', 'library', '--profile', 'test'];
    configSpy.mockReturnValueOnce(`[test]
      spt_client_id=a02b6c2ef3e7
      spt_client_secret=4e11b25b6f
      spt_refresh_token=AQChZXEeZs0r8wNdLaQmCxtORFIh5j4`);
    await cli.run();
    expect(mockPkg.callback).toHaveBeenCalledWith([
      '--profile',
      'test',
      '--token',
      'spt_token',
    ]);
  });

  test('With refresh token and invalid credentials', async () => {
    process.argv = ['', '', 'library'];
    configSpy.mockReturnValueOnce(`[default]
      spt_client_id=a02b6c2ef3e7
      spt_client_secret=4e11b25b6f`);
    await cli.run();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      expect.stringMatching(/Missing or invalid Spotify credentials/),
    );
  });

  test('With refresh token and invalid profile', async () => {
    process.argv = ['', '', 'library'];
    configSpy.mockReturnValueOnce(`[test]
      spt_client_id=a02b6c2ef3e7
      spt_client_secret=4e11b25b6f
      spt_refresh_token=AQChZXEeZs0r8wNdLaQmCxtORFIh5j4`);
    await cli.run();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      expect.stringMatching(/Profile "default" does not exist/),
    );
  });
});
