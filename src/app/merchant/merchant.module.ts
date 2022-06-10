import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { DetailComponent } from './detail/detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';
import { DishListComponent } from './dish-list/dish-list.component';


@NgModule({
  declarations: [DetailComponent, CreateComponent, DishListComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]})
export class MerchantModule { }
