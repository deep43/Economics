import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmailAlertsComponent } from './my-email-alerts.component';

describe('MyEmailAlertsComponent', () => {
  let component: MyEmailAlertsComponent;
  let fixture: ComponentFixture<MyEmailAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEmailAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmailAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
