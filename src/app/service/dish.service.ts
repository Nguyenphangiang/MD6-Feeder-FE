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
  showAll(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish`);
  }

  getAll(merchantId): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/merchant/${merchantId}`);
  }


  create(id, data): Observable<Dish> {
    return this.http.post<Dish>(`${API_URL}/dish/create/${id}`, data);
  }
  updateDish(id, idMerchant, data): Observable<Dish> {
    return this.http.post<Dish>(`${API_URL}/dish/${id}/${idMerchant}`, data);
    // tslint:disable-next-line:variable-name
  }
//   updateDish(id, id_merchant, data): Observable<Dish> {
//     return this.http.post<Dish>(`${API_URL}/dish/${id}/${id_merchant}`, data);
// >>>>>>> feature-cart
//   }

  findDishById(id): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/dish/${id}`);
  }

  deleteDish(id): Observable<Dish> {
    return this.http.delete<Dish>(`${API_URL}/dish/${id}`);
  }
  findDishByName(name): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/dishName/${name}`);
  }
  addDishRecommend(id): Observable<Dish> {
    return this.http.get<Dish>(`${API_URL}/dish/recommend/${id}`);
  }
  showDishRecommend(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/recommend/sale`);
  }
  showSoldDish(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/recommend/sold`);
  }
  showSaleDish(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API_URL}/dish/status/onSale`);
  }
}
