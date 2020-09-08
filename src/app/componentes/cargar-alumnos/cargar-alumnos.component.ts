import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {Alumno} from '../../clases/alumno';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'; //Necesario para hacer dialogs
//import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.css']
})
export class CargarAlumnosComponent implements OnInit {
  @Output() onCargar = new EventEmitter<Alumno>();
  nombre = "";
  legajo = 0;
  apellido = "";
  materia = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Cargar(e)
  {
    this.onCargar.emit(new Alumno(this.nombre,this.apellido,this.legajo,this.materia));
    this.openDialog("Formulario enviado");
  }

  //Ventana de dialogo
  openDialog(mensajeBody:string, mensajeHeader:string = "Aviso!") {
    this.dialog.open(DialogDataExampleDialog,{
      data:{ "body":mensajeBody, "header": mensajeHeader }
    });
  }

}

//Configuracion del dialog
@Component({
  selector: 'dialog-formulario-enviado',
  templateUrl: 'dialog-formulario-enviado.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}