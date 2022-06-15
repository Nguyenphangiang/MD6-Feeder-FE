import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerForm} from '../../model/customer-form';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: Order[] = [];
  customerAddressList: string[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    // this.getAllOrder();
  }

  // getAllOrder() {
  //   this.orderService.getAllOrder().subscribe((data) => {
  //     this.orderList = data;
  //     this.orderList.forEach(order => {
  //       if (!this.customerAddressList.includes(order.customer.address)) {
  //         this.customerAddressList.push(order.customer.address);
  //       }
  //     });
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  orderStatusToString(status) {
    switch (status) {
      case 1:
        return 'Finding you a shipper';
        break;
      case 2:
        return 'Order accepted';
        break;
      case 3:
        return 'Shipper is getting your package';
        break;
      case 4:
        return 'Your package has been picked up';
        break;
      case 5:
        return 'Your package is being delivered';
        break;
      case 6:
        return 'Your package delivering is completed';
        break;
      case 7:
        return 'No shipper found nearby';
        break;
      case 8:
        return 'Canceled';
    }
  }

}
