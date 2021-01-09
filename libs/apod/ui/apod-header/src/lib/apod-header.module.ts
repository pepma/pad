import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApodHeaderComponent } from './apod-header/apod-header.component';

@NgModule({
  imports: [CommonModule],
  exports: [ApodHeaderComponent],
  declarations: [ApodHeaderComponent],
})
export class ApodHeaderModule {}
