import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOffresComponent } from './all-offres.component';

describe('AllOffresComponent', () => {
  let component: AllOffresComponent;
  let fixture: ComponentFixture<AllOffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
