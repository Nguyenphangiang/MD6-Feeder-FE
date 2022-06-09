import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
  {
    path : 'create',
    component : CreateComponent
  },
  {
    path : ':id',
    component : DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
