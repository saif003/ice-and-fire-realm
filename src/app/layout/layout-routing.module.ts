import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
      {
        path: 'books',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('../book/book.module').then(({ BookModule }) => BookModule),
      },
      {
        path: 'handle',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('../handler/handler.module').then(
            ({ HandlerModule }) => HandlerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
