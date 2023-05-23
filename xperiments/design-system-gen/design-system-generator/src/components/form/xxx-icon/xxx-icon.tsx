import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'xxx-icon',
  styleUrl: 'xxx-icon.css',
  shadow: true,
})
export class XxxIcon {
  @Prop() src: string;
  @Prop() content: string;

  @State() contents: string = '';

  componentWillLoad() {
    // if (this.src) {
    //   fetch(this.src)
    //     .then((response) => response.text())
    //     .then((contents) => {
    //       this.contents = contents;
    //     })
    //     .catch((err) => {
    //       // eslint-disable-next-line no-console
    //       console.warn(err);
    //     });
    // }
    // else if (!this.content) {
    //   // eslint-disable-next-line no-console
    //   console.warn(`No source provided to motif-icon`);
    // }
  }
  render() {
    return (
      <Host
        class={'xxx-icon'}
        src={this.src}
        // innerHTML={this.content || this.contents}
      >
        {/*<slot></slot>*/}
      </Host>
    );
  }

}
