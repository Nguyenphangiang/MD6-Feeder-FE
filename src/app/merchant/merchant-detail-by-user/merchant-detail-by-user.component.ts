import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {ActivatedRoute} from '@angular/router';
import {Merchant} from '../../model/merchant';
import {MerchantForm} from '../../model/merchant-form';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-merchant-detail-by-user',
  templateUrl: './merchant-detail-by-user.component.html',
  styleUrls: ['./merchant-detail-by-user.component.css']
})
export class MerchantDetailByUserComponent implements OnInit {
  dishes: Dish[] = [];
  merchant: Merchant = {};
  id: number;
  constructor(private merchantService: MerchantServiceService,
              private activatedRouter: ActivatedRoute,
              private dishService: DishService) {
    this.activatedRouter.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.findMerchantDetailByUserId(id);
    });
  }

  ngOnInit() {
  }
  findMerchantDetailByUserId(id) {
    this.merchantService.findMerchantByUserId(id).subscribe((merchant) => {
      this.merchant = merchant;
      this.id = merchant.id;
      this.findDishByMerchantId(merchant.id);
    });
  }
  findDishByMerchantId(id) {
    this.dishService.getAll(id).subscribe((dishes) => {
      this.dishes = dishes;
    });
  }

  deleteDish(id) {
    event.preventDefault();
    Swal.fire({
      title: 'Xóa món ăn này?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Quay lại'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dishService.deleteDish(id).subscribe(() => {
          Swal.fire('Xóa thành công');
          this.findDishByMerchantId(this.id);
        }, () => {
          Swal.fire('Xóa thất  bại');
        });
      }
    });
  }
}
