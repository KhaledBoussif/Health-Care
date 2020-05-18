import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorspagePage } from './doctorspage.page';

describe('DoctorspagePage', () => {
  let component: DoctorspagePage;
  let fixture: ComponentFixture<DoctorspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
