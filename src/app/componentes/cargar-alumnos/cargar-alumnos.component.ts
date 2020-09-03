import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Alumno} from '../../clases/alumno';
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

  constructor() { }

  ngOnInit(): void {
  }

  Cargar(e)
  {
    this.onCargar.emit(new Alumno(this.nombre,this.apellido,this.legajo,this.materia));
  }

}
