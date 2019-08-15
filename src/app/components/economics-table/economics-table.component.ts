import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-economics-table',
  templateUrl: './economics-table.component.html',
  styleUrls: ['./economics-table.component.scss']
})
export class EconomicsTableComponent implements OnInit {
  @Input() data: Array<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
