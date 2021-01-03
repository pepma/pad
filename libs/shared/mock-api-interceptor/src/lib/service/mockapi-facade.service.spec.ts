import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { mockProperty } from '@test/utils-test';

import { MOCK_ACTIVE_TOKEN } from '../moc-ative.token';
import { MockApiFacadeService } from './mockapi-facade.service';
import { RequestHandlerMockApiService } from './request-handler-mockapi.service';


describe('MockApiFacadeService', () => {
  let spectator: SpectatorService<MockApiFacadeService>;

  const createService = createServiceFactory({
    service: MockApiFacadeService,
    providers: [{ provide: MOCK_ACTIVE_TOKEN, useValue: false }],
    mocks: [RequestHandlerMockApiService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('call handle', () => {
    const requestHandlerMockApiService = spectator.inject(RequestHandlerMockApiService);
    spectator.service.handle(null, null);
    expect(requestHandlerMockApiService.handle).toHaveBeenCalled();
  });

  it('is Active when mock has in url params', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockProperty(window, 'location', { href: 'http://test?mock=true' } as any);
    const isActive = spectator.service.isActive;
    expect(isActive).toEqual(true);
  });

});
