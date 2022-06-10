import {Merchant} from './merchant';

export interface Dish {
  id?: number;
  image?: any;
  name?: string;
  description?: string;
  price?: number;
  status?: string;
  merchant?: Merchant;
}
