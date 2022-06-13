import {CustomerForm} from './customer-form';
import {Dish} from './dish';

export interface CartElement {
  id ?: number;
  customer ?: CustomerForm;
  dish ?: Dish;
  quantity ?: number;
  note ?: string;
}
