import { newE2EPage } from '@stencil/core/testing';

describe('test-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-comp></test-comp>');

    const element = await page.find('test-comp');
    expect(element).toHaveClass('hydrated');
  });
});
