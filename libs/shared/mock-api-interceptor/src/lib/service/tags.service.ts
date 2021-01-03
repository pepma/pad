import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TagsService {
  get win(): Window {
    return window;
  }

  get listErrors(): string[] {
    if (!this.win.listErrors) {
      this.win.listErrors = [];
    }
    return this.win.listErrors;
  }

  set listErrors(list: string[]) {
    this.win.listErrors = list;
  }
  private constructor() {
    this.win.addError = (error: string): void => this.addError(error);
    this.win.removeError = (error: string): void => this.removeError(error);
  }

  has(errorName: string): boolean {
    return this.listErrors.includes(errorName);
  }

  removeError(errorName: string): void {
    this.listErrors = this.listErrors.filter((f) => f != errorName);
  }

  addError(error: string): void {
    this.listErrors.push(error);
  }
}
