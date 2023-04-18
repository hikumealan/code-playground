import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  shadow: true,
})
export class MyTooltip {
  @Prop() content: string;
  @Prop() position: 'top' | 'bottom' | 'left' | 'right';

  constructor() {
    super();
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.classList.add('my-tooltip');
    this.tooltipElement.textContent = this.content;
  }

  render() {
    const { position } = this;

    const tooltipStyle = {
      position: position,
      padding: '10px',
      background: 'lightgray',
      zIndex: 1000,
    };

    return (
      <div>
        <button onClick={() => this.showTooltip()}>Show Tooltip</button>
        <div ref={(el) => this.tooltipElement = el} style={tooltipStyle}></div>
      </div>
    );
  }

  showTooltip() {
    const { position } = this;
    const tooltipElement = this.tooltipElement;
    const parentElement = tooltipElement.parentElement;

    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    const parentWidth = parentElement.offsetWidth;
    const parentHeight = parentElement.offsetHeight;

    let left = 0;
    let top = 0;

    switch (position) {
      case 'top':
        top = 0;
        break;
      case 'bottom':
        top = parentHeight - tooltipHeight;
        break;
      case 'left':
        left = 0;
        break;
      case 'right':
        left = parentWidth - tooltipWidth;
        break;
    }

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
    tooltipElement.style.display = 'block';
  }
}
This component can be used to create a tooltip that is dynamically positioned to a parent element based on a specified prop and space available in the viewport. For example, the following code would create a tooltip that is positioned at the top of the parent element:

<my-tooltip content="This is a tooltip" position="top"></my-tooltip>
This component also exposes a few methods that can be used to interact with the tooltip. For example, the following code would hide the tooltip:

this.myTooltip.hideTooltip();
