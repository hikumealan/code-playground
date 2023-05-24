import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-examples',
  templateUrl: './search-examples.component.html'
})
export class SearchExamplesComponent implements OnInit {
  @Input() currentPage: number = 1;

  @Input() maxHeight: string = null;

  @Input() pagination: boolean = true;

  @Input() pageSize: string = '5';

  @Input() pageSizeLabel: string = 'Items Per Page';

  @Input() type: string = 'basic';

  columnDefs: any = [
    {
      field: 'make',
      label: 'Make',
      isSortable: false
    },
    {
      field: 'model',
      label: 'Model',
      isSortable: false

    },
    {
      field: 'year',
      label: 'Year',
      isSortable: false

    },
    {
      field: 'owner',
      label: 'Car Owner',
      isSortable: false

    },
    {
      field: 'location',
      label: 'Location',
      isSortable: false

    },
    {
      field: 'price',
      label: 'Sale Price',
      isSortable: false,
      cellRenderer: (value) => `<i style="color: ${value < 55050 ? 'red' : 'green'}">
      ${
  value < 55050 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
} ${value} </i>`
    }
  ];

  rowData: any = [
    {
      make: 'Toyota',
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
      make: 'Toyota',
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
    }
  ];


  Items: any = [];

  filteredItem: any = [];

  rowDataNew: any = [];

  ngOnInit(): void {
    this.Items.push('Nissan');
    this.Items.push('Tesla');
    this.Items.push('Toyota');
    this.filteredItem = this.Items;
  }

  performFilter(event: any) {
    const filterBy = event.target.value.toLocaleLowerCase();
    this.filteredItem = this.Items.filter((item: any) => item.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  refreshTable(event: any) {
    const selectedItem = document.querySelector('input').value;
    if (selectedItem !== null && selectedItem !== '')
    {
      this.rowDataNew = this.rowData.filter((newValue) => newValue.make === selectedItem);
    }
    else
    {
      this.rowDataNew = this.rowData;
    }

    const table = document.getElementById('tblNexus');
    const tBody = table && table.getElementsByTagName('tbody')[0];
    if (tBody) {
      tBody.innerHTML = '';
    }
    const columnList = Object.keys(this.rowDataNew[0]);
    for (const row of this.rowDataNew) {
      const rowCount = tBody.rows.length;
      const tableRow = tBody.insertRow(rowCount);
      columnList.forEach((_key, index, arr) => {
        const cell = tableRow.insertCell(index);

        cell.innerHTML = row[arr[index]];
      });
    }
  }
}
