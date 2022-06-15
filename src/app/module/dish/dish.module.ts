import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {CreateDishComponent} from '../../dish/create-dish/create-dish.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EditDishComponent} from '../../dish/edit-dish/edit-dish.component';
import {FindDishByNameComponent} from '../../dish/find-dish-by-name/find-dish-by-name.component';
import {DishDetailNonCartComponent} from '../../dish/dish-detail-non-cart/dish-detail-non-cart.component';
import {ListDishFavoriteComponent} from '../../dish/list-dish-favorite/list-dish-favorite.component';
import {DishDetailComponent} from '../../dish/dish-detail/dish-detail.component';



@NgModule({
  declarations: [
    ListDishComponent,
    CreateDishComponent,
    EditDishComponent,
    DishDetailNonCartComponent,
    ListDishFavoriteComponent,
    DishDetailComponent,
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
