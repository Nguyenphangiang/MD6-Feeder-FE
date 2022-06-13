import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((data) => {
        location.reload();
        location.href = '/merchant/15';
      });
  }
}
