import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsTableComponent } from './economics-table.component';

describe('EconomicsTableComponent', () => {
  let component: EconomicsTableComponent;
  let fixture: ComponentFixture<EconomicsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
