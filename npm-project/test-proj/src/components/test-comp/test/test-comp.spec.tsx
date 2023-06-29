import { newSpecPage } from '@stencil/core/testing';
import { TestComp } from '../test-comp';

describe('test-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestComp],
      html: `<test-comp></test-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <test-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-comp>
    `);
  });
});
