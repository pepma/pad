import { Inject, Injectable } from '@angular/core';

import { BaseStorage } from '../model/base.storage.model';
import { StrategyStorage } from '../model/strategy-storage.model';
import { STRATEGY_STORAGE_TOKEN } from '../token/strategy-storage.token';
import { DefaultCacheStorage } from './cache-storage.service';
import { CoreStorage } from './core-storage';

@Injectable()
export class StorageService<T> implements BaseStorage<T> {
  private readonly cache = new DefaultCacheStorage<T>();
  private readonly storageKey: string;

  constructor(@Inject(STRATEGY_STORAGE_TOKEN) strategy: StrategyStorage, private currentStorage: CoreStorage<T>) {
    this.storageKey = strategy.storageKey;
  }

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
    this.currentStorage.setItem(this.storageKey, data);
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
