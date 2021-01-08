import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StorageFacadeService } from './storage-facade.service';
import { InternalStorageService } from './storage/internal-storage.service';

describe('StorageFacadeService', () => {
  let spectator: SpectatorService<StorageFacadeService<unknown>>;
  const createService = createServiceFactory({
    service: StorageFacadeService,
    mocks: [InternalStorageService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });
});
