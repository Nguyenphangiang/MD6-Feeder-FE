import {Component, Input, OnInit} from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
// import Swal from 'sweetalert2';
import {MerchantForm} from '../../model/merchant-form';
import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selectedFile = null;
  image = null;
  merchant: MerchantForm;
  merchantForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    safeFoodLicense: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    user: new FormControl()
  });
  id: number;
  idMerchant: number = this.id;

  constructor(private router: Router,
              private merchantService: MerchantServiceService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap) => {
      this.id = + paraMap.get('id');
      this.showDetail(this.id);
    });
  }

  ngOnInit() {
  }

  showDetail(id: number) {
    this.merchantService.findById(id).subscribe((data) => {
      this.merchantForm = new FormGroup({
        id: new FormControl(id),
        name: new FormControl(data.name),
        safeFoodLicense: new FormControl(data.safeFoodLicense),
        email: new FormControl(data.email),
        phone: new FormControl(data.phone),
        address: new FormControl(data.address),
        username: new FormControl(data.user.username),
        password: new FormControl(data.user.password)
      });
    }, () => {
      alert('Cant Load Merchant\'s Detail!');
    });
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
    // this.image = document.getElementById('output');
    // this.image.src = URL.createObjectURL(event.target.files[0]);
  }

  updateMerchant() {
    const merchantData: FormData = new FormData();
    merchantData.append('username', this.merchantForm.get('username').value);
    merchantData.append('password', this.merchantForm.get('password').value);
    merchantData.append('email', this.merchantForm.get('email').value);
    merchantData.append('phone', this.merchantForm.get('phone').value);
    merchantData.append('address', this.merchantForm.get('address').value);
    merchantData.append('name', this.merchantForm.get('name').value);
    // if (this.selectedFile !== null) {
    merchantData.append('safeFoodLicense', this.selectedFile);
    // }
    // else {
    //   merchantData.append('safeFoodLicense', null); }
    this.merchantService.updateOld(this.id, merchantData).subscribe(() => {
      // Swal.fire('Update success!');
      // this.router.navigateByUrl('/login');
    }, () => {
      alert('update failed!');
    });
  }
}
