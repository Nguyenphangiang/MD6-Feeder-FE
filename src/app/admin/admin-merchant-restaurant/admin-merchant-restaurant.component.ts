import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-admin-merchant-restaurant',
  templateUrl: './admin-merchant-restaurant.component.html',
  styleUrls: ['./admin-merchant-restaurant.component.css']
})
export class AdminMerchantRestaurantComponent implements OnInit {
  merchants: Merchant[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.showAllRestaurant();
  }
  showAllRestaurant() {
    this.adminService.showAllMerchantRestaurant().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }
}
