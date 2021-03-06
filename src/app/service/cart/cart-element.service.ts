import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CartElement} from '../../model/cart-element';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CartElementService {

  constructor(private httpClient: HttpClient) { }

  getAllCartElement(customerId): Observable<CartElement[]> {
    return this.httpClient.get<CartElement[]>(`${API_URL}/cart/${customerId}`);
  }
  addCartElement(customerId, dishId, data): Observable<CartElement> {
    return this.httpClient.post<CartElement>(`${API_URL}/cart/${customerId}/${dishId}`, data);
  }
  removeCartElement(cartElementId): Observable<CartElement> {
    return this.httpClient.delete<CartElement>(`${API_URL}/cart/${cartElementId}`);
  }
  removeAllCartElement(customerId): Observable<CartElement> {
    return this.httpClient.delete<CartElement>(`${API_URL}/cart/all/${customerId}`);
  }
  updateCartElement(cartElementId, data): Observable<CartElement> {
    return this.httpClient.put<CartElement>(`${API_URL}/cart/${cartElementId}`, data);
  }
}
