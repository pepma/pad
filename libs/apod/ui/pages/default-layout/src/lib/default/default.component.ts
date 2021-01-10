import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventType } from '@pad/apod/core';
import { Apod, ApodFacadeService } from '@pad/apod/data-access/apod-list';
import { EventBusService } from '@pad/shared/core/bus';

@Component({
  selector: 'pad-apod-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent implements OnInit {
  daysToShow: number;
  constructor(
    private apodFacadeService: ApodFacadeService,
    private router: Router,
    private eventBusService: EventBusService
  ) {
    this.daysToShow = 5;
  }

  ngOnInit(): void {
    this.apodFacadeService.getAll(new Date(), 6);

    this.eventBusService.on(EventType.CLOSE_DETAIL, () => this.router.navigate(['/']));
    this.eventBusService.on(EventType.SELECTED_ITEM, (item: Apod) => this.router.navigate([`${item.date}`]));
  }
}
