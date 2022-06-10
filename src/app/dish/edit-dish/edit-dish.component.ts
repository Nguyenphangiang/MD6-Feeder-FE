import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  selectedFile = new File(['name'], 'filename.jpg');
  dishForm: FormGroup = new FormGroup({
    id: new FormControl(),
    image: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
  });
  id: number;
  id_merchant: string;
  image = null;
  constructor(
    private dishService: DishService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.id_merchant = paramMap.get('id');
      this.getDishById(this.id);
    });
  }

ngOnInit() {}

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
  }
  private getDishById(id: number) {
    return this.dishService.findDishById(id).subscribe((dish) => {
      this.image = dish.image;
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
  edit() {
    const dish: FormData = new FormData();
    dish.append('id', this.dishForm.get('id').value);
    dish.append('image', this.selectedFile);
    dish.append('name', this.dishForm.get('name').value);
    dish.append('description', this.dishForm.get('description').value);
    dish.append('price', this.dishForm.get('price').value);
    dish.append('status', this.dishForm.get('status').value);
    this.dishService.updateDish(this.id, this.id_merchant, dish).subscribe(() => {
      alert('Đã sửa thành công');
    });
  }

}
