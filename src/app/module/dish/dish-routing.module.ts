import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateComponent} from '../../merchant/create/create.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';

import {FindDishByNameComponent} from '../../dish/find-dish-by-name/find-dish-by-name.component';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';


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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
