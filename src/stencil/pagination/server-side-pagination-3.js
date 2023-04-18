import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-pagination',
  shadow: true,
})
export class MyPagination {
  @Prop() totalPages: number;
  @Prop() currentPage: number;
  @Prop() onPageChange: (page: number) => void;

  constructor() {
    super();
  }

  render() {
    const { totalPages, currentPage, onPageChange } = this;
    const pages = Array(totalPages).fill(0).map((_, page) => (
      <li key={page}>
        {page + 1}
        <input
          type="radio"
          name="page"
          value={page}
          checked={page === currentPage}
          onChange={() => onPageChange(page)}
        />
      </li>
    ));

    return (
      <div class="my-pagination">
        <ul>
          {pages}
        </ul>
      </div>
    );
  }
}
This component has three properties: totalPages, currentPage, and onPageChange. The totalPages property is the total number of pages, the currentPage property is the current page number, and the onPageChange property is a function that is called when the page changes.

To use this component, you would simply add it to your HTML like this:

<my-pagination totalPages={5} currentPage={1} onPageChange={(page) => {
  // Do something with the new page number
}}></my-pagination>
This would render a pagination component with 5 pages, with the current page being 1. When you click on a different page, the onPageChange function will be called with the new page number.
