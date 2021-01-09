import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ApodCardModule } from '@pad/apod/ui/apod-card';
import { ApodListComponent } from './apod-list/apod-list.component';
const routes: Routes = [
  {
    path: '',
    component: ApodListComponent,
  },
];

@NgModule({
  imports: [CommonModule, ApodCardModule, FlexLayoutModule, MatDividerModule, RouterModule.forChild(routes)],
  exports: [ApodListComponent],
  declarations: [ApodListComponent],
})
export class ApodListModule {}
