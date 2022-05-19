export function chunkify<T>(obj: T[] | Set<T>, chunkSize: number): T[][] {
  const len = Array.isArray(obj) ? obj.length : obj.size;
  const chunks = [];
  for (let i = 0; i < len; i += chunkSize) {
    chunks.push([...obj].slice(i, i + chunkSize));
  }
  return chunks;
}
