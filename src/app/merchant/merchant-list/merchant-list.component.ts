import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantServiceService} from '../../service/merchant-service.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants: Merchant[] = [];
  constructor(private merchantService: MerchantServiceService) { }

  ngOnInit() {
    this.showAllMerchant();
  }
  showAllMerchant() {
    this.merchantService.findAll().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }
}
