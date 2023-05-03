import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  shadow: true,
})
export class MyTable {
  @Prop() headers: string[];
  @Prop() data: any[];

  constructor() {
    super();
  }

  render() {
    const { headers, data } = this;

    const rows = data.map((row, index) => (
      <tr key={index}>
        {headers.map((header, colIndex) => (
          <td key={colIndex}>{row[header]}</td>
        ))}
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

/*
This component can be used to create a custom table with the desired headers and data. For example, the following code would create a table with two headers, "Name" and "Age", and two rows of data, "John Doe" and "25" and "Jane Doe" and "26":

<my-table headers={['Name', 'Age']} data={[['John Doe', 25], ['Jane Doe', 26]]}></my-table>
This component also exposes a few methods that can be used to interact with the table. For example, the following code would get the current value of the table:

const value = this.myTable.data;
And the following code would set the value of the table:

this.myTable.data = [['John Doe', 25], ['Jane Doe', 26]];
To use the custom cell slot, you can use the slot attribute on the td element. For example, the following code would render a custom cell for the "Name" column:

<td slot="name">
  <h1>{row.name}</h1>
</td>
*/
