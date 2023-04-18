import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-icon',
  shadow: true,
})
export class MyIcon {
  @Prop() icon: string;
  @Prop() color: string;

  constructor() {
    super();
  }

  render() {
    const { icon, color } = this;
    const svg = `<svg viewBox="0 0 100 100">
      <symbol id="${icon}">
        <rect x="0" y="0" width="100" height="100" fill="${color}" />
      </symbol>
      <use xlink:href="#${icon}" />
    </svg>`;

    return (
      <div class="my-icon">
        {svg}
      </div>
    );
  }
}
This component has two properties: icon and color. The icon property is the name of the SVG file to render, and the color property is the color of the icon.

To use this component, you would simply add it to your HTML like this:

<my-icon icon="heart" color="red"></my-icon>
This would render a heart icon that is red. You can change the icon's color by simply changing the color prop.
