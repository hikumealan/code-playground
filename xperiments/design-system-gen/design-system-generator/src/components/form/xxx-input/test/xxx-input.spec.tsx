import { newSpecPage } from '@stencil/core/testing';
import { XxxInput } from '../xxx-input';

describe('xxx-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XxxInput],
      html: `<xxx-input></xxx-input>`,
    });
    expect(page.root).toEqualHtml(`
      <xxx-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xxx-input>
    `);
  });
});
