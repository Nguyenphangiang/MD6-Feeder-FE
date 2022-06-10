import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../model/dish';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getAll(merchantId): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/merchant/${merchantId}`);
  }

  create(id, data): Observable<Dish> {
    return this.http.post<Dish>(`${API_URL}/dish/create/${id}`, data);
  }

  updateDish(id, data): Observable<Dish> {
    return this.http.post<Dish>(`${API_URL}/dish/${id}/${id}`, data);
  }

  findDishById(id): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/dish/${id}`);
  }

  deleteDish(id): Observable<Dish> {
    return this.http.delete<Dish>(`${API_URL}/dish/${id}`);
  }
}
