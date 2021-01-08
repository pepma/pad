import { Injectable } from '@angular/core';
import { StorageFacadeService } from '@pad/shared/storage';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockActiveService {
  private PAD_ENABLE_KEY = 'pad_mockEnabled';

  constructor(private storage: StorageFacadeService<boolean>) {
    window.enableMockApi = (value): void => {
      this.enable(value);
    };
  }

  get isEnabled$(): Observable<boolean> {
    return this.storage.getItem(this.PAD_ENABLE_KEY);
  }

  enable(value: boolean): void {
    this.storage.setItem(this.PAD_ENABLE_KEY, value);
  }
}
