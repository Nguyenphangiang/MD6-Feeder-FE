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
import {OrderService} from '../../service/order/order.service';
import {Order} from '../../model/order';
import {InvoiceService} from '../../service/invoice.service';
import {Invoice} from '../../model/invoice';


@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {
  merchant: Merchant = {};
  dishes: Dish[] = [];
  carts: CartElement [] = [];
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId: number;
  quantity: number;
  checkDish: number;
  checkMerchant: number;
  customer: CustomerForm;
  sumOfMoney: number;
  cartElement: CartElement;
  dish: Dish;
  orderElement: Order = {};
  invoice: Invoice = {};
  orders: Order[] = [];
  merchantAdress: any;
  merchantName: any;
  merchantId: number;
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
              private customerService: AppUserServiceService,
              private orderService: OrderService,
              private invoiceService: InvoiceService) {
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
    // this.findAllOrderByOrderCheck(this.customer.id);
    // this.getAllCartElement();
  }

  showDetailMerchant(id) {
    this.merchantService.findById(id).subscribe((merchant) => {
      this.merchant = merchant;
    });
  }

  showAllDishMerchant(id) {
    this.dishService.getAll(id).subscribe((dish) => {
      this.dishes = dish;
    });
  }

  findCustomerByUserId(userId) {
    this.customerService.showDetailCustomer(userId).subscribe((customer) => {
      this.customer = customer;
      this.findAllOrderByOrderCheck(this.customer.id);
      this.getAllCartElement();
    });
  }

  findDishById(dishId) {
    this.dishService.findDishById(dishId).subscribe((dish) => {
      this.dish = dish;
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
      }
      for (const cart of carts1) {
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

  addNewOrderElement(carts) {
    if (this.orders.length === 0) {
      for (const cart of carts) {
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
          for (const cart of carts) {
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

  // addNewInvoiceElement(orders) {
  //   this.invoice.invoiceStatus = null;
  //   this.invoice.date = null;
  //   this.invoice.orders = orders;
  //   this.invoice.note = null;
  //   this.invoice.merchant = this.merchant;
  //   this.invoiceService.createNewInvoice(this.customer.id, this.invoice).subscribe(() => {
  //     const id = this.invoice.id;
  //     console.log('id nè ' + id);
  //   });
  //   // this.invoiceService.createNewInvoice(this.customer.id, this.invoice).subscribe(() => {
  //   // this.removeAllCartElementToOrder(this.invoice);
  //   // });
  // }
  //
  // createNewInvoice(idCustomer: any, invoice: any) {
  //   this.invoiceService.createNewInvoice(idCustomer, invoice).subscribe(() => {
  //     const id = invoice.id;
  //     console.log('id nè ' + id);
  //   });
  // }
}
