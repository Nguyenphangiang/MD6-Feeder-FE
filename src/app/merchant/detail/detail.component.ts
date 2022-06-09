import { Component, OnInit } from '@angular/core';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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
  id: string;
  constructor( private router: Router,
               private merchantService: MerchantServiceService,
               private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap) => {
      this.id = paraMap.get('id');
      this.showDetail(this.id);
    });
  }

  ngOnInit() {
  }

  showDetail(id: string) {
    this.merchantService.findById(id).subscribe((data) => {
      this.merchantForm = new FormGroup({
        id: new FormControl(data.id),
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
  updateMerchant(id: number) {
    const merchant = new FormData();

    this.merchantService.updateOld(id, merchant).subscribe(() => {
      alert('success');
      this.router.navigate(['/book']);
    })
  }
}
