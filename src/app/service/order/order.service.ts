import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';
import {environment} from '../../../environments/environment';
import {Customer} from '../../model/customer';
import {CustomerForm} from '../../model/customer-form';
import {CartElement} from "../../model/cart-element";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  getAllOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${API_URL}/order`);
  }

  getOrderById(id): Observable<Order> {
    return this.httpClient.get<Order>(`${API_URL}/order/${id}`);
  }

  getOrderByUserId(id): Observable<Order> {
    return this.httpClient.get<Order>(`${API_URL}/order/customer/${id}`);
  }

  createNewOrder(data): Observable<Order> {
    return this.httpClient.post<Order>(`${API_URL}/order`, data);
  }

  updateOrderInfo(id, data): Observable<Order> {
    return this.httpClient.put<Order>(`${API_URL}/order/${id}`, data);
  }

  removeOrder(id): Observable<Order> {
    return this.httpClient.delete<Order>(`${API_URL}/order/${id}`);
  }

  removeAllOrder(): Observable<Order> {
    return this.httpClient.delete(`${API_URL}/order`);
  }

  getOrdersByMerchantId(idMerchant): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${API_URL}/order/merchant/${idMerchant}`);
  }
  findCustomerByUserId(id): Observable<CustomerForm> {
    return this.httpClient.get<CustomerForm>(`${API_URL}/customer/detail/${id}`);
  }

  getAllOrderByCheckFalseAndCustomerId(id): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${API_URL}/order/ordercheck/${id}`);
  }
  deleteAllOrderByCheckFalseAndCustomerId(id): Observable<Order> {
    return this.httpClient.delete<Order>(`${API_URL}/order/ordercheck/${id}`);
  }
  reduceQuantityOfOrderElement(orderId, data): Observable<Order> {
    return this.httpClient.put<Order>(`${API_URL}/order/reduce/${orderId}` , data);
  }
  increaseQuantityOfOrderElement(orderId, data): Observable<Order> {
    return this.httpClient.put<Order>(`${API_URL}/order/increase/${orderId}` , data);
  }
  setStatusOfOrderElement(orderId, data): Observable<Order> {
    return this.httpClient.put<Order>(`${API_URL}/order/setstatus/${orderId}` , data);
  }
}
