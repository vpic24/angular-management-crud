import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDishRoutingModule } from './details-dish-routing.module';
import { DetailsDishComponent } from './details-dish.component';


@NgModule({
  declarations: [DetailsDishComponent],
  imports: [
    CommonModule,
    DetailsDishRoutingModule
  ]
})
export class DetailsDishModule { }
