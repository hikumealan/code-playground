import {
  Component,
  h,
  Host,
  Element,
  Method,
  EventEmitter,
  Event
} from '@stencil/core';

import HardwareIcClose24px from '../../../assets/icons/navigation/ic_close_24px.svg';

@Component({
  tag: 'nexus-tooltip-content',
  shadow: false,
  styleUrl: 'nexus-tooltip-content.scss'
})
export class NexusTooltipContent {
  @Element() private readonly element: HTMLNexusTooltipContentElement;

  /**
   * Internal event for closing tooltip content
   * @param positions
   * @param id
   */
  @Event() _closeTooltip: EventEmitter;

  /**
   * Internal method for showing tooltip content
   * @param positions
   * @param id
   */
  @Method()
  public async _show(positions, id) {
    const clone: any = this.element.cloneNode(true);
    await clone.classList.add('nexus-tooltip-content-visible');
    await clone.classList.add(
      `nexus-tooltip-content-${positions.trigger.position}`
    );
    await clone.setAttribute(
      'style',
      `left: ${positions.content.left}px; top: ${positions.content.top}px`
    );
    await clone.setAttribute('id', id);
    await document.body.appendChild(clone);
  }

  render() {
    return (
      <Host class="nexus-tooltip-content">
        <button
          type="button"
          class="nexus-btn nexus-btn-icon"
          onClick={this._closeTooltip.emit}
        >
          <nexus-icon content={HardwareIcClose24px}></nexus-icon>
          <span class="nexus-visually-hidden">Close</span>
        </button>

        <slot />
      </Host>
    );
  }
}
