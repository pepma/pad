import { Injectable } from '@angular/core';

import { BaseStorage } from '../model/base.storage.model';
import { DefaultCacheStorage } from './cache-storage.service';
import { CoreStorage } from './core-storage';

@Injectable()
export class StorageService<T> implements BaseStorage<T> {
  private readonly cache = new DefaultCacheStorage<T>();

  constructor(private currentStorage: CoreStorage<T>) {}

  has(key: string): boolean {
    return this.cache.has(key) || this.currentStorage.has(key);
  }

  getItem(key: string): T {
    const cacheValue = this.cache.getItem(key);
    if (cacheValue) {
      return cacheValue;
    }

    const value = this.currentStorage.getItem(key);
    if (value) {
      this.cache.setItem(key, value);
    }

    return this.cache.getItem(key);
  }

  setItem(key: string, data: T): void {
    this.cache.setItem(key, data);
    this.currentStorage.setItem(key, data);
  }

  clear(): void {
    this.cache.clear();
    this.currentStorage.clear();
  }

  removeItem(key?: string): void {
    this.cache.removeItem(key);
    this.currentStorage.removeItem(key);
  }
}
