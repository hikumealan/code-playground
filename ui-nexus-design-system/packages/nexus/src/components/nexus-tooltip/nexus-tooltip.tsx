import { Component, h, Host, Listen, Element, State, Prop } from '@stencil/core';

const nexTtipCls = 'nexus-tooltip';

class Position {
  trigger: {
    position: string;
  };
}

let nextUniqueId;
nextUniqueId = 0;

@Component({
  tag: 'nexus-tooltip',
  shadow: false,
  styleUrl: 'nexus-tooltip.scss'
})
export class NexusTooltip {
  @Element() element: HTMLNexusTooltipElement;

  @State() persist: boolean = false;

  /**
   * The Unique identifier for the tooltip.
   * If none is provided one will be added by default.
   */
  @Prop() attrId: string;

  /**
   * Position of the tooltip (top, right, bottom, left).
   * If nothing is provided, it will be calculated based on the screen size.
   */
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' | '' = '';

  /**
   * Allows tooltip to persist on click to trigger.
   */
  @Prop() allowClick: boolean = true;

  private readonly _id: string;

  @State() position: Position = {
    trigger: {
      position: 'top'
    }
  };

  constructor() {
    if (this.attrId) {
      this._id = this.attrId;
    }
    else {
      nextUniqueId++;
      this._id = `nexus-tooltip-${nextUniqueId}`;
    }
  }

  componentDidLoad() {
    this.element.addEventListener('keydown', (event) => {
      const key = event.code.trim();
      switch (key) {
      case 'Space': case 'Enter':
        this.showContent(event);
        break;
      case 'Tab':
        if (this._id) {
          const tooltipContentEl: HTMLElement = document.getElementById(this._id);
          this.removeTooltip(tooltipContentEl);
        }
        break;
      default:
        break;
      }
    });
  }

  @Listen('click')
  triggerClick(event) {
    if (this.allowClick) {
      this.showContent(event);
    }
  }

  @Listen('mouseenter')
  showContent(event) {
    if (event.type === 'click') {
      this.persist = !this.persist;

      if (!this.persist) {
        this.hideContent(event);
      }
    }

    const tooltipContentEl: any = this.element.querySelector('nexus-tooltip-content');
    const trigger = this.element.querySelector('nexus-tooltip-trigger');

    const positionData = {
      clientRect: trigger.getBoundingClientRect(),
      triggerWidth: trigger.offsetWidth,
      triggerHeight: trigger.offsetHeight,
      contentWidth: tooltipContentEl.offsetWidth,
      contentHeight: tooltipContentEl.offsetHeight
    };

    this.position = this.getPosition(positionData);

    if (!this.persist) {
      tooltipContentEl._show(this.position, this._id);
    }
  }

  @Listen('mouseleave')
  @Listen('_closeTooltip', {
    target: 'body'
  })
  hideContent(event) {
    if (!this.persist && event.type === 'mouseleave') {
      this.handleMouseLeave(event);
    }

    if (event.type === '_closeTooltip') {
      this.handleCloseTooltip(event);
    }

    if (event.type === 'click') {
      this.handleClickToClose(event);
    }
  }

  render() {
    return (
      <Host
        class={{
          'nexus-tooltip': true,
          'nexus-tooltip-clicked': this.persist,
          [`nexus-tooltip-${this.position.trigger.position}`]: true
        }}
        for={this._id}
      ></Host>
    );
  }

  getPosition(positionData) {
    const positionValue = this.triggerPosition(positionData, this.placement);
    const topOffset = 16;
    const doubleTopOffset = 2 * topOffset;
    let top;

    const triggerHeightCenter = positionData.triggerHeight / 2;
    const contentHeightCenter = positionData.contentHeight / 2;

    const bottomPosition = Math.floor(positionData.clientRect.top) - positionData.triggerHeight - positionData.contentHeight;

    if (positionValue.placement === 'top') {
      top = positionData.clientRect.top === 0 ? topOffset + positionData.triggerHeight : Math.ceil(positionData.clientRect.top) + topOffset + positionData.triggerHeight;
    }
    else if (positionValue.placement === 'bottom') {
      if (positionData.clientRect.top <= 0) {
        top = -(topOffset + positionData.contentHeight);
      }
      else {
        top = positionData.clientRect.top >= 200 ? bottomPosition + doubleTopOffset : positionData.clientRect.top - contentHeightCenter - doubleTopOffset - positionData.triggerHeight;
      }
    }
    else {
      top = positionData.clientRect.top === 0 ? topOffset + positionData.triggerHeight : Math.floor(positionData.clientRect.top) + triggerHeightCenter - contentHeightCenter;
    }
    top = Math.floor(top);

    return {
      trigger: {
        position: positionValue.placement
      },
      content: {
        left: positionValue.left,
        top
      }
    };
  }

  private handleClickToClose(event) {
    const closestTooltip = event.currentTarget.closest(nexTtipCls).getAttribute('for');
    const tooltipContentEl: HTMLElement = document.getElementById(closestTooltip);

    this.removeTooltip(tooltipContentEl);
  }

  private handleCloseTooltip(event) {
    if (event.target.id !== this._id) {
      return;
    }

    const tooltipContentEl: HTMLElement = document.getElementById(this._id);

    this.removeTooltip(tooltipContentEl);
  }

  private handleMouseLeave(event) {
    const tooltipContentEl: HTMLElement = document.getElementById(event.currentTarget.getAttribute('for'));

    this.removeTooltip(tooltipContentEl);
  }

  private removeTooltip(tooltipContentEl) {
    this.persist = false;
    tooltipContentEl.remove();
  }

  private readonly triggerPosition = (positionData, triggerValue) => {
    const windowWidth = window.innerWidth;
    const horizontalPlacement = ['right', 'left'].includes(triggerValue);
    const maxLeft = windowWidth - positionData.contentWidth;
    const verticalPosition = positionData.clientRect.top > windowWidth / 2 ? 'top' : 'bottom';
    // eslint-disable-next-line no-invalid-this
    const left = this.getLeftPosition(positionData, maxLeft);
    // eslint-disable-next-line no-invalid-this
    const widthOverflowing = this.checkIsWidthOverflowing(left, positionData.contentWidth, maxLeft, triggerValue);
    let placement;
    if (horizontalPlacement) {
      placement = widthOverflowing ? verticalPosition : triggerValue;
    }
    else if (triggerValue) {
      placement = triggerValue;
    }
    else {
      placement = verticalPosition;
    }

    return {
      placement,
      left,
      isAutoAlign: widthOverflowing
    };
  };

  getLeftPosition = (positionData, maxLeft) => {
    const triggerWidthCenter = positionData.triggerWidth / 2;
    const contentWidthCenter = positionData.contentWidth / 2;
    const leftPosition = Math.floor(positionData.clientRect.left + triggerWidthCenter - contentWidthCenter);
    if (leftPosition < 0) {
      return 0;
    }
    else if (leftPosition > maxLeft) {
      return maxLeft;
    }

    return leftPosition;
  };

  private readonly checkIsWidthOverflowing = (left, contentWidth, maxLeft, placement) => {
    const isLeftExceeded = placement === 'left' && left < contentWidth;
    const isRightExceeded = placement === 'right' && left + contentWidth > maxLeft;

    return isLeftExceeded || isRightExceeded;
  };
}
