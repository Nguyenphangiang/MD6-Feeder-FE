import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUserListComponent} from '../../admin/admin-user-list/admin-user-list.component';
import {AdminDishListComponent} from '../../admin/admin-dish-list/admin-dish-list.component';
import {AdminDishListLoveComponent} from '../../admin/admin-dish-list-love/admin-dish-list-love.component';
import {AdminDishListSoldComponent} from '../../admin/admin-dish-list-sold/admin-dish-list-sold.component';


const routes: Routes = [
  {
    path: 'user',
    component: AdminUserListComponent
  },
  {
    path: 'dish/list',
    component: AdminDishListComponent
  },
  {
    path: 'dish/list/sale',
    component: AdminDishListLoveComponent
  },
  {
    path: 'dish/list/sold',
    component: AdminDishListSoldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
