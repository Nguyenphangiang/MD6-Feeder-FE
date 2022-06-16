import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AppUser} from '../model/app-user';
import {Customer} from '../model/customer';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AppUserServiceService {

  constructor(private http: HttpClient ) { }
  updateCustomer(id, customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customer/update/${id}`, customer);
  }
  showDetailCustomer(id): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customer/detail/${id}`);
  }
}
