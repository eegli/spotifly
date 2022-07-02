import cliProgress from 'cli-progress';

export const createProgressBar = (items: string) =>
  new cliProgress.SingleBar({
    format:
      `Fetching ${items}\t |` +
      '{bar} {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u25A0',
    barIncompleteChar: ' ',
    hideCursor: true,
  });
