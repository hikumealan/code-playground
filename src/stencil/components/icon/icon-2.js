import { Component, Prop, h, useRef, useState } from '@stencil/core';

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
    this.iconRef = useRef<HTMLDivElement>();
    this.iconUrl = '';
    this.color = '';
    this.size = 0;
  }

  componentDidLoad() {
    // Subscribe to prop changes
    this.iconChanged = this.onIconChange.bind(this);
    this.colorChanged = this.onColorChange.bind(this);
    this.sizeChanged = this.onSizeChange.bind(this);
    this.iconRef.current.addEventListener('click', this.onIconClick.bind(this));
    this.iconRef.current.addEventListener('focus', this.onIconFocus.bind(this));
    this.iconRef.current.addEventListener('blur', this.onIconBlur.bind(this));
    this.iconRef.current.addEventListener('keydown', this.onIconKeydown.bind(this));
    this.iconRef.current.addEventListener('keyup', this.onIconKeyup.bind(this));
    this.iconRef.current.addEventListener('keypress', this.onIconKeyPress.bind(this));

    // Fetch the icon SVG
    this.fetchIcon();
  }

  onIconChange(event) {
    this.icon = event.target.value;
    this.fetchIcon();
  }

  onColorChange(event) {
    this.color = event.target.value;
    this.updateIcon();
  }

  onSizeChange(event) {
    this.size = event.target.value;
    this.updateIcon();
  }

  onIconClick(event) {
    // Do something when the icon is clicked
  }

  onIconFocus(event) {
    // Do something when the icon is focused
  }

  onIconBlur(event) {
    // Do something when the icon is blurred
  }

  onIconKeydown(event) {
    // Do something when a key is pressed down on the icon
  }

  onIconKeyup(event) {
    // Do something when a key is released on the icon
  }

  fetchIcon() {
    if (!this.icon) {
      return;
    }

    this.iconUrl = mdIcons[this.icon].svgIcon;
    this.updateIcon();
  }

  updateIcon() {
    if (!this.iconUrl) {
      return;
    }

    const iconSvg = `<svg viewBox="0 0 100 100">
      <use xlink:href="${this.iconUrl}"></use>
    </svg>`;
    this.iconRef.current.innerHTML = iconSvg;
  }

  render() {
    return (
      <div class="my-icon" style={{ color: this.color, fontSize: this.size + 'px' }}>
        <slot></slot>
      </div>
    );
  }
}
This component has four properties: icon, color, size, and slot. The icon property is the name of the Material Icon to render, the color property is the color of the icon, the size property is the size of the icon in pixels, and the slot property is a slot where custom content can be rendered.

To use this component, you would simply add it to your HTML like this:

<my-icon icon="home" color="red" size="20">
