import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

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