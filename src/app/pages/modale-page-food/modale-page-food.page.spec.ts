import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalePageFoodPage } from './modale-page-food.page';

describe('ModalePageFoodPage', () => {
  let component: ModalePageFoodPage;
  let fixture: ComponentFixture<ModalePageFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalePageFoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalePageFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
