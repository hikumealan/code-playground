import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  shadow: true,
})
export class MyTable {
  @Prop() data: any[];
  @Prop() columns: any[];
  @Prop() pageSize: number;
  @Prop() page: number;

  constructor() {
    super();
  }

  render() {
    const { data, columns, pageSize, page } = this;

    const rows = data.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div class="my-table">
        <thead>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
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
                <span>{page}</span>
                <button onClick={() => this.onNextPage()}>Next</button>
              </div>
            </td>
          </tr>
        </tfoot>
      </div>
    );
  }

  onPreviousPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onNextPage() {
    if (this.page < Math.ceil(this.data.length / this.pageSize)) {
      this.page++;
    }
  }

  onSort(column) {
    this.data.sort((a, b) => {
      const valueA = a[column.id];
      const valueB = b[column.id];

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
This component has four properties: data, columns, pageSize, and page. The data property is an array of objects that represent the rows of the table, the columns property is an array of objects that represent the columns of the table, the pageSize property is the number of rows to display per page, and the page property is the current page.

To use this component, you would simply add it to your HTML like this:

<my-table data={[
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Peter Smith" },
  { id: 4, name: "Mary Jones" },
]} columns={[
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
]} pageSize={10} page={1}></my-table>
This would render a table with 10 rows per page, with the first page displayed.

You can use the onSort() method to sort the table by a column, and the onPreviousPage() and onNextPage() methods to change the page.
