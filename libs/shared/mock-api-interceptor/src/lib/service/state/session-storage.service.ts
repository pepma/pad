import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  constructor(){}
  set<T>(data: T): void {
    window.sessionStorage.setItem(this.PAD_ENABLE_KEY, String(value));
  }
}
