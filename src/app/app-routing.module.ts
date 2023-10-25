import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'instrumentos',
    loadChildren: () => import('./instrumentos/instrumentos.module').then( m => m.InstrumentosPageModule)
  },
  

  {
    path: 'product-add',
    loadChildren: () => import('./productos/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./productos/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./productos/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./productos/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./productos/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./usuarios/user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-all',
    loadChildren: () => import('./usuarios/user-all/user-all.module').then( m => m.UserAllPageModule)
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./usuarios/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./usuarios/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./usuarios/user-list/user-list.module').then( m => m.UserListPageModule)
  },  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
