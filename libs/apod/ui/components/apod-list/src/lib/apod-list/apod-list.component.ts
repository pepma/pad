import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventType } from '@pad/apod/core';
import { Apod, ApodFacadeService } from '@pad/apod/data-access/apod-list';
import { EventBusService } from '@pad/shared/core/bus';
import { Observable } from 'rxjs';
@Component({
  selector: 'pad-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodListComponent {
  list$: Observable<Apod[]>;

  constructor(apodFacadeService: ApodFacadeService, private eventBusService: EventBusService) {
    this.list$ = apodFacadeService.list$;
  }

  onSelectApod(item: Apod): void {
    this.eventBusService.emit(EventType.SELECTED_ITEM, item);
  }
}
