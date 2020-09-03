import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../clases/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  listaAlumnos:Alumno[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
