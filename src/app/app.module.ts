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
import { FindDishByNameComponent } from './dish/find-dish-by-name/find-dish-by-name.component';
import { AdminDishListComponent } from './admin/admin-dish-list/admin-dish-list.component';
import { AdminDishListLoveComponent } from './admin/admin-dish-list-love/admin-dish-list-love.component';
import { AdminDishListSoldComponent } from './admin/admin-dish-list-sold/admin-dish-list-sold.component';
import { DishDetailNonCartComponent } from './dish/dish-detail-non-cart/dish-detail-non-cart.component';
import { ListDishFavoriteComponent } from './dish/list-dish-favorite/list-dish-favorite.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { AdminMerchantListComponent } from './admin/admin-merchant-list/admin-merchant-list.component';
import { AdminDishListOnSaleComponent } from './admin/admin-dish-list-on-sale/admin-dish-list-on-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwitchRegisterComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MerchantModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
