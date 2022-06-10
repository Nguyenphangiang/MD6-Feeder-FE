import {Customer} from '../customer';
import {Dish} from '../dish';

export interface Order {
  id ?: number;
  customer ?: Customer;
  orderTime ?: Date;
  dish ?: Dish;
  quantity ?: number;
  note ?: string;
  status ?: number;
}
