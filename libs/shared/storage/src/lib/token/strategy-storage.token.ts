import { InjectionToken } from '@angular/core';

import { StrategyStorage } from '../model/strategy-storage.model';

export const STRATEGY_STORAGE_TOKEN = new InjectionToken<StrategyStorage>('@pad-storage/storage-strategy');
