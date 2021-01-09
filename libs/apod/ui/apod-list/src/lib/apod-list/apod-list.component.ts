import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Apod } from '@pad/apod/data-access/apod-list';

@Component({
  selector: 'pad-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodListComponent {
  @Input() list: Apod[];
  @Output() select = new EventEmitter<Apod>();

  onSelectApod(item: Apod): void {
    this.select.emit(item);
  }
}
