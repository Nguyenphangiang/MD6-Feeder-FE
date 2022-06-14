import { Component, OnInit } from '@angular/core';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute} from '@angular/router';
import {Dish} from '../../model/dish';

@Component({
  selector: 'app-find-dish-by-name',
  templateUrl: './find-dish-by-name.component.html',
  styleUrls: ['./find-dish-by-name.component.css']
})
export class FindDishByNameComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap) => {
      const dishName = paraMap.get('dishName');
      this.findDishByName(dishName);
    });
  }

  ngOnInit() {
  }
  findDishByName(name) {
    this.dishService.findDishByName(name).subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
