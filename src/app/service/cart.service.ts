import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CartElement} from '../model/cart-element';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getAllCartElement(customerId): Observable<CartElement[]> {
    return this.httpClient.get<CartElement[]>(`${API_URL}/cart/customer/${customerId}`);
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
  reduceQuantityOfCartElement(cartElementId, data): Observable<CartElement> {
    return this.httpClient.put<CartElement>(`${API_URL}/cart/reduce/${cartElementId}` , data);
  }
  increaseQuantityOfCartElement(cartElementId, data): Observable<CartElement> {
    return this.httpClient.put<CartElement>(`${API_URL}/cart/increase/${cartElementId}` , data);
  }
  findCartElementById(cartElementId): Observable<CartElement> {
    return this.httpClient.get<CartElement>(`${API_URL}/cart/${cartElementId}`);
  }
}
