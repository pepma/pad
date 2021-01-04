import { inject, InjectionToken } from '@angular/core';

import { MockActiveService } from '../service/mock-active.service';

export const ACTIVE_TOKEN = new InjectionToken<boolean>('@mock-api/active-token', {
  factory(): boolean {
    return inject(MockActiveService).isEnabled;
  },
});
