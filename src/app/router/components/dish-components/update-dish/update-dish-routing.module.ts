import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDishComponent } from './update-dish.component';

const routes: Routes = [{ path: '', component: UpdateDishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDishRoutingModule { }
