import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Apod } from '@pad/apod/data-access/apod-list';

import { ApodCardType } from './model/apod-card.model';

@Component({
  selector: 'pad-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodCardComponent {
  @Input() info: Apod;
  @Input() mode: ApodCardType = ApodCardType.PREVIEW;
  @Output() select = new EventEmitter<Apod>();

  get isPreviewMode(): boolean {
    return this.mode === ApodCardType.PREVIEW;
  }

  clickDetail(): void {
    this.select.emit(this.info);
  }
}
