import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarAlumnosComponent } from './cargar-alumnos.component';

describe('CargarAlumnosComponent', () => {
  let component: CargarAlumnosComponent;
  let fixture: ComponentFixture<CargarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
