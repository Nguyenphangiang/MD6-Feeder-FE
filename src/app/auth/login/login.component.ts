import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      .subscribe(data => {
      }, () => {
        Swal.fire('Tài khoản hoặc mật khẩu không chính xác');
      });
  }
}
