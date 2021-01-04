import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BaseStorage } from './model/base.storage.model';
import { DefaultCacheStorage } from './service/cache-storage.service';
import { CoreStorage } from './service/core-storage';
import { StorageService } from './service/storage.service';
import { STRATEGY_STORAGE_TOKEN } from './token/strategy-storage.token';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
})
export class StorageModule {
  static forChild(storage?: Storage | BaseStorage<unknown>): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        CoreStorage,
        DefaultCacheStorage,
        StorageService,
        {
          provide: STRATEGY_STORAGE_TOKEN,
          multi: true,
          useValue: {
            type: storage && window.sessionStorage
          },
        },
      ],
    };
  }
}
