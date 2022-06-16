import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderAddress} from '../model/order-address';
import {Invoice} from '../model/invoice';
import {InvoiceStatus} from '../model/invoice-status';
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
  showAllByCustomerName(name): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${API_URL}/invoice/customer-name?name=${name}`);
  }
  showAllByCustomerPhone(phone): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${API_URL}/invoice/customer-phone?phone=${phone}`);
  }
  showAllByCustomerInfo(input): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${API_URL}/invoice/customerInfo?input=${input}`);
  }
  showAllInvoiceStatus(): Observable<InvoiceStatus[]> {
    return this.http.get<InvoiceStatus[]>(`${API_URL}/invoice/status`);
  }
}
