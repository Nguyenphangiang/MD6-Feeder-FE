import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishStatusRoutingModule } from './dish-status-routing.module';
import {ListComponent} from '../../dish-status/list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DishStatusRoutingModule
  ]
})
export class DishStatusModule { }
