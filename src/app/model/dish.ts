import {Merchant} from './merchant';

import {DishStatus} from './dish-status';

export interface Dish {
  id?: number;
  image?: any;
  name?: string;
  description?: string;
  price?: number;
  dishStatus?: DishStatus;
  merchant?: Merchant;
  recommend?: boolean;
}
