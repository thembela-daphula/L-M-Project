import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesPage } from './accessories.page';

describe('AccessoriesPage', () => {
  let component: AccessoriesPage;
  let fixture: ComponentFixture<AccessoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
