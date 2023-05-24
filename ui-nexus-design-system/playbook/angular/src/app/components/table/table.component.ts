import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() currentPage: number = 1;

  @Input() maxHeight: string = null;

  @Input() pagination: boolean = true;

  @Input() pageSize: string = '5';

  @Input() pageSizeLabel: string = 'Items Per Page';

  @Input() rowSelection: boolean = false;

  @Input() type: string = 'basic';

  @Input() sortAscIcon: string = './assets/icons/navigation/ic_arrow_upward_24px.svg';

  @Input() sortDefaultIcon: string = './assets/icons/content/ic_sort_24px.svg';

  @Input() sortDescIcon: string = './assets/icons/navigation/ic_arrow_downward_24px.svg';

  selectedRows = [];

  columnDefs: any = [
    {
      field: 'make',
      label: 'Make',
      isSortable: true
    },
    {
      field: 'model',
      label: 'Model',
      isSortable: true,
      headerClass: 'cls-col-width',
      cellClass: 'cls-col-width',
      sortAscending: (firstValue, secondValue, sortField) => firstValue[sortField] > secondValue[sortField] ? 1 : -1
    },
    {
      field: 'year',
      label: 'Year',
      isSortable: true,
      sortAscending: (firstValue, secondValue, sortField) => firstValue[sortField] > secondValue[sortField] ? 1 : -1
    },
    {
      field: 'owner',
      label: 'Car Owneer',
      isSortable: true,
      sortAscending: (firstValue, secondValue, sortField) => firstValue[sortField] > secondValue[sortField] ? 1 : -1
    },
    {
      field: 'location',
      label: 'Location',
      isSortable: true,
      sortAscending: (firstValue, secondValue, sortField) => firstValue[sortField] > secondValue[sortField] ? 1 : -1
    },
    {
      field: 'price',
      label: 'Sale Price',
      isSortable: true,
      cellRenderer: (value) => `<i style="color: ${value < 55050 ? 'red' : 'green'}">
      ${
  value < 55050 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
} ${value} </i>`,
      headerClass: 'text-right',
      cellClass: 'text-right'
    }
  ];

  rowData: any = [
    {
      make: 'Subaru',
      model: 'Outback',
      year: '2020',
      price: 35500,
      owner: 'Iron Man',
      location: 'PA'
    },
    {
      make: 'Tesla',
      model: 'Model 3',
      year: '2022',
      price: 32500,
      owner: 'Captain America',
      location: 'LA'
    },
    {
      make: 'Nissan',
      model: 'Altima',
      year: '2010',
      price: 72500,
      owner: 'Captain Marvel',
      location: 'PA'
    },
    {
      make: 'Subaru',
      model: 'Outback',
      year: '2015',
      price: 24500,
      owner: 'Spiderman',
      location: 'NY'
    },
    {
      make: 'Tesla',
      model: 'Model 3',
      year: '2021',
      price: 35050,
      owner: 'Black Widow',
      location: 'NY'
    },
    {
      make: 'Nissan',
      model: 'Altima',
      year: '2015',
      price: 90550,
      owner: 'Hulk',
      location: 'AK'
    },
    {
      make: 'Subaru',
      model: 'Outback',
      year: '2017',
      price: 29500,
      owner: 'Wanda',
      location: 'NJ'
    },
    {
      make: 'Tesla',
      model: 'Model 3',
      year: '2018',
      price: 27550,
      owner: 'Thor',
      location: 'MD'
    },
    {
      make: 'Nissan',
      model: 'Altima',
      year: '2022',
      price: 105500,
      owner: 'Loki',
      location: 'IL'
    },
    {
      make: 'Tesla',
      model: 'Model 3',
      year: '2010',
      price: 25550,
      owner: 'Thanos',
      location: 'TX'
    },
    {
      make: 'Nissan',
      model: 'Altima',
      year: '2012',
      price: 15500,
      owner: 'Dr. Strange',
      location: 'NY'
    }
  ];

  rowSelectHandler(event) {
    this.selectedRows = event?.detail;
  }
}
