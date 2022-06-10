import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {HomeService} from '../../service/home.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find-merchant-by-name',
  templateUrl: './find-merchant-by-name.component.html',
  styleUrls: ['./find-merchant-by-name.component.css']
})
export class FindMerchantByNameComponent implements OnInit {
  merchants: Merchant[] = [];
  name: string;
  constructor(private homeService: HomeService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      this.name = paraMap.get('name');
      console.log(this.name);
      this.findMerchantByName();
    });
  }

  ngOnInit() {
  }
  findMerchantByName() {
    this.homeService.findMerchant(this.name).subscribe((merchant) => {
      console.log(merchant);
      this.merchants = merchant;
    });
  }
}
