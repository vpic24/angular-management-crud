import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDishRoutingModule } from './update-dish-routing.module';
import { UpdateDishComponent } from './update-dish.component';
import { AddDishModule } from '../add-dish/add-dish.module';


@NgModule({
  declarations: [UpdateDishComponent],
  imports: [
    CommonModule,
    UpdateDishRoutingModule,
    AddDishModule
  ]
})
export class UpdateDishModule { }
