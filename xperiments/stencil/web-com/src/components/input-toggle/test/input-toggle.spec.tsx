import { newSpecPage } from '@stencil/core/testing';
import { InputToggle } from '../input-toggle';

describe('input-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputToggle],
      html: `<input-toggle></input-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <input-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-toggle>
    `);
  });
});
