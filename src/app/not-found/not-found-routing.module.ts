import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NOTFOUNDPage } from './not-found.page';

const routes: Routes = [
  {
    path: '',
    component: NOTFOUNDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NOTFOUNDPageRoutingModule {}
