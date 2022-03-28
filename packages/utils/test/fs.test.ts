import fs from 'fs-extra';
import { WriteJSONOptions } from '../src/fs';
import { writeJSON } from '../src/index';

jest.mock('fs-extra');
const mockFS = fs as jest.Mocked<typeof fs>;

jest.spyOn(process, 'cwd').mockImplementation(() => '/usr/dir');

const JSONspy = jest.spyOn(JSON, 'stringify');

beforeEach(() => {
  jest.clearAllMocks();
});

const data = {
  foo: 'bar',
  nested: {
    baz: 'lolilol',
  },
};

describe('FS, writeJSON', () => {
  const writeParams: WriteJSONOptions[] = [
    { path: '', fileName: 'test', data },
    { path: 'tmp', fileName: 'test', data },
    { path: 'tmp/dir', fileName: 'test.json', data },
    { path: '/tmp/dir', fileName: 'test.json', data },
    { path: '../dir', fileName: 'test.json', data },
  ];
  writeParams.forEach((args, idx) => {
    it(`writes data, ${idx}`, async () => {
      const path = await writeJSON(args);
      expect(mockFS.outputFile).toHaveBeenCalledTimes(1);
      expect(JSONspy).toHaveBeenCalledWith(data, null, 2);
      const cleanPath = path.replace(/\\|\//gi, '/');
      expect(cleanPath).toMatchSnapshot(`file ${idx}`);
    });
  });

  it('has compact option', async () => {
    await writeJSON({
      path: '',
      fileName: 'test',
      data,
      compact: true,
    });
    expect(JSONspy).toHaveBeenCalledWith(data);
  });
});
