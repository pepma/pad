import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { STRATEGY_STORAGE_TOKEN } from '../../token/strategy-storage.token';
import { InternalStorageService } from './internal-storage.service';
import { StorageTypeObservableStub } from './stubs/storage-observable.stub';
import { StorageTypeStub } from './stubs/storage.stub';

describe('InternalStorageService', () => {
  const isObservableStub = true;

  const createStub = () => {
    return {
      type: isObservableStub ? new StorageTypeObservableStub() : new StorageTypeStub(),
    };
  };

  let spectator: SpectatorService<InternalStorageService<unknown>>;
  const createService = createServiceFactory({
    service: InternalStorageService,
    mocks: [],
    providers: [{ provide: STRATEGY_STORAGE_TOKEN, useValue: createStub() }],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists ', () => {
    expect(spectator.service).toBeTruthy();
  });

});
