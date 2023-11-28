import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); //antes
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); //antes
  formularioLogin: any;

  constructor(private storage: Storage) {
    this.ngOnInit();
  }
  async ngOnInit(){
    //en esta linea se creara un espacio para que se guarden las storage 
    await this.storage.create();
  } 

  async login(nombre: string, contraseña: string): Promise<boolean> {
    
    const usuario = await this.storage.get('user');

    if (usuario){
      // si es verdadero hara algo con los datos del usuario, como mostrarlo en la consola
      console.log(usuario.nombre, '-', usuario.contraseña);

    } else {
      // el usuario no esta almacenado en la memoria interna
      console.log('No se encontraron datos del usuario');
    }

    // sentencia if que valida el usuario
    if (nombre === usuario.nombre && contraseña === usuario.contraseña){
      await this.storage.set('isLoggedIn', true); // el valor true se le asigna a la variable isLoggedIn
      return true;
    } else{
      return false;
    }

  }
  // funcion para guardar lo que se registro
  async register(nombre: string, contraseña: string): Promise<boolean>{
    await this.storage.set('user', {nombre, contraseña});
    return true;
  }
  //funcion para saber lo que esta logeado
  async isLoggedIn(): Promise<boolean>{
    return !!(await this.storage.get('isLoggedIn'));
  }
  // funcion para eliminar lo que contiene la variable isLoggedIn
  async logout(): Promise<void>{
    await this.storage.remove('isLoggedIn');
  }
    
  async getNombreUsuario(): Promise<string> {
    const usuario = await this.storage.get('user');
    return usuario ? usuario.nombre : '';
  }
} 


/** 
  // Método para iniciar sesión ANTES
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
**///  ANTES
