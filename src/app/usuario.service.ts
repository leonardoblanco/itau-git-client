import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Usuario } from './entidade/usuario';
import { Repositorio } from './entidade/repositorio';

/**
 * Classe de Servico do Usuario - Responsavel por buscar o usuario e os repositorios na API do GIT
 */
@Injectable()
export class UsuarioService {

  private apiUrl = environment.apiUrl;
  private usuarioUrl = '/users';

  constructor(private http: HttpClient) { }

  //Buscar usuario baseano no nome passado
  getUsuario(nomeUsuario: String): Observable<Usuario> {
    const url = `${this.apiUrl}${this.usuarioUrl}/${nomeUsuario}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`Retornado usuario ${nomeUsuario}`)),
      catchError(this.handleError<Usuario>(`getUsuario nome=${nomeUsuario}`))
    );
  }

  //Buscar repositorios baseados no nome do usuario informado
  getRepositorios(nomeUsuario: String): Observable<Repositorio[]> {
    const url = `${this.apiUrl}${this.usuarioUrl}/${nomeUsuario}/repos`;
    return this.http.get<Repositorio[]>(url).pipe(
      tap(_ => console.log(`Retornado repositorios ${nomeUsuario}`)),
      catchError(this.handleError<Repositorio[]>(`getRepositorios nome=${nomeUsuario}`))
    );
  }

  //Tratamento de exceptions 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
