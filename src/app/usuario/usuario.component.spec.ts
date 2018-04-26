import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule } from '@angular/material';

import { UsuarioService } from '../usuario.service';
import { UsuarioComponent } from './usuario.component';
import { UsuarioBuscaComponent } from '../usuario-busca/usuario-busca.component';
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
/**
 * Teste unitario do component Usuario
 */
describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBuscaComponent, UsuarioComponent, UsuarioNaoEncontradoComponent ],
      imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ), HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}, UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
