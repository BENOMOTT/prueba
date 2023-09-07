import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NOTFOUNDPageRoutingModule } from './not-found-routing.module';
import { NOTFOUNDPage } from './not-found.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NOTFOUNDPageRoutingModule,
  ],
  declarations: [NOTFOUNDPage],
})
export class NOTFOUNDPageModule {}
