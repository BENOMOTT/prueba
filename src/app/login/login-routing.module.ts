import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatProgressBarModule,], 
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
