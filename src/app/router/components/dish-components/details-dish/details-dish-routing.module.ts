import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsDishComponent } from './details-dish.component';

const routes: Routes = [{ path: '', component: DetailsDishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDishRoutingModule { }
