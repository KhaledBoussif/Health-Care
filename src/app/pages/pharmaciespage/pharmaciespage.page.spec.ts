import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciespagePage } from './pharmaciespage.page';

describe('PharmaciespagePage', () => {
  let component: PharmaciespagePage;
  let fixture: ComponentFixture<PharmaciespagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciespagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciespagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
