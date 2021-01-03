import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestHandlerMockApiService } from './request-handler-mockapi.service';

@Injectable({ providedIn: 'root' })
export class MockApiFacadeService {
  constructor(private requestHandlerMockApiService: RequestHandlerMockApiService) {}

  handle(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.requestHandlerMockApiService.handle(req, next);
  }
}
