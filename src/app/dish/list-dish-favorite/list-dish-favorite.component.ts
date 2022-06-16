import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import Swal from 'sweetalert2';
import {CustomerForm} from '../../model/customer-form';
import {CartElement} from '../../model/cart-element';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CartService} from '../../service/cart.service';
import {AppUserServiceService} from '../../service/app-user-service.service';

@Component({
  selector: 'app-list-dish-favorite',
  templateUrl: './list-dish-favorite.component.html',
  styleUrls: ['./list-dish-favorite.component.css']
})
export class ListDishFavoriteComponent implements OnInit {
  dishes: Dish[] = [];
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  customer: CustomerForm;
  carts: CartElement [] = [];
  quantity: number;
  sumOfMoney: number;
  checkDish: number;
  checkMerchant: number;
  cartForm: FormGroup = new FormGroup({
    customer1: new FormControl(),
    dish: new FormControl(),
    status: new FormControl(),
    quantity: new FormControl(this.quantity = 1),
    note: new FormControl(),
  });

  constructor(private dishService: DishService,
              private router: Router,
              private cartElementService: CartService,
              private customerService: AppUserServiceService) {
  }

  ngOnInit() {
    this.showFavoriteDishList();
    this.findCustomerByUserId(this.temp.id);
  }

  showFavoriteDishList() {
    this.dishService.showDishRecommend().subscribe((dishes) => {
      this.dishes = dishes;
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
      this.sumOfMoney = 0;
      for (const cart of carts) {
        this.sumOfMoney += cart.quantity * cart.dish.price;
        this.quantity = cart.quantity;
      }
    });
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

  createNewCartElement(idDish, idMerchant, nameMerchant, nameDish) {
    const cartElement = this.cartForm.value;
    const customer2 = this.customer;
    const carts1 = this.carts;
    let merchantName = '';
    cartElement.customer1 = {
      id: customer2
    };
    cartElement.dish = {
      id: idDish
    };
    if (this.carts.length === 0) {
      this.checkMerchant = 1;
      this.checkDish = 2;
    } else {
      for (const cart of carts1) {
        if (idDish === cart.dish.id) {
          this.checkDish = 1;
          break;
        } else {
          this.checkDish = 2;
        }
        if (idMerchant === cart.dish.merchant.id) {
          this.checkMerchant = 1;
        } else {
          this.checkMerchant = 2;
        }
        merchantName = cart.dish.merchant.name;
      }
    }
    if (this.checkMerchant === 1) {
      if (this.checkDish !== 1) {
        this.cartElementService.addCartElement(this.customer.id, cartElement.dish.id, cartElement).subscribe(() => {
          this.getAllCartElement();
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
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
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
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
    } else {
      Swal.fire({
        title: 'Tạo một giỏ hàng mới ?',
        text: 'Thêm món ăn này từ ' + nameMerchant + 'sẽ xóa giỏ hàng của' + merchantName + ' .Tiếp tục?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đúng tôi muốn đặt cửa hàng khác!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartElementService.removeAllCartElement(this.customer.id).subscribe(() => {
            this.createNewCartElement1(this.customer.id, idDish, cartElement, nameDish, nameMerchant);
            this.getAllCartElement();
          });
          // this.createNewCartElement(idDish, idMerchant, nameMerchant, nameDish);
        }
      });
    }
  }

  createNewCartElement1(idCustomer, idDish, cartElement, nameDish, nameMerchant) {
    this.cartElementService.addCartElement(idCustomer, idDish, cartElement).subscribe(() => {
      this.getAllCartElement();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Đã thêm món ' + nameDish + ' tại cửa hàng ' + nameMerchant,
      });
    });
  }
}
