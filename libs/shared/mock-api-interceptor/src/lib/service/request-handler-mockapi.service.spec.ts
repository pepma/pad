import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Observable, of } from 'rxjs';

import { BaseApiMockApiService } from '../model/base-mockapi.service';

import { EndpointMockApi } from '../model/mockapi.model';
import { MOCK_API_TOKEN } from '../token/mock-api.token';
import { RequestHandlerMockApiService } from './request-handler-mockapi.service';

export class DummyMockApiService implements BaseApiMockApiService {
  get list(): EndpointMockApi[] {
    return [{ pattern: /test\/\w*$/, method: 'GET', isActive: true, handle: (): Observable<string> => this.getData() }];
  }

  getData(): Observable<string> {
    return of('test OK');
  }
}
describe('RequestHandlerMocService', () => {
  let spectator: SpectatorService<RequestHandlerMockApiService>;
  const createService = createServiceFactory({
    service: RequestHandlerMockApiService,
    mocks: [],
    providers: [{ provide: MOCK_API_TOKEN, useClass: DummyMockApiService, multi: true }],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should handle httpRequest  ', () => {
    const req = new HttpRequest('GET', 'http://10.0.0.1/test/id1212');
    const handler = {
      handle(): Observable<HttpEvent<unknown>> {
        return of();
      },
    };
    spectator.service.handle(req, handler).subscribe((data: HttpResponse<unknown>) => {
      expect(data.body).toEqual('test OK');
    });
  });

  it('should handle httpRequest and not exist pattern', () => {
    const request = new HttpRequest('GET', 'http://10.0.0.1/test/1/2/');
    const handler = {
      handle(): Observable<HttpResponse<unknown>> {
        return of(new HttpResponse({ status: 200, body: 'handle' }));
      },
    };
    spectator.service.handle(request, handler).subscribe((data: HttpResponse<unknown>) => {
      expect(data.body).toEqual('handle');
    });
  });
});
