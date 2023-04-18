import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-pagination',
  shadow: true,
})
export class MyPagination {
  @Prop() total: number;
  @Prop() pageSize: number;
  @Prop() currentPage: number;
  @Prop() onPreviousPage: () => void;
  @Prop() onNextPage: () => void;
  @Prop() onPageChange: (currentPage: number) => void;

  constructor() {
    super();
  }

  render() {
    const { total, pageSize, currentPage, onPreviousPage, onNextPage, onPageChange } = this;
    const pages = Math.ceil(total / pageSize);
    const range = [...Array(pages)].map((_, i) => i + 1);

    return (
      <div class="my-pagination">
        <div class="pagination-header">
          <button onClick={() => onPreviousPage()} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage}</span>
          <button onClick={() => onNextPage()} disabled={currentPage === pages}>Next</button>
        </div>
        <div class="pagination-pages">
          {range.map((page) => (
            <button key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>{page}</button>
          ))}
        </div>
      </div>
    );
  }
}
This component has five properties: total, pageSize, currentPage, onPreviousPage, and onNextPage. The total property is the total number of items, the pageSize property is the number of items per page, the currentPage property is the current page number, the onPreviousPage property is a function that is called when the previous page button is clicked, the onNextPage property is a function that is called when the next page button is clicked.

To use this component, you would simply add it to your HTML like this:

<my-pagination total={100} pageSize={10} currentPage={1} onPreviousPage={() => {}} onNextPage={() => {}} onPageChange={(currentPage) => {}}></my-pagination>
This would render a pagination component with 10 pages, with the current page being 1. The previous and next page buttons would be disabled.

You can use the onPreviousPage() and onNextPage() methods to change the current page, and the onPageChange() method to be notified when the page changes.
