import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOffreComponent } from './admin-add-offre.component';

describe('AdminAddOffreComponent', () => {
  let component: AdminAddOffreComponent;
  let fixture: ComponentFixture<AdminAddOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
