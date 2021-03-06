import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() newsFeeds: Array<any>;
  @Input() viewAllLink: string;
  constructor() { }

  ngOnInit() {
  }

}
