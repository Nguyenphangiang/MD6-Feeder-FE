import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {Order} from '../../model/order';
import Swal from 'sweetalert2';
import {MerchantServiceService} from '../../service/merchant-service.service';

@Component({
  selector: 'app-merchant-order',
  templateUrl: './merchant-order.component.html',
  styleUrls: ['./merchant-order.component.css']
})
export class MerchantOrderComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  idMerchant: number;
  orders: Order[];
  constructor(private orderService: OrderService,
              private merchantService: MerchantServiceService) {
    this.loadOrders();
  }
  ngOnInit() {
  }
  loadOrders() {
    this.merchantService.findMerchantByUserId(this.temp.id).subscribe((data) => {
      this.idMerchant = data.id;
      this.orderService.getOrdersByMerchantId(this.idMerchant).subscribe((data1) => {
        this.orders = data1;
      }, () => {
        Swal.fire('Không tải được các đơn hàng của quán!');
      });
    }, () => {
      Swal.fire('Không tìm được merchant!');
    });
  }
}
