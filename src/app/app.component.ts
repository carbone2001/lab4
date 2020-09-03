import { Component } from '@angular/core';
import { Alumno } from './clases/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase2';
  listaAlumnos:Alumno[] = [];
  visualizarLista;
  visualizarCargar;
  visualizacionListar()
  {
    this.visualizarLista = true;
    this.visualizarCargar = false;
  }
  visualizacionCargar()
  {
    this.visualizarLista = false;
    this.visualizarCargar = true;
  }

  Cargar(e)
  {
    this.listaAlumnos.push(e);
  }
}
