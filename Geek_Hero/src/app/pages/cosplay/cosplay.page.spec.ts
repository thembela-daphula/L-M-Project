import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayPage } from './cosplay.page';

describe('CosplayPage', () => {
  let component: CosplayPage;
  let fixture: ComponentFixture<CosplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
