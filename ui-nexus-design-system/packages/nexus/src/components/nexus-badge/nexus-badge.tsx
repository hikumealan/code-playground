import { Component, h, Host, Prop, State } from '@stencil/core';

export type propVariant = 'default' | 'error' | 'warning' | 'success';
@Component({
  tag: 'nexus-badge',
  shadow: false,
  styleUrl: 'nexus-badge.scss'
})
export class NexusBadge {
  /**
   * Whether the badge overlaps its parent.
   */
  @Prop() overlap: boolean = false;

  /**
   * The style of the badge.
   */
  @Prop() variant: propVariant = 'default';

  @State() hasContent: boolean = true;

  render() {
    return (
      <Host
        class={{
          'nexus-badge': true,
          'nexus-badge-overlap': this.overlap,
          [`nexus-badge-${this.variant}`]: true,
          'nexus-badge-has-content': this.hasContent
        }}
      >
        <span class="nexus-badge-number">
          <slot />
        </span>
      </Host>
    );
  }
}
