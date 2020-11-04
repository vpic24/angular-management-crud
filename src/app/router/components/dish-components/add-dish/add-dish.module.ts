import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDishRoutingModule } from './add-dish-routing.module';
import { AddDishComponent } from './add-dish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddDishComponent],
  imports: [
    CommonModule,
    AddDishRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddDishComponent
  ]
})
export class AddDishModule { }
