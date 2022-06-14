import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DishService} from '../../service/dish.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DishStatus} from '../../model/dish-status';
import {DishStatusService} from '../../service/dish-status.service';
import Swal from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId: number;
  selectedFile = new File(['none'], 'filename.jpg');
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
  idMerchant: string;
  imageLink;
  constructor(
    private dishService: DishService,
    private router: Router,
    private statusService: DishStatusService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.idMerchant = paramMap.get('idMerchant');
      this.getDishById();
    });
  }

  ngOnInit() {
    this.userId = this.temp.id;
    this.getStatus();
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
    this.imageLink = URL.createObjectURL(this.selectedFile);
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
      this.imageLink = 'assets/img/' + dish.image;
      this.dishForm = new FormGroup({
        id: new FormControl(dish.id),
        image: new FormControl(),
        name: new FormControl(dish.name),
        description: new FormControl(dish.description),
        price: new FormControl(dish.price),
        status: new FormControl(dish.status),
        merchant: new FormControl(dish.merchant)
      });
      alert('load Dish success!');
    }, () => {
      alert('load Dish success!');
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
    this.dishService.updateDish(this.id, this.idMerchant, dish).subscribe(() => {
      Swal.fire('Cập nhập thành công !!! ');
      this.backToDishList();
    }, () => {
      Swal.fire('Chọn trạng thái cho món ăn ');

    });
  }
  backToDishList() {
    this.router.navigateByUrl('/merchant/detail/user/' + this.userId);
  }
  deleteDish() {
    Swal.fire({
      title: 'Xóa món ăn này?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Quay lại'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dishService.deleteDish(this.id);
      }
    });
  }
}
