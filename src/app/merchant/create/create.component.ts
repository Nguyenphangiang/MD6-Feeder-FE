import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {MerchantForm} from '../../model/merchant-form';
import {FormControl, FormGroup} from '@angular/forms';
import {Merchant} from '../../model/merchant';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  selectedFile = null;
  image = null;
  merchant: MerchantForm;
  merchantForm: FormGroup = new FormGroup({
    name: new FormControl(),
    safeFoodLicense: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  constructor(private merchantService: MerchantServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
    // this.image = document.getElementById('output');
    // this.image.src = URL.createObjectURL(event.target.files[0]);
  }

  createNewMerchant() {
    const merchantData: FormData = new FormData();
    merchantData.append('username', this.merchantForm.get('username').value);
    merchantData.append('password', this.merchantForm.get('password').value);
    merchantData.append('confirmPassword', this.merchantForm.get('confirmPassword').value);
    merchantData.append('email', this.merchantForm.get('email').value);
    merchantData.append('phone', this.merchantForm.get('phone').value);
    merchantData.append('address', this.merchantForm.get('address').value);
    merchantData.append('name', this.merchantForm.get('name').value);
    merchantData.append('safeFoodLicense', this.selectedFile);
    this.merchantService.createNew(merchantData).subscribe(() => {
      Swal.fire('Đăng ký thành công, Kiểm tra email để kích hoạt !!!');
      this.router.navigateByUrl('/login');
    });
  }
}
