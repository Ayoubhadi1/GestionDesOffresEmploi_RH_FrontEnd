import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditOffreComponent } from './admin-edit-offre.component';

describe('AdminEditOffreComponent', () => {
  let component: AdminEditOffreComponent;
  let fixture: ComponentFixture<AdminEditOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
