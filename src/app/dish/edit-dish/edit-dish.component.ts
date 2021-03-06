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
    dishStatus: new FormControl(),
    merchant: new FormControl()
  });
  id: number;
  idMerchant: string;
  imageLink;
  check = false;
  constructor(
    private dishService: DishService,
    private router: Router,
    private statusService: DishStatusService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.idMerchant = paramMap.get('idMerchant');
      this.getDishById(this.id);
    });
  }

  ngOnInit() {
    this.userId = this.temp.id;
    this.getStatus();
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
    this.check = true;
    this.imageLink = URL.createObjectURL(this.selectedFile);
  }
  getStatus() {
    this.statusService.getAllStatus().subscribe((data) => {
      this.status = data;
    }, (error) => {
      console.log(error);
    });
  }

  private getDishById(id) {
    this.dishService.findDishById(id).subscribe((dish) => {
      this.imageLink = 'assets/img/' + dish.image;
      this.dishForm = new FormGroup({
        id: new FormControl(dish.id),
        image: new FormControl(),
        name: new FormControl(dish.name),
        description: new FormControl(dish.description),
        price: new FormControl(dish.price),
        dishStatus: new FormControl(dish.dishStatus),
        merchant: new FormControl(dish.merchant)
      });
    }, () => {
      Swal.fire('T???i th??ng tin m??n ??n th???t b???i!!');
    });
  }

  edit() {
    const dish: FormData = new FormData();
    dish.append('id', this.dishForm.get('id').value);
    dish.append('image', this.selectedFile);
    dish.append('name', this.dishForm.get('name').value);
    dish.append('description', this.dishForm.get('description').value);
    dish.append('price', this.dishForm.get('price').value);
    dish.append('dishStatus', this.dishForm.get('dishStatus').value);
    this.dishService.updateDish(this.id, this.idMerchant, dish).subscribe(() => {
      Swal.fire('C???p nh???p th??nh c??ng !!! ');
      this.backToDishList();
    }, () => {
      Swal.fire('Ch???n tr???ng th??i cho m??n ??n ');

    });
  }
  backToDishList() {
    this.router.navigateByUrl('/merchant/detail/user/' + this.userId);
  }
}
