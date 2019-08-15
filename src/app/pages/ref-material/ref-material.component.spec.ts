import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefMaterialComponent } from './ref-material.component';

describe('RefMaterialComponent', () => {
  let component: RefMaterialComponent;
  let fixture: ComponentFixture<RefMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
