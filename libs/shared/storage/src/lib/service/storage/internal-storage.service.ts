import { Inject, Injectable } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseStorage } from '../../model/base.storage.model';
import { StrategyStorage } from '../../model/strategy-storage.model';
import { STRATEGY_STORAGE_TOKEN } from '../../token/strategy-storage.token';

@Injectable()
export class InternalStorageService<T> implements BaseStorage<T> {
  private storage: BaseStorage<string> | Storage;

  constructor(@Inject(STRATEGY_STORAGE_TOKEN) strategy: StrategyStorage<string>) {
    this.storage = strategy.type;
  }

  has(key: string): Observable<boolean> {
    if (this.storage.has) {
      const hasStoraged = this.storage.has(key) as Observable<boolean> | boolean;
      if (isObservable(hasStoraged)) {
        return hasStoraged;
      } else {
        return of(hasStoraged);
      }
    } else {
      return this.getItem(key).pipe(map((value) => !!value));
    }
  }

  getItem(key: string): Observable<T> {
    const itemStoraged = this.storage.getItem(key);
    if (isObservable(itemStoraged)) {
      return itemStoraged.pipe(map((value) => JSON.parse(value)));
    } else {
      return of(JSON.parse(this.storage.getItem(key) as string));
    }
  }

  setItem(key: string, data: T): Observable<void> {
    const itemSetted = this.storage.setItem(key, JSON.stringify(data));
    if (isObservable(itemSetted)) {
      return itemSetted;
    } else {
      return of(null);
    }
  }

  clear(): Observable<void> {
    const clearSetted = this.storage.clear();
    if (isObservable(clearSetted)) {
      return clearSetted;
    } else {
      return of(null);
    }
  }

  removeItem(key?: string): Observable<void> {
    const itemRemoved = this.storage.removeItem(key);
    if (isObservable(itemRemoved)) {
      return itemRemoved;
    } else {
      return of(null);
    }
  }
}
