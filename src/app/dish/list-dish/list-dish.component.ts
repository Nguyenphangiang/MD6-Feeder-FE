import { Component, OnInit } from '@angular/core';
import {DishService} from '../../service/dish.service';
import {Router} from '@angular/router';
import {Dish} from '../../model/dish';

@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService,
              private router: Router) { }

  ngOnInit() {
    this.showAllDish();
  }
  showAllDish() {
    this.dishService.showAll().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
