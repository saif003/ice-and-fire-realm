import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HANDLER_DECLARATIONS } from './handler.module.barrel';
import { NotFoundHandlerComponent } from './components';

export const routes: Routes = [
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundHandlerComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: HANDLER_DECLARATIONS,
})
export class HandlerModule {}
