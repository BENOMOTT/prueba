import { Component, OnInit } from '@angular/core';

// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  // Creamos la Variable para el Html
  usuarios: ClUsuario[] = [];
  // Injectamos Librerias
  constructor(public restApi: UserServiceService
    , public loadingController: LoadingController
    , public router: Router) { }

  // LLamamos al método que rescata los productos  
  ngOnInit() {
    this.getUsers();
  }

  // Método  que rescta los productos
  async getUsers() {
    console.log("Entrando :getUsers");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    await this.restApi.getUsers()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
  // Si funciona asigno el resultado al arreglo productos
          this.usuarios = res;
          console.log("thisUsuarios:",this.usuarios);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
  // Si da error, imprimo en consola.
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }


  
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log("Moviendo Item Array Drop ***************:");
  //   moveItemInArray(this.productos, event.previousIndex, event.currentIndex);
  // }
}