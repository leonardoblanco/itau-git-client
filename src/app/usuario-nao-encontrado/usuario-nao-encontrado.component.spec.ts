import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule } from '@angular/material';

import { UsuarioBuscaComponent } from '../usuario-busca/usuario-busca.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioNaoEncontradoComponent } from '../usuario-nao-encontrado/usuario-nao-encontrado.component';

const appRoutes: Routes = [
  {
    path: 'usuario/busca',
    component: UsuarioBuscaComponent
  },
  {
    path: 'usuario/nao-encontrado',
    component: UsuarioNaoEncontradoComponent
  },
  { path: 'usuario/:nome', component: UsuarioComponent },
  {
    path: '',
    redirectTo: '/usuario/busca',
    pathMatch: 'full'
  },
  { path: '**', component: UsuarioBuscaComponent }
];

describe('UsuarioNaoEncontradoComponent', () => {
  let component: UsuarioNaoEncontradoComponent;
  let fixture: ComponentFixture<UsuarioNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNaoEncontradoComponent, UsuarioBuscaComponent, UsuarioComponent ],
      imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ), BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
