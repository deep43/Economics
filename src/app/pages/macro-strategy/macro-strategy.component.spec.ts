import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroStrategyComponent } from './macro-strategy.component';

describe('MacroStrategyComponent', () => {
  let component: MacroStrategyComponent;
  let fixture: ComponentFixture<MacroStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
