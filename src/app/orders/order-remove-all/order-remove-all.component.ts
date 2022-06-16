import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {ActivatedRoute, Router} from '@angular/router';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-remove-all',
  templateUrl: './order-remove-all.component.html',
  styleUrls: ['./order-remove-all.component.css']
})
export class OrderRemoveAllComponent implements OnInit {

  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      // this.removeAll();
    });
  }

  ngOnInit() {
  }
  // removeAll() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You won\'t be able to revert this!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.orderService.removeAllOrder() .subscribe(() => {
  //         this.router.navigate(['']);
  //       });
  //       // Swal.fire(
  //       //   'Deleted!',
  //       //   'Your order has been deleted.',
  //       //   'success'
  //       // );
  //
  //     } else {
  //       this.router.navigate(['']);
  //     }
  //   });
  // }

}
