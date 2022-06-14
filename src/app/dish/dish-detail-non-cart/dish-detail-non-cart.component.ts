import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
declare var jQuery: any;
@Component({
  selector: 'app-dish-detail-non-cart',
  templateUrl: './dish-detail-non-cart.component.html',
  styleUrls: ['./dish-detail-non-cart.component.css']
})
export class DishDetailNonCartComponent implements OnInit {
  dish: Dish;
  constructor(private dishService: DishService,
              private activatedRouter: ActivatedRoute,
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
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    // tslint:disable-next-line:only-arrow-functions
    (function($) {
      // tslint:disable-next-line:only-arrow-functions
      $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
          nav: true,
          navText: ['<i class=\'icofont-arrow-left\'></i>', '<i class=\'icofont-arrow-right\'></i>'],
          items: 3,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false
        });
      });
    })(jQuery);
  }

  dishList() {
    this.router.navigateByUrl('/admin/dish/list');
  }

  merchantList(id) {
    this.router.navigateByUrl(`/merchant/detail/${id}`);
  }

  changeRecommend(id) {
    this.dishService.addDishRecommend(id).subscribe(() => {
      Swal.fire('Thêm yêu thích thành công');
    }, () => {
      Swal.fire('Thêm yêu thích thất bại');
  });
  }
}
