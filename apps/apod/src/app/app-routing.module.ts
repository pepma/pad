import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pad/apod/ui/pages/default-layout').then((m) => m.DefaultLayoutModule),
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   redirectTo: '/apod',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
