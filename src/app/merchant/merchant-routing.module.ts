import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {DishListComponent} from './dish-list/dish-list.component';


const routes: Routes = [
  {
    path : 'register',
    component : CreateComponent
  },
  {
    path : ':id',
    component : DetailComponent
  },
  {
    path : ':id/dishes',
    component : DishListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
