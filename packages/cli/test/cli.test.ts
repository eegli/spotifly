const mockHelp = jest.fn();
const mockCallback = jest.fn();

const mockPkg: cli.Invoke = {
  callback: mockCallback,
  help: mockHelp,
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
      expect(mockCallback).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /(Spotifly|@spotifly\/cli) v\d.\d.\d/g
      );
    });
  });

  [
    ['', '', 'auth-token'],
    ['', '', 'library'],
  ].forEach(processArgs => {
    test('Delegated command (help): ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockCallback).not.toHaveBeenCalled();
      expect(mockHelp).toHaveBeenCalledTimes(1);
      expect(mockHelp).toHaveBeenCalledWith('Command-line usage');
    });
  });

  [
    ['', '', 'auth-token', 'arg', 's'],
    ['', '', 'library', 'arg'],
  ].forEach(processArgs => {
    test('Delegated command (callback): ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(processArgs);
      expect(mockHelp).not.toHaveBeenCalled();
    });
  });

  [
    ['', '', 'x'],
    ['', '', '', 'y'],
  ].forEach(processArgs => {
    test('Ignored command ' + processArgs[2], async () => {
      process.argv = processArgs;
      await cli.run();
      expect(mockCallback).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy.mock.calls[0][0]).toMatch(
        /Unknown argument .*[\s\S]Run 'spotifly --help' for available commands/s
      );
    });
  });
});
