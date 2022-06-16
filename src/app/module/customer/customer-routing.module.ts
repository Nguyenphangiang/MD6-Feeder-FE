import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from '../../auth/register/register.component';
import {CustomerUpdateComponent} from '../../customer/customer-update/customer-update.component';
import {CustomerDetailComponent} from '../../customer/customer-detail/customer-detail.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'update/:id',
    component: CustomerUpdateComponent
  },
  {
    path: 'detail/:id',
    component: CustomerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
