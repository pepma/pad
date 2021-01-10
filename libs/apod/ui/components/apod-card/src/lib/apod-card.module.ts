import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { ApodDetailComponent } from './apod-detail/apod-detail.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatDividerModule],
  exports: [ApodDetailComponent],
  declarations: [ApodDetailComponent],
})
export class ApodCardModule {}
