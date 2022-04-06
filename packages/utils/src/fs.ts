import fs from 'fs-extra';
import { join } from 'path';

export type WriteJSONOptions = {
  path: string;
  fileName: string;
  data: unknown;
  compact?: boolean;
};

export const writeJSON = async ({
  path,
  fileName,
  data,
  compact = false,
}: WriteJSONOptions): Promise<string> => {
  if (!fileName.endsWith('.json')) {
    fileName += '.json';
  }
  path = join(process.cwd(), path);
  data = compact ? JSON.stringify(data) : JSON.stringify(data, null, 2);

  await fs.outputFile(join(path, fileName), data);
  return path;
};
