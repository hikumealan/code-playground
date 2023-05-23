import { newE2EPage } from '@stencil/core/testing';

describe('input-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-toggle></input-toggle>');

    const element = await page.find('input-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
