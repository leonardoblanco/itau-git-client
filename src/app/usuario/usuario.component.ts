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
export class UsuarioComponent implements OnInit {

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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(repo){
    this.dialog.open(UsuarioDialog, {
      data: {
        repos: repo
      }
    });
  }
}

@Component({
  selector: 'usuario-repo.dialog',
  templateUrl: 'usuario-repo.dialog.html',
})
export class UsuarioDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
