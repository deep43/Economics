import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatTabChangeEvent} from '@angular/material';
import Utils from '../../helpers/uitils';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  currentComoPage = 0;
  lastComoPage = 4;

  linkUrl = 'https://economics.cibccm.com/economicsweb/cds?ID=20&TYPE=EC_PDF&REPORT_TYPE=FC_SNPST';
  recentNews = [
    {
      id: 1,
      date: 'Jun 21, 2019',
      title: 'Overshoots and Greenshoots (The Week Ahead...',
      description: 'by Benjamin Tal Unless Presidents Trump and Xi fall in love during the G20 summit, don’t expect a major breakthrough in the China-US trade dispute. A...'
    },
    {
      id: 2,
      date: 'Jun 21, 2019',
      title: 'Overshoots and Greenshoots (The Week Ahead...',
      description: 'by Benjamin Tal Unless Presidents Trump and Xi fall in love during the G20 summit, don’t expect a major breakthrough in the China-US trade dispute. A...'
    },
    {
      id: 3,
      date: 'Jun 21, 2019',
      title: 'Overshoots and Greenshoots (The Week Ahead...',
      description: 'by Benjamin Tal Unless Presidents Trump and Xi fall in love during the G20 summit, don’t expect a major breakthrough in the China-US trade dispute. A...'
    },
    {
      id: 4,
      date: 'Jun 21, 2019',
      title: 'Overshoots and Greenshoots (The Week Ahead...',
      description: 'by Benjamin Tal Unless Presidents Trump and Xi fall in love during the G20 summit, don’t expect a major breakthrough in the China-US trade dispute. A...'
    },
    {
      id: 5,
      date: 'Jun 21, 2019',
      title: 'Overshoots and Greenshoots (The Week Ahead...',
      description: 'by Benjamin Tal Unless Presidents Trump and Xi fall in love during the G20 summit, don’t expect a major breakthrough in the China-US trade dispute. A...'
    }
  ];

  GDPData = {
    headings: [
      {colClass: 'col-3', name: 'Heading'},
      {colClass: 'col-3', name: '2018(A)'},
      {colClass: 'col-3', name: '2019(F)'},
      {colClass: 'col-3', name: '2020(F)'},
    ],
    rows: [
      [
        {colClass: 'col-3', name: 'Canada Real GDP Growth'},
        {colClass: 'col-3', name: '1.9'},
        {colClass: 'col-3', name: '1.4'},
        {colClass: 'col-3', name: '1.4'},
      ],
      [
        {colClass: 'col-3', name: 'U.S. Real GDP Growth'},
        {colClass: 'col-3', name: '2.9'},
        {colClass: 'col-3', name: '2.3'},
        {colClass: 'col-3', name: '1.5'},
      ],
    ]
  };

  ratesData = {
    headings: [
      {colClass: 'col-6', name: 'Description'},
      {colClass: 'col-2', name: 'Jun-19'},
      {colClass: 'col-2', name: 'Sep-19'},
      {colClass: 'col-2', name: 'Dec-19'},
    ],
    rows: [
      [
        {colClass: 'col-6', name: 'BOC Overnight'},
        {colClass: 'col-2', name: '1.75'},
        {colClass: 'col-2', name: '1.75'},
        {colClass: 'col-2', name: '1.75'},
      ],
      [
        {colClass: 'col-6', name: 'Can 2-yr Gov\'t Bond'},
        {colClass: 'col-2', name: '1.38'},
        {colClass: 'col-2', name: '1.60'},
        {colClass: 'col-2', name: '1.60'},
      ],
      [
        {colClass: 'col-6', name: 'Can 10-yr Gov\'t Bond'},
        {colClass: 'col-2', name: '1.46'},
        {colClass: 'col-2', name: '1.75'},
        {colClass: 'col-2', name: '1.85'},
      ],
      [
        {colClass: 'col-6', name: 'US Federal Funds Rate'},
        {colClass: 'col-2', name: '2.375'},
        {colClass: 'col-2', name: '2.375'},
        {colClass: 'col-2', name: '2.125'},
      ],
      [
        {colClass: 'col-6', name: 'US 2-yr Gov\'t Note'},
        {colClass: 'col-2', name: '1.79'},
        {colClass: 'col-2', name: '2.05'},
        {colClass: 'col-2', name: '2.00'},
      ],
      [
        {colClass: 'col-6', name: 'US 10-yr Gov\'t Note'},
        {colClass: 'col-2', name: '2.06'},
        {colClass: 'col-2', name: '2.35'},
        {colClass: 'col-2', name: '2.45'},
      ],
    ]
  };

  fxData = {
    headings: [
      {colClass: 'col-3', name: ''},
      {colClass: 'col-3', name: 'Jun-19'},
      {colClass: 'col-3', name: 'Sep-19'},
      {colClass: 'col-3', name: 'Dec-19'},
    ],
    rows: [
      [
        {colClass: 'col-3', name: 'USDCAD'},
        {colClass: 'col-3', name: '1.33'},
        {colClass: 'col-3', name: '1.31'},
        {colClass: 'col-3', name: '1.34'},
      ],
      [
        {colClass: 'col-3', name: 'USDJPY'},
        {colClass: 'col-3', name: '108'},
        {colClass: 'col-3', name: '106'},
        {colClass: 'col-3', name: '105'},
      ],
      [
        {colClass: 'col-3', name: 'EURUSD'},
        {colClass: 'col-3', name: '1.13'},
        {colClass: 'col-3', name: '1.16'},
        {colClass: 'col-3', name: '1.18'},
      ],
      [
        {colClass: 'col-3', name: 'GBPUSD'},
        {colClass: 'col-3', name: '1.27'},
        {colClass: 'col-3', name: '1.33'},
        {colClass: 'col-3', name: '1.37'},
      ],
      [
        {colClass: 'col-3', name: 'AUDUSD'},
        {colClass: 'col-3', name: '0.7'},
        {colClass: 'col-3', name: '0.7'},
        {colClass: 'col-3', name: '0.71'},
      ],
      [
        {colClass: 'col-3', name: 'USDCHF'},
        {colClass: 'col-3', name: '0.99'},
        {colClass: 'col-3', name: '0.97'},
        {colClass: 'col-3', name: '0.96'},
      ],
      [
        {colClass: 'col-3', name: 'USDBRL'},
        {colClass: 'col-3', name: '3.86'},
        {colClass: 'col-3', name: '3.65'},
        {colClass: 'col-3', name: '3.8'},
      ],
      [
        {colClass: 'col-3', name: 'USDMXN'},
        {colClass: 'col-3', name: '19.7'},
        {colClass: 'col-3', name: '20.1'},
        {colClass: 'col-3', name: '19.9'},
      ],
    ]
  };

  commoditiesData = {
    headings: [
      {colClass: 'col-4', name: 'Description'},
      {colClass: 'col-2', name: ''},
      {colClass: 'col-2', name: '2017'},
      {colClass: 'col-2', name: '2018'},
      {colClass: 'col-2', name: '2019(F)'},
    ],
    rows: [
      [
        {colClass: 'col-4', name: 'Oil (WTI)'},
        {colClass: 'col-2', name: '$/bbl'},
        {colClass: 'col-2', name: '51'},
        {colClass: 'col-2', name: '65'},
        {colClass: 'col-2', name: '57'},
      ],
      [
        {colClass: 'col-4', name: 'Natural Gas (Henry)'},
        {colClass: 'col-2', name: '$/Mn Btu'},
        {colClass: 'col-2', name: '3.02'},
        {colClass: 'col-2', name: '3.07'},
        {colClass: 'col-2', name: '3.15'},
      ],
      [
        {colClass: 'col-4', name: 'Gold*'},
        {colClass: 'col-2', name: '$/troy oz'},
        {colClass: 'col-2', name: '1303'},
        {colClass: 'col-2', name: '1269'},
        {colClass: 'col-2', name: '1370'},
      ],
      [
        {colClass: 'col-4', name: 'Silver*'},
        {colClass: 'col-2', name: '$/troy oz'},
        {colClass: 'col-2', name: '16.9'},
        {colClass: 'col-2', name: '15.7'},
        {colClass: 'col-2', name: '13.8'},
      ],
      [
        {colClass: 'col-4', name: 'Iron Ore (62% Fe)'},
        {colClass: 'col-2', name: '$/mt'},
        {colClass: 'col-2', name: '71'},
        {colClass: 'col-2', name: '66'},
        {colClass: 'col-2', name: '78'},
      ],
      [
        {colClass: 'col-4', name: 'Copper'},
        {colClass: 'col-2', name: '$/lb'},
        {colClass: 'col-2', name: '2.81'},
        {colClass: 'col-2', name: '2.97'},
        {colClass: 'col-2', name: '2.91'},
      ],
      [
        {colClass: 'col-4', name: 'Aluminum'},
        {colClass: 'col-2', name: '$/lb'},
        {colClass: 'col-2', name: '0.89'},
        {colClass: 'col-2', name: '0.96'},
        {colClass: 'col-2', name: '0.95'},
      ],

    ]
  };

  canadaFlashNews = [
    'Delayed Start to Spring, Delayed Retail Purchases (Econ Flash)',
    'Canadian Inflation: A Heatwave in May (Econ Flash)',
    'Canadians Working More Jobs, But Fewer Hours (Econ Flash)',
    'Canadian Trade: Things Are Looking Up…For Now (Econ Flash)',
  ];

  usFlashNews = [
    'Federal Reserve: Dovish But Divided (Econ Flash)',
    'US Retail Sales Awaken from Slumber (Econ Flash)',
    'US Core Price Pressures Cool in May (Econ Flash)',
    'US Labor Market: Cooler, but Not Frozen (Econ Flash)',
  ];
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

  sliderData = [
    {
      id: 1, image: '/assets/images/images_1.jpg', pdfLink: 'CANADIAN RELEASE AND EVENT DATES',
      eventDesc: 'Canadian release and event dates', report: 'Economic calendar CA'
    },
    {
      id: 1, image: '/assets/images/images_1.jpg', pdfLink: 'CANADIAN RELEASE AND EVENT DATES',
      eventDesc: 'Canadian release and event dates', report: 'Economic calendar CA'
    },
    {
      id: 1, image: '/assets/images/images_1.jpg', pdfLink: 'CANADIAN RELEASE AND EVENT DATES',
      eventDesc: 'Canadian release and event dates', report: 'Economic calendar CA'
    },
    {
      id: 1, image: '/assets/images/images_1.jpg', pdfLink: 'CANADIAN RELEASE AND EVENT DATES',
      eventDesc: 'Canadian release and event dates', report: 'Economic calendar CA'
    },
    {
      id: 1, image: '/assets/images/images_1.jpg', pdfLink: 'CANADIAN RELEASE AND EVENT DATES',
      eventDesc: 'Canadian release and event dates', report: 'Economic calendar CA'
    },
  ];

  config: SwiperOptions = {
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0,
    autoplay: true,
    direction: 'horizontal',
    speed: 500
  };

  constructor(private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
  }

  onResearchTabChange(event: MatTabChangeEvent) {
    let tabIndex = event.index + 1;

    this.ngxService.startLoader('loader-' + tabIndex);
    setTimeout(() => {
      this.ngxService.stopLoader('loader-' + tabIndex);
    }, 800);
  }

  goToPrevPage(event){
    event.stopPropagation();
    event.preventDefault();

    this.currentComoPage--;
    this.refreshComoData('loader-como')
  }

  goToNextPage(event){
    event.stopPropagation();
    event.preventDefault();

    this.currentComoPage++;
    this.refreshComoData('loader-como')
  }

  refreshComoData(loader){
    this.ngxService.startLoader(loader);
    setTimeout(() => {
      this.ngxService.stopLoader(loader);
      this.commoditiesData.rows = [...Utils.shuffle(this.commoditiesData.rows)];

    }, 800);
  }

}
