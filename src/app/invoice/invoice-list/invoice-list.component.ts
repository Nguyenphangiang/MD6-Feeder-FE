import { Component, OnInit } from '@angular/core';
import {CustomerForm} from '../../model/customer-form';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order/order.service';
import {InvoiceService} from '../../service/invoice.service';
import {Invoice} from '../../model/invoice';
import {Dish} from '../../model/dish';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId = this.temp.id;
  customer: CustomerForm;
  invoices: Invoice[] = [];
  dish: Dish[] = [];
  orders: Order[] = [];
  sumOfMoney = 0;
  expectedDay: any;
  constructor(private orderService: OrderService,
              private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.findCustomerByUserId(this.userId);
  }
  findCustomerByUserId(id) {
    this.orderService.findCustomerByUserId(id).subscribe((customer) => {
      this.customer = customer;
      this.showAllInvoiceByCustomer(customer.id);
    });
  }
 showAllInvoiceByCustomer(id) {
   this.invoiceService.showAllInvoiceByCustomer(id).subscribe((invoice) => {
      this.invoices = invoice;
      this.getAllOrder(invoice);
      this.getTotalPrice(this.orders);
    });
 }
 getAllOrder(or: Invoice[]): Order[] {
   for (let i = 0; i < or.length; i++) {
       this.orders.push(or[i].orders[i]);
   }
   return this.orders;
 }
 getTotalPrice(orders: Order[]): number {
   // tslint:disable-next-line:prefer-for-of
   for (let i = 0; i < orders.length; i++) {
     this.sumOfMoney += orders[i].dish.price;
   }
   return this.sumOfMoney;
 }
}
