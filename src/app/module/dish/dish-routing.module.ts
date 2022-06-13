import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishListComponent} from '../../merchant/dish-list/dish-list.component';
import {CreateComponent} from '../../merchant/create/create.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';


const routes: Routes = [
  // {
  //   path: 'merchant/:id',
  //   component: DishListComponent
  // },
  {
    path: 'create/:id',
    component: CreateDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
