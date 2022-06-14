import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartElementRoutingModule } from './cart-element-routing.module';
import {DishRoutingModule} from "../dish/dish-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartElementRoutingModule,
    ReactiveFormsModule
  ],
})
export class CartElementModule { }
