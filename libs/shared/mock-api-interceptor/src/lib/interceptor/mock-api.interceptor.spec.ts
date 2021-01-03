import { HttpRequest, HttpResponse } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Observable, of } from 'rxjs';
import { mockProperty } from '@test/utils-test';

import { MockApiFacadeService } from '../service/mockapi-facade.service';
import { MockApiInterceptor } from './mock-api.interceptor';

describe('MockApiInterceptorService', () => {
  let spectator: SpectatorService<MockApiInterceptor>;
  const createService = createServiceFactory({
    service: MockApiInterceptor,
    mocks: [MockApiFacadeService],
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
    const mockApiFacadeService = spectator.inject(MockApiFacadeService);
    mockApiFacadeService.handle.andReturn(of());
    mockProperty(mockApiFacadeService,'isActive', true);
    const request = new HttpRequest('GET', 'http://10.0.0.1/test/1');
    mockProperty(window, 'location', { href: 'http://10.0.0.1/test/1?mock=true' } as Location);
    spectator.service.intercept(request, null).subscribe(() => {
      expect(mockApiFacadeService.handle).toHaveBeenCalled();
    });
  });
});
