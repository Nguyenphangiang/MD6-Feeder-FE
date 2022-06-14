import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderListComponent} from '../../orders/customer/order-list/order-list.component';
import {AppRoutingModule} from '../../app-routing.module';
import {OrderRemoveComponent} from '../../orders/customer/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/customer/order-remove-all/order-remove-all.component';
import {MerchantOrderListComponent} from '../../orders/merchant/merchant-order-list/merchant-order-list.component';
import {OrderDetailsComponent} from '../../orders/customer/order-details/order-details.component';
import {MerchantOrderDetailsComponent} from '../../orders/merchant/merchant-order-details/merchant-order-details.component';
import {MerchantRemoveOrderComponent} from '../../orders/merchant/merchant-remove-order/merchant-remove-order.component';
import {MerchantRemoveAllOrderComponent} from '../../orders/merchant/merchant-remove-all-order/merchant-remove-all-order.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderRemoveComponent,
    OrderRemoveAllComponent,
    OrderDetailsComponent,
    MerchantOrderListComponent,
    MerchantOrderDetailsComponent,
    MerchantRemoveOrderComponent,
    MerchantRemoveAllOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class OrderModule { }
