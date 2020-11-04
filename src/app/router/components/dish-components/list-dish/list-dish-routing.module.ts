import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDishComponent } from './list-dish.component';

const routes: Routes = [{ path: '', component: ListDishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDishRoutingModule { }
