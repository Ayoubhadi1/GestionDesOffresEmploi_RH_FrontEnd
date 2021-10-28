import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAddCongeComponent } from './employe-add-conge.component';

describe('EmployeAddCongeComponent', () => {
  let component: EmployeAddCongeComponent;
  let fixture: ComponentFixture<EmployeAddCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeAddCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAddCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
