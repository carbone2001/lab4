import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../clases/alumno';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.css']
})
export class CargarAlumnosComponent implements OnInit {
  nombre = "";
  legajo = 0;
  materia = "";

  constructor() { }

  ngOnInit(): void {
  }

  Cargar(e)
  {
    console.log(e);
    console.log(this.nombre);
  }

}
