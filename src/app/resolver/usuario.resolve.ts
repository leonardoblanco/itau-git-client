import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../entidade/usuario';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsuarioResolve implements Resolve<Usuario> {
  constructor(private usuarioService: UsuarioService, private router:Router) {}

  resolve(snapshot: ActivatedRouteSnapshot, ) {
    return this.usuarioService.getUsuario(snapshot.params['nome']).pipe(tap(data => {
      if(data == undefined){
        this.router.navigate(['/usuario/nao-encontrado'])
      }
    }));
  }
}