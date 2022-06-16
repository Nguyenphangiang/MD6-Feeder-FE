import {Component, OnInit} from '@angular/core';
import {DishService} from '../../service/dish.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DishStatus} from '../../model/dish-status';
import {DishStatusService} from '../../service/dish-status.service';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';

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
    name: new FormControl('', [ Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    dishStatus: new FormControl(),
  });
  imageLink;
  idMerchant: string;
  user;
  check = false;
  constructor(private dishService: DishService,
              private merchantService: MerchantServiceService,
              private statusService: DishStatusService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.idMerchant = paramMap.get('id');
      this.getUser();
    });
  }

  ngOnInit() {
    this.getStatus();
  }

  backToDishList() {
    this.router.navigateByUrl('/merchant/detail/user/' + this.user.id);
  }

  onselectFile(event) {
    this.userFile = event.target.files[0];
    this.check = true;
    this.imageLink = URL.createObjectURL(this.userFile);
  }

  getUser() {
    this.merchantService.findById(+this.idMerchant).subscribe((data) => {
      this.user = data.user;
    });
  }
  createDish() {
    const dish = new FormData();
    dish.append('image', this.userFile);
    dish.append('name', this.dishForm.get('name').value);
    dish.append('description', this.dishForm.get('description').value);
    dish.append('price', this.dishForm.get('price').value);
    dish.append('status', this.dishForm.get('dishStatus').value);
    this.dishService.create(this.idMerchant, dish).subscribe(() => {
    Swal.fire('Tạo mới món ăn thành công!');
    this.dishForm.reset();
    this.router.navigateByUrl('merchant/detail/user/' + this.user.id);
    });
  }

  getStatus() {
    this.statusService.getAllStatus().subscribe((data) => {
      this.status = data;
    }, (error) => {
      console.log(error);
    });
  }
  get nameControl() {
   return this.dishForm.get('name');
  }
  get priceControl() {
    return this.dishForm.get('price');
  }
  get descriptionControl() {
    return this.dishForm.get('description');
  }
}
