import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apod } from '../model/apod.model';
import { ApodService } from '../services/apod.service';
import { ApodStateService } from '../state/apod-state.service';

@Injectable({ providedIn: 'root' })
export class ApodFacadeService {
  get list$(): Observable<Apod[]> {
    return this.apodStateService.list$;
  }

  get hasItems(): boolean {
    return !!this.apodStateService.list.length;
  }

  constructor(private apodService: ApodService, private apodStateService: ApodStateService) {}

  getAll(endDate: Date, numberOfDays: number): void {
    this.apodService
      .getApodList(endDate, numberOfDays)
      .pipe(tap((list) => this.apodStateService.setApodList(list)))
      .subscribe();
  }
}
