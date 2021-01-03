import { InjectionToken } from '@angular/core';

import { BaseApiMockApiService } from '../model/base-mockapi.service';

export const MOCK_API_TOKEN = new InjectionToken<BaseApiMockApiService>('@lib/mock-api');
