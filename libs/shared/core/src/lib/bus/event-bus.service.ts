import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData } from './model/event-bus.model';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private _event$ = new Subject<EventData<unknown>>();

  emit<T>(message: string, value?: T): void {
    this._event$.next({ messageName: message, value: value });
  }

  on(eventName: string, action: (params?: unknown) => void): Subscription {
    return this._event$
      .pipe(
        filter((e) => e.messageName === eventName),
        map((e) => e.value)
      )
      .subscribe(action);
  }
}
