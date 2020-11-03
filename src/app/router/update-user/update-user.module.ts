import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateUserComponent } from './update-user.component';
import { AddUserModule } from '../add-user/add-user.module';



@NgModule({
  declarations: [UpdateUserComponent],
  imports: [
    CommonModule,
    UpdateUserRoutingModule,
    AddUserModule
  ]
})
export class UpdateUserModule { }
