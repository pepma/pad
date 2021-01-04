import { Inject, Injectable } from '@angular/core';

import { BaseStorage } from '../../model/base.storage.model';
import { StrategyStorage } from '../../model/strategy-storage.model';
import { STRATEGY_STORAGE_TOKEN } from '../../token/strategy-storage.token';

@Injectable()
export class InternalStorageService<T> implements BaseStorage<T> {
  private storage: Storage;

  constructor(@Inject(STRATEGY_STORAGE_TOKEN) strategy: StrategyStorage) {
    this.storage = strategy.type;
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  getItem(key: string): T {
    return JSON.parse(this.storage.getItem(key));
  }

  setItem(key: string, data: T): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  clear(): void {
    this.storage.clear();
  }

  removeItem(key?: string): void {
    this.storage.removeItem(key);
  }
}
