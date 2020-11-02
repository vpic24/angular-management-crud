import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsUserRoutingModule } from './details-user-routing.module';
import { DetailsUserComponent } from './details-user.component';


@NgModule({
  declarations: [DetailsUserComponent],
  imports: [
    CommonModule,
    DetailsUserRoutingModule
  ]
})
export class DetailsUserModule { }
