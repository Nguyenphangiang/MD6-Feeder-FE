import { Component, OnInit } from '@angular/core';
import {Order} from '../interface/order';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getAllOrder();
  }

  getAllOrder() {
    this.orderService.getAllOrder().subscribe((data) => {
      this.orderList = data;
    }, error => {
      console.log(error);
    });
  }
  orderStatusToString(status) {
    switch (status) {
      case 1:
        return 'finding you a shipper';
        break;
      case 2:
        return 'order accepted';
        break;
      case 3:
        return 'shipper is getting your package';
        break;
      case 4:
        return 'your package has been picked up';
        break;
      case 5:
        return 'your package is being delivered';
        break;
      case 6:
        return 'your package delivering is completed';
        break;
      case 7:
        return 'no shipper found nearby';
        break;
      case 8:
        return 'canceled';
    }
  }

}
