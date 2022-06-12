import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {JwtInterceptor} from './helper/jwt-interceptor';
import { SwitchRegisterComponent } from './auth/switch-register/switch-register.component';
import {MerchantModule} from './merchant/merchant.module';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { OrderDetailsComponent } from './orders/customer/order-details/order-details.component';
import { MerchantOrderDetailsComponent } from './orders/merchant/merchant-order-details/merchant-order-details.component';
import {OrderModule} from './module/order/order.module';
import { MerchantRemoveOrderComponent } from './orders/merchant/merchant-remove-order/merchant-remove-order.component';
import { MerchantRemoveAllOrderComponent } from './orders/merchant/merchant-remove-all-order/merchant-remove-all-order.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwitchRegisterComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MerchantModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    OrderModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
