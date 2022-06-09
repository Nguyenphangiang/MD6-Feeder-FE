import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchant} from '../model/merchant';
import {environment} from '../../environments/environment';
import {MerchantForm} from '../model/merchant-form';
import {AppUser} from '../model/app-user';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MerchantServiceService {

  constructor(private http: HttpClient ) { }
  findAll(): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(apiUrl + 'merchant');
  }
  findById(id: number): Observable<Merchant> {
    return this.http.get<Merchant>(apiUrl + 'merchant/' + id);
  }
  // createNew(merchant: Merchant): Observable<Merchant> {
  //   return this.http.post<Merchant>(apiUrl + 'merchant', merchant);
  // }
  createNew(merchant: any): Observable<AppUser> {
    return this.http.post<AppUser>(apiUrl + 'merchant/register', merchant);
  }
  // updateOld(id: number, merchant: Merchant): Observable<Merchant> {
  //   return this.http.post<Merchant>(apiUrl + 'merchant/' + id, merchant );
  // }
  // deleteById(id: number): Observable<Merchant> {
  //   return this.http.delete<Merchant>(apiUrl + 'merchant/' + id);
  // }
}
