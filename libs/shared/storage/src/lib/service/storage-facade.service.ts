import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DefaultCacheStorage } from './storage/cache-storage.service';
import { InternalStorageService } from './storage/internal-storage.service';

@Injectable()
export class StorageFacadeService<T> {
  private readonly cache = new DefaultCacheStorage<T>();

  constructor(private internalStorageService: InternalStorageService<T>) {}

  has(key: string): Observable<boolean> {
    const valueCached = this.cache.has(key);
    if (valueCached) {
      return of(valueCached);
    } else {
      return this.internalStorageService.has(key);
    }
  }

  getItem(key: string): Observable<T> {
    const cacheValue = this.cache.getItem(key);
    if (!cacheValue) {
      return this.internalStorageService.getItem(key).pipe(
        tap((value) => {
          if (value) {
            this.cache.setItem(key, value);
          }
        })
      );
    }
    return of(cacheValue);
  }

  setItem(key: string, data: T): Observable<void> {
    this.cache.setItem(key, data);
    return this.internalStorageService.setItem(key, data);
  }

  clear(): Observable<void> {
    this.cache.clear();
    return this.internalStorageService.clear();
  }

  removeItem(key?: string): Observable<void> {
    this.cache.removeItem(key);
    return this.internalStorageService.removeItem(key);
  }
}
