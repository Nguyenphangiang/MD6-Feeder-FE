import { Component, OnInit } from '@angular/core';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent implements OnInit {
  dish: Dish = {};
  userFile: any = File;
  dishForm: FormGroup = new FormGroup({
    image: new FormControl(),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(),
    price: new FormControl('', [Validators.required]),
    status: new FormControl(),
  });

  id: string;
  constructor(private dishService: DishService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }

  ngOnInit() {
  }

  onselectFile(event: Event) {
    // @ts-ignore
    this.userFile = event.target.files[0];
  }

  createDish(id: number) {
      const dish = new FormData();
      dish.append('image', this.userFile);
      dish.append('name', this.dishForm.get('name').value);
      dish.append('description', this.dishForm.get('description').value);
      dish.append('price', this.dishForm.get('price').value);
      dish.append('status', this.dishForm.get('status').value);
      this.dishService.create(id, dish).subscribe(() => {
     alert('Thanh cong');
      });
      this.dishForm.reset();
  }
}
