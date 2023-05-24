import { newSpecPage } from '@stencil/core/testing';
import { IonComponent } from '../ion-component';

describe('ion-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IonComponent],
      html: `<ion-component></ion-component>`,
    });
    expect(page.root).toEqualHtml(`
      <ion-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ion-component>
    `);
  });
});
