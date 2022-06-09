import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
}
