import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Apod } from '../../../model/apod.model';

import { ApodDTOAdapter } from './apod-dto.adapter';

describe('ApodDTOAdapter', () => {
  let spectator: SpectatorService<ApodDTOAdapter>;
  const createService = createServiceFactory({
    service: ApodDTOAdapter,
    mocks: [],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('convert to model', () => {
    const data: Apod = spectator.service.adapt({
      media_type: 'media'
    });
    expect(data.mediaType).toEqual('media');
  });
});
