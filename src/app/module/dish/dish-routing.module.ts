import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateComponent} from '../../merchant/create/create.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {DishListComponent} from '../../merchant/dish-list/dish-list.component';
import {FindDishByNameComponent} from '../../dish/find-dish-by-name/find-dish-by-name.component';
import {DishDetailNonCartComponent} from '../../dish/dish-detail-non-cart/dish-detail-non-cart.component';
import {ListDishFavoriteComponent} from '../../dish/list-dish-favorite/list-dish-favorite.component';
import {DishDetailComponent} from '../../dish/dish-detail/dish-detail.component';


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
  {
    path: 'detail/nonCart/:id',
    component: DishDetailNonCartComponent
  },
  {
    path: 'favorite/list',
    component: ListDishFavoriteComponent
  },
  {
    path: 'detail/:id',
    component: DishDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
