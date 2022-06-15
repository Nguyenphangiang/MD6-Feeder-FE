import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import Swal from 'sweetalert2';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-admin-dish-detail',
  templateUrl: './admin-dish-detail.component.html',
  styleUrls: ['./admin-dish-detail.component.css']
})
export class AdminDishDetailComponent implements OnInit {
  dish: Dish;
  constructor(private adminService: AdminService,
              private activatedRouter: ActivatedRoute,
              private dishService: DishService ,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.showDishDetail(id);
    });
  }

  ngOnInit() {
  }
  showDishDetail(id) {
    this.dishService.findDishById(id).subscribe((dish) => {
      this.dish = dish;
    });
  }
  changeRecommend(id) {
    this.adminService.changeDishRecommend(id).subscribe(() => {
      this.showDishDetail(id);
    }, () => {
      Swal.fire('Thêm yêu thích thất bại');
    });
  }

  dishList() {
    this.router.navigateByUrl('/admin/dish/list');
  }

  merchantList(id: number) {
    this.router.navigateByUrl(`/merchant/detail/${id}`);
  }
}
