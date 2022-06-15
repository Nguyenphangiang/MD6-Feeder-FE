import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const currentUser = localStorage.getItem('user');
   const user = JSON.parse(currentUser);
   if (user != null) {
     if (user.roles.contains('ROLE_ADMIN')) {
       return true;
     } else {
       localStorage.removeItem('user');
       this.router.navigateByUrl('/login');
       return false;
     }
   }
   this.router.navigateByUrl('/login');
   return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = localStorage.getItem('user');
    const user = JSON.parse(currentUser);
    if (user != null) {
      if (user.roles.contains('ROLE_ADMIN')) {
        return true;
      } else {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
        return false;
      }
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
