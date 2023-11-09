import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/CLProducto';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.page.html',
  styleUrls: ['./product-all.page.scss'],
})
export class ProductAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  producto: ClProducto = {
    idProducto: 1, nombreprod: '', categoria: '', precio: 0, cantidad: 0,
    codigo: '',
    rut: 0,
    dv: '',
    enfermedad: '',
    fonocontacto: 0,
    editorial: '',
    raza: '',
    edad: 0,
    altura: 0,
    hrini: '',
    hrfin: '',
    direccion: ''
  };;

  constructor() { }
  ngOnInit() {  }
  public idProducto: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}
