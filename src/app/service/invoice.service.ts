import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderAddress} from '../model/order-address';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) { }
  showAllCustomerOrderAddress(id): Observable<OrderAddress[]> {
   return this.http.get<OrderAddress[]>(`${API_URL}/orderAddress/${id}`);
  }
}
