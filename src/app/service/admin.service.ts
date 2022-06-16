import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerForm} from '../model/customer-form';
import {Merchant} from '../model/merchant';
import {Dish} from '../model/dish';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  showSoldDish(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/admin/dish/recommend/sold`);
  }
  showListCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/admin/customer/list`);
  }
  showListMerchant(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/admin/merchant/list`);
  }
  showListMerchantGold(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/admin/merchant/goldPartner`);
  }
  deleteCustomer(id): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/admin/customer/delete/${id}`);
  }
  activeMerchant(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/admin/merchant/active/${id}`);
  }
  blockMerchant(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/admin/merchant/block/${id}`);
  }
  deleteMerchant(id): Observable<Merchant> {
    return this.http.delete<Merchant>(`${API_URL}/admin/merchant/${id}`);
  }
  setGoldPartner(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/admin/merchant/setGold/${id}`);
  }
  showAllGoldMerchant(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/admin/merchant/goldPartner`);
  }
  showAllMerchantRestaurant(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/admin/merchant/restaurant/list`);
  }
  changeDishRecommend(id): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/admin/dish/recommend/${id}`);
  }
}
