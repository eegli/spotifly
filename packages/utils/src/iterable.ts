/**
 * Splits an iterable into chunks of a specified size
 *
 * @param {Array<T>|Set<T>} obj - An iterable object
 * @param {number} chunkSize - A optional string param
 * @return {T[][]} The chunked iterable as an array
 *
 */
export function chunkify<T>(obj: T[] | Set<T>, chunkSize: number): T[][] {
  if (chunkSize < 1)
    throw new TypeError('Chunk size must be strictly positive');
  const len = Array.isArray(obj) ? obj.length : obj.size;
  const chunks = [];
  for (let i = 0; i < len; i += chunkSize) {
    chunks.push([...obj].slice(i, i + chunkSize));
  }
  return chunks;
}
