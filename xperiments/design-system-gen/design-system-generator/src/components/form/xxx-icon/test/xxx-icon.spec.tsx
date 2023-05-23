import { newSpecPage } from '@stencil/core/testing';
import { XxxIcon } from '../xxx-icon';

describe('xxx-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XxxIcon],
      html: `<xxx-icon></xxx-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <xxx-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xxx-icon>
    `);
  });
});
