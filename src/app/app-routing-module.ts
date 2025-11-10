import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Player } from './features/player/components/player/player';
import { Search } from './features/search/components/search/search';

const routes: Routes = [
  {
    path: '',
    component: Player,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
