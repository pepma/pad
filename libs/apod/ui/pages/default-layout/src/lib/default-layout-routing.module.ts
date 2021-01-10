import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'apod',
    loadChildren: () => import('@pad/apod/ui/components/apod-list').then((m) => m.ApodListModule),
  },
  {
    path: ':date',
    loadChildren: () => import('@pad/apod/ui/components/apod-detail').then((m) => m.ApodDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule {}
