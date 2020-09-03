import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlumnosComponent } from './listar-alumnos.component';

describe('ListarAlumnosComponent', () => {
  let component: ListarAlumnosComponent;
  let fixture: ComponentFixture<ListarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
