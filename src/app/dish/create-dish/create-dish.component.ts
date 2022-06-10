import { Component, OnInit } from '@angular/core';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


}
