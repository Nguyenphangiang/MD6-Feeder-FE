import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-merchant-gold-list',
  templateUrl: './admin-merchant-gold-list.component.html',
  styleUrls: ['./admin-merchant-gold-list.component.css']
})
export class AdminMerchantGoldListComponent implements OnInit {
  merchants: Merchant[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.showListGoldMerchant();
  }
  showListGoldMerchant() {
    this.adminService.showAllGoldMerchant().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }
}
