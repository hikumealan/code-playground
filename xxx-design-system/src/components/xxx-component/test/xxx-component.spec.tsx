import { newSpecPage } from '@stencil/core/testing';
import { XxxComponent } from '../xxx-component';

describe('xxx-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XxxComponent],
      html: `<xxx-component></xxx-component>`,
    });
    expect(page.root).toEqualHtml(`
      <xxx-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xxx-component>
    `);
  });
});
