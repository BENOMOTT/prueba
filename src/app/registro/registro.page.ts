import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder, AbstractControl, ValidationErrors} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(private authService: AuthService,
    private storage: Storage,
    private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'genero': new FormControl("", Validators.required),
      'edad': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required)
    });

    // Agregar validación personalizada a la contraseña
    const passwordControl = this.formularioRegistro.get('contraseña');
    if (passwordControl) {
      passwordControl.setValidators([Validators.required, this.validatePassword.bind(this)]);
    }
  }

  // Función para validar la contraseña
  validatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    // Validar al menos 1 mayúscula, 3 caracteres y 4 números
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/g;
    const lowercaseCount = (password.match(/[a-z]/g) || []).length;
    const uppercaseCount = (password.match(uppercaseRegex) || []).length;
    const numberCount = (password.match(numberRegex) || []).length;

    if (lowercaseCount < 3 || uppercaseCount < 1 || numberCount < 4) {
      return { 'invalidPassword': true };
    }

    return null;
  }


  
  ngOnInit() {
  }

  async guardar(){

    
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    const { nombre, contraseña } = this.formularioRegistro.value;

    const registered = await this.authService.register(nombre, contraseña);

    
    if (registered) {
      console.log('Usuario registrado correctamente', nombre);
      this.router.navigate(['/login']);
    } else {
      console.log('Error al registrar el usuario');
    }
  
    
    var usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      contraseña: f.contraseña,
      genero: f.genero,
      edad:f.edad,
      correo:f.correo

    }

 
  }


  
}