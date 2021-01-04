import { Injectable } from '@angular/core';

import { BaseStorage } from '../model/base.storage.model';
import { DefaultCacheStorage } from './storage/cache-storage.service';
import { InternalStorageService } from './storage/internal-storage.service';

@Injectable()
export class StorageFacadeService<T> implements BaseStorage<T> {
  private readonly cache = new DefaultCacheStorage<T>();

  constructor(private internalStorageService: InternalStorageService<T>) {}

  has(key: string): boolean {
    return this.cache.has(key) || this.internalStorageService.has(key);
  }

  getItem(key: string): T {
    let cacheValue = this.cache.getItem(key);
    if (!cacheValue) {
      const value = this.internalStorageService.getItem(key);
      if (value) {
        this.cache.setItem(key, value);
      }
      cacheValue = this.cache.getItem(key);
    }
    return cacheValue;
  }

  setItem(key: string, data: T): void {
    this.cache.setItem(key, data);
    this.internalStorageService.setItem(key, data);
  }

  clear(): void {
    this.cache.clear();
    this.internalStorageService.clear();
  }

  removeItem(key?: string): void {
    this.cache.removeItem(key);
    this.internalStorageService.removeItem(key);
  }
}
