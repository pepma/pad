import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Apod, ApodFacadeService } from '@pad/apod/data-access/apod-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'pad-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodListComponent {
  list$: Observable<Apod[]>;
  @Output() select = new EventEmitter<Apod>();

  constructor(apodFacadeService: ApodFacadeService) {
    this.list$ = apodFacadeService.list$;
  }

  onSelectApod(item: Apod): void {
    this.select.emit(item);
  }
}
