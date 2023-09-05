import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentosPage } from './instrumentos.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentosPageRoutingModule {}
