import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CartService} from '../../service/cart.service';
import {AppUserServiceService} from '../../service/app-user-service.service';
import {CustomerForm} from '../../model/customer-form';
import {CartElement} from '../../model/cart-element';
import {FormControl, FormGroup} from '@angular/forms';
declare var jQuery: any;
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish: Dish = {};
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
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private cartElementService: CartService,
              private customerService: AppUserServiceService) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.showDishDetail(id);
    });
  }

  ngOnInit() {
    this.findCustomerByUserId(this.temp.id);
  }
  showDishDetail(id) {
    this.dishService.findDishById(id).subscribe((dish) => {
      this.dish = dish;
    });
  }
  merchantList(id) {
    this.router.navigateByUrl(`/merchant/detail/${id}`);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    // tslint:disable-next-line:only-arrow-functions
    (function($) {
      // tslint:disable-next-line:only-arrow-functions
      $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
          nav: true,
          navText: ['<i class=\'icofont-arrow-left\'></i>', '<i class=\'icofont-arrow-right\'></i>'],
          items: 3,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false
        });
      });
    })(jQuery);
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
      title: 'Ch???c ch??a?',
      text: '????? ??n ngon l???m ?????yyyyy!',
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
          'X??a r???i ?????y!',
          'Cu???c ?????i c???a b???n ???? tr??? n??n v?? ngh??a',
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
      title: 'Thanh to??n nhanh kh??ng ????i n??ooooo !'
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
            title: 'B???n m?? s??? 2 th?? kh??ng ai s??? 1 h?? h?? :v '
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
          title: '??i b???n ??i! M??n n??y ch???n r???i'
        });
      }
    } else {
      Swal.fire({
        title: 'T???o m???t gi??? h??ng m???i ?',
        text: 'Th??m m??n ??n n??y t??? ' + nameMerchant + 's??? x??a gi??? h??ng c???a' + merchantName + ' .Ti???p t???c?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '????ng t??i mu???n ?????t c???a h??ng kh??c!'
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
        title: '???? th??m m??n ' + nameDish + ' t???i c???a h??ng ' + nameMerchant,
      });
    });
  }
}
