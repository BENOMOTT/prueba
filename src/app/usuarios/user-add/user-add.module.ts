import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAddPageRoutingModule } from './user-add-routing.module';

import { UserAddPage } from './user-add.page';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAddPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  declarations: [UserAddPage]
})
export class UserAddPageModule {}
