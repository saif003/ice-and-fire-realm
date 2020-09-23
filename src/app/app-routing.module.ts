import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./layout/layout.module').then(({ LayoutModule }) => LayoutModule),
  },
  {
    path: '**',
    redirectTo: 'handle/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
