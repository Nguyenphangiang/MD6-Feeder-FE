import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-dish-list-sold',
  templateUrl: './admin-dish-list-sold.component.html',
  styleUrls: ['./admin-dish-list-sold.component.css']
})
export class AdminDishListSoldComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.showSoldDish();
  }
  showSoldDish() {
    this.adminService.showSoldDish().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
