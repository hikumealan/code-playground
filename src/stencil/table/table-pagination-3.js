import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  shadow: true,
})
export class MyTable {
  @Prop() data: any[];
  @Prop() columns: any[];
  @Prop() currentPage: number;
  @Prop() pageSize: number;
  @Prop() sortBy: string;
  @Prop() sortOrder: string;

  constructor() {
    super();
  }

  render() {
    const { data, columns, currentPage, pageSize, sortBy, sortOrder } = this;
    const rows = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div class="my-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.map((cell) => (
                <td key={cell.id}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan={columns.length}>
              <div class="pagination">
                <button onClick={() => this.onPreviousPage()}>Previous</button>
                <span>{currentPage + 1}</span>
                <button onClick={() => this.onNextPage()}>Next</button>
              </div>
              <div class="sort">
                <select onChange={() => this.onSortChange(this.sortBy, this.sortOrder)}>
                  {columns.map((column) => (
                    <option key={column.id} value={column.id}>{column.label}</option>
                  ))}
                </select>
                <span>{this.sortBy} {this.sortOrder}</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </div>
    );
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextPage() {
    if (this.currentPage < Math.ceil(this.data.length / this.pageSize)) {
      this.currentPage++;
    }
  }

  onSortChange(sortBy, sortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
}
This component has five properties: data, columns, currentPage, pageSize, and sortBy. The data property is an array of objects that represent the rows in the table, the columns property is an array of objects that represent the columns in the table, the currentPage property is the current page number, the pageSize property is the number of rows per page, and the sortBy property is the column that is currently being sorted by.

To use this component, you would simply add it to your HTML like this:

<my-table data={[
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
  { id: 3, name: 'Peter Smith', age: 40 },
]} columns={[
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
]} currentPage={1} pageSize={10} sortBy="name" sortOrder="asc"></my-table>
This would render a table with three rows, with the first column being the name, the second column being the age, and the current page being 1. The table would be sorted by the name column in ascending order.

You can use the onPreviousPage() and onNextPage() methods
