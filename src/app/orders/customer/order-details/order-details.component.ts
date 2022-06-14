import { Component, OnInit } from '@angular/core';
import {Order} from '../../../model/order';
import {OrderService} from '../../../service/order/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  id: number;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.id = +data.get('id');
    });
  }
  getOrder(id) {
    this.orderService.getOrderById(id).subscribe((data) => {
      this.order = data;
    }, error => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.getOrder(this.id);
  }
  orderStatusToString(status) {
    switch (status) {
      case 1:
        return 'Finding a shipper';
        break;
      case 2:
        return 'Order received';
        break;
      case 3:
        return 'Shipper is getting the package';
        break;
      case 4:
        return 'Your package has been picked up';
        break;
      case 5:
        return 'Your package is being delivered';
        break;
      case 6:
        return 'Your package has arrived';
        break;
      case 7:
        return 'No shipper found nearby';
        break;
      case 8:
        return 'Order canceled';
    }
  }
}
