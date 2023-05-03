import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-pagination',
  shadow: true,
})
export class MyPagination {
  @Prop() items: any[];
  @Prop() currentPage: number;
  @Prop() pageSize: number;
  @Prop() onPreviousPage: () => void;
  @Prop() onNextPage: () => void;
  @Prop() onPageChange: (page: number) => void;

  constructor() {
    super();
  }

  render() {
    const { items, currentPage, pageSize, onPreviousPage, onNextPage, onPageChange } = this;
    const rows = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div class="my-pagination">
        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.id}>{row.label}</th>
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
    if (this.currentPage < Math.ceil(this.items.length / this.pageSize)) {
      this.currentPage++;
    }
  }

  onSortChange(sortBy, sortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
}
This component has five properties: items, currentPage, pageSize, onPreviousPage, and onNextPage. The items property is an array of objects that represent the rows in the table, the currentPage property is the current page number, the pageSize property is the number of rows per page, and the onPreviousPage and onNextPage methods are called when the previous or next page is clicked.

To use this component, you would simply add it to your HTML like this:

<my-pagination items={[
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
  { id: 3, name: 'Peter Smith', age: 40 },
]} currentPage={1} pageSize={10} onPreviousPage={() => {}} onNextPage={() => {}}></my-pagination>
This would render a table with three rows, with the first column being the name, the second column being the age, and the current page being 1. The table would not be sorted by any column.

You can use the onPreviousPage() and onNextPage() methods to change the page, and the onSortChange() method to sort the table by the specified column.
