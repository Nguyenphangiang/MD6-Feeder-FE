import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DishStatus} from '../../model/dish-status';
import {DishStatusService} from '../../service/dish-status.service';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  selectedFile = new File(['none'], 'null');
  status: DishStatus[] = [];
  dishForm: FormGroup = new FormGroup({
    id: new FormControl(),
    image: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
    merchant: new FormControl()
  });
  id: number;
  id_merchant: string;
  image = null;
  constructor(
    private dishService: DishService,
    private router: Router,
    private statusService: DishStatusService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.id_merchant = paramMap.get('id_merchant');
      this.getDishById();
    });
  }

ngOnInit() {
    this.getStatus();
}

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
  }
  getStatus() {
    this.statusService.getAllStatus().subscribe((data) => {
      this.status = data;
    }, (error) => {
      console.log(error);
    });
  }
  private getDishById() {
     this.dishService.findDishById(this.id).subscribe((dish) => {
      this.image = dish.image;
      this.dishForm = new FormGroup({
        id: new FormControl(dish.id),
        image: new FormControl(),
        name: new FormControl(dish.name),
        description: new FormControl(dish.description),
        price: new FormControl(dish.price),
        status: new FormControl(),
        merchant: new FormControl(dish.merchant)
      });
      alert('load Dish success!');
    }, () => {
      alert('load Dish success!');
    });
  }
  onselectFile(event: Event) {
    // @ts-ignore
    this.userFile = event.target.files[0];
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
      this.router.navigateByUrl('merchant/' + this.id_merchant + '/dishes/edit/' + this.id );
    }, () => {
      alert('failed!');
    });
  }
  backToDishList() {
    event.preventDefault();
    this.router.navigateByUrl('merchant/' + this.id_merchant + '/dishes');
  }
}
