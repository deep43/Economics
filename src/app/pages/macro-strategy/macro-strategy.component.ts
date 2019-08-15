import {Component, Inject, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-macro-strategy',
  templateUrl: './macro-strategy.component.html',
  styleUrls: ['./macro-strategy.component.scss']
})
export class MacroStrategyComponent implements OnInit {
  teams = [
    {
      id: 1,
      image: '/assets/images/images_1.jpg',
      name: 'Maria Berlettano,CFA',
      desc: 'Maria Berlettano,CFA',
      phone: '416 594-8041',
      email: 'maria.berlettano@cibc.com'
    },
    {
      id: 2,
      image: '/assets/images/images_1.jpg',
      name: 'Tom Bognar,CFA',
      desc: 'Canadian Gov\'t Credit',
      phone: '416 956-6032',
      email: 'tom.bognar@cibc.com'
    },
    {
      id: 3,
      image: '/assets/images/images_1.jpg',
      name: 'Joan Pinto',
      desc: 'Energy & FX',
      phone: 'Energy & FX',
      email: 'joan.pinto@cibc.com'
    }
  ];

  ficcTeams = [
    {
      id: 1,
      image: '/assets/images/images_1.jpg',
      name: 'Ian Pollick',
      desc: 'Rates',
      phone: '+1 416 594-7057',
      email: 'ian.pollick@cibc.com'
    },
    {
      id: 2,
      image: '/assets/images/images_1.jpg',
      name: 'Jeremy Stretch',
      desc: 'FX-G10',
      phone: '+44 0 207 234-7232',
      email: 'jeremy.stretch@cibc.com'
    },
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Bipan Rai', desc: 'FX-G10', phone: '+1 416 594-7925', email: 'bipan.rai@cibc.com'},
    {
      id: 4,
      image: '/assets/images/images_1.jpg',
      name: 'Patrick Bennett',
      desc: 'FX-Asia',
      phone: '+852 3907-6351',
      email: 'patrick.bennett@cibc.com'
    },
    {
      id: 5,
      image: '/assets/images/images_1.jpg',
      name: 'Adam Bulley',
      desc: 'Corporate IG Credit',
      phone: '+1 416 594-8510',
      email: 'adam.bulley@cibc.com'
    },
    {
      id: 6,
      image: '/assets/images/images_1.jpg',
      name: 'Luis Hurtado',
      desc: 'Latam & Caribbean',
      phone: '+1 416 594-8284',
      email: 'luis.hurtado@cibc.com'
    },
    {
      id: 7,
      image: '/assets/images/images_1.jpg',
      name: 'Sarah Ying',
      desc: 'FX & Rates',
      phone: '+1 416 594-8302',
      email: 'sarah.ying@cibc.com'
    },
  ];
  appliedThemeClassOnTable = 'ag-theme-material';
  columnDefsChange = [
    {
      headerName: 'Published', field: 'published',
      width: 150, pivot: true, suppressMovable: true
    },
    {
      headerName: 'Sector', field: 'sector',
      width: 150, pivot: true, suppressMovable: true
    },
    {
      headerName: 'Report Name', field: 'reportName',
      width: 200, pivot: true, suppressMovable: true
    },
    {
      headerName: 'Headline', filter: false, resizable: true, suppressMovable: true, width: 300,
      cellRenderer: (params) => {
        const eDiv = document.createElement('div');
        eDiv.innerHTML = '<a class="headline" href="#">' + params.data.headline + '</a>';
        return eDiv;
      }, pivot: true
    },
  ];
  rowDataChange: any[] = [
    {
      id: 1,
      published: 'Jun 26, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'Weekly GSP Analytics',
      headline: 'Weekly GSP Analytics - June 26 2019'
    },
    {
      id: 2,
      published: 'Jun 26, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 26 2019'
    },
    {
      id: 3,
      published: 'Jun 25, 2019',
      sector: 'Government Credit',
      reportName: 'Canadian Government ',
      headline: 'Canadian Government  - June 25 2019'
    },
    {id: 4, published: 'Jun 24, 2019', sector: 'FX-G10', reportName: 'FX Monthly', headline: 'FX Monthly - June 21 2019'},
    {
      id: 5,
      published: 'Jun 24, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 24 2019'
    },
    {
      id: 6,
      published: 'Jun 24, 2019',
      sector: 'FX-G10',
      reportName: 'FX Strategist Weekly',
      headline: 'FX Strategist Weekly - June 24 2019'
    },
    {
      id: 7,
      published: 'Jun 21, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 21 2019'
    },
    {
      id: 8,
      published: 'Jun 19, 2019',
      sector: 'Government Credit',
      reportName: 'Canadian Government ',
      headline: 'Canadian Government  - June 18 2019'
    },
    {
      id: 9,
      published: 'Jun 18, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 18 2019'
    },
    {
      id: 10,
      published: 'Jun 18, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Weekly Curve',
      headline: 'The Weekly Curve - June 17 2019'
    },
    {
      id: 11,
      published: 'Jun 17, 2019',
      sector: 'FX-G10',
      reportName: 'FX Strategist Weekly',
      headline: 'FX Strategist Weekly - June 16 2019'
    },
    {
      id: 12,
      published: 'Jun 13, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 13 2019'
    },
    {
      id: 13,
      published: 'Jun 12, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'Weekly GSP Analytics',
      headline: 'Weekly GSP Analytics - June 12 2019'
    },
    {
      id: 14,
      published: 'Jun 10, 2019',
      sector: 'FX-G10',
      reportName: 'FX Strategist Weekly',
      headline: 'FX Strategist Weekly - June 10 2019'
    },
    {
      id: 15,
      published: 'Jun 07, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 7 2019'
    },
    {
      id: 16,
      published: 'Jun 05, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Morning Curve',
      headline: 'The Morning Curve - June 5 2019'
    },
    {
      id: 17,
      published: 'Jun 04, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'Weekly GSP Analytics',
      headline: 'Weekly GSP Analytics - June 4 2019'
    },
    {
      id: 18,
      published: 'Jun 04, 2019',
      sector: 'FX-G10',
      reportName: 'FX Strategist Weekly',
      headline: 'FX Strategist Weekly - June 4 2019'
    },
    {
      id: 19,
      published: 'Jun 03, 2019',
      sector: 'Rates and GSP Analytics',
      reportName: 'The Weekly Curve',
      headline: 'The Weekly Curve - June 3 2019'
    },
    {
      id: 20,
      published: 'Jun 03, 2019',
      sector: 'Government Credit',
      reportName: 'Focus on Canada',
      headline: 'Focus on Canada - June 3 2019'
    },
  ];
  defaultColDef = {
    sortable: true,
    filter: false,
    resizable: true
  };
  gridApis = [];
  gridApi;
  gridColumnApi;
  selectedRowsPerPage = 13;
  currentAgGridPage = 0;
  totalAgGridPages = 0;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;

    this.onAgGridPaginationChanged();
  }

  onFirstDataRendered(params) {
    setTimeout(() => {
      this.gridApis.map((api) => {
        if (window.outerWidth > 600) {
          api.sizeColumnsToFit();
        }
      });
    }, 500, true);
  }

  goToAgGridLastPage(){
    this.pageChanged(this.totalAgGridPages);
  }

  constructor(private ngxService: NgxUiLoaderService, private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private _document: any) {
  }

  ngOnInit() {
  }

  onAgGridPaginationChanged() {


  }

  pageChanged(currentPage) {
    this.gridApi.paginationGoToPage(currentPage-1);

    this.ngxService.startLoader('loader-2');
    setTimeout(() => {
      this.ngxService.stopLoader('loader-2');
      if (this.gridApi) {
        this.currentAgGridPage = this.gridApi.paginationGetCurrentPage();
        this.totalAgGridPages = this.gridApi.paginationGetTotalPages();

        this.pageScrollService.scroll({
          document: this._document,
          scrollTarget: '.scroll-up-to-here',
        });
      }
    }, 800);

    return currentPage;
  }


}
