import { Observable, of } from 'rxjs';
import { BaseStorage } from '../../../model/base.storage.model';

/* eslint-disable @typescript-eslint/no-unused-vars */
export class StorageTypeObservableStub implements BaseStorage<string> {
  has(key: string): Observable<boolean> {
    return of(true);
  }
  getItem(key: string): Observable<string> {
    return of(key);
  }
  clear(): Observable<void> {
    return of(null);
  }
  setItem(_key: string, _data: string): void | Observable<void> {
    return of(null);
  }
  removeItem(_key?: string | RegExp): void | Observable<void> {
    return of(null);
  }
}
