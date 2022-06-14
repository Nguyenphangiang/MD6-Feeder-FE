import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';

@Component({
  selector: 'app-list-dish-favorite',
  templateUrl: './list-dish-favorite.component.html',
  styleUrls: ['./list-dish-favorite.component.css']
})
export class ListDishFavoriteComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.showFavoriteDishList();
  }
  showFavoriteDishList() {
    this.dishService.showDishRecommend().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
