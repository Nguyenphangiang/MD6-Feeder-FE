import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchant} from '../model/merchant';
import {environment} from '../../environments/environment';
import {MerchantForm} from '../model/merchant-form';
import {AppUser} from '../model/app-user';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MerchantServiceService {

  constructor(private http: HttpClient ) { }
  findAll(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(API_URL + '/merchant');
  }
  findById(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchant/${id}`);
  }
  // createNew(merchant: Merchant): Observable<Merchant> {
  //   return this.http.post<Merchant>(API_URL + '/merchant', merchant);
  // }
  createNew(merchant: any): Observable<AppUser> {
    return this.http.post<AppUser>(`${API_URL}/merchant/register`, merchant);
  }
  updateOld(id: number, merchant: any): Observable<Merchant> {
    return this.http.post<Merchant>(API_URL + '/merchant/' + id, merchant );
  }
  // deleteById(id: number): Observable<Merchant> {
  //   return this.http.delete<Merchant>(API_URL + '/merchant/' + id);
  // }
  findMerchantByUserId(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(`${API_URL}/merchant/userId/${id}`);
  }
}
