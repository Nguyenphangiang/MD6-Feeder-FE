import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderListComponent} from '../../orders/customer/order-list/order-list.component';
import {AppRoutingModule} from '../../app-routing.module';
import {OrderRemoveComponent} from '../../orders/customer/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/customer/order-remove-all/order-remove-all.component';
import {MerchantOrderListComponent} from '../../orders/merchant-order-list/merchant-order-list.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderRemoveComponent,
    OrderRemoveAllComponent,
    MerchantOrderListComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class OrderModule { }
