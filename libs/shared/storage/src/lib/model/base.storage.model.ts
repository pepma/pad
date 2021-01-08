import { Observable } from 'rxjs';

export interface BaseStorage<T> {
  has?(key: string): Observable<boolean> | boolean;
  getItem(key: string): Observable<T> | T;
  clear(): Observable<void> | void;
  setItem(key: string, data: T): Observable<void> | void;
  removeItem(key?: string | RegExp): Observable<void> | void;
}
