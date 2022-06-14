import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerForm} from '../model/customer-form';
import {Merchant} from '../model/merchant';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  showListCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customer/list`);
  }
  showListMerchant(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/merchant`);
  }
  deleteCustomer(id): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/delete/${id}`);
  }
  activeMerchant(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchant/active/${id}`);
  }
  blockMerchant(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchant/block/${id}`);
  }
  deleteMerchant(id): Observable<Merchant> {
    return this.http.delete<Merchant>(`${API_URL}/merchant/${id}`);
  }
  setGoldPartner(id): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchant/setGold/${id}`);
  }
}
