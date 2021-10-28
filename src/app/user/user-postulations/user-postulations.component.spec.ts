import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostulationsComponent } from './user-postulations.component';

describe('UserPostulationsComponent', () => {
  let component: UserPostulationsComponent;
  let fixture: ComponentFixture<UserPostulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
