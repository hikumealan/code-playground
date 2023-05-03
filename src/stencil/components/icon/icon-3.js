import { Component, Prop, h } from '@stencil/core';

import { mdIcons } from '@material-ui/icons';

@Component({
  tag: 'my-icon',
  shadow: true,
})
export class MyIcon {
  @Prop() icon: string;
  @Prop() color: string;
  @Prop() size: number;

  constructor() {
    super();
    this.iconCache = new Map();
  }

  render() {
    const { icon, color, size } = this;
    const iconUrl = this.iconCache.get(icon) || (this.iconCache.set(icon, mdIcons[icon].svgIcon));
    const iconSvg = `<svg viewBox="0 0 100 100">
      <use xlink:href="${iconUrl}"></use>
    </svg>`;
    return (
      <div class="my-icon" role="img" aria-label={icon} style={{ color, fontSize: size + 'px' }}>
        {iconSvg}
      </div>
    );
  }

  onIconChange(event) {
    this.icon = event.target.value;
  }

  onColorChange(event) {
    this.color = event.target.value;
  }

  onSizeChange(event) {
    this.size = event.target.value;
  }
}
This component has three properties: icon, color, and size. The icon property is the name of the Material Icon to render, the color property is the color of the icon, and the size property is the size of the icon in pixels.

To use this component, you would simply add it to your HTML like this:

<my-icon icon="home" color="red" size="20"></my-icon>
This would render a home icon with the color red and the size 20 pixels. You can change the icon, color, and size using the icon, color, and size properties.

The component also has three event handlers: onIconChange, onColorChange, and onSizeChange. These event handlers are called when the corresponding property changes.

The component meets ARIA and WCAG AA standards by providing the role="img" and aria-label attributes on the div element. The role="img" attribute indicates that the element is an image, and the aria-label attribute provides a text label for the image.
