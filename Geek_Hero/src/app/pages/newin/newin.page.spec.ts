import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinPage } from './newin.page';

describe('NewinPage', () => {
  let component: NewinPage;
  let fixture: ComponentFixture<NewinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
