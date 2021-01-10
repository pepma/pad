import { HttpRequest, HttpResponse } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { mockProperty } from '@test/test-utils';
import { Observable, of } from 'rxjs';
import { RequestHandlerMockApiService } from '../service/request-handler-mockapi.service';
import { ACTIVE_TOKEN } from '../token/mock-active.token';
import { MockApiInterceptor } from './mock-api.interceptor';

describe('MockApiInterceptorService', () => {
  let spectator: SpectatorService<MockApiInterceptor>;
  let activeMock = false;
  const createService = createServiceFactory({
    service: MockApiInterceptor,
    mocks: [RequestHandlerMockApiService],
    providers: [
      { provide: ACTIVE_TOKEN, useValue: of(activeMock) }
    ],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should interceptor httprequest without mock facade', () => {
    const request = new HttpRequest('GET', 'http://10.0.0.1/test/1');
    const handler = {
      handle(): Observable<HttpResponse<unknown>> {
        return of(new HttpResponse({ status: 200, body: 'handle' }));
      },
    };
    spectator.service.intercept(request, handler).subscribe((data: HttpResponse<unknown>) => {
      expect(data.body).toEqual('handle');
    });
  });

  it('should interceptor httprequest with mock facade', () => {
    const requestHandlerMockApiService = spectator.inject(RequestHandlerMockApiService);
    activeMock = true;
    const request = new HttpRequest('GET', 'http://10.0.0.1/test/1');
    mockProperty(window, 'location', { href: 'http://10.0.0.1/test/1?mock=true' } as Location);
    spectator.service.intercept(request, null).subscribe(() => {
      expect(requestHandlerMockApiService.handle).toHaveBeenCalled();
    });
  });
});
