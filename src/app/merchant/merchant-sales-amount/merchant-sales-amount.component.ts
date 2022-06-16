import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MerchantServiceService} from '../../service/merchant-service.service';
import {InvoiceService} from '../../service/invoice.service';
import {Invoice} from '../../model/invoice';
import {ActivatedRoute} from '@angular/router';
import {MerchantAmount} from '../../model/merchant-amount';

@Component({
  selector: 'app-merchant-sales-amount',
  templateUrl: './merchant-sales-amount.component.html',
  styleUrls: ['./merchant-sales-amount.component.css']
})
export class MerchantSalesAmountComponent implements OnInit {
  user = localStorage.getItem('user');
  temp = JSON.parse(this.user);
  idMerchant: number;
  invoices: Invoice[] = [];
  merchantAmounts: MerchantAmount[] = [];
  flag: boolean;
  vat = 0;
  constructor(private merchantService: MerchantServiceService,
              private invoiceService: InvoiceService,
              private activatedRouter: ActivatedRoute) {
    this.showOrders();
  }

  ngOnInit() {
  }
  showOrders() {
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

  search(value: string) {
    // tslint:disable-next-line:radix
    const intValue = parseInt(value);
    if (intValue > 13) {
      this.merchantService.showMerchantSaleAmountByYear(intValue).subscribe((data) => {
        this.merchantAmounts = data;
        this.getTotal(data);
      });
    } else {
      this.merchantService.showMerchantSaleAmountByMonth(intValue).subscribe((data) => {
        this.merchantAmounts = data;
        this.getTotal(data);
      });
    }
  }
  searchQuarter(value: string) {
    // tslint:disable-next-line:radix
    const intValue = parseInt(value);
    this.merchantService.showMerchantSaleAmountByQuarter(intValue).subscribe((data) => {
      this.merchantAmounts = data;
      this.getTotal(data);
    });
  }
  getTotal(or: MerchantAmount[]): number {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < or.length; i++) {
      // @ts-ignore
      this.vat = (or[i].total) - (or[i].total * 15 / 100);
    }
    return this.vat;
  }

  changeSearchYearMonth() {
    this.flag = true;
  }

  changeSearchQuarter() {
    this.flag = false;
  }
}
