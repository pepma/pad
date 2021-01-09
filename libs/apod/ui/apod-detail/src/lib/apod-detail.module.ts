import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ApodDetailComponent } from './apod-detail/apod-detail.component';
const routes: Routes = [
  {
    path: '',
    component: ApodDetailComponent,
  },
];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatDividerModule, RouterModule.forChild(routes)],
  exports: [ApodDetailComponent],
  declarations: [ApodDetailComponent],
})
export class ApodDetailModule {}
