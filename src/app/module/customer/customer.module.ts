import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {RegisterComponent} from '../../auth/register/register.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CustomerUpdateComponent} from '../../customer/customer-update/customer-update.component';
import {CustomerDetailComponent} from '../../customer/customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    RegisterComponent,
    CustomerUpdateComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
