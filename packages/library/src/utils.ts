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
export const isBeforeDate = (
  date1: string | Date,
  date2: string | Date,
): boolean => {
  const d1 = date1 instanceof Date ? date1.getTime() : Date.parse(date1);
  const d2 = date2 instanceof Date ? date2.getTime() : Date.parse(date2);
  if (isNaN(d1) || isNaN(d2)) {
    return false;
  }
  return d1 < d2;
};
