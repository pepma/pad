import { Injectable } from '@angular/core';

import { BaseStorage } from '../model/base.storage.model';

@Injectable()
export class DefaultCacheStorage<T> implements BaseStorage<T> {
  private cache = new Map<string, T>();

  has(key: string): boolean {
    return this.cache.has(key);
  }

  getItem(key: string): T {
    return this.cache.get(key);
  }

  setItem(key: string, data: T): void {
    this.cache.set(key, data);
  }

  clear(): void {
    this.cache.clear();
  }

  removeItem(key: string): void {
    this.cache.delete(key as string);
  }
}
