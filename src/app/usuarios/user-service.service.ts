import { Injectable } from '@angular/core';
import { ClUsuario} from './model/ClUsuario';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/usuarios/";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }

  // Método Agregar producto, y devuelve un observable del tipo Producto
  // Debe ser un Observable si deses suscribir este método en otro lado
  addUser(usuario: ClUsuario): Observable<ClUsuario> {
    console.log("Res-api Enviando AddUsuario : ", usuario);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<ClUsuario>(apiUrl, usuario, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((usuario: ClUsuario) => console.log('added User w/:', usuario)),
        // En caso de que ocurra Error
        catchError(this.handleError<ClUsuario>('addUser'))
      );
  }

  // Obtenemos todos los Productos
  getUsers(): Observable<ClUsuario[]> {
    console.log("getUsers ()");
    return this.http.get<ClUsuario[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Users')),
        catchError(this.handleError('getUsers', []))
      );
  }


  //  Obtener un Producto
  getUser(id: String): Observable<ClUsuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log("getUser ID:" + id);
    return this.http.get<ClUsuario>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched user id=${id}')),
        catchError(this.handleError<ClUsuario>('getUser id=${id}'))
      );
  }

  deleteUser(id: number): Observable<ClUsuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Producto>(url, httpOptions).pipe(
    return this.http.delete<ClUsuario>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted user id=${id}')),
        catchError(this.handleError<ClUsuario>('deleteUser'))
      );
  }

  updateUser(id: number, usuario: ClUsuario): Observable<ClUsuario> {
    return this.http.put<ClUsuario>(apiUrl + "/" + id, usuario, httpOptions)
      .pipe(
        tap(_ => console.log('updated user id=${id}')),
        catchError(this.handleError<any>('updateUser'))
      );
  }


}

