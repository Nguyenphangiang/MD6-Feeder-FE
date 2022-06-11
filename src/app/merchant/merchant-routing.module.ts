import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {DishListComponent} from './dish-list/dish-list.component';
import {CreateDishComponent} from '../dish/create-dish/create-dish.component';
import {EditDishComponent} from '../dish/edit-dish/edit-dish.component';
import {FindMerchantByNameComponent} from './find-merchant-by-name/find-merchant-by-name.component';
import {MerchantDetailComponent} from './merchant-detail/merchant-detail.component';
import {MerchantDetailByUserComponent} from './merchant-detail-by-user/merchant-detail-by-user.component';


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
  },
  {
    path : ':id/dishes/create/:id_merchant',
    component : CreateDishComponent
  },
  {
    path: ':id_merchant/dishes/edit/:id',
    component : EditDishComponent
  },
  {
    path: 'list/:name',
    component : FindMerchantByNameComponent
  },
  {
    path: 'detail/:id',
    component : MerchantDetailComponent
  },
  {
    path: 'detail/user/:id',
    component: MerchantDetailByUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
