import {AppRole} from './app-role';

export interface AppUser {
  id: number;
  username: string;
  password: string;
  roles: [AppRole];
}
