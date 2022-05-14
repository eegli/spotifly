import cliProgress from 'cli-progress';

export function chunkify<T, K>(obj: T[] | Set<T>, chunkSize: number): T[][] {
  const len = Array.isArray(obj) ? obj.length : obj.size;
  const chunks = [];
  for (let i = 0; i < len; i += chunkSize) {
    chunks.push([...obj].slice(i, i + chunkSize));
  }
  return chunks;
}

export const createProgressBar = (items: string) =>
  new cliProgress.SingleBar({
    format:
      `Fetching ${items}\t |` +
      '{bar} {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u25A0',
    barIncompleteChar: ' ',
    hideCursor: true,
  });
