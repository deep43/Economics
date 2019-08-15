import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystProfileComponent } from './analyst-profile.component';

describe('AnalystProfileComponent', () => {
  let component: AnalystProfileComponent;
  let fixture: ComponentFixture<AnalystProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
