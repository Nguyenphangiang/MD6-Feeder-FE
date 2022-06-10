import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUserServiceService} from '../../service/app-user-service.service';
import {CustomerForm} from '../../model/customer-form';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: CustomerForm;
  id: number;
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
  });
  constructor( private customerService: AppUserServiceService,
               private activatedRouter: ActivatedRoute,
               private router: Router) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      this.id = +paraMap.get('id');
      this.findCustomerOldInfo(this.id);
    });
  }

  ngOnInit() {
  }
  findCustomerOldInfo(id) {
    this.customerService.showDetailCustomer(id).subscribe(customer => {
      this.customerForm = new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl(customer.name),
        email: new FormControl(customer.email),
        phone: new FormControl(customer.phone),
        address: new FormControl(customer.address),
      });
    });
  }
  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customerForm.value).subscribe(() => {
      Swal.fire('Cập nhập thành công !!! ');
      this.router.navigateByUrl(`/customer/detail/${this.id}`);
    });
  }
}
