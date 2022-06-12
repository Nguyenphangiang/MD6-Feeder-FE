import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from '../../orders/customer/order-list/order-list.component';
import {OrderRemoveComponent} from '../../orders/customer/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/customer/order-remove-all/order-remove-all.component';
import {MerchantOrderListComponent} from '../../orders/merchant-order-list/merchant-order-list.component';


const routes: Routes = [
  {
    path: 'customer/:id',
    component: OrderListComponent
  },
  {
    path: 'remove/:id',
    component: OrderRemoveComponent
  },
  {
    path: 'remove',
    component: OrderRemoveAllComponent
  },
  {
    path: 'merchant/:id',
    component: MerchantOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
