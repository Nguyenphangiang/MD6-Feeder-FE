import { Component, OnInit } from '@angular/core';
import {AppUserServiceService} from '../../service/app-user-service.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerForm} from '../../model/customer-form';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: CustomerForm;
  id: number;
  constructor(private customerService: AppUserServiceService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      this.id = +paraMap.get('id');
      this.showCustomerDetails(this.id);
    });
  }

  ngOnInit() {
  }
  showCustomerDetails(id) {
    this.customerService.showDetailCustomer(id).subscribe((customer) => {
        this.customer = customer;
    });
  }
}
