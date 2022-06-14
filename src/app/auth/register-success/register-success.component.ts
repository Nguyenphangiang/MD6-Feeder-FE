import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegisterService} from '../../service/register.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private activated: ActivatedRoute,
              private register: RegisterService) {
    this.activated.queryParams.subscribe((params) => {
      console.log(params);
      this.verify(params);
    });
  }

  ngOnInit() {
  }
  verify(params) {
    this.register.verify(params).subscribe(() => {
    });
  }
}
