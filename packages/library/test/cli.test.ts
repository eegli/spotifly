import * as cli from '../src/cli';

const consoleSpy = jest.spyOn(global.console, 'info');

const executeSpy = jest.spyOn(cli, 'execute').mockImplementation(jest.fn());

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CLI', () => {
  it('displays welcome dialog', async () => {
    process.argv = ['', ''];
    await cli.cli();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/@spotifly\/library v\d.\d.\d/g)
    );
    expect(executeSpy).not.toHaveBeenCalled();
  });
  it('calls main function', async () => {
    process.argv = ['', '', 'xyz'];
    await cli.cli();
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalledTimes(1);
  });
});
