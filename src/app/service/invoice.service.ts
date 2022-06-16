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
  addNewOrderAddress(data, id): Observable<OrderAddress> {
    return this.http.post<OrderAddress>(`${API_URL}/orderAddress/${id}`, data);
  }
  deleteOrderAddress(id): Observable<OrderAddress> {
    return this.http.delete<OrderAddress>(`${API_URL}/orderAddress/${id}`);
  }
  findOneOrderAddress(id): Observable<OrderAddress> {
    return this.http.get<OrderAddress>(`${API_URL}/orderAddress/old/${id}`);
  }
  updateOrderAddress(id, idCustomer, data): Observable<OrderAddress> {
    return this.http.put<OrderAddress>(`${API_URL}/orderAddress/${id}/${idCustomer}`, data);
  }
}
