import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { CacheStorageService } from './cache-storage.service';

describe('CacheStorageService', () => {
  let spectator: SpectatorService<CacheStorageService<unknown>>;
  const createService = createServiceFactory({
    service: CacheStorageService,
    mocks: [],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('has#', () => {
    expect(spectator.service.has('item1')).toEqual(false);
    spectator.service.setItem('item1', true)
    expect(spectator.service.has('item1')).toEqual(true);
  });

  it('getItem#', () => {
    expect(spectator.service.getItem('item1')).not.toBeTruthy();
    spectator.service.setItem('item1', true)
    expect(spectator.service.getItem('item1')).toBeTruthy();
  });

  it('clear#', () => {
    spectator.service.setItem('item1', true);
    spectator.service.clear();
    expect(spectator.service.getItem('item1')).not.toBeTruthy();
  });

  it('remove#', () => {
    spectator.service.setItem('item1', true);
    spectator.service.removeItem('item1');
    expect(spectator.service.getItem('item1')).not.toBeTruthy();
  });

});
