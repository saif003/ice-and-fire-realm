import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BookDetailComponent,
  CharacterDetailComponent,
  HomeComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: ':uri',
    pathMatch: 'full',
    component: BookDetailComponent,
  },
  {
    path: 'character/:uri',
    pathMatch: 'full',
    component: CharacterDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
