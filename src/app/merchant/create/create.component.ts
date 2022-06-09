import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Merchant} from '../../model/merchant';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  merchantForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    safeFoodLicense: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(private merchantService: MerchantServiceService) { }

  ngOnInit() {
  }


}
