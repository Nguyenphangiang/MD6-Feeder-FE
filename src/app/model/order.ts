import {Dish} from './dish';
import {CustomerForm} from './customer-form';

export interface Order {
  id ?: number;
  customer ?: CustomerForm;
  orderTime ?: Date;
  dish ?: Dish;
  quantity ?: number;
  note ?: string;
  status ?: number;
}
