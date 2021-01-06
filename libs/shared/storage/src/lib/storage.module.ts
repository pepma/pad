import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BaseStorage } from './model/base.storage.model';
import { StorageFacadeService } from './service/storage-facade.service';
import { DefaultCacheStorage } from './service/storage/cache-storage.service';
import { InternalStorageService } from './service/storage/internal-storage.service';
import { STRATEGY_STORAGE_TOKEN } from './token/strategy-storage.token';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
})
export class StorageModule {
  static forChild<T>(storage?: Storage | BaseStorage<T>): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        InternalStorageService,
        DefaultCacheStorage,
        StorageFacadeService,
        {
          provide: STRATEGY_STORAGE_TOKEN,
          multi: true,
          useValue: {
            type: storage || window.sessionStorage,
          },
        },
      ],
    };
  }
}
