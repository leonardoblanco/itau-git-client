import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Repositorio } from '../entidade/repositorio';

/**
 * Resolve de Repositorios antes de carregar o componente de usuario
 */
@Injectable()
export class UsuarioReposResolve implements Resolve<Repositorio[]> {
  constructor(private usuarioService: UsuarioService) {}

  resolve(snapshot: ActivatedRouteSnapshot) {
    return this.usuarioService.getRepositorios(snapshot.params['nome']);
  }
}