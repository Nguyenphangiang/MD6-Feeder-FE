import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {JwtInterceptor} from './helper/jwt-interceptor';
import { RegisterComponent } from './auth/register/register.component';
import { SwitchRegisterComponent } from './auth/switch-register/switch-register.component';

import {MerchantModule} from './merchant/merchant.module';
import { CreateComponent } from './merchant/create/create.component';
import { ListDishComponent } from './dish/list-dish/list-dish.component';
import { CreateDishComponent } from './dish/create-dish/create-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SwitchRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MerchantModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
