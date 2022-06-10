import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';
import { FindMerchantByNameComponent } from './find-merchant-by-name/find-merchant-by-name.component';


@NgModule({
  declarations: [
    CreateComponent,
    FindMerchantByNameComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule { }
