import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApodHeaderModule } from '@pad/apod/ui/components/apod-header';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultComponent } from './default/default.component';
@NgModule({
  imports: [CommonModule, DefaultLayoutRoutingModule, ApodHeaderModule],
  exports: [DefaultComponent],
  declarations: [DefaultComponent],
})
export class DefaultLayoutModule {}
