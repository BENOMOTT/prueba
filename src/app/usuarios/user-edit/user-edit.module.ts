import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditPageRoutingModule } from './user-edit-routing.module';

import { UserEditPage } from './user-edit.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,     
    UserEditPageRoutingModule
  ],
  declarations: [UserEditPage]
})
export class UserEditPageModule {}
