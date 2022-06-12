import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  username: string;
  userId: number;
  display: string;
  roles: any;
  role: string;
  authority = 0;
  constructor(private router: Router) {
  }
  ngOnInit() {
    if (this.user == null) {
      this.display = null;
    } else {
      this.username = this.temp.username;
      this.userId = this.temp.id;
      this.display = `Welcome ${this.username}`;
      this.roles = this.temp.roles;
      this.role = this.roles.pop().authority;
      if (this.role === 'ROLE_USER') {
        this.authority = 1;
      } else if (this.role === 'ROLE_MERCHANT') {
        this.authority = 2;
      } else {
        this.authority = 3;
      }
      console.log(this.authority);
      console.log(this.role);
      console.log(this.roles);
      console.log(this.temp);
    }
  }

  logout() {
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
