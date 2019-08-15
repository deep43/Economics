import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-research-team',
  templateUrl: './research-team.component.html',
  styleUrls: ['./research-team.component.scss']
})
export class ResearchTeamComponent implements OnInit {
  @Input() teams: any;
  public scrollbarOptions = { axis: 'y', theme: 'dark-3' };
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToProfile(evt, team){
    evt.stopPropagation();
    evt.preventDefault();
    this.router.navigate(['profile'], { state: team });
  }
}
