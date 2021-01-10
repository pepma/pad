import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APODConfig, ApodDTO } from '../model/apod.model';
import { APOD_CONFIG_TOKEN } from '../token/apod.token';
import { ApodDTOAdapter } from './adapter/adapters/apod-dto.adapter';


@Injectable({ providedIn: 'root' })
export class ApodApiService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APOD_CONFIG_TOKEN) private config: APODConfig,
    private apodDTOAdapter: ApodDTOAdapter
  ) {}

  getApod(day: string): Observable<ApodDTO> {
    return this.httpClient
      .get(`${this.config.url}?api_key=${this.config.apiKey}&date=${day}`)
      .pipe(map(this.apodDTOAdapter.adapt));
  }
}
