import { newE2EPage } from '@stencil/core/testing';

describe('xxx-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xxx-input></xxx-input>');

    const element = await page.find('xxx-input');
    expect(element).toHaveClass('hydrated');
  });
});
