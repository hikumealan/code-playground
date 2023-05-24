import { newE2EPage } from '@stencil/core/testing';

describe('ion-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ion-component></ion-component>');

    const element = await page.find('ion-component');
    expect(element).toHaveClass('hydrated');
  });
});
