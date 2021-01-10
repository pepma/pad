import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { ApodCardModule } from '@pad/apod/ui/components/apod-card';
import { ApodListComponent } from './apod-list/apod-list.component';
const routes: Routes = [
  {
    path: '',
    component: ApodListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApodCardModule,
    FlexLayoutModule,
    MatDividerModule,
    RouterModule.forChild(routes),
  ],
  exports: [ApodListComponent],
  declarations: [ApodListComponent],
})
export class ApodListModule {}
