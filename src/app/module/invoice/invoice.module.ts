import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {InvoiceCreateComponent} from '../../invoice/invoice-create/invoice-create.component';
import {HttpClientModule} from '@angular/common/http';
import {InvoiceDetailComponent} from '../../invoice/invoice-detail/invoice-detail.component';
import {InvoiceThankComponent} from '../../invoice/invoice-thank/invoice-thank.component';
import {InvoiceListComponent} from '../../invoice/invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    InvoiceCreateComponent,
    InvoiceDetailComponent,
    InvoiceThankComponent,
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class InvoiceModule { }
