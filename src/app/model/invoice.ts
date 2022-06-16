import {Customer} from "./customer";
import {CustomerForm} from './customer-form';
import {InvoiceStatus} from './invoice-status';
import {Merchant} from './merchant';

export interface Invoice {
  id?: number;
  note?: string;
  date?: any;
  customer?: CustomerForm;
  invoiceStatus?: InvoiceStatus;
  orders?: any;
  merchant?: Merchant;
}
