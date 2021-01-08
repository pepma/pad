import { inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { MockActiveService } from '../service/mock-active.service';

export const ACTIVE_TOKEN = new InjectionToken<Observable<boolean>>('@mock-api/active-token', {
  factory(): Observable<boolean> {
    return inject(MockActiveService).isEnabled$;
  },
});
