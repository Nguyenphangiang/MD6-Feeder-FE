import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {
  merchant: Merchant;
  constructor(private activatedRouter: ActivatedRoute,
              private merchantService: MerchantServiceService,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = paraMap.get('id');
      this.showDetailMerchant(id);
    });
  }

  ngOnInit() {
  }
  showDetailMerchant(id) {
    this.merchantService.findById(id).subscribe((merchant) => {
      this.merchant = merchant;
    });
  }
}
