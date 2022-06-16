import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../service/invoice.service';
import {OrderAddress} from '../../model/order-address';
import {OrderService} from '../../service/order/order.service';
import {CustomerForm} from '../../model/customer-form';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  oldAddress: OrderAddress = {};
  editAddressForm: FormGroup = new FormGroup({
    id: new FormControl(),
    type: new FormControl(),
    name: new FormControl(),
  });
  home = 'Nhà';
  company = 'Công ty';
  other = 'Khác';
  orderAddressForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(),
    name: new FormControl(''),
  });
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  userId = this.temp.id;
  customer: CustomerForm;
  orderAddress: OrderAddress[] = [];
  customerId: number;
  constructor(private invoiceService: InvoiceService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.findCustomerByUserId(this.userId);
  }
  showAllCustomerOrderAddress(id) {
    this.invoiceService.showAllCustomerOrderAddress(id).subscribe((data) => {
      this.orderAddress = data;
      console.log(data);
    });
  }
  findCustomerByUserId(id) {
    this.orderService.findCustomerByUserId(id).subscribe((customer) => {
      this.customer = customer;
      this.customerId = customer.id;
      this.showAllCustomerOrderAddress(this.customer.id);
      console.log(this.customer);
    });
  }

  addNewOrderAddress() {
    this.invoiceService.addNewOrderAddress(this.orderAddressForm.value, this.customerId).subscribe(() => {
      Swal.fire('Thêm địa chỉ thành công');
      this.findCustomerByUserId(this.userId);
    });
  }
  deleteOrderAddress(id) {
    this.invoiceService.deleteOrderAddress(id).subscribe(() => {
      Swal.fire('Xóa thành công');
      this.findCustomerByUserId(this.userId);
    });
  }
  findOldOrderAddress(id) {
    this.invoiceService.findOneOrderAddress(id).subscribe((data) => {
      this.oldAddress = data;
      this.editAddressForm = new FormGroup({
        id: new FormControl(data.id),
        type: new FormControl(),
        name: new FormControl(data.name)
      });
    });
  }
  editOrderAddress() {
    this.invoiceService.updateOrderAddress(this.oldAddress.id, this.customerId, this.editAddressForm.value).subscribe(() => {
      this.findCustomerByUserId(this.userId);
      Swal.fire('Cập nhật địa chỉ thành công.');
    });
  }
}
