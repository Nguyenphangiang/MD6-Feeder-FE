import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceCreateComponent} from '../../invoice/invoice-create/invoice-create.component';
import {InvoiceDetailComponent} from "../../invoice/invoice-detail/invoice-detail.component";


const routes: Routes = [
  {
    path: 'create',
    component: InvoiceCreateComponent
  },
  {
    path: 'detail',
    component: InvoiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
