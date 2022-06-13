import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './helper/auth.guard';
import {RegisterComponent} from './auth/register/register.component';
import {SwitchRegisterComponent} from './auth/switch-register/switch-register.component';
import {CreateComponent} from './merchant/create/create.component';



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'switch',
    component: SwitchRegisterComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('./module/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path : 'merchant',
    loadChildren : () => import ('./merchant/merchant.module').then(module => module.MerchantModule)
  },
  {
    path: 'dish',
    loadChildren: () => import('./module/dish/dish.module').then(module => module.DishModule)
  },
  {
    path: 'dish-status',
    loadChildren: () => import('./module/dish-status/dish-status.module').then((module => module.DishStatusModule))
  },
  {
    path: 'cart',
    loadChildren: () => import('./module/cart-element/cart-element.module').then((module => module.CartElementModule))
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
