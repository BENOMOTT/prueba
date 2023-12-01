import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';





@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})


export class LoginPage {
  formularioLogin: FormGroup;
  isModalOpen: boolean = false;
  mostrarBarraProgreso = false;
  nombre: string = '';
  contraseña: string = '';
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', [Validators.required, this.validaContraseña]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }


  async iniciarSesion() {
    const nombreControl = this.formularioLogin.get('nombre');
    const contraseñaControl = this.formularioLogin.get('contraseña');
    const loggedIn = await this.authService.login(this.nombre, this.contraseña);
   
    if (nombreControl && nombreControl.valid && contraseñaControl && contraseñaControl.valid) {


      this.mostrarBarra();


      const password = contraseñaControl.value;
      const hasFourNumbers = (password.match(/\d/g) || []).length >= 4;
      const hasThreeChars = (password.match(/[a-zA-Z]/g) || []).length >= 3;
      const hasUpperCase = /[A-Z]/.test(password);

      const loggedIn = await this.authService.login(nombreControl.value, password);

      if (loggedIn) {
        const nombreUsuario = nombreControl.value
        this.navCtrl.navigateRoot('/home');
      } else {
        console.log('La autenticación falló. Verifica las credenciales.');
      }
      this.ocultarBarra();


    } else {
      console.log('Por favor, complete todos los campos correctamente.');
    }
  }

 
  mostrarBarra() {
    this.mostrarBarraProgreso = true;
  }


  ocultarBarra() {
    this.mostrarBarraProgreso = false;
  }


  validaContraseña(control: AbstractControl) {
    const password = control.value;


    const hasFourNumbers = (password.match(/\d/g) || []).length >= 4;
    const hasThreeChars = (password.match(/[a-zA-Z]/g) || []).length >= 3;
    const hasUpperCase = /[A-Z]/.test(password);


    if (hasFourNumbers && hasThreeChars && hasUpperCase) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }


  enviarFormulario() {
    const correoControl = this.formularioLogin.get('correo');


    if (correoControl && correoControl.valid) {


      this.modalController.dismiss();


      this.router.navigate(['/login']);
    } else {
      console.log('Por favor, complete todos los campos correctamente.');
    }
  }


  setOpen(open: boolean) {
    this.isModalOpen = open;
  }
}
