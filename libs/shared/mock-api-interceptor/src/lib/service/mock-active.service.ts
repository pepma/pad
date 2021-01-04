import { Injectable } from '@angular/core';
import { CoreStorage } from '@pad/shared/storage';

@Injectable({ providedIn: 'root' })
export class MockActiveService {
  private PAD_ENABLE_KEY = 'pad_mockEnabled';

  constructor(private storage: CoreStorage<boolean>) {
    window.enableMockApi = (value): void => {
      this.enable(value);
    };
  }

  get isEnabled(): boolean {
    return this.storage.getItem(this.PAD_ENABLE_KEY);
  }

  enable(value: boolean): void {
    this.storage.setItem(this.PAD_ENABLE_KEY, value);
  }
}
