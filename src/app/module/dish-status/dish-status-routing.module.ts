import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ListDishComponent} from '../../dish/list-dish/list-dish.component';
import {ListComponent} from '../../dish-status/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishStatusRoutingModule { }
