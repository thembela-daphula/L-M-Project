import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddiesPage } from './hoddies.page';

describe('HoddiesPage', () => {
  let component: HoddiesPage;
  let fixture: ComponentFixture<HoddiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoddiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoddiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
