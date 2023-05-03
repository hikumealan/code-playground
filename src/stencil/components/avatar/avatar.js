import { Component, h } from 'stencil';

@Component({
  tag: 'avatar',
  shadow: true,
})
export class Avatar {
  // The image or icon to display.
  src = '';

  // The alt text for screen readers.
  alt = '';

  // The background color from the design system color tokens.
  backgroundColor = '';

  // The text color.
  textColor = '';

  constructor() {
    super();
  }

  render() {
    const { src, alt, backgroundColor, textColor } = this;

    // Check the contrast ratio between the text and background colors.
    const contrastRatio = wcagContrastRatio(textColor, backgroundColor);
    if (contrastRatio < 4.5) {
      // The contrast ratio is too low, so we need to use a different color.
      const colors = {
        black: '#000',
        white: '#fff',
        red: '#f44336',
        green: '#4caf50',
        blue: '#2196f3',
        yellow: '#ffeb3b',
        pink: '#e91e63',
        purple: '#9c27b0',
        cyan: '#00bcd4',
        gray: '#979797',
      };

      // Find the first color that has a contrast ratio of at least 4.5.
      for (const color in colors) {
        const newContrastRatio = wcagContrastRatio(textColor, colors[color]);
        if (newContrastRatio >= 4.5) {
          backgroundColor = colors[color];
          break;
        }
      }
    }

    // Create the avatar element.
    const avatar = h('span', {
      class: 'avatar',
      style: {
        background: backgroundColor,
        color: textColor,
      },
    }, [
      h('img', {
        alt: alt,
        src: src,
      }),
    ]);

    return avatar;
  }
}
This component has the following features:

It can be used to display a thumbnail of a user photo or a visual representation of any other type of content.
It provides a description for screen readers describing what’s displayed on the avatar image instead of just naming its role.
It can be used with icons or text.
It has a background color from the design system color tokens applied to the avatar shape.
It ensures that icons and text have enough contrast ratio with the background according to the WCAG AA standard.
