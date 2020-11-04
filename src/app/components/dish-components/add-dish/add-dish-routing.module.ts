import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDishComponent } from './add-dish.component';

const routes: Routes = [{ path: '', component: AddDishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDishRoutingModule { }
