import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Puedes inicializar el estado de autenticación aquí, por ejemplo, comprobando si el usuario tiene una sesión activa.
  }

  // Método para iniciar sesión
  login(username: string, password: string): void {
    // Aquí puedes implementar la lógica de inicio de sesión, como enviar una solicitud al servidor para verificar las credenciales.
    // Si las credenciales son válidas, puedes establecer el estado de autenticación en verdadero.
    this.isAuthenticatedSubject.next(true);
  }

  // Método para cerrar sesión
  logout(): void {
    // Aquí puedes implementar la lógica para cerrar sesión, como eliminar las credenciales del usuario y establecer el estado de autenticación en falso.
    this.isAuthenticatedSubject.next(false);
  }

  // Método para comprobar si el usuario está autenticado
  isLoggedIn(): boolean {
    // Aquí puedes verificar el estado de autenticación. Devuelve true si el usuario está autenticado y false en caso contrario.
    return this.isAuthenticatedSubject.value;
  }
}
