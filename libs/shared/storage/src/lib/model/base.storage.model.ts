export interface BaseStorage<T> {
  has(key: string): boolean;
  getItem(key: string): T;
  clear(): void;
  setItem(key: string, data: unknown): void;
  removeItem(key?: string | RegExp): void;
}
