import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StorageFacadeService } from '@pad/shared/storage';
import { of } from 'rxjs';
import { TagsStateService } from './tags-state.service';

describe('TagsStateService', () => {
  let spectator: SpectatorService<TagsStateService>;
  const createService = createServiceFactory({
    service: TagsStateService,
    mocks: [StorageFacadeService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });
  it('should get [] when storage is null', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(of(null));
    const observerSpy = subscribeSpyTo(spectator.service.getTags());
    expect(observerSpy.getLastValue()).toEqual([]);
  });

  it('should get array when get item from storage', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(of(['1']));
    const observerSpy = subscribeSpyTo(spectator.service.getTags());
    expect(observerSpy.getLastValue()).toEqual(['1']);
  });

  it('should set tag', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(of(null));
    spectator.service.setTag('item1');
    expect(storageFacadeService.setItem).toHaveBeenCalledWith('pad_mockTags',['item1']);
  });

  it('should remove tag', () => {
    const storageFacadeService = spectator.inject(StorageFacadeService);
    storageFacadeService.getItem.andReturn(of(['item1','item2']));
    spectator.service.removeTag('item1');
    expect(storageFacadeService.setItem).toHaveBeenCalledWith('pad_mockTags',['item2']);
  });
});
