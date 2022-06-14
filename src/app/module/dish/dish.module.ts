import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EditDishComponent} from '../../dish/edit-dish/edit-dish.component';
import {FindDishByNameComponent} from '../../dish/find-dish-by-name/find-dish-by-name.component';



@NgModule({
  declarations: [
    ListDishComponent,
    CreateDishComponent,
    EditDishComponent,
  ],
    imports: [
        CommonModule,
        DishRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  exports: [
    ListDishComponent,
    CreateDishComponent,
    EditDishComponent
  ]
})
export class DishModule { }
