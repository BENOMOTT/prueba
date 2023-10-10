// export class ClProducto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   cantidad: number;
//   fecha: Date;
//     constructor(values: Object= {}){
//         Object.assign(this, values);
//     }
// }
export class ClUsuario {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    id: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    fecha: Date;
  
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.nombre = obj && obj.nombre || null
          this.apellido = obj && obj.apellido || null
          this.descripcion = obj && obj.descripcion || null
          this.fecha = obj && obj.fecha || null
      }
  }
  