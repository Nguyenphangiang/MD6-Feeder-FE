import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Merchant} from '../../model/merchant';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {CartService} from '../../service/cart.service';
import {CartElement} from '../../model/cart-element';
import {AppUserServiceService} from "../../service/app-user-service.service";
import {CustomerForm} from "../../model/customer-form";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {
  merchant: Merchant;
  dish: Dish[] = [];
  carts: CartElement [] = [];
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId: number;
  quantity: number;
  check: number;
  customer: CustomerForm;
  cartForm: FormGroup = new FormGroup({
    customer1: new FormControl(),
    dish: new FormControl(),
    quantity: new FormControl(this.quantity = 1),
    note: new FormControl(),
  });

  constructor(private activatedRouter: ActivatedRoute,
              private merchantService: MerchantServiceService,
              private router: Router,
              private dishService: DishService,
              private cartElementService: CartService,
              private customerService: AppUserServiceService) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = paraMap.get('id');
      this.showDetailMerchant(id);
      this.showAllDishMerchant(id);
    });
  }

  ngOnInit() {
    this.userId = this.temp.id;
    this.findCustomerByUserId(this.temp.id);
  }

  showDetailMerchant(id) {
    this.merchantService.findById(id).subscribe((merchant) => {
      this.merchant = merchant;
    });
  }

  showAllDishMerchant(id) {
    this.dishService.getAll(id).subscribe((dish) => {
      this.dish = dish;
    });
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
    });
  }

  createNewCartElement(idDish) {
    const cartElement = this.cartForm.value;
    const customer2 = this.customer;
    const carts1 = this.carts;
    cartElement.customer1 = {
      id: customer2
    };
    cartElement.dish = {
      id: idDish
    };
    for (const cart of carts1) {
      if (idDish === cart.dish.id) {
        this.check = 1;
        break;
      } else {
        this.check = 2;
      }
    }
    if (this.check !== 1) {
      this.cartElementService.addCartElement(this.customer.id, cartElement.dish.id, cartElement).subscribe(() => {
        this.getAllCartElement();
        alert('Tạo thành công');
      });
    } else {
      alert('đã có trong giỏ hàng');
    }
  }
}
