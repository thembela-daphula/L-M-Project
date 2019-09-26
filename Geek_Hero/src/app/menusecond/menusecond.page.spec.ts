import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusecondPage } from './menusecond.page';

describe('MenusecondPage', () => {
  let component: MenusecondPage;
  let fixture: ComponentFixture<MenusecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
