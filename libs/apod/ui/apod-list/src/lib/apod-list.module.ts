import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ApodListComponent } from './apod-list/apod-list.component';
const routes: Routes = [
  {
    path: '',
    component: ApodListComponent,
  },
];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatDividerModule, RouterModule.forChild(routes)],
  exports: [ApodListComponent],
  declarations: [ApodListComponent],
})
export class ApodListModule {}
