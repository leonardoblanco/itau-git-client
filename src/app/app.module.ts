import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsuarioBuscaComponent } from './usuario-busca/usuario-busca.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDialog } from './usuario/usuario.component';
import { UsuarioService } from './usuario.service';
import { UsuarioResolve } from './resolver/usuario.resolve';
import { UsuarioReposResolve } from './resolver/usuario-repos.resolve';
import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado/usuario-nao-encontrado.component';


const appRoutes: Routes = [
  {
    path: 'usuario/busca',
    component: UsuarioBuscaComponent
  },
  {
    path: 'usuario/nao-encontrado',
    component: UsuarioNaoEncontradoComponent
  },
  { path: 'usuario/:nome', component: UsuarioComponent, resolve: { usuario: UsuarioResolve, repos: UsuarioReposResolve } },
  {
    path: '',
    redirectTo: '/usuario/busca',
    pathMatch: 'full'
  },
  { path: '**', component: UsuarioBuscaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UsuarioBuscaComponent,
    UsuarioComponent,
    UsuarioDialog,
    UsuarioNaoEncontradoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule, RouterModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule
  ],
  entryComponents: [UsuarioComponent, UsuarioDialog],
  providers: [UsuarioService, UsuarioResolve, UsuarioReposResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
