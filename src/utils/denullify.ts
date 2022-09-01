const isPlainObject = (value: unknown): value is Object =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export type DeNullify<T> = T extends null
  ? undefined
  : T extends { [key: string]: any }
  ? { [K in keyof T]: DeNullify<T[K]> }
  : T;

export const deNullify = <T>(src: T): DeNullify<T> => {
  if (src === null) return undefined as DeNullify<T>;
  if (isPlainObject(src)) {
    const obj = Object.create(null);
    for (const [key, value] of Object.entries(src)) {
      obj[key] = deNullify(value);
    }
    return obj;
  }
  return src;
};
