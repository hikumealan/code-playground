import { Component, OnInit } from '@angular/core';
import { DefaultSearch } from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './01_search.component.html'
})
export default class SearchComponent implements OnInit {
  Items: any = [];

  filteredItem: any = [];

  defaultSearch = DefaultSearch;

  ngOnInit(): void {
    this.Items.push('Item 1');
    this.Items.push('Item 2');
    this.Items.push('Item 3');
    this.filteredItem = this.Items;
  }

  performFilter(event: any) {
    const filterBy = event.target.value.toLocaleLowerCase();
    this.filteredItem = this.Items.filter((item: any) => item.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
