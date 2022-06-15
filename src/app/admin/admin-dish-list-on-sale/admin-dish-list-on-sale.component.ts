import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-dish-list-on-sale',
  templateUrl: './admin-dish-list-on-sale.component.html',
  styleUrls: ['./admin-dish-list-on-sale.component.css']
})
export class AdminDishListOnSaleComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.showAllDishOnSale();
  }
  showAllDishOnSale() {
    this.dishService.showSaleDish().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
  changeDishRecommend(id) {
    this.adminService.changeDishRecommend(id).subscribe(() => {
      this.showAllDishOnSale();
    });
  }
}
