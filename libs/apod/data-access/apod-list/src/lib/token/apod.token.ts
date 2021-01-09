import { InjectionToken } from '@angular/core';
import { APODConfig } from '../model/apod.model';

export const APOD_CONFIG_TOKEN = new InjectionToken<APODConfig>('@lib/APOD config token');
