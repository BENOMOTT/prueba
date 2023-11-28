import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router, private storage: Storage) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    const isAuthenticated = true; // deberia estar el valor booleano que tiene el estorage cuando se esta logeado
  
    if (isAuthenticated) {
      return true; 
    } else { 
      this.router.navigate(['/login']);
      return false;
 
    }
 
  }

}
/** ANTES
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.isLoggedIn(); // Cambia AuthService a authService

    if (isAuthenticated) {
      return true; // Permitir acceso a la ruta
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}

*/ // ANTES
