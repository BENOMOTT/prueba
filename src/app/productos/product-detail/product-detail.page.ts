import { Component, OnInit } from '@angular/core';

// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})

export class ProductDetailPage implements OnInit {
  // Creamos registro a utilizar en el Html
  producto: ClProducto = {
    codigo: "0",
    nombreprod: "",
    precio: 0,
    cantidad: 0,
    fechaNacimiento: new Date(),
    rut: 0,
    dv: "0",
    enfermedad: "0",
    fonocontacto: 0,
    categoria: "0",
    editorial: "0",
    raza: "0",
    edad: 0,
    altura: 0,
    hrini: "0",
    hrfin: "0",
    direccion: "0",
    fCreacion: new Date()
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: ProductServiceService
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
    console.log("getProduct **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getProduct(this.route.snapshot.paramMap.get('id')!)
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
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }


    async delete(id: number | undefined) {
    if (id !== undefined) {
      this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo contrario, cancele');
    }
  }
  // El Html invoca el método delete

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
    await this.restApi.deleteProduct(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailProduct Página", res);
          loading.dismiss();
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}

