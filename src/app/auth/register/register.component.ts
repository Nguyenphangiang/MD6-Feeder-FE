import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    confirmPassword: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
  }
  createNewCustomer() {
    this.registerService.register(this.customerForm.value).subscribe(() => {
      Swal.fire('Vui lòng kiểm tra email ');
      this.router.navigateByUrl('/login');
    });
  }
}
