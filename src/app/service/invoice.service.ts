import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderAddress} from '../model/order-address';
import {Invoice} from '../model/invoice';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) { }
  showAllCustomerOrderAddress(id): Observable<OrderAddress[]> {
   return this.http.get<OrderAddress[]>(`${API_URL}/orderAddress/${id}`);
  }
  showAllByMerchantId(id): Observable<Invoice[]> {
   return this.http.get<Invoice[]>(`${API_URL}/invoice/merchant/${id}`);
  }
  createNewInvoice(id, data): Observable<Invoice> {
    return this.http.post<Invoice>(`${API_URL}/invoice/${id}`, data);
  }
  getDetailInvoice(id): Observable<Invoice> {
    return this.http.get<Invoice>(`${API_URL}/invoice/${id}`);
  }
  updateInvoice(id: number, invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${API_URL}/invoice/${id}`, invoice);
  }
}
