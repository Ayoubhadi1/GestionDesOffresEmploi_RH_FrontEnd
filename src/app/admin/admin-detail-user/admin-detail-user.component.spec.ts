import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailUserComponent } from './admin-detail-user.component';

describe('AdminDetailUserComponent', () => {
  let component: AdminDetailUserComponent;
  let fixture: ComponentFixture<AdminDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
