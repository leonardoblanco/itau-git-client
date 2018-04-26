import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-busca',
  templateUrl: './usuario-busca.component.html',
  styleUrls: ['./usuario-busca.component.css']
})
/**
 * Componente Usuario Busca
 */
export class UsuarioBuscaComponent implements OnInit {

  nomeUsuario: String;
  usuarioFormControl:FormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Submit do formulario
  onFormSubmit(): void {
    if(!this.usuarioFormControl.hasError('required')){
      this.router.navigate(['/usuario', this.usuarioFormControl.value])
    }
  }

  //Erro na validacao do campo
  getErrorMessage() {
    return this.usuarioFormControl.hasError('required') ? 'Favor digitar um valor para o nome do usuário' :
            '';
  }

}
