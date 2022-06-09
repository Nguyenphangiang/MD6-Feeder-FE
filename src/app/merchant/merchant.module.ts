import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { DetailComponent } from './detail/detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';


@NgModule({
  declarations: [DetailComponent, CreateComponent],
    imports: [
        CommonModule,
        MerchantRoutingModule,
        ReactiveFormsModule
    ]})
export class MerchantModule { }
