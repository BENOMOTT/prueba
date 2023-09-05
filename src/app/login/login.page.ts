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
      contraseña: ['', [Validators.required, this.validaContraseña]], // Usar la función de validación personalizada
    });
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor, complete todos los campos y asegúrese de que la contraseña cumpla con los requisitos.');
    }
  }
  
  setOpen(open: boolean) {
    this.isModalOpen = open;
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
}
