import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-admin-merchant-list',
  templateUrl: './admin-merchant-list.component.html',
  styleUrls: ['./admin-merchant-list.component.css']
})
export class AdminMerchantListComponent implements OnInit {
  merchants: Merchant[] = [];
  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
    this.showMerchantList();
  }
  showMerchantList() {
    this.adminService.showListMerchant().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }
  activeMerchant(id) {
    this.adminService.activeMerchant(id).subscribe(() => {
        this.showMerchantList();
      }
    );
  }

  blockMerchant(id) {
    this.adminService.blockMerchant(id).subscribe(() => {
        this.showMerchantList();
      }
    );
  }

  deleteMerchant(id) {
    this.adminService.deleteMerchant(id).subscribe(() => {
      this.showMerchantList();
    });
  }

  setGold(id: number) {
    this.adminService.setGoldPartner(id).subscribe(() => {
      this.showMerchantList();
    });
  }
}
