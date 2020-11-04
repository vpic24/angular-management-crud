import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDishRoutingModule } from './list-dish-routing.module';
import { ListDishComponent } from './list-dish.component';


@NgModule({
  declarations: [ListDishComponent],
  imports: [
    CommonModule,
    ListDishRoutingModule
  ]
})
export class ListDishModule { }
