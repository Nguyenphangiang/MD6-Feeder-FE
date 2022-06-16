import {CustomerForm} from './customer-form';
import {InvoiceStatus} from './invoice-status';
import {Merchant} from './merchant';
import {Order} from './order';

export interface Invoice {
  id?: number;
  note?: string;
  date?: Date;
  customer?: CustomerForm;
  invoiceStatus?: InvoiceStatus;
  orders?: Order[];
  merchant?: Merchant;
  orderAdress?: string;
}
