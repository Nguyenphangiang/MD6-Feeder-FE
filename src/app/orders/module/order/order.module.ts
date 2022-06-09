import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderListComponent} from '../../order-list/order-list.component';


@NgModule({
  declarations: [
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
