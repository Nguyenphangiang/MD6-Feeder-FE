import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderListComponent} from '../../orders/order-list/order-list.component';
import {AppRoutingModule} from '../../app-routing.module';
import {OrderRemoveComponent} from '../../orders/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/order-remove-all/order-remove-all.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderRemoveComponent,
    OrderRemoveAllComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
  ]
})
export class OrderModule { }
