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

/**
 * Checks if the first date as a string is before another date
 */
export const isBeforeDate = (date1: string, date2: string): boolean => {
  const d1 = Date.parse(date1);
  const d2 = Date.parse(date2);
  if (isNaN(d1) || isNaN(d2)) {
    return false;
  }
  return d1 < d2;
};
