import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router) { }
  login(username: string, password: string) {
    return this.http.post(`${API_URL}/login`, {username, password})
      .pipe(map(user => {
        if (user === null) {
          Swal.fire('Tài khoản của bạn chưa được kích hoạt');
          this.router.navigateByUrl('/login');
        } else {
          localStorage.setItem('user', JSON.stringify(user));
          // this.router.navigateByUrl('/');
          location.reload();
          location.href = '/';
          return user;
        }
      }));
  }
}
