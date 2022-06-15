import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';

@Component({
  selector: 'app-admin-dish-list-on-sale',
  templateUrl: './admin-dish-list-on-sale.component.html',
  styleUrls: ['./admin-dish-list-on-sale.component.css']
})
export class AdminDishListOnSaleComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.showAllDishOnSale();
  }
  showAllDishOnSale() {
    this.dishService.showSaleDish().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
