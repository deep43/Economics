import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import Utils from '../../helpers/uitils';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  itemList = [];
  selectedItems = [];
  settings = {};
  itemList2 = [];
  selectedItems2 = [];
  settings2 = {};
  showDates = false;

  initialData = {
    dateSpan: '1',
    keyword: '',
    reportGroup: 'All',
    date: new FormControl(new Date()),
    serializedDate: new FormControl((new Date()).toISOString())
  };


  appliedThemeClassOnTable = 'ag-theme-material';
  columnDefsChange = [
    {
      headerName: 'Headline', filter: false, resizable: true, suppressMovable: true, width: 300,
      cellRenderer: (params) => {
        const eDiv = document.createElement('div');
        eDiv.innerHTML = '<span class="headline" type="text">' + params.data.headline + '</span>';
        return eDiv;
      }, pivot: true
    },
    {
      headerName: 'Published', field: 'published',
      width: 150, pivot: true, suppressMovable: true
    },
    {
      headerName: 'Report Type', field: 'reportType',
      width: 230, pivot: true, suppressMovable: true
    },
  ];
  rowDataChange: any[] = [
    {id: 1, headline: 'PRINCE EDWARD ISLAND BUDGET 2019', published: 'Jun 26, 2019', reportType: 'Provincial Budget Analysis - PEI'},
    {id: 2, headline: 'U.S. Release And Event Dates', published: 'Jun 21, 2019', reportType: 'Economic Calendar US'},
    {id: 3, headline: 'Canadian Release And Event Dates', published: 'Jun 21, 2019', reportType: 'Economic Calendar CA'},
    {id: 4, headline: 'Overshoots and Greenshoots (The Week Ahead)', published: 'Jun 21, 2019', reportType: 'The Week Ahead'},
    {id: 5, headline: 'MONTHLY FX OUTLOOK (June 2019)', published: 'Jun 21, 2019', reportType: 'Monthly FX Outlook'},
    {
      id: 6,
      headline: 'Delayed Start to Spring, Delayed Retail Purchases (Econ Flash)',
      published: 'Jun 21, 2019',
      reportType: 'Economic Flash CA - Retail Sales'
    },
    {id: 7, headline: 'Federal Reserve: Dovish But Divided (Econ Flash)', published: 'Jun 19, 2019', reportType: 'Economic Flash US'},
    {
      id: 8,
      headline: 'Canadian Inflation: A Heatwave in May (Econ Flash)',
      published: 'Jun 19, 2019',
      reportType: 'Economic Flash CA - CPI'
    },
    {id: 9, headline: 'Federal Reserve: Losing (Some) Patience (The Week Ahead)', published: 'Jun 14, 2019', reportType: 'The Week Ahead'},
    {
      id: 10,
      headline: 'US Retail Sales Awaken from Slumber (Econ Flash)',
      published: 'Jun 14, 2019',
      reportType: 'Economic Flash US - Retail Sales'
    },
    {
      id: 11,
      headline: 'Deglobalization Complicating Trade Diversiﬁcation (Econ Insights)',
      published: 'Jun 13, 2019',
      reportType: 'Economic Insights'
    },
    {
      id: 12,
      headline: 'Are Canadian Consumers Getting A Second Wind?',
      published: 'Jun 13, 2019',
      reportType: 'Economic Insights - Feature 1'
    },
    {id: 13, headline: 'Soft US Inflation: Temporarily Transient', published: 'Jun 13, 2019', reportType: 'Economic Insights'},
    {id: 14, headline: 'China-US—The Dispute in Perspective', published: 'Jun 13, 2019', reportType: 'Economic Insights'},
    {
      id: 15,
      headline: 'Interest Rate & Exchange Rate Forecast',
      published: 'Jun 13, 2019',
      reportType: 'Interest Rate & Exchange Rate Forecast'
    },
    {id: 16, headline: 'Economic Update', published: 'Jun 13, 2019', reportType: 'Economic Update'},
    {
      id: 17,
      headline: 'US Core Price Pressures Cool in May (Econ Flash)',
      published: 'Jun 12, 2019',
      reportType: 'Economic Flash US - CPI'
    },
    {id: 18, headline: 'China-US—The Dispute in Perspective (In Focus)', published: 'Jun 10, 2019', reportType: 'In Focus'},
    {
      id: 19,
      headline: 'Fixed Income PMs: You Have Our Sympathies (The Week Ahead)',
      published: 'Jun 07, 2019',
      reportType: 'The Week Ahead'
    },
    {
      id: 20,
      headline: 'US Labor Market: Cooler, but Not Frozen (Econ Flash)',
      published: 'Jun 07, 2019',
      reportType: 'Economic Flash US - Employment'
    },
    {
      id: 21,
      headline: 'Canadians Working More Jobs, But Fewer Hours (Econ Flash)',
      published: 'Jun 07, 2019',
      reportType: 'Economic Flash CA - Employment'
    },
    {
      id: 22,
      headline: 'Canadian Trade: Things Are Looking Up…For Now (Econ Flash)',
      published: 'Jun 06, 2019',
      reportType: 'Economic Flash CA - Trade'
    },
    {id: 23, headline: 'Really Mr. President? (The Week Ahead)', published: 'May 31, 2019', reportType: 'The Week Ahead'},
    {
      id: 24,
      headline: 'Canadian Q1 GDP: Better Beneath the Surface (Econ Flash)',
      published: 'May 31, 2019',
      reportType: 'Economic Flash CA - GDP Quarterly'
    },
    {id: 25, headline: 'Why Do They Love Bonds? Let Us Count the Ways (In Focus)', published: 'May 30, 2019', reportType: 'In Focus'},
    {id: 26, headline: 'Plus ça Change (The Week Ahead)', published: 'May 24, 2019', reportType: 'The Week Ahead'},
    {id: 27, headline: 'The Law of Averages (The Week Ahead)', published: 'May 17, 2019', reportType: 'The Week Ahead'},
    {
      id: 28,
      headline: 'Trade War Impacts Are All in Your Head (Econ Insights)',
      published: 'May 16, 2019',
      reportType: 'Economic Insights'
    },
    {id: 29, headline: 'Canadian CAPEX: Wait Until Next Year?', published: 'May 16, 2019', reportType: 'Economic Insights - Feature 2'},
    {
      id: 30,
      headline: 'Housing Demand is Stronger Than Suggested by Official Figures',
      published: 'May 16, 2019',
      reportType: 'Economic Insights - Feature 3'
    },
    {
      id: 31,
      headline: 'Housing Demand is Stronger Than Suggested by Official Figures (In Focus)',
      published: 'May 14, 2019',
      reportType: 'In Focus'
    },
    {id: 32, headline: 'Cheer, Don’t Fear, the US Inﬂation Gap (The Week Ahead)', published: 'May 10, 2019', reportType: 'The Week Ahead'},
    {id: 33, headline: 'Age Is Not Just A Number (The Week Ahead)', published: 'May 03, 2019', reportType: 'The Week Ahead'},
    {
      id: 34,
      headline: 'No Love for Canadian GDP in February (Econ Flash)',
      published: 'Apr 30, 2019',
      reportType: 'Economic Flash CA - GDP Monthly'
    },
    {
      id: 35,
      headline: 'US Q1 GDP Acceleration Overshadowed by Subdued Inflation (Econ Flash)',
      published: 'Apr 26, 2019',
      reportType: 'Economic Flash US - GDP'
    },
    {
      id: 36,
      headline: 'CAPEX Will Not Save the Day – Not Today or Tomorrow (The Week Ahead)',
      published: 'Apr 26, 2019',
      reportType: 'The Week Ahead'
    },
    {id: 37, headline: 'Bank of Canada Joins the Rest of the Flock (Econ Flash)', published: 'Apr 24, 2019', reportType: 'In Focus'},
    {
      id: 38,
      headline: 'Bank of Canada Joins the Rest of the Flock (Econ Flash)',
      published: 'Apr 24, 2019',
      reportType: 'Economic Flash CA'
    },
    {id: 39, headline: 'Third Time Unlucky? (Economic Insights)', published: 'Apr 18, 2019', reportType: 'Economic Insights'},
    {id: 40, headline: 'Economic Update', published: 'Apr 18, 2019', reportType: 'Economic Forecast'},
    {id: 41, headline: 'A Matter of Semantics (The Week Ahead)', published: 'Apr 18, 2019', reportType: 'The Week Ahead'},
    {
      id: 42,
      headline: 'NEWFOUNDLAND AND LABRADOR BUDGET 2019',
      published: 'Apr 16, 2019',
      reportType: 'Provincial Budget Analysis - Newfoundland'
    },
    {
      id: 43,
      headline: 'Mortgage Stress Test: The Operation Was a Success, But... (In Focus)',
      published: 'Apr 16, 2019',
      reportType: 'In Focus'
    },
    {id: 44, headline: 'Don’t Sweat the Decimal Places (The Week Ahead)', published: 'Apr 12, 2019', reportType: 'The Week Ahead'},
    {id: 45, headline: 'Ontario Budget 2019', published: 'Apr 11, 2019', reportType: 'Provincial Budget Analysis - Ontario'},
    {id: 46, headline: 'Forecast Table (April 2019)', published: 'Apr 08, 2019', reportType: 'Forecast Table'},
    {id: 47, headline: 'The Economics Bookie (The Week Ahead)', published: 'Apr 05, 2019', reportType: 'The Week Ahead'},
    {id: 48, headline: 'The Economy’s Grim Reaper? (The Week Ahead)', published: 'Mar 29, 2019', reportType: 'The Week Ahead'},
    {id: 49, headline: 'Nova Scotia Budget 2019', published: 'Mar 26, 2019', reportType: 'Provincial Budget Analysis - Nova Scotia'},
    {id: 50, headline: 'Stuck in Neutral, But Which One? (The Week Ahead)', published: 'Mar 22, 2019', reportType: 'The Week Ahead'},
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

  companyDropdownOptions = [
    {id: 1, name: 'For All Dates'},
    {id: 2, name: 'For Past One Week'},
    {id: 3, name: 'For the Past One Month'},
    {id: 4, name: 'For the Past One Year'},
    {id: 5, name: 'Between'},
  ];

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;

    //this.onAgGridPaginationChanged();
  }

  onFirstDataRendered(params) {
    // params.api.sizeColumnsToFit();
    setTimeout(() => {
      this.gridApis.map((api) => {
        if (window.outerWidth > 600) {
          api.sizeColumnsToFit();
        }
      });
    }, 500, true);
  }

  onAgGridPaginationChanged() {
    if (this.gridApi) {
      this.currentAgGridPage = this.gridApi.paginationGetCurrentPage();
      this.totalAgGridPages = this.gridApi.paginationGetTotalPages();

      this.pageScrollService.scroll({
        document: this._document,
        scrollTarget: '.scroll-up-to-here',
      });

    }
  }

  pageChanged(currentPage) {
    this.gridApi.paginationGoToPage(currentPage - 1);

    return currentPage;
  }

  constructor(private ngxService: NgxUiLoaderService, private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private _document: any) {
  }

  ngOnInit() {
    this.itemList = [
      {'id': 1, 'itemName': 'Economics Insight & Analysis'},
      {'id': 2, 'itemName': 'Forecast'},
      {'id': 3, 'itemName': 'Economic Calendars'},
      {'id': 4, 'itemName': 'Economic Flash'},
      {'id': 5, 'itemName': 'In Focus'},
      {'id': 6, 'itemName': 'Reference Material'},
      {'id': 6, 'itemName': 'Budget Analysis'},
      {'id': 6, 'itemName': 'Government & Fiscal'},
    ];

    this.selectedItems = [

    ];

    this.settings = {
      text: 'Select Report Group',
      searchAutofocus: false,
      selectAllText: 'All',
      unSelectAllText: 'UnSelect All',
      classes: 'app-multi-select',
      enableSearchFilter: true,
      badgeShowLimit: 2
    };


    this.itemList2 = [
      {id: 1, itemName: 'For All Dates'},
      {id: 2, itemName: 'For Past One Week'},
      {id: 3, itemName: 'For the Past One Month'},
      {id: 4, itemName: 'For the Past One Year'},
      {id: 5, itemName: 'Between'},
    ];

    this.selectedItems2 = [

    ];

    this.settings2 = {
      singleSelection: true,
      showCheckbox: false,
      text: 'Select Date Span',
      searchAutofocus: false,
      selectAllText: 'All',
      unSelectAllText: 'UnSelect All',
      classes: 'app-multi-select',
      enableSearchFilter: true,
      badgeShowLimit: 2
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelectDateSpan(item: any) {
    this.showDates = item.id === 5;
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  changeDateSpan(e) {
    let value = e.target.value;
    this.showDates = value === '5';
  }

  onReset() {
    this.selectedItems = [

    ];

    this.initialData = {
      dateSpan: '1',
      keyword: '',
      reportGroup: 'All',
      date: new FormControl(new Date()),
      serializedDate: new FormControl((new Date()).toISOString())
    };
  }

  onSearch() {
    this.ngxService.startLoader('loader-02'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader('loader-02'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
      this.rowDataChange = [...Utils.shuffle(this.rowDataChange)];
    }, 800);
  }


}
