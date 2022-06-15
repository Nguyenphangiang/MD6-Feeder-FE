import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';

@Component({
  selector: 'app-admin-dish-list-love',
  templateUrl: './admin-dish-list-love.component.html',
  styleUrls: ['./admin-dish-list-love.component.css']
})
export class AdminDishListLoveComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.showAllDishRecommend();
  }
  showAllDishRecommend() {
    this.dishService.showDishRecommend().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
