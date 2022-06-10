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
import { EditDishComponent } from './dish/edit-dish/edit-dish.component';
import { ListComponent } from './dish-status/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SwitchRegisterComponent,
    NavbarComponent,

    FooterComponent,
    EditDishComponent,

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
