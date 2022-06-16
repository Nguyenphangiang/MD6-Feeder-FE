import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../service/invoice.service';
import {OrderAddress} from '../../model/order-address';
import {OrderService} from '../../service/order/order.service';
import {CustomerForm} from '../../model/customer-form';
import {Order} from "../../model/order";
import {FormControl, FormGroup} from "@angular/forms";

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
  merchantId: number;
  invoiceForm: FormGroup = new FormGroup({
    note: new FormControl(),
    date: new FormControl(null),
    customer: new FormControl(),
    invoiceStatus: new FormControl(null),
    orders: new FormControl(),
    merchant: new FormControl(),
    orderAdress: new FormControl(),
  });

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
        this.merchantId = order.dish.merchant.id;
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

  setStatusOrder(idOrder, order) {
    this.orderService.setStatusOfOrderElement(idOrder, order).subscribe(() => {
    });
  }

  createNewInvoice() {
    for (const order of this.orders) {
      this.setStatusOrder(order.id, order);
    }
    const invoice = this.invoiceForm.value;
    const customerId = this.customer.id;
    invoice.orders = this.orders;
    invoice.customer = {
      id: customerId
    };
    invoice.merchant = {
      id: this.merchantId
    };
    this.invoiceService.createNewInvoice(this.customer.id, invoice).subscribe(() => {
    });
  }

}
