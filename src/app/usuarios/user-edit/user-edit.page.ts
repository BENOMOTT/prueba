import { Component, OnInit } from '@angular/core';

// Imporamos librerías
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClUsuario } from '../model/ClUsuario';   
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  // FormGroup para validaciones
  userForm!: FormGroup;
  // Esquema a utilizar en el Html
  usuario: ClUsuario = { id: 1, first_name: '', last_name: '', email: '', clave: ''};
  id: any = '';
  //prod_name: string = '';
  //prod_desc: string = '';
  //prod_price:number=null;
  //prod_cantidad:number=null

  // Injectamos librerías
  constructor(public restApi: UserServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController, 
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    // Relizamos lectura
    this.getUser(this.route.snapshot.params['id']);
    // Especificamos Validaciones por medio de FormGroup
    this.userForm = this.formBuilder.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.required],
      'clave': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;
    /*this.producto.nombre = form.prod_name;
    this.producto.descripcion = form.prod_desc;
    this.producto.precio = form.prod_price;
    this.producto.cantidad = form.prod_cantidad;
    */
    // si envio form, envio los nombres del campo del formulario
    //await this.restApi.updateProduct(this.id, form)
    await this.restApi.updateUser(this.id, this.usuario)
      .subscribe({
        next: (res) => {
          let id = res['id'];
          //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
          this.router.navigate(['/user-detail/' + this.id]);
        }
        , complete: () => { }
        , error: (err) => { console.log(err); }
      })

  }

  // Método que permite leer el producto
  async getUser(id: number) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getUser(id + "")
        .subscribe({
          next: (data) => {
            console.log("getUserID data****");
            console.log(data);
            // Si funciona Rescata el los datos
            this.id = data.id;
            // Actualiza los datos
            this.userForm.setValue({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              clave: data.clave
            });
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("getUserID Errr****+");
            console.log(err);
            loading.dismiss();
          }
        })
    }
  

 // Método que actualiza el producto por medio de submit
  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            //Si funciona el actualizar navega a listar
            this.router.navigate(['/user-list/']);
          }
        }
      ]
    });
    await alert.present();
  }

}