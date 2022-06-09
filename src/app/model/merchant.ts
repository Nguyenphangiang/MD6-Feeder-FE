import {AppUser} from './app-user';

export interface Merchant {
  id: number;
  name: string;
  safeFoodLicense: string;
  email: string;
  phone: string;
  address: string;
  user: AppUser;
}
