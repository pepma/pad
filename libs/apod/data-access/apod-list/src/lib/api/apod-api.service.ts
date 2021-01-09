import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApodDTO, APODConfig } from '../model/apod.model';
import { APOD_CONFIG_TOKEN } from '../token/apod.token';

@Injectable({ providedIn: 'root' })
export class ApodApiService {
  constructor(private httpClient: HttpClient, @Inject(APOD_CONFIG_TOKEN) private config: APODConfig) {}

  getApod(day: string): Observable<ApodDTO> {
    return this.httpClient.get(`${this.config.url}?api_key=${this.config.apiKey}&date=${day}`);
  }
}
