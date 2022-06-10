import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Merchant} from '../../model/merchant';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  uploadUrlOfDAT = environment.uploadURLofDAT;
  id: string;
  dishes: Dish[];
  merchant: Merchant;
  constructor(private dishService: DishService,
              private merchantService: MerchantServiceService,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe((paraMap) => {
      this.id = paraMap.get('id');
      this.getMerchantInfo();
      this.findAllDish();
    });
  }
  ngOnInit() {
  }
  findAllDish() {
    this.dishService.getAll(this.id).subscribe((data) => {
      this.dishes = data;
      alert('get all dishes success!');
    }, () => {
      alert('get all dishes failed!');
    });
  }
  getMerchantInfo() {
    this.merchantService.findById(this.id).subscribe((data) => {
      this.merchant = data;
      alert('Merchant info load success!');
    }, () => {
      alert('Merchant info load failed!');
    });
  }
}
