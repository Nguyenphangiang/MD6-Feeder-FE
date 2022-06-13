import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Merchant} from '../../model/merchant';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {CartService} from '../../service/cart.service';
import {CartElement} from '../../model/cart-element';
import {AppUserServiceService} from '../../service/app-user-service.service';
import {CustomerForm} from '../../model/customer-form';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {
  merchant: Merchant = {};
  dish: Dish[] = [];
  carts: CartElement [] = [];
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId: number;
  quantity: number;
  check: number;
  customer: CustomerForm;
  sumOfMoney: number;
  cartElement: CartElement;
  dish1: Dish;
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
      const id = +paraMap.get('id');
      this.showDetailMerchant(id);
      this.showAllDishMerchant(id);
      this.findCustomerByUserId(this.temp.id);

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

  findDishById(dishId) {
    this.dishService.findDishById(dishId).subscribe((dish) => {
      this.dish1 = dish;
    });
  }

  getAllCartElement() {
    this.cartElementService.getAllCartElement(this.customer.id).subscribe((carts) => {
      this.carts = carts;
      this.sumOfMoney = 0;
      for (const cart of carts) {
        this.sumOfMoney += cart.quantity * cart.dish.price;
        this.quantity = cart.quantity;
      }
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
        if (this.carts.length === 1) {
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
            title: 'Người có tâm hồn đẹp như bạn nên chọn thêm món '
          });
        }
        if (this.carts.length === 2) {
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
            title: 'Mua 2 món chưa đủ chất dinh dưỡng đâu :3 '
          });
        }
        if (this.carts.length === 3) {
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
            title: 'Thôi thì thêm món nữa để thay đổi khẩu vị cho đỡ ngán đi <3 '
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
            title: 'Bạn mà số 2 thì không ai số 1 hí hí :v '
          });
        }
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
        icon: 'error',
        title: 'Ôi bạn ơi! Món này chọn rồi'
      });
    }

  }

  increaseQuantityOfCartElement(idCart: number) {
    this.cartElementService.increaseQuantityOfCartElement(idCart, this.quantity).subscribe(() => {
      this.getAllCartElement();
    });
  }

  reduceQuantityOfCartElement(idCart) {
    this.cartElementService.reduceQuantityOfCartElement(idCart, this.quantity).subscribe(() => {
      this.getAllCartElement();
    });
  }

  removeCartElement(idCart) {
    Swal.fire({
      title: 'Chắc chưa?',
      text: 'Đồ ăn ngon lắm đấyyyyy!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartElementService.removeCartElement(idCart).subscribe(() => {
          this.getAllCartElement();
        });
        Swal.fire(
          'Xóa rồi đấy!',
          'Cuộc đời của bạn đã trở nên vô nghĩa',
          'success'
        );
      }
    });
  }

  removeAllCartElementToOrder() {
    this.cartElementService.removeAllCartElement(this.customer.id).subscribe(() => {
      this.getAllCartElement();
    });
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
