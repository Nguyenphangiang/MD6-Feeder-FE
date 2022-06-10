import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';

@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {
  @Input() idMerchant: number;
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.showAllDishByMerchant(this.idMerchant);
  }

  showAllDishByMerchant(id: number) {
    this.dishService.getAll(id).subscribe((dishes) => {
      this.dishes = dishes;
    }, (error) => {
      console.log(error);
    });
  }
}
