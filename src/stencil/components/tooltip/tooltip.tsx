/*
This Tooltip component allows you to position the tooltip relative to its target element using the position prop, which accepts the values 'top', 'right', 'bottom', or 'left'. The component uses the connectedCallback() lifecycle method and the @Watch() decorator to calculate the position of the tooltip when the component is first connected to the DOM and when the position prop changes. The component also uses the onMouseEnter() and onMouseLeave() event handlers to control the visibility of the tooltip.

To use this component, you would wrap the target element in a my-tooltip element and set the content and position props as desired. The tooltip content can be plain text or HTML.

Here's an example usage of the Tooltip component:

html
```
<my-tooltip content="This is a tooltip" position="right">
  <button>Hover over me</button>
</my-tooltip>
```

In this example, we've set the content prop to "This is a tooltip" and the position prop
*/

import { Component, h, Prop, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  styleUrl: 'my-tooltip.scss',
  shadow: true
})
export class MyTooltip {
  @Element() el: HTMLElement;

  @Prop() content: string = '';

  @Prop() position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  @State() isVisible: boolean = false;
  @State() positionStyles: { [key: string]: string } = {};

  @Watch('position')
  handlePositionChange() {
    this.calculatePositionStyles();
  }

  connectedCallback() {
    this.calculatePositionStyles();
  }

  calculatePositionStyles() {
    const target = this.el.parentElement;
    const tooltip = this.el.shadowRoot.querySelector('.tooltip') as HTMLElement;

    if (!target || !tooltip) {
      return;
    }

    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top: number;
    let left: number;

    switch (this.position) {
      case 'right':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.right + 10;
        break;
      case 'bottom':
        top = targetRect.bottom + 10;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.left - tooltipRect.width - 10;
        break;
      default: // top
        top = targetRect.top - tooltipRect.height - 10;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
    }

    this.positionStyles = {
      top: `${top}px`,
      left: `${left}px`
    };
  }

  handleMouseEnter() {
    this.isVisible = true;
  }

  handleMouseLeave() {
    this.isVisible = false;
  }

  render() {
    return (
      <div class="wrapper"
           onMouseEnter={() => this.handleMouseEnter()}
           onMouseLeave={() => this.handleMouseLeave()}>
        <slot />

        {this.isVisible &&
          <div class="tooltip" style={this.positionStyles}>
            {this.content}
          </div>
        }
      </div>
    );
  }
}
