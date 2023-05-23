import { newE2EPage } from '@stencil/core/testing';

describe('xxx-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xxx-component></xxx-component>');

    const element = await page.find('xxx-component');
    expect(element).toHaveClass('hydrated');
  });
});
