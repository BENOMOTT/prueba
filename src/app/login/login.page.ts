import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  formularioLogin: FormGroup;
  isModalOpen: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', [Validators.required, this.validaContraseña]],
    });
  }

  iniciarSesion() {
    const nombreControl = this.formularioLogin.get('nombre');
    
    if (nombreControl && nombreControl.valid) {
      const nombreUsuario = nombreControl.value;
      this.router.navigate(['/home', { nombreUsuario }]);
    } else {
      console.log('Por favor, complete todos los campos y asegúrese de que la contraseña cumpla con los requisitos.');
    }
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

  // Define la función setOpen para controlar la apertura y cierre del modal
  setOpen(open: boolean) {
    this.isModalOpen = open;
  }
}
