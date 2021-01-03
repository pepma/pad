import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockActiveService {
  private PAD_ENABLE_KEY = 'pad_enabled';

  constructor() {
    window.enableMockApi = (value): void => {
      this.enable(value);
    };
  }

  isEnabled(): boolean {
    return Boolean(sessionStorage.getItem(this.PAD_ENABLE_KEY));
  }

  enable(value: boolean): void {
    window.sessionStorage.setItem(this.PAD_ENABLE_KEY, String(value));
  }
}
