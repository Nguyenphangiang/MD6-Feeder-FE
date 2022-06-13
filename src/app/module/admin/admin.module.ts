import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminUserListComponent} from '../../admin/admin-user-list/admin-user-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminUserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
