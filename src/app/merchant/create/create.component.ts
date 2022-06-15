import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {MerchantForm} from '../../model/merchant-form';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  selectedFile = new File(['none'], 'null');
  image = null;
  merchant: MerchantForm;
  merchantForm: FormGroup = new FormGroup({
    name: new FormControl(),
    safeFoodLicense: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    pw: new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl(),
    }, {validators: this.comparePassword}),
    username: new FormControl(),
  });

  constructor(private merchantService: MerchantServiceService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.merchantForm = this.formBuilder.group({
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

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
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
  createNewMerchant() {
    const merchantData: FormData = new FormData();
    merchantData.append('username', this.merchantForm.get('username').value);
    merchantData.append('password', this.merchantForm.get('pw.password').value);
    merchantData.append('confirmPassword', this.merchantForm.get('pw.confirmPassword').value);
    merchantData.append('email', this.merchantForm.get('email').value);
    merchantData.append('phone', this.merchantForm.get('phone').value);
    merchantData.append('address', this.merchantForm.get('address').value);
    merchantData.append('name', this.merchantForm.get('name').value);
    merchantData.append('safeFoodLicense', this.selectedFile);
    this.merchantService.createNew(merchantData).subscribe(() => {
      Swal.fire('Đăng ký thành công, Kiểm tra email để kích hoạt !');
      this.router.navigateByUrl('/login');
    }, () => {
      Swal.fire('Tài khoản đã có người sử dụng');
    });
  }
  get usernameControl() {
    return this.merchantForm.get('username');
  }
  get passwordControl() {
    return this.merchantForm.get('pw.password');
  }
  get confirmPasswordControl() {
    return this.merchantForm.get('pw.confirmPassword');
  }
  get emailControl() {
    return this.merchantForm.get('email');
  }
  get nameControl() {
    return this.merchantForm.get('name');
  }
  get phoneControl() {
    return this.merchantForm.get('phone');
  }
  get addressControl() {
    return this.merchantForm.get('address');
  }
}
