import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_URL}/customer/register`, customer);
  }
}
