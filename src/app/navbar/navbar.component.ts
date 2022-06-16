import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../service/cart.service';
import {AppUserServiceService} from '../service/app-user-service.service';
import {CustomerForm} from '../model/customer-form';
import {CartElement} from '../model/cart-element';
import Swal from 'sweetalert2';
import {Order} from '../model/order';
import {Invoice} from '../model/invoice';
import {OrderService} from '../service/order/order.service';
import {MerchantServiceService} from '../service/merchant-service.service';
import {DishService} from '../service/dish.service';
import {InvoiceService} from '../service/invoice.service';
import {Dish} from '../model/dish';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  username: string;
  userId: number;
  display: string;
  roles: any;
  role: string;
  carts: CartElement [] = [];
  cartLength: number;
  customer: CustomerForm;
  authority = 0;
  orderElement: Order = {};
  invoice: Invoice = {};
  orders: Order[] = [];
  merchantAdress: any;
  merchantName: any;
  merchantId: number;
  sumOfMoney1: number;
  cartElement: CartElement;
  dish: Dish;
  sumOfMoney: number;
  quantity: number;
  constructor(private activatedRouter: ActivatedRoute,
              private merchantService: MerchantServiceService,
              private router: Router,
              private dishService: DishService,
              private cartElementService: CartService,
              private customerService: AppUserServiceService,
              private orderService: OrderService,
              private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    if (this.user == null) {
      this.display = null;
    } else {
      this.username = this.temp.username;
      this.userId = this.temp.id;
      this.display = `Welcome ${this.username}`;
      this.roles = this.temp.roles;
      this.role = this.roles.pop().authority;
      if (this.role === 'ROLE_USER') {
        this.authority = 1;
      } else if (this.role === 'ROLE_MERCHANT') {
        this.authority = 2;
      } else {
        this.authority = 3;
      }
      console.log(this.authority);
      console.log(this.role);
      console.log(this.roles);
      console.log(this.temp);
    }
    this.findCustomerByUserId(this.temp.id);
  }

  logout() {
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }

  findCustomerByUserId(userId) {
    this.customerService.showDetailCustomer(userId).subscribe((customer) => {
      this.customer = customer;
      this.findAllOrderByOrderCheck(this.customer.id);
      this.getAllCartElement();
    });
  }

  getAllCartElement() {
    this.cartElementService.getAllCartElement(this.customer.id).subscribe((carts) => {
      this.carts = carts;
      this.sumOfMoney = 0;
      this.cartLength = carts.length;
      for (const cart of carts) {
        this.sumOfMoney += cart.quantity * cart.dish.price;
      }
    });
  }
  findAllOrderByOrderCheck(id) {
    this.orderService.getAllOrderByCheckFalseAndCustomerId(id).subscribe((orders) => {
      this.orders = orders;
      for (const order of orders) {
        this.sumOfMoney1 = order.quantity * order.dish.price;
        this.quantity = order.quantity;
        this.merchantAdress = order.dish.merchant.address;
        this.merchantName = order.dish.merchant.name;
        this.merchantId = order.dish.merchant.id;
      }
      console.log(orders);
    });
  }
  removeAllCartElementToOrder() {
    if (this.carts.length === 0) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Đã đặt gì đâu mà đòi thanh toán :) !'
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Thanh toán nhanh không đói nàooooo !'
      });
    }
    this.cartElementService.removeAllCartElement(this.customer.id).subscribe(() => {
      this.router.navigateByUrl(`/invoice/create`);
    });
  }
  createNewOrder(or: any) {
    this.orderService.createNewOrder(or).subscribe(() => {
    });
  }

  removeAllOrderElement() {
    this.orderService.deleteAllOrderByCheckFalseAndCustomerId(this.customer.id).subscribe(() => {
    });
  }

  addNewOrderElement() {
    if (this.orders.length === 0) {
      for (const cart of this.carts) {
        this.orderElement.quantity = cart.quantity;
        this.orderElement.dish = cart.dish;
        this.orderElement.customer = cart.customer;
        this.orderElement.ordercheck = false;
        this.createNewOrder(this.orderElement);
        // this.orderService.createNewOrder(this.orderElement).subscribe(() => {
        // this.orders.push(this.orderElement);
        // });
      }
      // console.log(this.orders);
      this.removeAllCartElementToOrder();
    } else {
      Swal.fire({
        title: 'Bạn đang có đơn chưa hoàn thành',
        text: 'Bạn có muốn đặt lại đơn đó không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ' Tôi muốn đặt đơn mới!',
        cancelButtonText: ' Tôi muốn đặt lại đơn cũ!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeAllOrderElement();
          for (const cart of this.carts) {
            this.orderElement.quantity = cart.quantity;
            this.orderElement.dish = cart.dish;
            this.orderElement.customer = cart.customer;
            this.orderElement.ordercheck = false;
            this.createNewOrder(this.orderElement);
            // this.orderService.createNewOrder(this.orderElement).subscribe(() => {
            // this.orders.push(this.orderElement);
            // });
          }
          // console.log(this.orders);
          this.removeAllCartElementToOrder();
          Swal.fire(
            'Mời bạn đặt đơn mới!',
            '',
            'success'
          );
        } else {
          this.removeAllCartElementToOrder();
        }
      });
    }
  }
}
