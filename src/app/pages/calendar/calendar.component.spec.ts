import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendar_newComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: Calendar_newComponent;
  let fixture: ComponentFixture<Calendar_newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calendar_newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendar_newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
