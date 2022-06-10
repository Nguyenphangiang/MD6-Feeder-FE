import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Merchant} from '../model/merchant';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  showAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/home`);
  }
  findMerchant(name): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(`${API_URL}/customer/findMerchant/${name}`);
  }
}
