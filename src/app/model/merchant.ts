import {AppUser} from './app-user';
import {MerchantStatus} from './merchant-status';

export interface Merchant {
  id?: number;
  name?: string;
  safeFoodLicense?: any;
  email?: string;
  phone?: string;
  address?: string;
  user?: AppUser;
  status?: any;
  goldPartner?: boolean;
}
