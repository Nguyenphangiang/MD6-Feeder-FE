import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantServiceService} from '../../service/merchant-service.service';

@Component({
  selector: 'app-merchant-gold-list',
  templateUrl: './merchant-gold-list.component.html',
  styleUrls: ['./merchant-gold-list.component.css']
})
export class MerchantGoldListComponent implements OnInit {
  merchants: Merchant[] = [];
  constructor(private merchantService: MerchantServiceService) { }

  ngOnInit() {
    this.showListGoldMerchant();
  }
  showListGoldMerchant() {
    this.merchantService.findAllGoldMerchant().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }
}
