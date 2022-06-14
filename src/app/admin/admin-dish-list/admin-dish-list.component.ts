import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dish-list',
  templateUrl: './admin-dish-list.component.html',
  styleUrls: ['./admin-dish-list.component.css']
})
export class AdminDishListComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.showAllDish();
  }
  showAllDish() {
    this.dishService.showAll().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
  changeDishRecommend(id) {
    this.dishService.addDishRecommend(id).subscribe(() => {
      Swal.fire('Thêm vào danh sách yêu thích');
      this.showAllDish();
    });
  }
}
