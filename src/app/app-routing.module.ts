import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),

  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'instrumentos',
    loadChildren: () => import('./instrumentos/instrumentos.module').then( m => m.InstrumentosPageModule),
    canActivate: [AuthGuard]
  },
  

  {
    path: 'product-add',
    loadChildren: () => import('./productos/product-add/product-add.module').then( m => m.ProductAddPageModule)
    ,canActivate: [AuthGuard]

  },
  {
    path: 'product-all',
    loadChildren: () => import('./productos/product-all/product-all.module').then( m => m.ProductAllPageModule)
    ,canActivate: [AuthGuard]

  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./productos/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
    ,canActivate: [AuthGuard]

  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./productos/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
    ,canActivate: [AuthGuard]

  },
  {
    path: 'product-list',
    loadChildren: () => import('./productos/product-list/product-list.module').then( m => m.ProductListPageModule)
    ,canActivate: [AuthGuard]

  },
  {
    path: 'user-add',
    loadChildren: () => import('./usuarios/user-add/user-add.module').then( m => m.UserAddPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'user-all',
    loadChildren: () => import('./usuarios/user-all/user-all.module').then( m => m.UserAllPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./usuarios/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./usuarios/user-edit/user-edit.module').then( m => m.UserEditPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'user-list',
    loadChildren: () => import('./usuarios/user-list/user-list.module').then( m => m.UserListPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
    ,canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
