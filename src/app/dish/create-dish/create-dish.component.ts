import {Component, OnInit} from '@angular/core';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DishStatus} from '../../model/dish-status';
import {DishStatusService} from '../../service/dish-status.service';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent implements OnInit {
  dish: Dish[] = [];
  status: DishStatus[] = [];
  userFile: any = File;
  dishForm: FormGroup = new FormGroup({
    image: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
  });

  id_merchant: string;

  constructor(private dishService: DishService,
              private statusService: DishStatusService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.id_merchant = paramMap.get('id_merchant');
    });
  }

  ngOnInit() {
    this.getStatus();
  }

  onselectFile(event: Event) {
    // @ts-ignore
    this.userFile = event.target.files[0];
  }

  createDish() {
    const dish = new FormData();
    dish.append('image', this.userFile);
    dish.append('name', this.dishForm.get('name').value);
    dish.append('description', this.dishForm.get('description').value);
    dish.append('price', this.dishForm.get('price').value);
    dish.append('status', this.dishForm.get('status').value);
    this.dishService.create(this.id_merchant, dish).subscribe(() => {
      alert('Thanh cong');
      this.dishForm.reset();
      this.router.navigateByUrl('merchant/' + this.id_merchant + '/dishes');
    });
  }

  getStatus() {
    this.statusService.getAllStatus().subscribe((data) => {
      this.status = data;
    }, (error) => {
      console.log(error);
    });
  }
}
