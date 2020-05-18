import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesPage } from './pharmacies.page';

describe('PharmaciesPage', () => {
  let component: PharmaciesPage;
  let fixture: ComponentFixture<PharmaciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
