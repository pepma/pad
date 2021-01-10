import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { ApodCardComponent } from './apod-card/apod-card.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatDividerModule],
  exports: [ApodCardComponent],
  declarations: [ApodCardComponent],
})
export class ApodCardModule {}
