import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockApiFacadeService } from '../service/mockapi-facade.service';
import { ACTIVE_TOKEN } from '../token/mock-active.token';

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  constructor(
    private mockApiFacadeService: MockApiFacadeService,
    @Inject(ACTIVE_TOKEN) private isActiveByToken: boolean
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // local path => skip
    if (!/^http/i.test(req.url) || !this.isActiveByToken) {
      return next.handle(req);
    } else {
      return this.mockApiFacadeService.handle(req, next);
    }
  }
}
