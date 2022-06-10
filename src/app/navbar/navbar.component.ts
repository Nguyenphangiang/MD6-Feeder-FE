import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }
  ngOnInit() {
    if (this.user == null) {
      this.display = null;
    } else {
      this.username = this.temp.username;
      this.userId = this.temp.id;
      this.display = `Welcome ${this.username}`;
      console.log(this.userId);
    }
  }
}
