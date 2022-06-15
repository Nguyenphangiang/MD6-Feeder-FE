import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceCreateComponent} from '../../invoice/invoice-create/invoice-create.component';


const routes: Routes = [
  {
    path: 'create',
    component: InvoiceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
