import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {ActivatedRoute} from '@angular/router';
import {Merchant} from '../../model/merchant';
import {MerchantForm} from '../../model/merchant-form';

@Component({
  selector: 'app-merchant-detail-by-user',
  templateUrl: './merchant-detail-by-user.component.html',
  styleUrls: ['./merchant-detail-by-user.component.css']
})
export class MerchantDetailByUserComponent implements OnInit {
  merchant: Merchant;
  constructor(private merchantService: MerchantServiceService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.findMerchantDetailByUserId(id);
    });
  }

  ngOnInit() {
  }
  findMerchantDetailByUserId(id) {
    this.merchantService.findMerchantByUserId(id).subscribe((merchant) => {
      this.merchant = merchant;
    });
  }
}
