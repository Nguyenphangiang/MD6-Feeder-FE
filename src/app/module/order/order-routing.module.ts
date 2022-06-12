import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from '../../orders/customer/order-list/order-list.component';
import {OrderRemoveComponent} from '../../orders/customer/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/customer/order-remove-all/order-remove-all.component';
import {MerchantOrderListComponent} from '../../orders/merchant/merchant-order-list/merchant-order-list.component';
import {OrderDetailsComponent} from '../../orders/customer/order-details/order-details.component';
import {MerchantOrderDetailsComponent} from '../../orders/merchant/merchant-order-details/merchant-order-details.component';
import {MerchantRemoveOrderComponent} from '../../orders/merchant/merchant-remove-order/merchant-remove-order.component';
import {MerchantRemoveAllOrderComponent} from '../../orders/merchant/merchant-remove-all-order/merchant-remove-all-order.component';


const routes: Routes = [
  {
    path: 'customer/:id',
    component: OrderListComponent
  },
  {
    path: 'customer/remove/:id',
    component: OrderRemoveComponent
  },
  {
    path: 'customer/details/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'customer/remove',
    component: OrderRemoveAllComponent
  },
  {
    path: 'merchant/:id',
    component: MerchantOrderListComponent
  },
  {
    path: 'merchant/details/:id',
    component: MerchantOrderDetailsComponent
  },
  {
    path: 'merchant/remove/:id',
    component: MerchantRemoveOrderComponent
  },
  {
    path: 'merchant/remove',
    component: MerchantRemoveAllOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
