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
    const cachedIcon = this.icons[icon];
    if (!cachedIcon) {
      const svg = `<svg viewBox="0 0 100 100">
        <symbol id="${icon}">
          <path fill="${color}" d="M0,0 L100,0 L100,100 L0,100 Z"></path>
        </symbol>
      </svg>`;
      this.icons[icon] = svg;
    }
    return (
      <svg viewBox="0 0 100 100">
        <use xlink:href={cachedIcon}></use>
      </svg>
    );
  }

  icons = {};
}
This component has two properties: icon and color. The icon property is the name of the SVG file to render, and the color property is the color of the icon.

To use this component, you would simply add it to your HTML like this:

<my-icon icon="heart" color="red"></my-icon>
This would render a red heart icon. You can change the icon's color by changing the color property. For example, the following code would render a green heart icon:

<my-icon icon="heart" color="green"></my-icon>
This component also caches SVG files, so that they are only loaded once. This can improve the performance of your application.
