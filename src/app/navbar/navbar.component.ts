import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../service/cart.service';
import {AppUserServiceService} from '../service/app-user-service.service';
import {CustomerForm} from '../model/customer-form';
import {CartElement} from '../model/cart-element';
import Swal from 'sweetalert2';

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
  sumOfMoney: number;

  constructor(private router: Router,
              private cartElementService: CartService,
              private customerService: AppUserServiceService) {
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

  removeAllCartElementToOrder() {
    this.cartElementService.removeAllCartElement(this.customer.id).subscribe(() => {
      this.getAllCartElement();
    });
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
        icon: 'success',
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
  }
}
