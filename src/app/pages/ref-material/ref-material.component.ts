import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridNg2} from 'ag-grid-angular';

@Component({
  selector: 'app-ref-material',
  templateUrl: './ref-material.component.html',
  styleUrls: ['./ref-material.component.scss']
})
export class RefMaterialComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
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
  appliedThemeClassOnTable = 'ag-theme-material';
  columnDefsChange = [
    {
      headerName: 'Title', filter: false, resizable: true, suppressMovable: true, width: 500,
      cellRenderer: (params) => {
        const eDiv = document.createElement('div');
        eDiv.innerHTML = '<span class="headline" type="text">' + params.data.name + '</span>';
        return eDiv;
      }, pivot: true
    },
  ];
  rowDataChange: any[] = [
    {name: 'U.S. Release And Event Dates'},
    {name: 'Canadian Release And Event Dates'},
    {name: 'Central Banks\' Meeting Schedules'},
    {name: 'U.S. Economic Indicators'},
    {name: 'Canadian Economic Indicators'},
    {name: 'Economic Indicators Guidebook'},
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    setTimeout(() => {
      this.gridApis.map((api) => {
        api.sizeColumnsToFit();
      });
    }, 500, true);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
