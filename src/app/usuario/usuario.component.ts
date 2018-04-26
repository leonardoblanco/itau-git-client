import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
/**
 * Usuario Component
 */
export class UsuarioComponent implements OnInit {

  //Vars
  usuario:Usuario;
  displayedColumns = ['name', 'stargazers_count'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.usuario = this.route.snapshot.data['usuario'];
    this.dataSource = new MatTableDataSource(this.route.snapshot.data['repos']);
  }

  //Definindo Ordenacao da lista de repositorios
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //Abertura de modal dos detalhes do repositorio
  openDialog(repo){
    this.dialog.open(UsuarioDialog, {
      data: {
        repos: repo
      }
    });
  }
}

/**
 * Componente da modal dos detalhes do repositorio
 */
@Component({
  selector: 'usuario-repo.dialog',
  templateUrl: 'usuario-repo.dialog.html',
})
export class UsuarioDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
