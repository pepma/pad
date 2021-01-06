import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { of } from 'rxjs';

import { TagsStateService } from '../state/tags-state.service';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  let spectator: SpectatorService<TagsService>;
  const createService = createServiceFactory({
    service: TagsService,
    mocks: [TagsStateService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should add tag ', () => {
    const tagsStateService = spectator.inject(TagsStateService);
    window.addTag('tag1');
    expect(tagsStateService.setTag).toHaveBeenCalled();
  });

  it('should remove tag ', () => {
    const tagsStateService = spectator.inject(TagsStateService);
    window.addTag('tag1');
    window.removeTag('tag1');
    expect(tagsStateService.removeTag).toHaveBeenCalled();
  });

  it('should has tag ', () => {
    const tagsStateService = spectator.inject(TagsStateService);
    tagsStateService.getTags.andReturn(of([]));
    spectator.service.has('tag1');
    expect(tagsStateService.getTags).toHaveBeenCalled();
    spectator.service.list$.subscribe((list)=>expect(list).toEqual([]));
  });

});
