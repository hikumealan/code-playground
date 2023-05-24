import { Component, OnInit, Input } from '@angular/core';
import { filterTableConstants } from '../../constants';

@Component({
  selector: 'app-search-examples',
  templateUrl: './02_filterTable.component.html'
})
export default class FilterTableComponent implements OnInit {
  debounce: any;

  columnDefs: any = filterTableConstants.colDefs;

  rowData: any = filterTableConstants.rowData;


  Items: any = [];

  filteredItem: any = [];

  rowDataNew: any = [];

  showHideDrawer = false;

  filteredRowData = filterTableConstants.rowData;

  filterTableData = filterTableConstants;

  ngOnInit(): void {
    this.Items.push('Nissan');
    this.Items.push('Tesla');
    this.Items.push('Toyota');
    this.filteredItem = this.Items;
  }

  performFilter(event: any) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      const filterBy = event.target.value.toLocaleLowerCase();
      this.filteredItem = this.Items.filter((item: any) => item.toLocaleLowerCase().indexOf(filterBy) !== -1);
      if (!filterBy) {
        this.filteredRowData = this.rowData;
      }
    }, 500);
  }

  toggleDrawer() {
    this.showHideDrawer = !this.showHideDrawer;
  }

  setFilteredItemOnClickHandler = (item) => {
    this.filteredItem = [item];
    this.filteredRowData = [...this.rowData.filter((data) => data.make === item)];
  };
}
