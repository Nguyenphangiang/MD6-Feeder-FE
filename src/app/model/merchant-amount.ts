import {CustomerForm} from './customer-form';
import {Invoice} from './invoice';
import {Dish} from './dish';

export interface MerchantAmount {
  date?: Date;
  customer?: CustomerForm;
  invoice?: Invoice;
  dish?: Dish;
  total?: string;
}
