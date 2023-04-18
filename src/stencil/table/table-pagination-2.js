import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  shadow: true,
})
export class MyTable {
  @Prop() data: any[];
  @Prop() columns: any[];
  @Prop() page: number;
  @Prop() size: number;
  @Prop() sortBy: string;
  @Prop() sortAsc: boolean;

  constructor() {
    super();
  }

  render() {
    const { data, columns, page, size, sortBy, sortAsc } = this;
    const rows = data.slice((page - 1) * size, page * size);
    const sortedRows = rows.sort((a, b) => {
      const columnIndex = columns.findIndex(column => column.name === sortBy);
      const aValue = a[columnIndex];
      const bValue = b[columnIndex];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      } else {
        return 0;
      }
    });

    return (
      <div class="my-table">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => (
              <tr key={index}>
                {columns.map((column, index) => (
                  <td key={index}>{row[index]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div class="pagination">
          <button onClick={() => this.onPreviousPage()}>Previous</button>
          <span>{page}</span>
          <button onClick={() => this.onNextPage()}>Next</button>
        </div>
        <div class="sort">
          <select onChange={() => this.onSortChange()}>
            {columns.map((column, index) => (
              <option key={index} value={column.name}>{column.label}</option>
            ))}
          </select>
          <span>{sortBy}</span>
          <button onClick={() => this.onSortAscChange(!sortAsc)}>
            {sortAsc ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>
    );
  }

  onPreviousPage() {
    this.page--;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  onNextPage() {
    this.page++;
    if (this.page > Math.ceil(data.length / size)) {
      this.page = Math.ceil(data.length / size);
    }
  }

  onSortChange(event) {
    this.sortBy = event.target.value;
    this.sortAsc = true;
  }

  onSortAscChange(event) {
    this.sortAsc = !event.target.checked;
  }
}
This component has five properties: data, columns, page, size, and sortBy. The data property is an array of objects that represent the rows of the table, the columns property is an array of objects that represent the columns of the table, the page property is the current page, the size property is the size of each page, and the sortBy property is the column that is currently being sorted.

