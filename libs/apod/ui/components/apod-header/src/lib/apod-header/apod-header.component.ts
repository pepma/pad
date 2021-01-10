import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pad-apod-header',
  templateUrl: './apod-header.component.html',
  styleUrls: ['./apod-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApodHeaderComponent  {

  daysToShow: number;
  constructor() {
    this.daysToShow = 10;
  }


}
