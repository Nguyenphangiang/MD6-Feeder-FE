import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AppUser} from '../model/app-user';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AppUserServiceService {

  constructor(private http: HttpClient ) { }
  createCustomer(){

  }
}
