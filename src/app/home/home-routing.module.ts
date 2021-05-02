import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':param1',
    component: HomePage
  },
  {
    path: ':name/:address',
    component: HomePage
  },
  {
    path: ':name/:address/:noOfProducts',
    component: HomePage
  },
  {
    path: ':name/:address/:noOfProducts/:totalPrice',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
