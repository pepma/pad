import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ApodCardComponent } from './apod-card/apod-card.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule],
  exports: [ApodCardComponent],
  declarations: [ApodCardComponent],
})
export class ApodCardModule {}
