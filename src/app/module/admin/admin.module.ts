import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminUserListComponent} from '../../admin/admin-user-list/admin-user-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminDishListComponent} from '../../admin/admin-dish-list/admin-dish-list.component';
import {AdminDishListLoveComponent} from '../../admin/admin-dish-list-love/admin-dish-list-love.component';
import {AdminDishListSoldComponent} from '../../admin/admin-dish-list-sold/admin-dish-list-sold.component';
import {AdminMerchantListComponent} from '../../admin/admin-merchant-list/admin-merchant-list.component';


@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminDishListComponent,
    AdminDishListLoveComponent,
    AdminDishListSoldComponent,
    AdminMerchantListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
