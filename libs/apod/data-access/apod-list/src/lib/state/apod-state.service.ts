import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apod } from '../model/apod.model';


@Injectable({ providedIn: 'root' })
export class ApodStateService {
  private bsList$ = new BehaviorSubject<Apod[]>([]);

  get list$(): Observable<Apod[]> {
    return this.bsList$.asObservable();
  }
  get list(): Apod[] {
    return this.bsList$.getValue();
  }

  setApodList(data: Apod[]): void {
    this.bsList$.next(data);
  }
}
