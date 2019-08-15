import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroResearchTeamComponent } from './macro-research-team.component';

describe('MacroResearchTeamComponent', () => {
  let component: MacroResearchTeamComponent;
  let fixture: ComponentFixture<MacroResearchTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroResearchTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroResearchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
