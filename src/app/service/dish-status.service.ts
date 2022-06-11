import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DishStatus} from '../model/dish-status';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class DishStatusService {

  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<DishStatus[]> {
    return this.http.get<DishStatus[]>(`${API_URL}/dish/status`);
}
}
