import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-macro-research-team',
  templateUrl: './macro-research-team.component.html',
  styleUrls: ['./macro-research-team.component.scss']
})
export class MacroResearchTeamComponent implements OnInit {
  @Input() teams: any;
  public scrollbarOptions = { axis: 'y', theme: 'dark-3' };

  constructor() { }

  ngOnInit() {
  }

}
