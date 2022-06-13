import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  dishForm: FormGroup = new FormGroup({
    image: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
  });
  constructor(private dishService: DishService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getDishById(id);
    });
  }

  ngOnInit() {
  }

  private getDishById(id) {
    this.dishService.findDishById(id).subscribe((dish) => {
      this.dishForm = new FormGroup({
        id: new FormControl(dish.id),
        image: new FormControl(dish.image),
        name: new FormControl(dish.name),
        description: new FormControl(dish.description),
        price: new FormControl(dish.price),
        status: new FormControl(dish.status)
      });
    });
  }

  get idControl() {
    return this.dishForm.get('id');
  }

  delete() {
    this.dishService.deleteDish(this.idControl.value).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error); });
  }
}
