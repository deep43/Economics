import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  docData = {
    headings: [
      {colClass: 'col-12', name: 'Title'},
    ],
    rows: [
      [
        {colClass: 'col-12', name: 'U.S. Release And Event Dates'},
      ],
      [
        {colClass: 'col-12', name: 'Canadian Release And Event Dates'},
      ],
      [
        {colClass: 'col-12', name: 'Central Banks\' Meeting Schedules'},
      ],
      [
        {colClass: 'col-12', name: 'U.S. Economic Indicators'},
      ],
      [
        {colClass: 'col-12', name: 'Canadian Economic Indicators'},
      ],
      [
        {colClass: 'col-12', name: 'Economic Indicators Guidebook'},
      ],
    ]
  };
  teams = [
    {id: 1, image: '/assets/images/images_1.jpg', name: 'Avery Shenfeld', phone: '(416) 594-7356', email: 'Avery.Shenfeld@cibc.com'},
    {id: 2, image: '/assets/images/images_1.jpg', name: 'Benjamin Tal', phone: '(416) 956-3698', email: 'Benjamin.Tal@cibc.com'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
