import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
// import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, this.confirmEquals]),
    email: new FormControl('' , [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9,10}$/)]),
    address: new FormControl('', [Validators.required])
  });
  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
  }
  createNewCustomer() {
    this.registerService.register(this.customerForm.value).subscribe(() => {
      // Swal.fire('Vui lòng kiểm tra email xác nhận ');
      this.router.navigateByUrl('/login');
    });
  }
  confirmEquals(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null =>
      control.value.toLowerCase() === this.passwordControlValid.toLowerCase()
        ? null : {noMatch: true};
  }
  get usernameControl() {
    return this.customerForm.get('username');
  }
  get passwordControl() {
    return this.customerForm.get('password');
  }
  get passwordControlValid() {
    return this.customerForm.get('password').value;
  }
  get confirmPasswordControl() {
    return this.customerForm.get('confirmPassword');
  }
  get emailControl() {
    return this.customerForm.get('email');
  }
  get nameControl() {
    return this.customerForm.get('name');
  }
  get phoneControl() {
    return this.customerForm.get('phone');
  }
  get addressControl() {
    return this.customerForm.get('address');
  }
}
