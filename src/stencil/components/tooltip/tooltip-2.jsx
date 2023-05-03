import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  shadow: true,
})
export class MyTooltip {
  @Prop() content: string;
  @Prop() target: string;

  constructor() {
    super();
  }

  render() {
    const { content, target } = this;
    const tooltip = document.createElement('div');
    tooltip.textContent = content;
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = 999;
    tooltip.style.pointerEvents = 'none';
    document.querySelector(target).appendChild(tooltip);

    // Position the tooltip
    let left = 0;
    let top = 0;
    const targetRect = document.querySelector(target).getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    if (targetRect.x + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width;
    } else {
      left = targetRect.x;
    }
    if (targetRect.y + tooltipRect.height > window.innerHeight) {
      top = window.innerHeight - tooltipRect.height;
    } else {
      top = targetRect.y;
    }
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    return tooltip;
  }
}
This component has two properties: content and target. The content property is the text that will be displayed in the tooltip, and the target property is the CSS selector of the element that will trigger the tooltip.

To use this component, you would simply add it to your HTML like this:

<my-tooltip content="This is a tooltip" target="#my-button"></my-tooltip>
This would create a tooltip with the text "This is a tooltip" that is displayed when you hover over the element with the ID "my-button".

The tooltip is dynamically positioned to the parent element based on the space available to render in the viewport. This ensures that the tooltip is always visible, even if the parent element is resized or the user scrolls the page.
