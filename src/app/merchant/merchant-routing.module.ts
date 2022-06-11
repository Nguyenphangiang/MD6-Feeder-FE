import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';

import {FindMerchantByNameComponent} from './find-merchant-by-name/find-merchant-by-name.component';
import {MerchantDetailComponent} from './merchant-detail/merchant-detail.component';



const routes: Routes = [
  {
    path : 'register',
    component : CreateComponent
  },
  {
    path : 'list/:name',
    component : FindMerchantByNameComponent
  },
  {
    path: 'detail/:id',
    component : MerchantDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
