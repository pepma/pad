import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apod, ApodFacadeService } from '@pad/apod/data-access/apod-list';

@Component({
  selector: 'pad-apod-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent implements OnInit {
  daysToShow: number;
  constructor(private apodFacadeService: ApodFacadeService, private router: Router) {
    this.daysToShow = 5;
  }

  ngOnInit(): void {
    this.apodFacadeService.getAll(new Date(), 6);
  }

  onSelectApod(item: Apod): void {
    this.router.navigate([`apod/${item.date}`]);
  }
}
