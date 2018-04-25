import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
