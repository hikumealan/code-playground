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
    const tooltip = (
      <div class="my-tooltip">
        {content}
      </div>
    );
    const position = this.getTooltipPosition(target);
    return (
      <div class="my-tooltip-container">
        {tooltip}
      </div>
    );
  }

  getTooltipPosition(target) {
    const targetElement = document.querySelector(target);
    const tooltipElement = document.querySelector('.my-tooltip');
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    const targetRect = targetElement.getBoundingClientRect();
    const viewportRect = document.body.getBoundingClientRect();
    const top = targetRect.top + (targetRect.height / 2) - (tooltipHeight / 2);
    const left = targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2);
    if (left < 0) {
      left = 0;
    } else if (left + tooltipWidth > viewportRect.width) {
      left = viewportRect.width - tooltipWidth;
    }
    if (top < 0) {
      top = 0;
    } else if (top + tooltipHeight > viewportRect.height) {
      top = viewportRect.height - tooltipHeight;
    }
    return {
      top,
      left,
    };
  }
}
This component has two properties: content and target. The content property is the text of the tooltip, and the target property is the selector of the element that the tooltip should be positioned relative to.

To use this component, you would simply add it to your HTML like this:

<my-tooltip content="This is a tooltip" target="#my-element"></my-tooltip>
This would render a tooltip with the text "This is a tooltip" positioned relative to the element with the ID "my-element". The tooltip will be positioned so that it is fully visible within the viewport.
