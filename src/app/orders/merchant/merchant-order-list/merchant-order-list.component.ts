import { Component, OnInit } from '@angular/core';
import {Order} from '../../../model/order';
import {OrderService} from '../../../service/order/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-merchant-order-list',
  templateUrl: './merchant-order-list.component.html',
  styleUrls: ['./merchant-order-list.component.css']
})
export class MerchantOrderListComponent implements OnInit {
  orderList: Order[] = [];
  customerAddressList: string[] = [];
  id: number;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.id = +data.get('id');
    });
  }

  ngOnInit() {
    this.getAllOrder(this.id);
  }

  getAllOrder(id) {
    this.orderService.getOrderByMerchantId(id).subscribe((data) => {
      this.orderList = data;
      this.orderList.forEach(order => {
        if (!this.customerAddressList.includes(order.customer.address)) {
          this.customerAddressList.push(order.customer.address);
        }
      });
    }, error => {
      console.log(error);
    });
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
