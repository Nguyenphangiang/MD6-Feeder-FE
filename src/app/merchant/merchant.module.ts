import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { DetailComponent } from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';
import { FindMerchantByNameComponent } from './find-merchant-by-name/find-merchant-by-name.component';
import { MerchantDetailComponent } from './merchant-detail/merchant-detail.component';
import { DishListComponent } from './dish-list/dish-list.component';
import {DishModule} from '../module/dish/dish.module';
import { MerchantDetailByUserComponent } from './merchant-detail-by-user/merchant-detail-by-user.component';
import {FindDishByNameComponent} from '../dish/find-dish-by-name/find-dish-by-name.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';



@NgModule({
  declarations: [
    CreateComponent,
    FindMerchantByNameComponent,
    MerchantDetailComponent,
    DetailComponent,
    CreateComponent,
    DishListComponent,
    MerchantDetailByUserComponent,
    FindDishByNameComponent,
    MerchantListComponent,
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DishModule
  ]})
export class MerchantModule { }
