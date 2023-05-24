import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-examples',
  templateUrl: './table-examples.component.html',
  styleUrls: ['./table-examples.component.scss']
})
export class TableExamplesComponent implements OnInit {
  Object = Object;

  selectedRows = [];

  displayedRows = [];

  displayedCustomRows = [];

  pageSize = 5;

  customCurrent = 1;

  maxPagination;

  isExpandedRow = [];

  isExpandedCustomRow = [];

  columnDefs: any = [
    {
      field: 'make',
      label: 'Make',
      isSortable: true
    },
    {
      field: 'model',
      label: 'Automobile Model',
      isSortable: true
    },
    {
      field: 'year',
      label: 'Manufactured Year',
      isSortable: true
    },
    {
      field: 'owner',
      label: 'Automobile Owner',
      isSortable: true
    },
    {
      field: 'location',
      label: 'Automobile Location',
      isSortable: true
    },
    {
      field: 'price',
      label: 'Sale Price',
      isSortable: false,
      cellRenderer: (value) => `<i style="color: ${value < 35100 ? 'red' : 'green'}">
      ${
  value < 35100 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
} ${value} </i>`,
      headerClass: 'text-right',
      cellClass: 'text-right'
    }
  ];

  rowData: any = [
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2020',
      owner: 'Iron Man',
      location: 'PA',
      price: 35910
    },
    {
      make: 'Dodge',
      model: 'Charger',
      year: '2022',
      owner: 'Captain America',
      location: 'LA',
      price: 32910
    },
    {
      make: 'BMW',
      model: '320',
      year: '2010',
      owner: 'Captain Marvel',
      location: 'PA',
      price: 72910
    },
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2015',
      owner: 'Spiderman',
      location: 'NY',
      price: 24910
    },
    {
      make: 'Dodge',
      model: 'Charger',
      year: '2021',
      owner: 'Black Widow',
      location: 'NY',
      price: 39100
    },
    {
      make: 'BMW',
      model: '320',
      year: '2015',
      owner: 'Hulk',
      location: 'AK',
      price: 99500
    },
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2017',
      owner: 'Wanda',
      location: 'NJ',
      price: 29910
    },
    {
      make: 'Dodge',
      model: 'Charger',
      year: '2018',
      owner: 'Thor',
      location: 'MD',
      price: 27500
    },
    {
      make: 'BMW',
      model: '320',
      year: '2022',
      owner: 'Loki',
      location: 'IL',
      price: 105910
    },
    {
      make: 'Dodge',
      model: 'Charger',
      year: '2010',
      owner: 'Thanos',
      location: 'TX',
      price: 25900
    },
    {
      make: 'BMW',
      model: '320',
      year: '2012',
      owner: 'Dr. Strange',
      location: 'NY',
      price: 15910
    }
  ];

  columnList = Object.keys(this.rowData[0]);

  columnData = [];

  ngOnInit(): void {
    this.maxPagination = Math.ceil(this.rowData.length / this.pageSize);
    this.displayedRows = this.rowData.slice(0, this.pageSize);
    this.displayedCustomRows = this.rowData.slice(0, this.pageSize);
    this.setExpandedRowFlag();
    this.setExpandedCustomRowFlag();
    const tempData = JSON.parse(JSON.stringify(this.columnDefs));
    for (const col of tempData) {
      const temp = col;
      temp.isSortable = false;
      this.columnData.push(temp);
    }
  }

  setExpandedCustomRowFlag() {
    this.isExpandedCustomRow = [];
    for (const _row of this.displayedCustomRows) {
      this.isExpandedCustomRow.push(false);
    }
  }

  setExpandedRowFlag() {
    this.isExpandedRow = [];
    for (const _row of this.displayedRows) {
      this.isExpandedRow.push(false);
    }
  }

  rowSelectHandler(event) {
    this.selectedRows = event?.detail;
  }

  handleChangeEvent(_eventData) {}

  handlePaginationChange(_event) {
    this.displayedRows = [];
    this.customCurrent = _event.detail;
    const offset = this.customCurrent * this.pageSize;
    const from = offset - this.pageSize;
    const end = offset;
    this.displayedRows = this.rowData.slice(from, end);
    this.setExpandedRowFlag();
  }

  handleCustomChangeEvent(_event) {
    this.displayedCustomRows = [];
    const offset = _event.detail.currentPage * _event.detail.pageSize;
    const from = offset - _event.detail.pageSize;
    const end = offset;
    this.displayedCustomRows = this.rowData.slice(from, end);
    this.setExpandedCustomRowFlag();
  }
}
