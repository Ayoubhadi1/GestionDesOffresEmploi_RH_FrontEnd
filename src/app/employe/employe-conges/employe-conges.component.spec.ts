import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCongesComponent } from './employe-conges.component';

describe('EmployeCongesComponent', () => {
  let component: EmployeCongesComponent;
  let fixture: ComponentFixture<EmployeCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
