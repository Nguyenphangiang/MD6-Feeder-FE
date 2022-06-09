import {AppUser} from './app-user';

export interface MerchantForm {
  id: number;
  name: string;
  safeFoodLicense: any;
  email: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
}
