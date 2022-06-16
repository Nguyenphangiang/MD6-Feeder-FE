import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import Swal from 'sweetalert2';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-dish-list',
  templateUrl: './admin-dish-list.component.html',
  styleUrls: ['./admin-dish-list.component.css']
})
export class AdminDishListComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.showAllDish();
  }
  showAllDish() {
    this.dishService.showAll().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
  changeDishRecommend(id) {
    this.adminService.changeDishRecommend(id).subscribe(() => {
      this.showAllDish();
    });
  }
}
