import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  formularioLogin: FormGroup;
  isModalOpen: boolean = false; // Agrega esta variable

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      // Aquí puedes agregar más condiciones si es necesario

      // Redirige a la página "home.page.html"
      this.router.navigate(['/home']);
    } else {
      // Muestra un mensaje de error o realiza otra acción si no se cumplen las condiciones
      console.log('Por favor, complete todos los campos.');
    }
  }

  // Define el método setOpen para abrir y cerrar el modal
  setOpen(open: boolean) {
    this.isModalOpen = open;
  }
}
