import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  shadow: true,
})
export class MyTooltip {
  @Prop() content: string;
  @Prop() target: Element;

  constructor() {
    super();
    this.tooltip = document.createElement('div');
    this.tooltip.classList.add('my-tooltip');
    this.tooltip.textContent = this.content;
  }

  render() {
    const { target } = this;
    const tooltipWidth = this.tooltip.offsetWidth;
    const tooltipHeight = this.tooltip.offsetHeight;
    const targetRect = target.getBoundingClientRect();
    const viewportRect = document.body.getBoundingClientRect();

    // Calculate the top and left position of the tooltip
    let top = targetRect.top + targetRect.height + 5;
    let left = targetRect.left - tooltipWidth / 2;

    // If the tooltip would be positioned outside of the viewport, move it inside
    if (top > viewportRect.bottom) {
      top = viewportRect.bottom - tooltipHeight - 5;
    }
    if (left < viewportRect.left) {
      left = viewportRect.left + tooltipWidth + 5;
    }

    // Position the tooltip
    this.tooltip.style.top = top + 'px';
    this.tooltip.style.left = left + 'px';

    return (
      <div class="my-tooltip-container">
        {this.tooltip}
      </div>
    );
  }
}
This component has two properties: content and target. The content property is the text of the tooltip, and the target property is the element that the tooltip is anchored to.

To use this component, you would simply add it to your HTML like this:

<my-tooltip content="This is a tooltip" target="my-button"></my-tooltip>
This would render a tooltip with the text "This is a tooltip" anchored to the element with the ID "my-button". The tooltip would be positioned dynamically based on the space available to render in the viewport.
