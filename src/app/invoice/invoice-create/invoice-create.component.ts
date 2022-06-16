import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../service/invoice.service';
import {OrderAddress} from '../../model/order-address';
import {OrderService} from '../../service/order/order.service';
import {CustomerForm} from '../../model/customer-form';
import {Order} from "../../model/order";

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId = this.temp.id;
  customer: CustomerForm;
  orderAddress: OrderAddress[] = [];
  orders: Order [] = [];
  sumOfMoney: any;
  quantity: number;
  merchantAdress: any;
  merchantName: any;

  constructor(private invoiceService: InvoiceService,
              private orderService: OrderService) {
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
      this.findAllOrderByOrderCheck(this.customer.id);
      console.log(this.customer);
    });
  }

  findAllOrderByOrderCheck(id) {
    this.orderService.getAllOrderByCheckFalseAndCustomerId(id).subscribe((orders) => {
      this.orders = orders;
      for (const order of orders) {
        this.sumOfMoney = order.quantity * order.dish.price;
        this.quantity = order.quantity;
        this.merchantAdress = order.dish.merchant.address;
        this.merchantName = order.dish.merchant.name;
      }
      console.log(orders);
    });
  }

  increaseQuantityOfCartElement(idOrder) {
    this.orderService.increaseQuantityOfOrderElement(idOrder, this.quantity).subscribe(() => {
      this.findAllOrderByOrderCheck(this.customer.id);
    });
  }

  reduceQuantityOfCartElement(idOrder) {
    this.orderService.reduceQuantityOfOrderElement(idOrder, this.quantity).subscribe(() => {
      this.findAllOrderByOrderCheck(this.customer.id);
    });
  }
}
