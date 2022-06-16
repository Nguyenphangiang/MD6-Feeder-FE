import {Component, OnInit} from '@angular/core';
import {CustomerForm} from '../../model/customer-form';
import {OrderAddress} from '../../model/order-address';
import {InvoiceService} from '../../service/invoice.service';
import {OrderService} from '../../service/order/order.service';
import {ActivatedRoute} from '@angular/router';
import {Invoice} from "../../model/invoice";
import {Order} from "../../model/order";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId = this.temp.id;
  customer: CustomerForm;
  orderAddress: OrderAddress[] = [];
  invoice: Invoice = {};
  orders: Order [] = [];

  constructor(private invoiceService: InvoiceService,
              private orderService: OrderService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.findDetailInvoice(id);
    });
  }

  ngOnInit() {
    this.findCustomerByUserId(this.userId);
  }

  showAllCustomerOrderAddress(id) {
    this.invoiceService.showAllCustomerOrderAddress(id).subscribe((data) => {
      this.orderAddress = data;
      console.log(data);
    });
  }

  findCustomerByUserId(id) {
    this.orderService.findCustomerByUserId(id).subscribe((customer) => {
      this.customer = customer;
      this.showAllCustomerOrderAddress(this.customer.id);
      console.log(this.customer);
    });
  }

  findDetailInvoice(id) {
    this.invoiceService.getDetailInvoice(id).subscribe((invoice) => {
      this.invoice = invoice;
      this.orders = this.invoice.orders;
    });
  }
}
