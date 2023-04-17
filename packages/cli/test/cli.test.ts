import { AuthProvider } from '@spotifly/core/provider';
import * as credentialUtils from '../src/credentials';

const mockPkg: cli.Invoke = {
  callback: jest.fn(),
  help: jest.fn(),
  pkg: {
    homepage: '',
    name: '',
    version: '',
  },
};

jest.mock('@spotifly/auth-token/cli', () => mockPkg);
jest.mock('@spotifly/library/cli', () => mockPkg);

import * as cli from '../src/cli';

jest.spyOn(AuthProvider, 'getAccessToken').mockResolvedValue({
  access_token: 'token',
  expires_in: 3600,
  scope: '',
  token_type: 'Bearer',
});

const configSpy = jest
  .spyOn(credentialUtils, 'readConfig')
  .mockReturnValue(null);

const consoleSpy = jest
  .spyOn(global.console, 'info')
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
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /(Spotifly|@spotifly\/cli) v\d.\d.\d/g
      );
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
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /Unknown argument .*[\s\S]Run 'spotifly --help' for available commands/s
      );
    });
  });

  test('With auto-token refresh and default profile', async () => {
    process.argv = ['', '', 'library'];
    configSpy.mockReturnValueOnce(`[default]
      spt_client_id=a02b6c2ef3e7
      spt_client_secret=4e11b25b6f
      spt_refresh_token=AQChZXEeZs0r8wNdLaQmCxtORFIh5j4`);
    await cli.run();
    expect(mockPkg.callback).toHaveBeenCalledWith(['--token', 'token']);
  });

  test('With auto-token refresh and custom profile', async () => {
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
      'token',
    ]);
  });
});
