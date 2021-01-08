import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StorageFacadeService } from '@pad/shared/storage';
import { MockActiveService } from './mock-active.service';

describe('MockAtiveService', () => {
  let spectator: SpectatorService<MockActiveService>;
  const createService = createServiceFactory({
    service: MockActiveService,
    mocks: [StorageFacadeService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should isEnabled is true', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(true);
    const isenabled = spectator.service.isEnabled$;
    expect(isenabled).toEqual(true);
  });

  it('should isEnabled is false', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(false);
    const isenabled = spectator.service.isEnabled$;
    expect(isenabled).toEqual(false);
  });

  it('should set enabled when call window.setEnable', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    window.enableMockApi(true);
    expect(storageFacadeService.setItem).toHaveBeenCalled();
  });
});
