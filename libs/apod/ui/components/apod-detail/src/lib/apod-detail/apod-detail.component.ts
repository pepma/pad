import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apod, ApodFacadeService } from '@pad/apod/data-access/apod-list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pad-apod-detail',
  templateUrl: './apod-detail.component.html',
  styleUrls: ['./apod-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodDetailComponent implements OnInit {
  item$: Observable<Apod>;

  constructor(private activatedRoute: ActivatedRoute, private apodFacadeService: ApodFacadeService) {}

  clickBack(): void {
    //this.router.navigate(['/apod']);
  }

  ngOnInit(): void {
    const dateApod = this.activatedRoute.snapshot.paramMap.get('date');
    this.item$ = this.apodFacadeService.list$.pipe(map((list) => list.find((item) => item.date === dateApod)));
  }
}
