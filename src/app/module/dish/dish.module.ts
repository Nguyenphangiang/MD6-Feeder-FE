import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
// import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    // ListDishComponent,
    CreateDishComponent,
  ],
  imports: [
    CommonModule,
    DishRoutingModule,
    ReactiveFormsModule
  ]
})
export class DishModule { }
