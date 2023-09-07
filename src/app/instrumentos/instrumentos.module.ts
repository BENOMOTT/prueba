import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentosPageRoutingModule } from './instrumentos-routing.module';

import { InstrumentosPage } from './instrumentos.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentosPageRoutingModule
  ],
  declarations: [InstrumentosPage],
})
export class InstrumentosPageModule {}
