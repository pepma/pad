import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestHandlerMockApiService } from '../service/request-handler-mockapi.service';
import { ACTIVE_TOKEN } from '../token/mock-active.token';

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  constructor(
    private requestHandlerMockApiService: RequestHandlerMockApiService,
    @Inject(ACTIVE_TOKEN) private isActiveByToken$: Observable<boolean>
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return this.isActiveByToken$.pipe(
      // local path => skip
      tap((isActiveByToken) => {
        if (!/^http/i.test(req.url) || !isActiveByToken) {
          return next.handle(req);
        } else {
          return this.requestHandlerMockApiService.handle(req, next);
        }
      })
    );
  }
}
