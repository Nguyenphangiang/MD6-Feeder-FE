import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AppUser} from '../../model/app-user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: AppUser[] = [];
  userName: string[] = [];
  customerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    pw: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }),
    email: new FormControl('' , [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9,10}$/)]),
    address: new FormControl('', [Validators.required])
  });
  constructor(private registerService: RegisterService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

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
    const users: string[] = this.userName;
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
    const customer: FormData = new FormData();
    customer.append('username', this.customerForm.get('username').value);
    customer.append('password', this.customerForm.get('pw.password').value);
    customer.append('confirmPassword', this.customerForm.get('pw.confirmPassword').value);
    customer.append('email', this.customerForm.get('email').value);
    customer.append('phone', this.customerForm.get('phone').value);
    customer.append('address', this.customerForm.get('address').value);
    customer.append('name', this.customerForm.get('name').value);
    this.registerService.register(customer).subscribe(() => {
      Swal.fire('Vui lòng kiểm tra email xác nhận ');
      this.router.navigateByUrl('/login');
    });
  }
  showAllUser(): any {
     this.registerService.getAllUser().subscribe((user) => {
      this.users = user;
      console.log(user[0].username);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < user.length; i++) {
        this.userName.push(user[i].username);
      }
      console.log(this.userName);
      return this.userName;
    });
  }
  get usernameControl() {
    return this.customerForm.get('username');
  }
  get passwordControl() {
    return this.customerForm.get('pw.password');
  }
  get confirmPasswordControl() {
    return this.customerForm.get('pw.confirmPassword');
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
