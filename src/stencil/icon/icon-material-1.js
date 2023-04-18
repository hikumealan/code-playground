import { Component, Prop, h } from '@stencil/core';

import { mdIcons, mdIconSize } from '@mdi/js';

@Component({
  tag: 'my-icon',
  shadow: true,
})
export class MyIcon {
  @Prop() icon: string;
  @Prop() color: string;
  @Prop() size: mdIconSize;

  constructor() {
    super();
  }

  render() {
    const { icon, color, size } = this;
    const iconEl = mdIcons[icon];
    const iconSvg = iconEl.svg;
    const iconHtml = `<svg viewBox="0 0 ${iconSvg.viewBox.width} ${iconSvg.viewBox.height}">
      ${iconSvg.innerHTML}
    </svg>`;
    return (
      <div class="my-icon" style={{ color: color, fontSize: size }}>
        {iconHtml}
      </div>
    );
  }
}
This component has three properties: icon, color, and size. The icon property is the name of the material icon to render, the color property is the color of the icon, and the size property is the size of the icon.

To use this component, you would simply add it to your HTML like this:

<my-icon icon="home" color="red" size="24px"></my-icon>
This would render a home icon with the color red and the size 24px. You can change the icon, color, and size using the icon, color, and size properties.
