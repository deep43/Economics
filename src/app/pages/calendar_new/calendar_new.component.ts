import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-new',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarNewComponent implements OnInit {
  appliedThemeClassOnTable = 'ag-theme-material';
  columnDefsChange = [
    {
      headerName: 'Date', field: 'date',
      cellRenderer: (params) => {
        const eDiv = document.createElement('div');

        let html = '';
        params.data.date.map((item) => {
          html += '<div class="table-line">' + item + '</div>';
        });
        eDiv.innerHTML = '<div>' + html + '</div>';
        return eDiv;
      },
      width: 120, pivot: true, suppressMovable: true, autoHeight: true, cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Description', filter: false, resizable: true, suppressMovable: true, width: 300,
      cellRenderer: (params) => {
        const eDiv = document.createElement('div');

        let html = '';
        params.data.description.map((item) => {
          html += '<div class="table-line">' + item + '</div>';
        });
        eDiv.innerHTML = '<div>' + html + '</div>';
        return eDiv;
      }, pivot: true, autoHeight: true, cellClass: 'cell-wrap-text',
    }, /*
    {
      headerName: 'Description', field: 'description',
      width: 300, pivot: true, suppressMovable: true
    },*/
    {
      headerName: 'Period', field: 'period',
      width: 100, pivot: true, suppressMovable: true, autoHeight: true, cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'CIBC', field: 'cibc',
      width: 80, pivot: true, suppressMovable: true, autoHeight: true, cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Consensus', field: 'consensus',
      width: 120, pivot: true, suppressMovable: true, autoHeight: true, cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Prior', field: 'prior',
      width: 100, pivot: true, suppressMovable: true, autoHeight: true, cellClass: 'cell-wrap-text',
    },
  ];
  rowDataChange: any[] = [
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
    {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    }, {
      id: 1,
      date: ['Thursday May 2', '', '', '', ''],
      description: [
        'Auction: 3-M Bills $6.8B, ',
        'Auction: 3-M Bills $6.8B, 6-M Bills, $2.6B, 1-',
        'Auction: 3-M Bills $6.8B, ',
      ],
      period: 'Period',
      cibc: 'CIBC',
      consensus: 'Consensus',
      prior: 'Prior'
    },
  ];
  defaultColDef = {
    sortable: true,
    filter: false,
    resizable: true
  };
  gridApis = [];
  gridApi;
  gridApiCanada;
  gridApiUS;
  gridColumnApi;
  currentCanadaPage = 0;
  lastCanadaPage = false;
  currentUSPage = 0;
  lastUSPage = false;
  selectedRowsPerPage = 5;
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

  onGridReadyCanada(params) {
    this.gridApiCanada = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;

    this.currentCanadaPage = this.gridApiCanada.paginationGetCurrentPage();
  }

  onGridReadyUS(params) {
    this.gridApiUS = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;
    this.currentUSPage = this.gridApiUS.paginationGetCurrentPage();
  }

  onFirstDataRendered(params) {
    this.drawTables();
  }

  constructor() {
  }

  drawTables() {

    setTimeout(() => {
      this.gridApis.map((api) => {
        if (window.outerWidth > 600) {
          api.sizeColumnsToFit();
        }
        api.resetRowHeights();
      });
    }, 500, true);
  }

  onSelectedTabChange() {
    this.drawTables();
  }

  goToPrevAgGridPage(evt, gridApi) {
    evt.stopPropagation();
    evt.preventDefault();
    gridApi.paginationGoToPreviousPage();
  }

  goToNextAgGridPage(evt, gridApi) {
    evt.stopPropagation();
    evt.preventDefault();
    gridApi.paginationGoToNextPage();
  }

  onPaginationChangedCanada($event) {
    if (this.gridApiCanada) {
      this.currentCanadaPage = this.gridApiCanada.paginationGetCurrentPage();
      this.lastCanadaPage = (this.currentCanadaPage === Math.floor(this.rowDataChange.length / this.selectedRowsPerPage));
    }
    if (this.gridApiUS) {
      this.currentUSPage = this.gridApiUS.paginationGetCurrentPage();
      this.lastUSPage = (this.currentCanadaPage === Math.floor(this.rowDataChange.length / this.selectedRowsPerPage));
    }
  }

  onPaginationChangedUS($event) {
    if (this.gridApiUS) {
      this.currentUSPage = this.gridApiUS.paginationGetCurrentPage();
    }
  }

  ngOnInit() {
  }

}
