import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
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
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('' , [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9,10}$/)]),
    address: new FormControl('', [Validators.required])
  });
  constructor(private registerService: RegisterService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
        username: ['', [Validators.required, this.forbiddenUsername , Validators.minLength(5), Validators.maxLength(12)]],
        pw: this.formBuilder.group({
          password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
          confirmPassword: ['', [Validators.required]]
        }, {
          validators: this.comparePassword
        }),
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^\d{9,10}$/)]],
        address: ['', [Validators.required]]
    });
  }
  forbiddenUsername(c: AbstractControl) {
    const users = ['admin', 'manager'];
    return (users.includes(c.value)) ? {
      invalidUsername: true
    } : null;
  }
  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
  createNewCustomer() {
    this.registerService.register(this.customerForm.value).subscribe(() => {
      // Swal.fire('Vui lòng kiểm tra email xác nhận ');
      this.router.navigateByUrl('/login');
    });
  }
  get usernameControl() {
    return this.customerForm.get('username');
  }
  get passwordControl() {
    return this.customerForm.get('password');
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
