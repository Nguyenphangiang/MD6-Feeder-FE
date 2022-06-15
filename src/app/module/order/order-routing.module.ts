import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from '../../orders/order-list/order-list.component';
import {OrderRemoveComponent} from '../../orders/order-remove/order-remove.component';
import {OrderRemoveAllComponent} from '../../orders/order-remove-all/order-remove-all.component';


const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: 'remove/:id',
    component: OrderRemoveComponent
  },
  {
    path: 'remove',
    component: OrderRemoveAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
