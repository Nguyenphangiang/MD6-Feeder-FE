import {Dish} from './dish';
import {CustomerForm} from './customer-form';

export interface Order {
  id ?: number;
  dish ?: Dish;
  quantity ?: number;
  // ordercheck ?: boolean;
  // customer ?: CustomerForm;
}
