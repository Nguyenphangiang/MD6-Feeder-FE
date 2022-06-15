import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUserListComponent} from '../../admin/admin-user-list/admin-user-list.component';
import {AdminDishListComponent} from '../../admin/admin-dish-list/admin-dish-list.component';
import {AdminDishListLoveComponent} from '../../admin/admin-dish-list-love/admin-dish-list-love.component';
import {AdminDishListSoldComponent} from '../../admin/admin-dish-list-sold/admin-dish-list-sold.component';
import {AdminMerchantListComponent} from '../../admin/admin-merchant-list/admin-merchant-list.component';
import {AdminDishListOnSaleComponent} from '../../admin/admin-dish-list-on-sale/admin-dish-list-on-sale.component';
import {AdminMerchantGoldListComponent} from '../../admin/admin-merchant-gold-list/admin-merchant-gold-list.component';
import {AdminMerchantRestaurantComponent} from '../../admin/admin-merchant-restaurant/admin-merchant-restaurant.component';
import {AdminDishDetailComponent} from '../../admin/admin-dish-detail/admin-dish-detail.component';


const routes: Routes = [
  {
    path: 'user',
    component: AdminUserListComponent
  },
  {
    path: 'dish/list',
    component: AdminDishListComponent
  },
  {
    path: 'dish/list/sale',
    component: AdminDishListLoveComponent
  },
  {
    path: 'dish/list/sold',
    component: AdminDishListSoldComponent
  },
  {
   path: 'dish/list/onSale',
   component: AdminDishListOnSaleComponent
  },
  {
    path: 'merchant/list/gold',
    component: AdminMerchantGoldListComponent
  },
  {
    path: 'merchant',
    component: AdminMerchantListComponent
  },
  {
    path: 'merchant/list',
    component: AdminMerchantRestaurantComponent
  },
  {
    path: 'dish/detail/:id',
    component: AdminDishDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
