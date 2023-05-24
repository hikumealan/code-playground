import { Component, Input } from '@angular/core';
import { rowData, columnDefs } from '../../constants';

@Component({
  selector: 'app-table',
  templateUrl: './01_table.component.html'
})
export default class TableComponent {
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

  products = [];

  columnDefs = columnDefs;

  rowData = rowData;

  rowSelectHandler(event) {
    this.selectedRows = event?.detail;
  }
}
