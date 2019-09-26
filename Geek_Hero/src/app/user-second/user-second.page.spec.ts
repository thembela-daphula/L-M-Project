import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSecondPage } from './user-second.page';

describe('UserSecondPage', () => {
  let component: UserSecondPage;
  let fixture: ComponentFixture<UserSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
