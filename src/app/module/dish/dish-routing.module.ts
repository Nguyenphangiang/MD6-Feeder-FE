import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateComponent} from '../../merchant/create/create.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {DishListComponent} from '../../merchant/dish-list/dish-list.component';


const routes: Routes = [
  // {
  //   path: 'merchant/:id',
  //   component: DishListComponent
  // },
  {
    path: 'create/:id',
    component: CreateDishComponent
  },
  {
    path: 'list',
    component: ListDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
