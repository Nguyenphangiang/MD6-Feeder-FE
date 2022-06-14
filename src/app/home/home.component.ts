// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {HomeService} from '../service/home.service';
import {Merchant} from '../model/merchant';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedOption = [
    {id: 1, name: 'Nhà hàng'},
    {id: 2, name: 'Món ăn'}
  ];
  merchantForm: FormGroup = new FormGroup({
    name: new FormControl(),
    findName: new FormControl()
  });
  name: string;
  constructor(private homeService: HomeService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }
  changeList() {
    console.log(this.merchantForm.get('findName').value);
    if (this.merchantForm.get('findName').value === '1') {
    this.name = this.merchantForm.get('name').value;
    this.router.navigateByUrl(`merchant/list/${this.name}`);
    } else {
      this.name = this.merchantForm.get('name').value;
      this.router.navigateByUrl(`dish/list/${this.name}`);
    }
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    // tslint:disable-next-line:only-arrow-functions
    (function($) {
      // tslint:disable-next-line:only-arrow-functions
      $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
          nav: true,
          navText: ['<i class=\'icofont-arrow-left\'></i>', '<i class=\'icofont-arrow-right\'></i>'],
          items: 3,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false
        });
      });
    })(jQuery);
  }
}
