import { Component, OnInit } from '@angular/core';
import {DishStatus} from '../../model/dish-status';
import {DishStatusService} from '../../service/dish-status.service';
import {error} from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  status: DishStatus[] = [];
  constructor(private statusService: DishStatusService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.statusService.getAllStatus().subscribe((data) => {
      this.status = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, (error) => {
      console.log(error);
    });
  }
}
