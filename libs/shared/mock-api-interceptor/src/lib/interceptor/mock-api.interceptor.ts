import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestHandlerMockApiService } from '../service/request-handler-mockapi.service';
import { ACTIVE_TOKEN } from '../token/mock-active.token';

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  constructor(
    private requestHandlerMockApiService: RequestHandlerMockApiService,
    @Inject(ACTIVE_TOKEN) private isActiveByToken: boolean
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    // local path => skip
    if (!/^http/i.test(req.url) || !this.isActiveByToken) {
      return next.handle(req);
    } else {
      return this.requestHandlerMockApiService.handle(req, next);
    }
  }
}
