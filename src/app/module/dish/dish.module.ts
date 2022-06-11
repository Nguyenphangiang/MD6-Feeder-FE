import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {ReactiveFormsModule} from '@angular/forms';

import {EditDishComponent} from '../../dish/edit-dish/edit-dish.component';


@NgModule({
  declarations: [
    ListDishComponent,
    CreateDishComponent,
    EditDishComponent
  ],
  imports: [
    CommonModule,
    DishRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListDishComponent,
    CreateDishComponent,
    EditDishComponent
  ]
})
export class DishModule { }
