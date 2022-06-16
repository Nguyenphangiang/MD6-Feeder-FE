import {Component, OnInit} from '@angular/core';
import {CustomerForm} from '../../model/customer-form';
import {OrderAddress} from '../../model/order-address';
import {InvoiceService} from '../../service/invoice.service';
import {OrderService} from '../../service/order/order.service';
import {ActivatedRoute} from '@angular/router';
import {Invoice} from '../../model/invoice';
import {Order} from '../../model/order';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(private invoiceService: InvoiceService,
              private orderService: OrderService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.findDetailInvoice(id);
    });
  }
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId = this.temp.id;
  customer: CustomerForm;
  orderAddress: OrderAddress[] = [];
  invoice: Invoice = {};
  orders: Order [] = [];
  expectedDay: Date;
  sumOfMoney = 0;
  vat: number;
  totalPrice = 0;
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
      this.getTotalPrice(this.orders);
      this.expectedDay = this.invoice.date;
      this.addHour(this.expectedDay);
    });
  }
  getTotalPrice(orders: Order[]): number {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < orders.length; i++) {
      this.sumOfMoney += orders[i].dish.price;
    }
    this.vat = this.sumOfMoney / 100 * 10;
    this.totalPrice = this.vat + this.sumOfMoney + 25000;
    return this.sumOfMoney;
  }
  addHour(date: Date): Date {
    date.setHours(date.getHours() + 3);
    return date;
  }
}
