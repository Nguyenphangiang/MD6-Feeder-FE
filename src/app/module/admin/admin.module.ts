import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminUserListComponent} from '../../admin/admin-user-list/admin-user-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminDishListComponent} from '../../admin/admin-dish-list/admin-dish-list.component';
import {AdminDishListLoveComponent} from '../../admin/admin-dish-list-love/admin-dish-list-love.component';
import {AdminDishListSoldComponent} from '../../admin/admin-dish-list-sold/admin-dish-list-sold.component';
import {AdminMerchantListComponent} from '../../admin/admin-merchant-list/admin-merchant-list.component';
import {AdminDishListOnSaleComponent} from '../../admin/admin-dish-list-on-sale/admin-dish-list-on-sale.component';
import {AdminMerchantGoldListComponent} from '../../admin/admin-merchant-gold-list/admin-merchant-gold-list.component';
import {AdminMerchantRestaurantComponent} from '../../admin/admin-merchant-restaurant/admin-merchant-restaurant.component';
import {AdminDishDetailComponent} from '../../admin/admin-dish-detail/admin-dish-detail.component';


@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminDishListComponent,
    AdminDishListLoveComponent,
    AdminDishListSoldComponent,
    AdminMerchantListComponent,
    AdminDishListOnSaleComponent,
    AdminMerchantGoldListComponent,
    AdminMerchantRestaurantComponent,
    AdminDishDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
