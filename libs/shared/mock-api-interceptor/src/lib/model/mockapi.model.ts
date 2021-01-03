import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EndpointMockApi {
  pattern: RegExp;
  method: 'POST' | 'GET' | 'PUT';
  isActive: boolean;
  handle: (req: HttpRequest<unknown>, groups?: HashMapMockPattern) => Observable<unknown>;
}

export interface HashMapMockPattern {
  [key: string]: string;
}

declare global {
  export interface Window {
    removeError(error: string): void;
    addError(error: string): void;
    listErrors: string[];
    enableMockApi(value: boolean): void;
  }
}
