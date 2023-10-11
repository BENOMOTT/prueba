import { Component, OnInit } from '@angular/core';

// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClUsuario } from '../model/ClUsuario';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  // Creamos registro a utilizar en el Html
  producto: ClUsuario = {
    id: 1511
    , first_name: ''
    , last_name: ''
    , email: ''
    , clave: ''
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: UserServiceService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  // En el OnInit, ejecutamos la lectura
  ngOnInit() {
    this.getProduct();
  }

// Método que permite leer el producto
  async getProduct() {
    console.log("getUser **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getUser(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.producto = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailUser Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  // El Html invoca el método delete
  async delete(id: number) {
    // Confirma Primero
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteUser(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailUser Página", res);
          loading.dismiss();
          this.router.navigate(['/user-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailUser Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}

