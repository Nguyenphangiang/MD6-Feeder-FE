import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {Router} from '@angular/router';
import {InvoiceService} from '../../service/invoice.service';
import {Invoice} from '../../model/invoice';
import {InvoiceStatus} from '../../model/invoice-status';

@Component({
  selector: 'app-merchant-order',
  templateUrl: './merchant-order.component.html',
  styleUrls: ['./merchant-order.component.css']
})
export class MerchantOrderComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  idMerchant: number;
  invoices: Invoice[] = [];
  // invoicesByName: Invoice[] = [];
  // invoicesByPhone: Invoice[] = [];
  notSorted = true;
  searchInput;
  tempInvoice: Invoice[] = [];
  invoiceStatus: InvoiceStatus[] = [];
  constructor(private invoiceService: InvoiceService,
              private merchantService: MerchantServiceService,
              private router: Router) {
    this.loadOrders();
    this.showAllInvoiceStatus();
  }

  ngOnInit() {
  }

  loadOrders() {
    this.merchantService.findMerchantByUserId(this.temp.id).subscribe((data) => {
      this.idMerchant = data.id;
      this.invoiceService.showAllByMerchantId(this.idMerchant).subscribe((data1) => {
        this.invoices = data1;
      }, () => {
        Swal.fire('Không tải được các đơn hàng của quán!');
      });
    }, () => {
      Swal.fire('Không tìm được merchant!');
    });
  }

  changeStatusToReceived(idInvoice) {
    for (const invoice of this.invoices) {
      if (invoice.id === idInvoice) {
        if (invoice.invoiceStatus.id === 3) {
          Swal.fire('Đơn đã bị hủy, không thể đổi!');
        } else if (invoice.invoiceStatus.id === 2) {
          Swal.fire('Đơn đã được giao!');
        } else {
          invoice.invoiceStatus.id = 2;
          invoice.invoiceStatus.name = 'Shipper đã nhận';
          return this.invoiceService.updateInvoice(idInvoice, invoice).subscribe(() => {
            Swal.fire('Cập nhật đơn thành công!');
          }, () => {
            Swal.fire('Cập nhật đơn thất bại!');
          });
        }
      }
    }
  }

  rejectOrder(idInvoice) {
    Swal.fire({
      title: 'Hủy đơn này?',
      showCancelButton: true,
      confirmButtonText: 'Hủy',
      cancelButtonText: 'Quay lại'
    }).then((result) => {
      if (result.isConfirmed) {
        for (const invoice of this.invoices) {
          if (invoice.id === idInvoice) {
            if (invoice.invoiceStatus.id === 3) {
              Swal.fire('Đơn đã bị hủy, không thể đổi!');
            } else {
              invoice.invoiceStatus.id = 3;
              invoice.invoiceStatus.name = 'Đơn bị hủy';
              return this.invoiceService.updateInvoice(idInvoice, invoice).subscribe(() => {
                Swal.fire('Cập nhật đơn thành công!');
              }, () => {
                Swal.fire('Cập nhật đơn thất bại!');
              });
            }
          }
        }
      }
    });
  }
  searchByInput(input) {
    this.invoiceService.showAllByCustomerInfo(input).subscribe((data) => {
      this.invoices = data;
    }, () => {
      Swal.fire('Tìm kiếm không thành công!');
    });
  }
  showAllInvoiceStatus() {
    this.invoiceService.showAllInvoiceStatus().subscribe((data) => {
      this.invoiceStatus = data;
    }, () => {
      Swal.fire('Không tải được thanh lựa chọn trạng thái đơn hàng!');
    });
  }
  showInvoicesSortedBy(idStatus) {
    if (idStatus !== '99') {
      if (this.notSorted) {
        this.tempInvoice = this.invoices;
        this.notSorted = false;
      }
      const list: Invoice[] = [];
      for (const invoice of this.tempInvoice) {
        if (invoice.invoiceStatus.id === +idStatus) {
          list.push(invoice);
        }
      }
      this.invoices = list;
    } else {
      this.showAllInvoice();
    }
  }
  showAllInvoice() {
    this.invoices = this.tempInvoice;
  }
  // searchByCustomerName(name) {
  //   this.invoiceService.showAllByCustomerName(name).subscribe((data) => {
  //     this.invoicesByName = data;
  //   }, () => {
  //     Swal.fire('Tìm kiếm không thành công!');
  //   });
  // }
  // searchByCustomerPhone(phone) {
  //   this.invoiceService.showAllByCustomerPhone(phone).subscribe((data) => {
  //     this.invoicesByPhone = data;
  //   }, () => {
  //     Swal.fire('Tìm kiếm không thành công!');
  //   });
  // }
}
