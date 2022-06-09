import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {MerchantForm} from '../../model/merchant-form';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
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
  constructor(private merchantService: MerchantServiceService) { }

  ngOnInit() {
  }

  createNewMerchant() {
   this.merchantService.createNew(this.merchantForm.value).subscribe(
     (data) => {
     alert('Sign Up Success!');
   }, () => {
       alert('Sign Up Failed!');
     });
  }

}
