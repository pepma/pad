import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseApiMockApiService } from '../model/base-mockapi.service';
import { MOCK_API_TOKEN } from '../token/mock-api.token';
import { EndpointMockApi } from '../model/mockapi.model';

@Injectable()
export class RequestHandlerMockApiService {
  private list: EndpointMockApi[] = [];

  constructor(private injector: Injector) {
    this.list = this.injector
      .get<BaseApiMockApiService[]>(MOCK_API_TOKEN)
      .reduce((acc: EndpointMockApi[], item) => acc.concat(item.list), []);
  }

  handle<T>(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpResponse<unknown> | HttpEvent<unknown>> {
    const requestPath = new URL(req.url).pathname;
    const currentHandle = this.getHandlerItem(requestPath, req.method);
    const regexp = new RegExp(this.list[0].pattern);
    const result = regexp.exec(req.url);
    const groups = result?.groups;

    if (currentHandle && currentHandle.handle && currentHandle.isActive) {
      return currentHandle.handle(req, groups).pipe(
        tap((response) => console.log('response', req.url, response)),
        map((response: T) => new HttpResponse({ status: 200, body: response }))
      );
    } else {
      return next.handle(req);
    }
  }

  private getHandlerItem(path: string, method: string): EndpointMockApi {
    return this.list.find((f) => {
      return f.pattern.test(path) && f.method === method;
    });
  }
}
