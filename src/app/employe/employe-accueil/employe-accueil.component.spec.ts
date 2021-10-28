import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAccueilComponent } from './employe-accueil.component';

describe('EmployeAccueilComponent', () => {
  let component: EmployeAccueilComponent;
  let fixture: ComponentFixture<EmployeAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
