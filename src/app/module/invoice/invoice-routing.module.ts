import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceCreateComponent} from '../../invoice/invoice-create/invoice-create.component';
import {InvoiceDetailComponent} from '../../invoice/invoice-detail/invoice-detail.component';
import {InvoiceThankComponent} from '../../invoice/invoice-thank/invoice-thank.component';
import {InvoiceListComponent} from '../../invoice/invoice-list/invoice-list.component';


const routes: Routes = [
  {
    path: 'create',
    component: InvoiceCreateComponent
  },
  {
    path: 'detail/:id',
    component: InvoiceDetailComponent
  },
  {
    path: 'thanks',
    component: InvoiceThankComponent
  },
  {
    path: 'list',
    component: InvoiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
