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
    ['', '', 'auth'],
    ['', '', 'library'],
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
      expect(mockPkg.callback).toHaveBeenCalledWith(processArgs);
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
});
