import { newE2EPage } from '@stencil/core/testing';

describe('xxx-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xxx-icon></xxx-icon>');

    const element = await page.find('xxx-icon');
    expect(element).toHaveClass('hydrated');
  });
});
