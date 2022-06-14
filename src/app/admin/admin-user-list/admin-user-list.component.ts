import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {AdminService} from '../../service/admin.service';
import {CustomerForm} from '../../model/customer-form';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  customers: CustomerForm[] = [];
  merchants: Merchant[] = [];
  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
    this.showCustomerList();
    this.showMerchantList();
  }
  showCustomerList() {
    this.adminService.showListCustomer().subscribe((customers) => {
      this.customers = customers;
    });
  }
  showMerchantList() {
    this.adminService.showListMerchant().subscribe((merchants) => {
      this.merchants = merchants;
    });
  }

  deleteCustomer(id) {
    this.adminService.deleteCustomer(id).subscribe(() => {
      location.reload();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Xóa thành công !!!'
      });
    });
  }

  activeMerchant(id) {
    this.adminService.activeMerchant(id).subscribe(() => {
      this.showMerchantList();
      this.showCustomerList();
      }
    );
  }

  blockMerchant(id) {
    this.adminService.blockMerchant(id).subscribe(() => {
      this.showMerchantList();
      this.showCustomerList();
      }
    );
  }

  deleteMerchant(id) {
    this.adminService.deleteMerchant(id).subscribe(() => {
      this.showMerchantList();
      this.showCustomerList();
    });
  }
}
